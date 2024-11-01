import React from "react";
import { getProduct } from "./service/getProduct";
import ProductList from "./components/productList";
import LoadMoreProduct from "./components/loadMoreProduct";

const Products = async ({ searchParams }: { searchParams: { search: string } }) => {
  const products = await getProduct(undefined, undefined, searchParams.search || "");

  return (
    <div>
      <ProductList products={products?.data} />
      <LoadMoreProduct />
    </div>
  );
};

export default Products;
