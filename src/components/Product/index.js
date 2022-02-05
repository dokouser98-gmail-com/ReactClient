import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating";
export default function Product(props) {
  const { producto } = props;
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <Link to={`/producto/${producto.slug}`}>
          <img
            src={producto.image}
            alt={producto.nombre}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </Link>
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/producto/${producto.slug}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {producto.nombre}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{producto.categoria}</p>
          <p>
            <Rating
              className="text-sm font-medium text-gray-900"
              rating={producto.rating}
              numVista={producto.numVista}
            />
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          S/.{producto.precio}
        </p>
      </div>
    </div>
  );
}
