"use client";

import React from "react";
import SingleProduct from "./singleProduct";

interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}

interface ProductListPros {
  products: Product[];
  fromServerComponent?: boolean;
}

const ProductList = ({ products, fromServerComponent = true }: ProductListPros) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.length ? (
        products.map((post: any, index: number) => <SingleProduct key={index} product={post} />)
      ) : fromServerComponent ? (
        <div className="bg-white py-6 sm:py-8 lg:py-12 rounded-md col-span-full">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
              <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">Sorry</p>

              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Product Not Found
              </h2>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductList;
