import React, { Component, lazy, Suspense } from "react";
import Header from "./components/header/Header";
import { getInfo } from "./api/api";
import { getAllProductsQuerry } from "./queries/queries";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// const ProductListPage = lazy(() =>
//   import("./components/product-list/ProductListPage")
// );
// const ProductPage = lazy(() => import("./components/product-page/ProductPage"));
// const CartPage = lazy(() => import("./components/cart-page/CartPage"));
// const NotFound = lazy(() => import("./components/not-found/NotFound"));
import ProductListPage from "components/product-list/ProductListPage";
import ProductPage from "components/product-page/ProductPage";
import CartPage from "components/cart-page/CartPage";
import NotFound from "components/not-found/NotFound";

class App extends Component {
  state = {
    categories: [],
    category: "all",
    product: null,
    inCart: [],
    currency: "$",
    color: null,
  };

  componentDidMount() {
    //Basicly fetching "all" category of goods to our page
    getInfo(getAllProductsQuerry).then((res) =>
      this.setState({ categories: [...res.categories] })
    );
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      this.setState({ inCart: cartData });
    }
    const previousCategory = JSON.parse(localStorage.getItem("category"));
    if (previousCategory) {
      this.setState({ category: previousCategory });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //Checking if there is previos product in localStorage and setting it to state, because App provides it to ProductPage
    if (this.state.product === null) {
      const prod = JSON.parse(localStorage.getItem("product"));
      if (prod !== null) {
        this.setState({ product: prod });
      }
    }
    if (this.state.inCart.length !== prevState.inCart.length) {
      localStorage.setItem("cart", `${JSON.stringify(this.state.inCart)}`);
    }
    if (this.state.category !== prevState.category) {
      console.log("changed category");
      localStorage.setItem(
        "category",
        `${JSON.stringify(this.state.category)}`
      );
    }
  }

  handleClick = (data) => {
    this.setState({ inCart: [...this.state.inCart, data] });
  };

  handleProduct = (id) => {
    this.setState({ product: id });
    localStorage.setItem("product", `${JSON.stringify(id)}`);
  };

  handleCategoryChange = (category) =>
    this.setState({ category: `${category}` });

  currencyHandler = (currency) => {
    this.setState({ currency });
  };

  cartAmountHandler = (e, id) => {
    const plus = e.target.id === "plus";
    const add = e.target.id === "add";
    const minus = e.target.id === "minus";
    const del = e.target.id === "delete";

    if (minus || del) {
      const cart = [...this.state.inCart];
      const data = this.state.inCart.indexOf(
        this.state.inCart.find((item) => item.id === id.id)
      );
      const filteredCart = cart.filter((item, index) => index !== data);
      this.setState({
        inCart: filteredCart,
      });
    }
    if (plus || add) {
      this.handleClick(id);
    }
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
        />
        <Suspense fallback={<h1 className="suspense"></h1>}>
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
              exact
              path="/:routeName"
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
              exact
              path="/all"
              element={
                <ProductListPage
                  category={"all"}
                  currency={currency}
                  setProduct={this.handleProduct}
                  inCart={inCart}
                />
              }
            ></Route>
            <Route
              exact
              path="/clothes"
              element={
                <ProductListPage
                  category={"clothes"}
                  currency={currency}
                  setProduct={this.handleProduct}
                  inCart={inCart}
                />
              }
            ></Route>
            <Route
              exact
              path="/tech"
              element={
                <ProductListPage
                  category={"tech"}
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
                />
              }
            ></Route>
            <Route
              exact
              path="/all/:id"
              element={
                <ProductPage
                  product={product}
                  currency={currency}
                  handleClick={this.handleClick}
                  cartHandler={this.cartAmountHandler}
                />
              }
            ></Route>
            <Route
              exact
              path="/clothes/:id"
              element={
                <ProductPage
                  product={product}
                  currency={currency}
                  handleClick={this.handleClick}
                  cartHandler={this.cartAmountHandler}
                />
              }
            ></Route>
            <Route
              exact
              path="/tech/:id"
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
