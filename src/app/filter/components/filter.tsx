"use client";

import React, { useEffect, useState } from "react";
import { Radio, Slider, Space } from "antd";
import type { RadioChangeEvent } from "antd";
import { useRouter, useSearchParams } from "next/navigation";

interface ProductCategory {
  id: number;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface FilterProps {
  product: ProductCategory[];
}

const Filter: React.FC<FilterProps> = ({ product }) => {
  const [productCategory, setProductCategory] = useState<{ label: string; value: number }[]>([]);
  const [value, setValue] = useState<number | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log(searchParams);
  const updatedSearchParams = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    const filterData = product
      .filter((item, index, self) => index === self.findIndex((t) => t.name === item.name))
      .map((data) => {
        return {
          label: data.name,
          value: data.id,
        };
      });

    setProductCategory(filterData);
  }, [product]);

  const onChange = (e: RadioChangeEvent) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);

    if (selectedValue === "clear") {
      updatedSearchParams.delete("categoryId");
    } else if (selectedValue) {
      updatedSearchParams.set("categoryId", selectedValue.toString());
    }

    router.push(`/filter?${updatedSearchParams.toString()}`);
  };

  const onChangeComplete = (value: number[]) => {
    const [min, max] = value;

    if (min === 0 && max === 1000) {
      updatedSearchParams.delete("price_min");
      updatedSearchParams.delete("price_max");
    } else {
      updatedSearchParams.set("price_min", min.toString());
      updatedSearchParams.set("price_max", max.toString());
    }

    router.push(`/filter?${updatedSearchParams.toString()}`);
  };

  return (
    <div className="border rounded-md p-5 border-white bg-white text-black">
      {/* Filter by Category */}

      <div className="space-y-2">
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            {productCategory.length ? (
              productCategory.map((data, index) => (
                <div key={index}>
                  <Radio value={data.value} key={index}>
                    {data.label}
                  </Radio>
                </div>
              ))
            ) : (
              <h1>Loading</h1>
            )}
            <Radio value={"clear"}>Clear</Radio>
          </Space>
        </Radio.Group>
      </div>
      <div className="mt-10">
        <Slider
          range
          step={10}
          defaultValue={[0, 1000]}
          //   onChange={onSliderChange}
          onChangeComplete={onChangeComplete}
          className="mt-10"
          min={0}
          max={1000}
        />
        <div className="flex justify-between items-center ">
          <p>Min</p>
          <p>Max</p>
        </div>
      </div>

      {/* Product List */}

      {/* Pagination */}
    </div>
  );
};

export default Filter;
