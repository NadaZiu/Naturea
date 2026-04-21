import { useParams } from "react-router-dom";
import { useState } from "react";
import { collections } from "./Products";
import { Link } from "react-router-dom";
import { useCart } from "./CarrtContext";
import { useEffect } from "react";
export default function ProductDetails() {
const { productId } = useParams();
const{addToCart, message, setMessage } = useCart()


const product = collections.flatMap(c => c.products).find(p => p.id.toString() === productId);

const collection = collections.find(c =>
  c.products.some(p => p.id.toString() === productId)
);
if (!product) return <h2 className="text-center mt-20 text-lg">Product not found</h2>;

const images = [product.image, product.image2].filter(Boolean);

const [mainImage, setMainImage] = useState(images[0]);
const [quantity, setQuantity] = useState(1);
const [activeTab, setActiveTab] = useState("benefits");

useEffect(() => {
  if (message) {
    const timer = setTimeout(() => {
      setMessage("");
    }, 2000);

    return () => clearTimeout(timer);
  }
}, [message]);
  return (
    <>
  <div className="w-full h-20 sm:h-24 bg-gradient-to-b from-[#202808] to-[#F3F3EA]"></div>

<div className="bg-[#F3F3EA] text-gray-800 py-6 sm:py-10 font-sans">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
    
    <div className="flex flex-col gap-3 items-center md:items-start">
      <div className="flex justify-center md:justify-start items-center w-full max-w-[320px] sm:max-w-[380px] md:w-[390px] md:h-[390px]">
        <img src={mainImage} alt={product.name} className="w-full max-h-[300px] sm:max-h-[350px] md:max-h-[380px] rounded-xl object-contain"/>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 flex-wrap justify-center md:justify-start">
          {images.map((img, i) => (
            <img key={i} src={img} alt="" onClick={() => setMainImage(img)} className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-contain cursor-pointer border p-1 transition-colors ${mainImage === img? "border-[#202808]": "border-gray-200 hover:border-[#33432B]"}`} />
          ))}
        </div>
      )}
    </div>

    <div className="flex flex-col gap-3">
      <nav className="text-[10px] sm:text-[11px] text-gray-400 mb-2 sm:mb-4 uppercase tracking-[0.1em] flex flex-wrap items-center justify-center md:justify-start">
        <Link to="/" className="hover:text-[#202808] transition-colors">Home</Link>
        <span className="mx-2 text-gray-300">/</span>
        <Link to="/products" className="hover:text-[#202808] transition-colors">Products</Link>
        <span className="mx-2 text-gray-300">/</span>
        <span className="text-[#202808] font-semibold">{product.name}</span>
      </nav>

      <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#202808] text-center md:text-left">
        {product.name}
      </h1>

      <div className="text-lg sm:text-xl md:text-2xl font-semibold text-[#C4866D] text-center md:text-left">
        ${product.price}
      </div>

      <p className="text-[#33432B] text-xs sm:text-sm leading-relaxed text-center md:text-left">
        {product.description}
      </p>

      <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-4 border-b border-gray-100 pb-6">
        
        <div className="flex items-center border border-gray-300 rounded-xl">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 sm:px-4 py-2 text-gray-500">-</button>
          <input type="text" value={quantity} readOnly className="w-10 sm:w-12 text-center bg-[#F3F3EA] border-x border-gray-300 py-2 text-sm font-medium text-[#202808]"/>
          <button onClick={() => setQuantity(quantity + 1)} className="px-3 sm:px-4 py-2 text-gray-500">+</button>
        </div>

        <button
          onClick={() => addToCart(product, quantity)}
          className="bg-[#202808] text-white px-5 sm:px-6 py-2.5 rounded w-full sm:w-auto text-sm sm:text-base"
        >
          Add to Cart
        </button>
      </div>

      {message && (
        <div className="text-[#26462C] text-sm text-center md:text-left">
          {message}
        </div>
      )}

      <div className="flex flex-col gap-2 mt-2 text-xs sm:text-sm text-gray-500 text-center md:text-left">
        <p><strong className="text-[#202808] font-medium">Categories:</strong> {collection?.name}</p>
        <p><strong className="text-[#202808] font-medium">Brand:</strong> Naturéa</p>

        <div className="flex items-center justify-center md:justify-start gap-3 mt-1">
          <strong className="text-[#202808] font-medium">Share:</strong>
          <div className="flex gap-3 text-gray-400 cursor-pointer">
            <span className="hover:text-[#C4866D] font-bold">f</span>
            <span className="hover:text-[#C4866D] font-bold">X</span>
            <span className="hover:text-[#C4866D] font-bold">W</span>
            <span className="hover:text-[#C4866D] font-bold">I</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {(product.benefits || product.ingredients) && (
    <div className="mb-8 max-w-2xl mx-auto px-4 sm:px-6 text-center">
      <div className="flex justify-center gap-6 sm:gap-8 border-t border-gray-200 mb-3">
        {product.benefits && (
          <button onClick={() => setActiveTab("benefits")} className={`pt-3 text-sm sm:text-base font-medium transition-colors ${activeTab === "benefits" ? "text-[#202808] border-t-2 border-[#202808]" : "text-gray-400 hover:text-[#202808]"}`}>
            Benefits
          </button>
        )}
        {product.ingredients && (
          <button onClick={() => setActiveTab("ingredients")} className={`pt-3 text-sm sm:text-base font-medium transition-colors ${activeTab === "ingredients" ? "text-[#202808] border-t-2 border-[#202808]" : "text-gray-400 hover:text-[#202808]"}`}>
            Ingredients
          </button>
        )}
      </div>

      {activeTab === "benefits" && product.benefits && (
        <ul className="flex flex-col gap-3 text-sm sm:text-base text-[#33432B] text-left sm:ml-6 md:ml-10">
          {product.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-[#202808]">✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      )}

      {activeTab === "ingredients" && product.ingredients && (
        <p className="text-left text-sm sm:text-base text-gray-600 leading-relaxed sm:ml-6 md:ml-10">
          {product.ingredients.join(", ")}.
        </p>
      )}
    </div>
  )}
</div>
    </>
  );
}