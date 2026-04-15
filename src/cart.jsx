"use client";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CarrtContext";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const shipping = 10;
  const taxes = 0;
  const discount = 0;
  const grandTotal = subTotal + shipping + taxes - discount;

  return (
    <div className="font-sans">
      <div className="w-full py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-[#202808] to-[#F3F3EA] text-center">
        <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-2">
          Shopping Cart
        </h1>
        <p data-aos="fade-up" className="py-2 text-sm text-[#5A4632]">
          <Link to="/" className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <span>Shopping Cart</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 pb-6 bg-[#F3F3EA] gap-6 lg:gap-10">
        <div data-aos="fade-up" className="lg:col-span-2">
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1F3A24] text-white">
                  <th className="py-4 px-6 rounded-tl-xl font-medium">Product</th>
                  <th className="py-4 px-6 font-medium">Price</th>
                  <th className="py-4 px-6 font-medium text-center">Quantity</th>
                  <th className="py-4 px-6 rounded-tr-xl font-medium text-right">Subtotal</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 bg-white border border-gray-300">
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="py-6 px-4 flex items-center gap-4">
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-black">
                        <IoClose size={20} />
                      </button>

                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover bg-gray-50" />

                      <div>
                        <h3 className="font-bold text-[#1A1A1A]">{item.name}</h3>
                        <p className="text-xs text-gray-400 uppercase">{item.category || "Skin Care"}</p>
                      </div>
                    </td>

                    <td className="py-6 px-6 font-semibold">${item.price.toFixed(2)}</td>

                    <td className="py-6 px-6">
                      <div className="flex items-center justify-center border rounded-full overflow-hidden w-max mx-auto">
                        <button onClick={() => decreaseQty(item.id)} className="px-3 py-2 border-r">−</button>
                        <span className="px-5 py-2 text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => increaseQty(item.id)} className="px-3 py-2 border-l">+</button>
                      </div>
                    </td>

                    <td className="py-6 px-6 text-right font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {cartItems.length === 0 && (
              <div className="py-20 text-center text-gray-400">Your cart is empty.</div>
            )}
          </div>

          <div className="md:hidden space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-20 text-center text-gray-400">Your cart is empty.</div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border">
                  <div className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />

                    <div className="flex-1">
                      <h3 className="font-bold text-sm text-[#1A1A1A]">{item.name}</h3>
                      <p className="text-xs text-gray-400">{item.category || "Skin Care"}</p>
                      <p className="font-semibold mt-1">${item.price.toFixed(2)}</p>
                    </div>

                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400">
                      <IoClose size={20} />
                    </button>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border rounded-full overflow-hidden">
                      <button onClick={() => decreaseQty(item.id)} className="px-3 py-1">−</button>
                      <span className="px-3 text-sm">{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)} className="px-3 py-1">+</button>
                    </div>

                    <span className="font-bold text-[#1A1A1A]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="lg:col-span-1 w-full">
          <div data-aos="fade-up" className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-8">Order Summary</h2>

            <div className="space-y-4 pb-6 border-b border-dashed">
              <div className="flex justify-between text-sm">
                <span>Items</span>
                <span className="font-bold">{totalItems}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Sub Total</span>
                <span className="font-bold">${subTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span className="font-bold">${shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Taxes</span>
                <span className="font-bold">${taxes.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-6">
              <span className="text-gray-400">Total</span>
              <span className="text-2xl font-bold">${grandTotal.toFixed(2)}</span>
            </div>

            <button
              disabled={cartItems.length === 0}
              onClick={() => navigate("/checkout")}
              className={`w-full py-3 sm:py-4 rounded-full font-semibold transition ${
                cartItems.length === 0
                  ? "bg-[#1F3A24] text-white cursor-not-allowed"
                  : "bg-[#1F3A24] hover:bg-[#162A1A] text-white"
              }`}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}