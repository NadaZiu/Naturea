"use client";
import { collections } from "./Products";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Categories() {
  const { categorie } = useParams();
  const navigate = useNavigate();

  const collection = collections.find(c => c.id === categorie);

  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  if (!collection) {
    return <div className="text-center py-20">Category not found</div>;
  }

  // Filter products inside category
  const filteredProducts = collection.products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    setSearch(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearch(inputValue);
    }
  };

  return (
    <>
      {/* HEADER (same as Products page) */}
   <div className="w-full bg-gradient-to-b from-[#202808] to-[#F3F3EA] py-14 sm:py-20 text-center">

  {/* SEARCH */}
  <div className="py-4 sm:py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">

     <div className="max-w-md mx-auto relative px-4 sm:px-0">

  <input
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    onKeyDown={handleKeyDown}
    placeholder="Search products..."
    className="w-full pl-10 pr-10 py-2 sm:py-2.5 rounded-full bg-transparent border border-[#FEFAE0]/40 text-white placeholder-[#FEFAE0] text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-white/50"
  />

  <SearchIcon
    onClick={handleSearch}
    className="absolute right-7 sm:right-3 top-1/2 -translate-y-1/2 text-[#FEFAE0] cursor-pointer hover:text-white"
  />

</div>

    </div>
  </div>

  {/* TITLE */}
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2A1B10] mb-2 py-3 sm:py-5">
    Shop
  </h1>

  {/* BREADCRUMB */}
  <p className="text-xs sm:text-sm text-[#5A4632] px-4">
    <Link to="/" className="hover:text-[#202808]">Home</Link>
    <span className="mx-2">/</span>
    {collection.name}
  </p>

</div>

{/* PRODUCTS */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 bg-[#F3F3EA]">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

    {filteredProducts.map(product => (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onClick={() => navigate(`/product/${product.id}`)}
        className="relative bg-white rounded-lg shadow cursor-pointer overflow-hidden flex flex-col hover:shadow-lg transition"
      >

        {/* FAVORITE */}
        <button
          className="absolute top-2 right-2 p-2 bg-white/80 rounded-full z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <FavoriteBorderIcon />
        </button>

        {/* IMAGE */}
        <div className="relative w-full h-44 sm:h-52 lg:h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="absolute w-full h-full object-cover transition duration-500"
          />
          <img
            src={product.image2}
            alt={product.name}
            className="absolute w-full h-full object-cover opacity-0 hover:opacity-100 transition duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="p-3 sm:p-4 flex flex-col flex-1">

          <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-[#2A1B10]">
            {product.name}
          </h3>

          <p className="text-xs sm:text-sm text-[#5A4632] flex-1">
            {product.description}
          </p>

          <div className="mt-3 sm:mt-4 flex items-center justify-between">

            <span className="font-semibold text-[#202808] text-sm sm:text-base">
              ${product.price}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${product.id}`);
              }}
              className="bg-[#202808] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm"
            >
              Add to Cart
            </button>

          </div>

        </div>

      </motion.div>
    ))}

  </div>

  {/* EMPTY STATE */}
  {filteredProducts.length === 0 && (
    <p className="text-center mt-10 text-[#5A4632] text-sm sm:text-base">
      No products found.
    </p>
  )}

</div>
    </>
  );
}