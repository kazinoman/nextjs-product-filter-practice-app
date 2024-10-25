import React from "react";
import axios from "axios";
import SingleProduct from "./components/singleProduct";

async function getPost(search: string) {
  let res = await axios.get(`https://api.escuelajs.co/api/v1/products/?title=${search}`);
  let post: any = res;

  if (!post) {
    return <h1>Sorry, Product not found....</h1>;
  }
  return post;
}

const Products = async ({ searchParams }: { searchParams: { search: string } }) => {
  const post = await getPost(searchParams.search || "");

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {post.data.length > 0 ? (
          post.data.map((post: any) => <SingleProduct key={post.id} product={post} />)
        ) : (
          <div className="bg-white py-6 sm:py-8 lg:py-12 rounded-md col-span-full">
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
  );
};

export default Products;
