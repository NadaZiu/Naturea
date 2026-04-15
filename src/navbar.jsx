import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <nav className="w-full flex items-center justify-between absolute top-0 left-0 z-50 px-6 py-5">
  <div className="text-xl font-semibold text-[#FEFAE0]">Naturéa</div>

  <ul className="hidden md:flex gap-10 text-[#FEFAE0] drop-shadow-md">
    <li><Link to="/" className="hover:text-[#DEC69E]">Home</Link></li>
    <li><Link to="/products" className="hover:text-[#DEC69E]">Products</Link></li>
    <li><Link to="/about" className="hover:text-[#DEC69E]">About Us</Link></li>
    <li><Link to="/contact" className="hover:text-[#DEC69E]">Contact Us</Link></li>
    <li><Link to="/faq" className="hover:text-[#DEC69E]">FAQ</Link></li>
  </ul>

  <div className="hidden md:flex gap-5 text-xl text-[#FEFAE0]">
    <Link to="/authPage"><FaRegUser className="cursor-pointer hover:text-[#DEC69E]" /></Link>
    <Link to="/cart"><FiShoppingBag className="cursor-pointer hover:text-[#DEC69E]" /></Link>
  </div>

  <div className="md:hidden text-[#FEFAE0] text-2xl">
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <HiX /> : <HiMenu />}
    </button>
  </div>

  {isOpen && (
    <div className="absolute top-0 left-0 w-full h-screen bg-[#202808] flex flex-col items-center justify-center gap-8 text-white text-lg">
      <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
      <Link onClick={() => setIsOpen(false)} to="/products">Products</Link>
      <Link onClick={() => setIsOpen(false)} to="/about">About Us</Link>
      <Link onClick={() => setIsOpen(false)} to="/contact">Contact Us</Link>
      <Link onClick={() => setIsOpen(false)} to="/faq">FAQ</Link>

      <div className="flex gap-6 mt-6 text-2xl">
        <Link to="/authPage" onClick={() => setIsOpen(false)}><FaRegUser /></Link>
        <Link to="/cart" onClick={() => setIsOpen(false)}><FiShoppingBag /></Link>
      </div>
    </div>
  )}
</nav>
  );
}