import React from "react";
import Filter from "./components/filter";
import axios from "axios";
import AllProducts from "./components/products";
import Loading from "./components/Loading";

const getCategoryList = () => {
  const res: any = axios.get("https://api.escuelajs.co/api/v1/categories");
  if (!res) {
    return <h1>Sorry, Product not found....</h1>;
  }
  return res;
};

const ProductFilter = async ({
  searchParams,
}: {
  searchParams: { categoryId?: number; price_min?: number; price_max?: number; page: number; totalProduct: number };
}) => {
  const category = await getCategoryList();
  const keyString = `search=${searchParams?.categoryId}&price_min=${searchParams?.price_min}&price_max=${searchParams?.price_max}`;

  return (
    <>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-12">
        {/* filter side */}
        <div className="col-span-3">
          <Filter product={category.data} />
        </div>

        <div className="col-span-9">
          <React.Suspense key={keyString} fallback={<Loading />}>
            <AllProducts searchParams={searchParams} />
          </React.Suspense>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
