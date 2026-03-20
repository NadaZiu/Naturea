import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#F3F3EA] text-[#2A1B10] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-xl font-semibold mb-4">Natural Store</h3>
          <p className="text-sm text-[#5A4632]">We offer natural herbs, pure honey, teas, and eco-friendly products carefully selected to bring the best of nature to your home.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-[#202808]">All Products</Link></li>
            <li><Link to="/products/herbs" className="hover:text-[#202808]">Herbs</Link></li>
            <li><Link to="/products/tea" className="hover:text-[#202808]">Herbal Tea</Link></li>
            <li><Link to="/products/honey" className="hover:text-[#202808]">Honey</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#202808]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#202808]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#202808]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-lg mb-4 text-[#3D4C33]">
            <a href="#" className="hover:text-[#202808]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#202808]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#202808]"><FaTwitter /></a>
          </div>

          <p className="text-sm text-[#5A4632]">Follow us to discover new natural products and special offers.</p>
        </div>

      </div>

      <div className="border-t border-[#C9AA7C] mt-12 pt-6 text-center text-sm text-[#5A4632]">
        <p>© {new Date().getFullYear()} DipDev. All rights reserved.</p>
      </div>
    </footer>
  )
}