import React, { useEffect, useReducer, useState } from "react";

import logger from "use-reducer-logger";

import Axios from "axios";

import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import Product from "../../components/Product";
import { Helmet } from "react-helmet-async";

import Error from "../../components/Error";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function Home() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,

    error: "",
  });

  const [numero, setNumero] = useState(0);
  useEffect(() => {
    const fetchDatos = async () => {
      const result = await Axios.get("api/productos");
      dispatch({ type: "FETCH_REQUEST" });
      setNumero(result.data.productos.length);

      try {
        const result = await Axios.get("api/productos");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL ", payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchDatos();
  }, []);

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
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-10 px-2 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <Helmet>
            <title>Qsis Game</title>
          </Helmet>
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Lista de VideoJuegos
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8  border-black">
            {loading ? (
              <ListSkeleton />
            ) : error ? (
              <Error />
            ) : (
              products.productos?.map((producto) => (
                <div key={producto.slug}>
                  <Product producto={producto}></Product>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
