"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-blue-600">MyStore</h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="hover:text-blue-500">
            Products
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Cart (0)
          </button>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg border"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <span className="block h-0.5 w-6 bg-gray-800 mb-1" />
            <span className="block h-0.5 w-6 bg-gray-800 mb-1" />
            <span className="block h-0.5 w-6 bg-gray-800" />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t px-6 pb-4 space-y-3 bg-white">
          <a href="#" className="block w-full text-left py-2 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block w-full text-left py-2 hover:text-blue-500">
            Products
          </a>
        </div>
      )}
    </header>
  );
}
