import React, { Component, Fragment } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Product from "./Product";
import Footer from "./Footer";

export default class BaiTapLayOutBS extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <Product />
        <Footer />
      </React.Fragment>
    );
  }
}
