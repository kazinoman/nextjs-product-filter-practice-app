import axios from "axios";
import React from "react";
import SingleProductForFilter from "./singleProduct";

interface Props {
  searchParams: { categoryId?: number; price_min?: number; price_max?: number; page: number; totalProduct: number };
}

const getProductList = async (categoryId?: number, minPrice?: number, maxPrice?: number) => {
  const params: any = {};

  if (categoryId !== undefined) params.categoryId = categoryId;
  if (minPrice !== undefined) params.price_min = minPrice;
  if (maxPrice !== undefined) params.price_max = maxPrice;

  try {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products/", { params });
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const AllProducts = async ({ searchParams }: Props) => {
  const getProducts = await getProductList(searchParams?.categoryId, searchParams?.price_min, searchParams?.price_max);

  return (
    <div>
      {/* product list */}
      <div className="col-span-9">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {getProducts?.length > 0 ? (
            getProducts?.map((product: any) => (
              <SingleProductForFilter
                key={product.id}
                category={product.category}
                id={product.id}
                images={product.images}
                price={product.price}
                title={product.title}
                description={product.description}
                updatedAt={product.updatedAt}
                creationAt={product.creationAt}
              />
            ))
          ) : (
            <div className="border border-gray-700 py-6 sm:py-8 lg:py-12 rounded-md col-span-full">
              <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
                  <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">Sorry</p>

                  <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                    Product Not Found
                  </h2>

                  {/* <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as placeholder text. It shares some
            characteristics of a real written text but is random or otherwise generated.
          </p> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
