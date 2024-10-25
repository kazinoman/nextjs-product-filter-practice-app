import Link from "next/link";
import React from "react";

interface SingleProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  images: [string];
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

const SingleProductForFilter = ({
  category,
  creationAt,
  id,
  images,
  price,
  updatedAt,
  description,
  title,
}: SingleProductProps) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
        <img
          src={`${images[0]}`}
          loading="lazy"
          alt="Photo by Rachit Tank"
          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          sale
        </span>
      </div>

      <div>
        <p className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">{title}</p>

        <div className="flex items-end gap-2">
          <span className="font-bold text-white lg:text-lg">${price}</span>
        </div>
      </div>
    </Link>
  );
};

export default SingleProductForFilter;
