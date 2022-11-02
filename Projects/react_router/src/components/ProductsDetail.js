import React from "react";
import { useParams } from "react-router-dom";

const ProductsDetail = () => {
  const params = useParams();
  console.log(params);
  return <h1>Products Detail</h1>;
};

export default ProductsDetail;
