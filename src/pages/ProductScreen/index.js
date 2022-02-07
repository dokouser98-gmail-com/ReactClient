import React, { useEffect, useState } from "react";

import Rating from "../../components/Rating";
import { Helmet } from "react-helmet-async";

import LoadingBox from "../../components/LoadinBox";

import MessageBox from "../../components/MessageBox";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../../controller/ProductDetailsController";
function ProductScreen() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const productSlug = slug;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productSlug));
  }, [dispatch, productSlug]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox />
      ) : (
        <section className=" text-gray-700 body-font overflow-hidden bg-white text-xl">
          <div className="container px-10 py-24 mx-auto">
            <Helmet>
              <title>{product.slug}</title>
            </Helmet>
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt={product.nombre}
                className="lg:w-96 w-full object-cover object-center rounded border border-gray-200 "
                src={product.image}
              ></img>
              <div className="lg:w-1/2 w-full lg:pl-16 lg:py-6 mt-6 lg:mt-0 ">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {product.categoria}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.nombre}
                </h1>
                <div className="flex mb-4">
                  <span className=" flex items-center">
                    <Rating
                      rating={product.rating}
                      numVista={product.numVista}
                    ></Rating>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                      Vistas
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed"> {product.descripcion} .</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div className="flex">
                    <span className="mr-3">{product.plataforma}</span>
                    <button class="border-0 border-gray-300 rounded-full w-8 h-8 focus:outline-none">
                      <img src={product.logo} alt={product.nombre}></img>
                    </button>
                    <span className="mr-3 px-10">{product.etiqueta}</span>
                  </div>
                  <div className="flex container ml-6 items-center">
                    <div className="relative ">
                      {product.stock > 0 ? (
                        <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-8 h-8 focus:outline-none"></button>
                      ) : (
                        <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-8 h-8 focus:outline-none">
                          <i className="fa fa-shopping-car"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex ">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    S/. {product.precio}
                  </span>
                  {product.stock > 0 && (
                    <button class="flex ml-auto text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded">
                      Agregar
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}{" "}
    </div>
  );
}
export default ProductScreen;
