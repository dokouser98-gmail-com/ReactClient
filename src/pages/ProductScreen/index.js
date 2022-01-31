import React from "react";
import { useParams } from "react-router-dom";
export default function ProductScreen() {
  const params = useParams();
  const { slug } = params;

  return (
    <div>
      <h1 className=" text-2xl font-semibold tracking-tight text-gray-900 ">
        {slug}
      </h1>
    </div>
  );
}
