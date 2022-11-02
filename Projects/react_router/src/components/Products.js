import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <ul>
        <li>
          <Link to="products/p1"> Products 1</Link>
        </li>
        <li>
          <Link to="products/p2"> Products 2</Link>
        </li>
        <li>
          <Link to="products/p3"> Products 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
