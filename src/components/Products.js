import React from "react";
import Product from './Product'
const Products = ({ items }) => {
  return (
    <div>
      <h1 className="heading">Shirts</h1>
      <div className="products">
        {items.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
