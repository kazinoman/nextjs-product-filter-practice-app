"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProductSkeleton from "./productSkeleton";
import { getProduct } from "../service/getProduct";
import ProductList from "./productList";

const LoadMoreProduct = () => {
  const [products, setProducts] = useState<any>([]);
  const [pagesLoad, setPagesLoad] = useState(12);
  const [pageLimit, setPageLimit] = useState(4);
  const [loading, setLoading] = useState<boolean>(false);

  const { ref, inView } = useInView();

  const loadMoreProducts = async () => {
    const offset = pagesLoad + 4;
    setLoading(true);
    const products = (await getProduct(pageLimit, offset, undefined)) ?? [];

    if (!products) {
      return new Error("Sorry, Product not found....");
    }
    setProducts((prev: any) => [...prev, ...products?.data]);
    setPagesLoad(offset);
    setLoading(false);
  };

  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
  }, [inView]);

  return (
    <div className="mt-6">
      <ProductList products={products} fromServerComponent={false} />

      <div ref={ref}>{loading && <ProductSkeleton />}</div>
    </div>
  );
};

export default LoadMoreProduct;
