import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-blue-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <Link
        to="/"
        className="  px-2.5 text-lg font-semibold tracking-tight text-gray-300"
      >
        Qsis Game
      </Link>
    </nav>
  );
}
