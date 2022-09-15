import React, { Component, lazy, Suspense } from "react";
import Header from "./components/header/Header";
import { getInfo } from "./api/api";
import { getCategoriesQuerry } from "./queries/queries";
import { getProduct } from "queries/queries";
import { Routes, Route } from "react-router-dom";
import findPosition from "utils/findPosition";
import "./App.css";
const ProductListPage = lazy(() =>
  import("./components/product-list/ProductListPage")
);
const ProductPage = lazy(() => import("./components/product-page/ProductPage"));
const CartPage = lazy(() => import("./components/cart-page/CartPage"));
const NotFound = lazy(() => import("./components/not-found/NotFound"));

class App extends Component {
  state = {
    categories: [],
    category: "all",
    product: null,
    inCart: [],
    currency: "$",
    color: null,
    products: [],
  };

  componentDidMount() {
    const previousCategory = JSON.parse(localStorage.getItem("category"));
    if (previousCategory) this.setState({ category: previousCategory });
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) this.setState({ inCart: cartData });
    //Fetching category names for header navigation
    getInfo(getCategoriesQuerry).then((res) =>
      this.setState({ categories: [...res.categories] })
    );
  }

  componentDidUpdate(_, prevState) {
    //Checking if there is previos product in localStorage and setting it to state, because App provides it to ProductPage
    if (this.state.product === null) {
      const prod = JSON.parse(localStorage.getItem("product"));
      if (prod !== null) this.setState({ product: prod });
    }
    if (this.state.inCart.length !== prevState.inCart.length) {
      localStorage.setItem("cart", `${JSON.stringify(this.state.inCart)}`);
    }
    if (this.state.category !== prevState.category) {
      localStorage.setItem(
        "category",
        `${JSON.stringify(this.state.category)}`
      );
    }
  }

  handleClick = (data) => {
    this.setState({ inCart: [...this.state.inCart, data] });
  };

  handleAttributesChange = (e, data, idx) => {
    let newArr = [];
    // Looking for products with the same id and same attributes names to gather them in one array and to change the choice parameters further
    this.state.inCart
      .filter((item) => item.id === data.id)
      .filter((item) => Object.keys(item).length === Object.keys(data).length)
      .filter((elem) =>
        Object.values(elem)
          .map((element, index) => {
            // Checking if attribute values match
            const sameElementInItem = Object.values(data)[index];
            const productIsArray = Array.isArray(element);
            const productIsObject =
              typeof element === "object" && element !== null;
            if (productIsObject)
              return element.value === sameElementInItem.value;
            if (productIsArray && element.length === 1)
              return element[0] === sameElementInItem[0];
            if (productIsArray && element.length > 1) return true;
            return element === sameElementInItem;
          })
          .every((el) => el === true)
      )
      .forEach((el) => {
        // Adding chosen product indexes to new array that will be used to find and change products in cart
        const indx = this.state.inCart.findIndex((elem) => elem === el);
        newArr.push(indx);
      });
    let changedProducts = [...this.state.inCart];
    newArr.forEach((product) => {
      // Reading new choice parameters and changing products in our state cart
      changedProducts[product] = {
        ...this.state.inCart[product],
        [e.currentTarget.dataset.name.toLowerCase()]: {
          id: e.currentTarget.dataset.name.toLowerCase(),
          value: idx,
        },
      };
    });
    // Writing to state new cart only once, after all changes
    this.setState({
      inCart: changedProducts,
    });
    // Adding to local storage new cart, to make sure we have chosen products in cart after page reload
    localStorage.setItem("cart", `${JSON.stringify(this.state.inCart)}`);
  };

  handleProduct = (e, id) => {
    if (e.currentTarget.id === "addToCart") {
      e.preventDefault();
      getInfo(getProduct(id)).then((res) => this.handleClick(res.product));
    }
    this.setState({ product: id });
    localStorage.setItem("product", `${JSON.stringify(id)}`);
  };

  handleCategoryChange = (category) =>
    this.setState({ category: `${category}` });

  currencyHandler = (currency) => {
    this.setState({ currency });
  };

  cartAmountHandler = (e, item) => {
    const plus = e.target.id === "plus";
    const add = e.target.id === "add";
    const minus = e.target.id === "minus";
    const del = e.target.id === "delete";
    if (minus || del) {
      const filteredCart = this.state.inCart.filter(
        (_, index) => index !== findPosition(this.state.inCart, item)
      );
      this.setState({ inCart: filteredCart });
    }
    if (plus || add) this.handleClick(item);
  };

  render() {
    const { category, product, inCart, currency } = this.state;
    return (
      <div className="App">
        <Header
          {...this.state}
          onChange={this.handleCategoryChange}
          onChoice={this.currencyHandler}
          cartAmountHandler={this.cartAmountHandler}
          handleAttributesChange={this.handleAttributesChange}
        />
        <Suspense>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ProductListPage
                  category={category}
                  currency={currency}
                  setProduct={this.handleProduct}
                  inCart={inCart}
                />
              }
            ></Route>
            <Route
              path={`/${category}`}
              element={
                <ProductListPage
                  category={`${category}`}
                  currency={currency}
                  setProduct={this.handleProduct}
                  inCart={inCart}
                />
              }
            ></Route>
            <Route
              exact
              path="/cart"
              element={
                <CartPage
                  currency={currency}
                  cart={inCart}
                  cartAmountHandler={this.cartAmountHandler}
                  handleAttributesChange={this.handleAttributesChange}
                />
              }
            ></Route>
            <Route
              exact
              path={`/${category}/:id`}
              element={
                <ProductPage
                  product={product}
                  currency={currency}
                  handleClick={this.handleClick}
                  cartHandler={this.cartAmountHandler}
                />
              }
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path={`${category}/*`} element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </div>
    );
  }
}
export default App;
