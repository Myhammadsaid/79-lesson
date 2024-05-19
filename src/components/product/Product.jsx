import React from "react";
import "./Product.css";

const Product = ({ products }) => {
  //
  let product = products?.products?.map((val) => (
    <div className="product-card" key={val.id}>
      <img src={val.images[0]} alt="img" />
      <h3>{val.title}</h3>
    </div>
  ));
  return (
    <div>
      <section className="product">
        <div className="container">
          <div className="product-cards">{product}</div>
        </div>
      </section>
    </div>
  );
};

export default Product;
