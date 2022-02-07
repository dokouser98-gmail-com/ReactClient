import React, { useEffect, useState } from "react";

import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import Product from "../../components/Product";
import { Helmet } from "react-helmet-async";

import MessageBox from "../../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../controller/ProductController";

function Home() {
  const dispatch = useDispatch();
  // hooks UseState
  const [numero, setNumero] = useState(0);
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  console.log(products);
  const ListSkeleton = () => {
    return (
      <>
        {Array(numero)
          .fill(1)
          .map(() => (
            <Box className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <Skeleton variant="rectangular" width={380} height={418} />
              <Skeleton className=" bg-gray-700" />
              <Skeleton width="60%" className=" bg-gray-700" />
            </Box>
          ))}
      </>
    );
  };

  return (
    <div>
      {loading ? (
        <ListSkeleton />
      ) : error ? (
        <MessageBox />
      ) : (
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-10 px-2 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
            <Helmet>
              <title>Qsis Game</title>
            </Helmet>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Lista de VideoJuegos
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8  border-black">
              {products?.map((producto) => (
                <div key={producto.slug}>
                  <Product producto={producto}></Product>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
