import {collections} from "./Products"
import { useParams } from "react-router-dom"
export default function Categories(){
   const {categorie} = useParams()
    const collection = collections.find(c=>c.id===categorie)
    return(
      <div className="products-page px-6 py-20 bg-[#F3F3EA] space-y-12">
      <h1 className="text-4xl font-semibold text-[#2A1B10] mb-6">{collection.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collection.products.map(product => (
          <div key={product.id} className="product-card bg-white rounded-lg shadow p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm">{product.description}</p>
            <span className="font-bold">${product.price}</span>
          </div>
        ))}
      </div>
    </div>
    )
}