import herbs from "./assets/medherbs.png"
import honey from "./assets/honey.png"
import teaherbs from "./assets/teaherbs.png"
import skincare from "./assets/skincare.png"
import { Link } from "react-router-dom"

export default function Collections() {
const collectionData = [
  { id: "herbs", title: "Herbs", img: herbs, path: "/products/herbs" },
  { id: "honey", title: "Honey", img: honey, path: "/products/honey" },
  { id: "essential-oils", title: "Essential Oils", img: teaherbs, path: "/products/essential-oils" },
  { id: "skincare", title: "Skincare", img: skincare, path: "/products/skincare" }
]
  return (
  <section className="relative w-full py-20 overflow-hidden bg-[#F3F3EA]">
  <div className="relative max-w-7xl mx-auto px-6 z-10 text-center">
    <h2 className="text-4xl font-semibold text-[#202808] mb-16 tracking-tight">OUR COLLECTIONS</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {collectionData.map((item, index) => (
       <div key={index} className="group relative flex flex-col">
  <Link to={item.path} className="relative overflow-hidden rounded-xl shadow-lg h-60 w-full block border-[6px] border-[#DDDFD1]">
    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
      <span className="bg-white text-[#202808] px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase shadow-xl group-hover:bg-[#33432B] group-hover:text-white transition-colors duration-300">
        Shop {item.title}
      </span>
    </div>
  </Link>
</div>
      ))}
    </div>
  </div>
</section>
  )
}