import { useParams } from "react-router-dom";
import { useState } from "react";
import { collections } from "./Products";
import { Link } from "react-router-dom";

export default function ProductDetails() {
const { productId } = useParams();

const product = collections.flatMap(c => c.products).find(p => p.id.toString() === productId);

const collection = collections.find(c =>
  c.products.some(p => p.id.toString() === productId)
);
if (!product) return <h2 className="text-center mt-20 text-lg">Product not found</h2>;

const images = [product.image, product.image2].filter(Boolean);

const [mainImage, setMainImage] = useState(images[0]);
const [quantity, setQuantity] = useState(1);
const [activeTab, setActiveTab] = useState("benefits");


  return (
    <>
   <div className="w-full h-24 bg-gradient-to-b from-[#202808] to-[#F3F3EA]"></div>
    <div className="bg-[#F3F3EA] text-gray-800 py-10 font-sans">
     <div className="max-w-6xl mx-auto px-60 py-12 grid md:grid-cols-2  gap-1">
     <div className="flex flex-col gap-[2px] relative z-0 items-start">
  <div className="flex justify-start items-start w-[390px] h-[390px]">
            <img src={mainImage} alt={product.name} className="max-h-[380px] rounded-xl object-contain"/>
          </div>
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((img,i)=>(
                <img key={i} src={img} alt="" onClick={()=>setMainImage(img)} className={`w-20 h-20 rounded-xl object-contain rounded-sm cursor-pointer border p-1 transition-colors ${mainImage===img?'border-[#202808]':'border-gray-200 hover:border-[#33432B]'}`}/>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3 relative z-10">
          <nav className="text-[11px] text-gray-400 mb-4 uppercase tracking-[0.1em] flex items-center">
            <Link to="/" className="hover:text-[#202808] transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <Link to="/products" className="hover:text-[#202808] transition-colors">Products</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-[#202808] font-semibold">{product.name}</span>
          </nav>
          <h1 className="text-3xl font-medium text-[#202808]">{product.name}</h1>
          <div className="text-2xl font-semibold text-[#C4866D]">${product.price}</div>
          <p className="text-[#33432B] text-sm leading-relaxed">{product.description}</p>
          <div className="flex items-center gap-4 mt-4 border-b border-gray-100 pb-6">
            <div className="flex items-center border border-gray-300 rounded-xl">
              <button onClick={()=>setQuantity(Math.max(1,quantity-1))} className="px-4 py-2.5 text-gray-500 hover:bg-gray-50 transition">-</button>
              <input type="text" value={quantity} readOnly className="w-12 text-center bg-[#F3F3EA] border-x border-gray-300 py-2.5 text-sm focus:outline-none font-medium text-[#202808]"/>
              <button onClick={()=>setQuantity(quantity+1)} className="px-4 py-2.5 text-gray-500 hover:bg-gray-50 transition">+</button>
            </div>
            <button className="bg-[#202808] rounded-xl text-white px-8 py-3 rounded-sm text-sm font-semibold tracking-wide hover:bg-[#33432B] transition-colors w-full md:w-auto">ADD TO CART</button>
          </div>
          <div className="flex flex-col gap-2 mt-2 text-sm text-gray-500">
            <p><strong className="text-[#202808] font-medium">Categories:</strong> {collection?.name}</p>
            <p><strong className="text-[#202808] font-medium">Brand:</strong> Natural</p>
            <div className="flex items-center gap-3 mt-1">
              <strong className="text-[#202808] font-medium">Share:</strong>
              <div className="flex gap-3 text-gray-400 cursor-pointer">
                <span className="hover:text-[#C4866D] transition-colors font-bold">f</span>
                <span className="hover:text-[#C4866D] transition-colors font-bold">X</span>
                <span className="hover:text-[#C4866D] transition-colors font-bold">W</span>
                <span className="hover:text-[#C4866D] transition-colors font-bold">I</span>
              </div>
            </div>
          </div>
        </div>
      </div>

{(product.benefits||product.ingredients)&&(
<div className="mb-8 max-w-2xl mx-auto text-center">
  <div className="flex justify-center gap-8 border-t border-gray-200 mb-3">
    {product.benefits&&(
      <button onClick={()=>setActiveTab("benefits")} className={`pt-3 text-base font-medium transition-colors ${activeTab==="benefits"?"text-[#202808] border-t-2 border-[#202808]":"text-gray-400 hover:text-[#202808]"}`}>Benefits</button>
    )}
    {product.ingredients&&(
      <button onClick={()=>setActiveTab("ingredients")} className={`pt-3 text-base font-medium transition-colors ${activeTab==="ingredients"?"text-[#202808] border-t-2 border-[#202808]":"text-gray-400 hover:text-[#202808]"}`}>Ingredients</button>
    )}
  </div>

  {activeTab==="benefits"&&product.benefits&&(
    <ul className="flex flex-col ml-10 gap-3 text-base text-[#33432B]">
      {product.benefits.map((benefit,index)=>(
        <li key={index} className="flex items-center gap-2"><span className="text-[#202808]">✓</span><span>{benefit}</span></li>
      ))}
    </ul>
  )}

  {activeTab==="ingredients"&&product.ingredients&&(
    <p className="text-left ml-10 text-gray-600 leading-relaxed">{product.ingredients.join(", ")}.</p>
  )}
</div>
)}
    </div>
    </>
  );
}