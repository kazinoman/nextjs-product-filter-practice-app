import Image from "next/image";
import Link from "next/link";
import React from "react";

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

interface SingleProductProps {
  product: Product;
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
        <div className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img
            src={`${product.images[0]}`}
            loading="lazy"
            alt="Photo by Magicle"
            height={1000}
            width={1000}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-6">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            <span className="transition duration-100 hover:text-indigo-500 active:text-indigo-600 line-clamp-1">
              {product.title}
            </span>
          </h2>

          <p className="mb-8 text-gray-500 line-clamp-3">{product.description}</p>

          <div className="mt-auto flex items-end justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <img
                  src={`${product.images[1] || null}`}
                  loading="eager"
                  alt="Photo by Jassir Jonis"
                  className="h-full w-full object-cover object-center bg-black"
                  width={1000}
                  height={1000}
                />
              </div>

              <div>
                <span className="block text-indigo-500">Tylor Grey</span>
                <span className="block text-sm text-gray-400">March 15, 2021</span>
              </div>
            </div>

            <span className="rounded border px-2 py-1 text-sm text-gray-500">Article</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
