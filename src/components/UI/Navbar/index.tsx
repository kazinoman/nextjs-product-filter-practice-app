"use client";

import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const pages = [
    { name: "product", route: "/product" },
    {
      name: "user",
      route: "/user",
    },
    {
      name: "settings",
      route: "/dashboard/settings",
    },
  ];

  const handleSetSearch = (search: string) => {
    if (search) {
      setSearch(search);
      router.push(`/product?search=${search}`);
      return;
    } else {
      setSearch("");
      router.push(`/product?search=${search}`);
      return;
    }
  };

  return (
    <nav className="bg-white text-primary-foreground rounded-xl flex flex-row px-5 items-center w-full">
      <div>
        <div className="flex flex-row items-center justify-center gap-3 py-5">
          {pages.map((el, index: number) => {
            return (
              <div className="font-semibold" key={index}>
                <Link href={el.route}>{el.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="justify-self-end ml-auto flex items-center justify-center GAP-5">
        <Filter color="black" size={32} className="mr-3 cursor-pointer" onClick={() => router.push("/filter")} />
        <Input
          placeholder="Search Product"
          className="w-[390px]"
          onChange={(e) => {
            e.preventDefault();
            handleSetSearch(e.target.value);
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
