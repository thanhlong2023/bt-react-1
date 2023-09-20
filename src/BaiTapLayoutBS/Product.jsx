import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class Product extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 col-md-3">
            <ProductItem />
          </div>
          <div className="col-12 col-md-3">         
            <ProductItem />
          </div>
          <div className="col-12 col-md-3">
            <ProductItem />
          </div>
          <div className="col-12 col-md-3">
            <ProductItem />
          </div>
        </div>
      </div>
    );
  }
}
