import React, { Component } from "react";
import Header from "./components/header/Header";
import ProductListPage from "./components/product-list/ProductListPage";
import ProductPage from "./components/product-page/ProductPage";
import NotFound from "./components/not-found/NotFound";
import { getInfo } from "./api/api";
import { getAllProductsQuerry } from "./queries/queries";
import { Routes, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      category: "all",
      product: null,
      inCart: [],
      currency: "$",
    };
  }

  componentDidMount() {
    //Basicly fetching "all" category of goods to our page
    getInfo(getAllProductsQuerry).then((res) =>
      this.setState({ categories: [...res.categories] })
    );
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      this.setState({ inCart: cartData });
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
    // const cartData = JSON.parse(localStorage.getItem("cart"));
    // if (cartData !== null && this.state.inCart.length === 0) {
    //   this.setState({ inCart: [...this.state.inCart, cartData] });
    //   console.log("updating cart");
    // }
  }

  handleClick = (data) => {
    console.log(data);
    this.setState({ inCart: [...this.state.inCart, data] });
    // localStorage.setItem("cart", `${JSON.stringify(this.state.inCart)}`);
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

  render() {
    const { category, product } = this.state;
    return (
      <div className="App">
        <Header
          {...this.state}
          onChange={this.handleCategoryChange}
          onChoice={this.currencyHandler}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProductListPage
                category={category}
                currency={this.state.currency}
                setProduct={this.handleProduct}
              />
            }
          ></Route>
          <Route
            exact
            path="/:routeName"
            element={
              <ProductListPage
                category={category}
                currency={this.state.currency}
                setProduct={this.handleProduct}
              />
            }
          ></Route>
          <Route
            path="/all"
            element={
              <ProductListPage
                category={"all"}
                currency={this.state.currency}
                setProduct={this.handleProduct}
              />
            }
          ></Route>
          <Route
            exact
            path="/clothes"
            element={
              <ProductListPage
                category={"clothes"}
                currency={this.state.currency}
                setProduct={this.handleProduct}
              />
            }
          ></Route>
          <Route
            path="/tech"
            element={
              <ProductListPage
                category={"tech"}
                currency={this.state.currency}
                setProduct={this.handleProduct}
              />
            }
          ></Route>
          <Route
            path="/all/:id"
            element={
              <ProductPage
                product={product}
                currency={this.state.currency}
                handleClick={this.handleClick}
              />
            }
          ></Route>
          <Route
            exact
            path="/clothes/:id"
            element={
              <ProductPage
                product={product}
                currency={this.state.currency}
                handleClick={this.handleClick}
              />
            }
          ></Route>
          <Route
            path="/tech/:id"
            element={
              <ProductPage
                product={product}
                currency={this.state.currency}
                handleClick={this.handleClick}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path={`${category}/*`} element={<NotFound />}></Route>
        </Routes>
      </div>
    );
  }
}
export default App;
