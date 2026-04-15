"use client";
import { useCart } from "./CarrtContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [error, setError] = useState("");

  const subTotal = cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);
  const shipping = 10;
  const total = subTotal + shipping;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      setError("Please fill all required fields");
      return;
    }
    setError("");
    clearCart();
    navigate("/success");
  };

  return (
    <div className="bg-[#F8F8F2] min-h-screen font-sans">
      <div className="py-16 sm:py-20 text-center bg-gradient-to-b from-[#202808] to-[#F8F8F2]">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">Checkout</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">Billing Details</h2>

          {error && <div className="mb-4 bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm">{error}</div>}

          <div className="flex flex-col gap-3 sm:gap-4">
            <input type="text" name="name" placeholder="Full Name *" value={form.name} onChange={handleChange} className="border p-3 rounded-lg text-sm sm:text-base focus:outline-none" />
            <input type="email" name="email" placeholder="Email (optional)" value={form.email} onChange={handleChange} className="border p-3 rounded-lg text-sm sm:text-base focus:outline-none" />
            <input type="text" name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} className="border p-3 rounded-lg text-sm sm:text-base focus:outline-none" />
            <textarea name="address" placeholder="Address *" value={form.address} onChange={handleChange} rows={3} className="border p-3 rounded-lg text-sm sm:text-base focus:outline-none" />
          </div>
        </div>

        <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100 h-fit">
          <h2 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">Order Summary</h2>

          <div className="space-y-3 sm:space-y-4 border-b pb-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-400 text-sm">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm sm:text-base">
                  <span className="truncate max-w-[70%]">{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))
            )}
          </div>

          <div className="mt-4 space-y-2 text-sm sm:text-base">
            <div className="flex justify-between"><span>Subtotal</span><span>${subTotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
            <div className="flex justify-between font-semibold text-lg mt-4"><span>Total</span><span>${total.toFixed(2)}</span></div>
          </div>

          <button
            onClick={handleOrder}
            disabled={cartItems.length === 0}
            className={`w-full mt-6 py-3 sm:py-4 rounded-full font-semibold transition text-sm sm:text-base ${
              cartItems.length === 0
                ? "bg-[#1F3A24] text-white cursor-not-allowed"
                : "bg-[#1F3A24] hover:bg-[#162A1A] text-white"
            }`}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}