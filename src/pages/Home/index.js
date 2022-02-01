import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Axios from "axios";
export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchDatos = async () => {
      const result = await Axios.get("api/productos");
      setProducts(result.data);
    };
    fetchDatos();
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-10 px-2 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Lista de VideoJuegos
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.productos?.map((products) => (
              <div key={products.slug} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <Link to={`/producto/${products.slug}`}>
                    <img
                      src={products.image}
                      alt={products.nombre}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </Link>
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/producto/${products.slug}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {products.nombre}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {products.categoria}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {products.precio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
