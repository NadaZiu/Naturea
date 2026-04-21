import { motion } from "framer-motion"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { useNavigate, Link } from "react-router-dom"
import { useState, useContext, useEffect, use } from "react"
import { SearchContext } from "./search"
import SearchIcon from "@mui/icons-material/Search"
export const collections = [
  {
    id: "body-care",
    name: "Body Care",
    products: [
      { id: 1, name: "Argan Oil", description: "100% organic oil for hair and skin", price: 20, image: "/argan1.png", image2: "/argan2.png", ingredients: ["Argan Nuts", "Vitamin E", "Omega 6"], benefits: ["Shiny hair", "Moisturizes skin", "Prevents dryness"] },
      { id: 2, name: "Hair Serum", description: "Serum for shiny and healthy hair", price: 25, image: "/serum1.png", image2: "/serum2.png", ingredients: ["Jojoba Oil", "Keratin"], benefits: ["Smooth hair", "Strengthens roots"] },
      { id: 3, name: "Hair Mask", description: "Deep nourishing mask for healthy hair", price: 30, image: "/hairmask1.png", image2: "/hairmask2.png", ingredients: ["Shea Butter", "Coconut Oil", "Vitamin B5"], benefits: ["Repairs damaged hair", "Softens hair", "Adds shine"] },
      { id: 5, name: "Rose Water", description: "Soothing and refreshing facial toner", price: 12, image: "/rosewater1.png", image2: "/rosewater2.png", ingredients: ["Rose Extract", "Distilled Water"], benefits: ["Hydrates skin", "Reduces redness"] },
      { id: 6, name: "Hand Cream", description: "Moisturizing cream for all skin types", price: 22, image: "/cream1.png", image2: "/cream2.png", ingredients: ["Shea Butter", "Aloe Vera", "Vitamin E"], benefits: ["Softens skin", "Nourishes deeply"] },
      { id: 7, name: "Body Oil", description: "Hydrating oil for soft skin", price: 20, image: "/bodyoil1.png", image2: "/bodyoil2.png", ingredients: ["Coconut Oil", "Jojoba Oil"], benefits: ["Moisturizes", "Smoothes skin"] },
      { id: 8, name: "Natural Soap", description: "Gentle cleansing soap", price: 10, image: "/soap1.png", image2: "/soap2.png", ingredients: ["Olive Oil", "Coconut Oil", "Essential Oils"], benefits: ["Cleanses skin", "Softens skin"] },
      { id: 9, name: "Body Butter", description: "Rich butter for dry skin", price: 28, image: "/bodybutter1.png", image2: "/bodybutter2.png", ingredients: ["Shea Butter", "Cocoa Butter"], benefits: ["Deeply nourishes", "Smooths rough skin"] }
    ]
  },
  {
    id: "essential-oils",
    name: "Essential Oils",
    products: [
      { id: 10, name: "Lavender Oil", description: "Relaxing and soothing essential oil", price: 15, image: "/lavender1.png", image2: "/lavender2.png", ingredients: ["Lavender Extract"], benefits: ["Reduces stress", "Promotes relaxation"] },
      { id: 11, name: "Tea Tree Oil", description: "Antiseptic essential oil", price: 18, image: "/teatree1.png", image2: "/teatree2.png", ingredients: ["Tea Tree Extract"], benefits: ["Fights bacteria", "Improves skin"] },
      { id: 12, name: "Eucalyptus Oil", description: "Refreshing and clearing oil", price: 16, image: "/eucalyptus1.png", image2: "/eucalyptus2.png", ingredients: ["Eucalyptus Extract"], benefits: ["Clears sinuses", "Relieves tension"] }
    ]
  },
  {
    id: "honey",
    name: "Honey",
    products: [
      { id: 13, name: "Sidr Honey", description: "Pure Sidr honey", price: 25, image: "/sidr1.png", image2: "/sidr2.png", ingredients: ["Sidr Flower Honey"], benefits: ["Boosts immunity", "Natural energy"] },
      { id: 14, name: "Wildflower Honey", description: "Rich and flavorful honey", price: 22, image: "/wildflower1.png", image2: "/wildflower2.png", ingredients: ["Wildflower Nectar"], benefits: ["Antioxidant rich", "Supports digestion"] },
      { id: 15, name: "Mountain Honey", description: "Honey from mountain flowers", price: 28, image: "/mountain1.png", image2: "/mountain2.png", ingredients: ["Mountain Flower Nectar"], benefits: ["Strengthens immunity", "Rich in minerals"] },
      { id: 16, name: "Honey with Nuts", description: "Delicious honey with mixed nuts", price: 30, image: "/honeynuts1.png", image2: "/honeynuts2.png", ingredients: ["Honey", "Almonds", "Walnuts", "Pistachios"], benefits: ["Energy booster", "Nutritious snack"] }
    ]
  },
  {
    id: "herbs",
    name: "Herbs",
    products: [
      { id: 17, name: "Chamomile", description: "Calming herb", price: 8, image: "/chamomile1.png", image2: "/chamomile2.png", ingredients: ["Chamomile Flowers"], benefits: ["Calms nerves", "Aids sleep"] },
      { id: 18, name: "Mint", description: "Refreshing herb", price: 7, image: "/mint1.png", image2: "/mint2.png", ingredients: ["Mint Leaves"], benefits: ["Fresh breath", "Soothes digestion"] },
      { id: 19, name: "Rosemary", description: "Herb for hair and cooking", price: 9, image: "/rosemary1.png", image2: "/rosemary2.png", ingredients: ["Rosemary Leaves"], benefits: ["Strengthens hair", "Flavorful for dishes"] },
      { id: 20, name: "Sage", description: "Medicinal and culinary herb", price: 6, image: "/sage1.png", image2: "/sage2.png", ingredients: ["Sage Leaves"], benefits: ["Supports digestion", "Antioxidant"] },
      { id: 21, name: "Thyme", description: "Aromatic herb", price: 7, image: "/thyme1.png", image2: "/thyme2.png", ingredients: ["Thyme Leaves"], benefits: ["Antibacterial", "Supports respiratory health"] },
      { id: 22, name: "Aloe Vera", description: "Soothing plant", price: 10, image: "/aloevera1.png", image2: "/aloevera2.png", ingredients: ["Aloe Vera Gel"], benefits: ["Hydrates skin", "Heals burns"] },
      { id: 23, name: "Lavender", description: "Calming herb", price: 9, image: "/3.png", image2: "/4.png", ingredients: ["Lavender Flowers"], benefits: ["Relaxes mind", "Aromatherapy"] },
      { id: 24, name: "Eucalyptus", description: "Refreshing plant", price: 11, image: "/1.png", image2: "/2.png", ingredients: ["Eucalyptus Leaves"], benefits: ["Clears airways", "Refreshes skin"] },
      { id: 25, name: "Moringa", description: "Superfood plant", price: 12, image: "/moringa1.png", image2: "/moringa2.png", ingredients: ["Moringa Leaves"], benefits: ["Rich in nutrients", "Supports energy"] },
    ]
  }
];

export default function Product() {
  const navigate = useNavigate();
  const { search, setSearch } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState(search);
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 8;

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const allProducts = collections.flatMap((col) => col.products);

  const filteredProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (currentPage - 1) * perPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + perPage);

  const handleSearch = () => setSearch(inputValue);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") setSearch(inputValue);
  };

  return (
    <>
<div className="w-full bg-gradient-to-b from-[#202808] to-[#F3F3EA] py-14 sm:py-20 text-center">

  <div className="max-w-md mx-auto relative px-4 sm:px-0">
    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} placeholder="Search products..." className="w-full pl-10 pr-10 py-2 sm:py-2.5 rounded-full bg-transparent border border-[#FEFAE0]/40 text-white placeholder-[#FEFAE0] text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-white/50" />
    <SearchIcon onClick={handleSearch} className="absolute right-7 sm:right-3 top-1/2 -translate-y-1/2 text-[#FEFAE0] cursor-pointer hover:text-white" />
  </div>

  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2A1B10] mt-6 sm:mt-8">Shop</h1>

  <p className="text-xs sm:text-sm text-[#5A4632] mt-2">
    <Link to="/" className="hover:text-[#202808]">Home</Link>
    <span className="mx-2">/</span>
    Products
  </p>

</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 bg-[#F3F3EA]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

    {paginatedProducts.map((product) => (
      <motion.div key={product.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="bg-white rounded-lg shadow overflow-hidden flex flex-col">

        <div className="relative w-full h-48 sm:h-52 lg:h-56 overflow-hidden">
          <img src={product.image} className="absolute w-full h-full object-cover" />
          <img src={product.image2} className="absolute w-full h-full object-cover opacity-0 hover:opacity-100 transition" />
        </div>

        <div className="p-3 sm:p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-base sm:text-lg">{product.name}</h3>
          <p className="text-xs sm:text-sm text-gray-600 flex-1 mt-1">{product.description}</p>

          <div className="mt-3 sm:mt-4 flex items-center justify-between">
            <span className="font-bold text-[#202808] text-sm sm:text-base">${product.price}</span>
            <button onClick={() => navigate(`/product/${product.id}`)} className="bg-[#202808] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm">
              Add to Cart
            </button>
          </div>
        </div>

      </motion.div>
    ))}

  </div>

  <div className="flex flex-wrap justify-center gap-2 mt-8 sm:mt-10">
    {Array.from({ length: Math.ceil(filteredProducts.length / perPage) }).map((_, i) => (
      <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 border rounded text-sm sm:text-base ${currentPage === i + 1 ? "bg-[#202808] text-white" : "bg-white text-[#202808]"}`}>
        {i + 1}
      </button>
    ))}
  </div>

</div>
    </>
  );
}