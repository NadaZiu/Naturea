"use client";
import { useState } from "react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"

const faqs = [
  {
    question: "Are your products 100% natural?",
    answer:
      "Yes, all our products are made with carefully selected natural ingredients, free from harmful chemicals and artificial additives.",
  },
  {
    question: "Do you test on animals?",
    answer:
      "Absolutely not. We are cruelty-free and committed to ethical practices.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping takes 3-7 business days depending on your location.",
  },
  {
    question: "Can I return a product?",
    answer: "Yes, we offer a 14-day return policy for unused products.",
  },
];

export default function Faq() {
  const [active, setActive] = useState(null);
   useEffect(() => {
      AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" })
    }, [])
  

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
<div className="font-sans bg-gradient-to-b from-[#202808] to-[#F3F3EA]">
  <div className="relative h-[45vh] flex items-center justify-center">
    <div className="absolute inset-0"></div>
    <div data-aos="fade-up" className="relative text-center text-white">
      <h1 className="text-5xl font-bold">FAQ</h1>
      <p className="mt-2 text-lg opacity-90">Your questions, answered with care</p>
    </div>
  </div>

  <div data-aos="fade-up" className="max-w-3xl mx-auto -mt-30 px-5 pb-10">
    {faqs.map((faq, index) => (
      <div key={index} className="bg-white/70 backdrop-blur-lg rounded-2xl mb-4 shadow-md overflow-hidden">
        <div data-aos="zoom-in" onClick={() => toggle(index)} className="flex justify-between items-center p-5 cursor-pointer font-semibold text-green-900 hover:bg-green-100/40 transition">
          <span>{faq.question}</span>
          <span className="text-xl text-green-700">{active === index ? "−" : "+"}</span>
        </div>

        <div className={`px-5 text-gray-700 transition-all duration-300 overflow-hidden ${active === index ? "max-h-40 pb-4" : "max-h-0"}`}>
          <p className="leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}