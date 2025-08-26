

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from '../component/RelatedProduct';
import Loading from '../component/Loading';

function ProductDetail() {
  let { productId } = useParams()
  let { products, currency, addtoCart, loading } = useContext(shopDataContext)
  let [productData, setProductData] = useState(false)

  const [image, setImage] = useState('')
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage1(item.image1)
        setImage2(item.image2)
        setImage3(item.image3)
        setImage4(item.image4)
        setImage(item.image1)
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className="w-[99vw] min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-5 pt-28">
        
        {/* Image Gallery */}
        <div className="flex flex-col lg:flex-row gap-6 lg:w-1/2 w-full">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4 justify-center">
            {[image1, image2, image3, image4].map((img, idx) => (
              <div key={idx} className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] border border-gray-600 rounded-lg overflow-hidden cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" onClick={() => setImage(img)} />
              </div>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 border border-gray-600 rounded-2xl overflow-hidden shadow-md">
            <img src={image} alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-100">{productData.name.toUpperCase()}</h1>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStarHalfAlt className="text-yellow-400" />
            <p className="text-gray-400 ml-2">(124)</p>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold text-gray-100">{currency} {productData.price}</p>

          {/* Description */}
          <p className="text-gray-300 text-[15px] md:text-[17px]">
            {productData.description} Stylish, breathable cotton shirt with a modern slim fit. 
            Easy to wash, super comfortable, and designed for effortless style.
          </p>

          {/* Sizes */}
          <div>
            <p className="font-semibold text-gray-100 mb-2">Select Size</p>
            <div className="flex gap-2 flex-wrap">
              {productData.sizes.map((item, index) => (
                <button 
                  key={index} 
                  onClick={() => setSize(item)} 
                  className={`px-4 py-2 border rounded-lg transition-all 
                    ${item === size ? 'bg-pink-500 text-white' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            onClick={() => addtoCart(productData._id, size)} 
            className="mt-4 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-md transition-all active:scale-95 w-fit"
          >
            {loading ? <Loading /> : "Add to Cart"}
          </button>

          {/* Info */}
          <div className="mt-6 text-gray-400 text-sm space-y-1">
            <p>✅ 100% Original Product</p>
            <p>✅ Cash on delivery available</p>
            <p>✅ Easy return & exchange within 7 days</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-20 px-5 lg:px-20">
        <div className="flex gap-4 border-b border-gray-600 pb-2">
          <p className="cursor-pointer text-gray-200 font-medium">Description</p>
          <p className="cursor-pointer text-gray-200 font-medium">Reviews (124)</p>
        </div>

        <div className="mt-6 p-5 bg-gray-800 border border-gray-700 rounded-xl shadow-sm text-gray-200 leading-relaxed">
          Upgrade your wardrobe with this stylish slim-fit cotton shirt, available now on OneCart. 
          Crafted from breathable, high-quality fabric, it offers all-day comfort and effortless style. 
          Easy to maintain and perfect for any setting, this shirt is a must-have essential for those 
          who value both fashion and function.
        </div>
      </div>

      {/* Related Products */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id}/>
    </div>
  ) : <div className="opacity-0"></div>
}

export default ProductDetail
