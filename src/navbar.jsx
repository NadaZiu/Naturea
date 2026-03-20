import { Link } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between absolute top-0 left-0 w-full z-50 px-8 py-5">
      <div className="text-xl font-semibold text-[#FEFAE0]">
        Herbs
      </div>

      <ul className="flex gap-10 text-[#FEFAE0] drop-shadow-md">
        <li><Link to="/" className="hover:text-[#DEC69E]">Home</Link></li>
        <li><Link to="/products" className="hover:text-[#DEC69E]">Products</Link></li>
        <li><Link to="/about" className="hover:text-[#DEC69E]">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-[#DEC69E]">Contact Us</Link></li>
        <li><Link to="/faq" className="hover:text-[#DEC69E]">FAQ</Link></li>
      </ul>

      <div className="flex gap-5 text-xl text-[#FEFAE0]">
         <Link to="/authPage"><FaRegUser className="cursor-pointer hover:text-[#DEC69E]" /></Link>
        <FiShoppingBag className="cursor-pointer hover:text-[#DEC69E]" />
        

      </div>
    </nav>
  )
}