import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import intro from "./assets/intro.png"
import { Link } from "react-router-dom"
import Collections from "./collection"
import { PiPlant } from "react-icons/pi"
import { FaLeaf } from "react-icons/fa"
import { MdEco } from "react-icons/md"
import { GiHoneyJar } from "react-icons/gi"
const items = [
  { icon: <PiPlant />, title: "100% Natural", text: "Made with pure herbs and natural ingredients." },
  { icon: <FaLeaf />, title: "Sustainably Sourced", text: "Responsibly harvested from trusted growers." },
  { icon: <MdEco />, title: "Eco Friendly", text: "Our products respect nature and the environment." },
  { icon: <GiHoneyJar />, title: "Pure Quality", text: "Carefully selected ingredients for the best quality." }
]

const testimonials = [
  { name: "Sarah M.", text: "The herbal teas are amazing and so fresh. I can really feel the difference compared to store-bought products." },
  { name: "Lina K.", text: "I love the natural honey and skincare products. Everything feels pure and high quality." },
  { name: "David R.", text: "Beautiful packaging and authentic products. The herbs smell incredibly fresh." }
]

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" })
  }, [])

  return (
  <div className="relative min-h-screen">
  <main>
    <section className="relative w-full h-[75vh] sm:h-[85vh] lg:h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${intro})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#2A1B10]/80 via-[#2A1B10]/40 to-transparent"></div>

      <div data-aos="fade-right" className="relative ml-4 sm:ml-8 md:ml-16 max-w-md sm:max-w-lg lg:max-w-xl z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-[#DDDFD1] drop-shadow-md">
          Bring Nature Into Your Home
        </h1>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg text-[#F3F3EA] leading-relaxed">
          Discover our collection of beautiful plants and eco-friendly decor designed to transform your living space into a peaceful green sanctuary.
        </p>
        <Link to="/products" className="bg-[#536815] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-sm font-medium text-sm sm:text-base lg:text-lg hover:bg-[#3D4C33] transition-colors duration-300 shadow-lg">
          Shop Now
        </Link>
      </div>
    </section>

    <section data-aos="fade-up">
      <Collections />
    </section>

    <section className="py-14 sm:py-16 lg:py-20 bg-[#6A7B4D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 data-aos="fade-up" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#DDDFD1] mb-10 sm:mb-12 lg:mb-14 uppercase">
          Why Choose Our Natural Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {items.map((item, index) => (
            <div key={index} data-aos="zoom-in" data-aos-delay={index * 100} className="flex flex-col items-center p-4 sm:p-6 group">
              <div className="border-2 border-[#6A784D] rounded-full p-2 text-xl sm:text-2xl bg-[#DDDFD1] text-[#6A7B4D] mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl py-2 relative font-semibold text-[#DDDFD1] mb-2 after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-10 after:bg-[#DDDFD1]">
                {item.title}
              </h3>
              <p className="text-[#DDDFD1] text-xs sm:text-sm py-2 sm:py-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-14 sm:py-16 lg:py-20 bg-[#F3F3EA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 data-aos="fade-up" className="text-2xl sm:text-3xl lg:text-4xl uppercase font-semibold text-[#202808] mb-10 sm:mb-12 lg:mb-14">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 150} className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl shadow-md">
              <p className="text-[#33432B] mb-4 sm:mb-6 italic text-sm sm:text-base">
                "{item.text}"
              </p>
              <h4 className="text-[#6A7B4D] font-semibold text-sm sm:text-base">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section data-aos="zoom-in" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#141905] via-[#202808] to-[#6A7B4D] text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase font-bold text-[#F3F3EA] mb-4 sm:mb-6">
          Bring Nature Into Your Home Today
        </h2>
        <p className="text-[#DDDFD1] text-sm sm:text-base lg:text-lg mb-8 sm:mb-10">
          Explore our selection of pure herbs, teas, honey, and natural skincare. Feel the difference of truly natural products.
        </p>
        <a href="/products" className="bg-[#DDDFD1] text-[#141905] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-sm font-semibold text-sm sm:text-base lg:text-lg hover:bg-white shadow-lg transition-colors duration-300">
          Buy Now
        </a>
      </div>
    </section>
  </main>
</div>
  )
}