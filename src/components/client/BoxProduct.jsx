import React from "react";
import { Link } from "react-router-dom";

export const BoxProduct = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="border rounded-lg p-4 text-center hover:shadow block"
    >
      <img
        src={product.image}
        className="w-full h-48 object-cover mb-2 rounded"
      />
      <h3 className="text-sm font-semibold">{product.name}</h3>
      <p className="text-red-600 font-medium">{product.currentPrice} đ</p>
    </Link>
  );
};
