

import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function LatestCollection() {
    const { products } = useContext(shopDataContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        setLatestProducts(products.slice(0, 8));
    }, [products])

    return (
        <div className="w-full flex flex-col items-center py-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200">
            <div className='text-center mb-10'>
                {/* Heading */}
                <Title 
                    text1="LATEST" 
                    text2="COLLECTIONS" 
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
                />
                
                {/* Subtext */}
                <p className='mt-4 text-gray-300 text-[15px] md:text-[18px] lg:text-[20px] max-w-[600px] mx-auto leading-relaxed'>
                    Step Into Style – <span className='text-pink-500 font-semibold'>New Collection</span> Dropping This Season!
                </p>
            </div>

            {/* Cards */}
            <div className='w-full flex flex-wrap justify-center gap-8 px-4 md:px-10'>
                {latestProducts.map((item, index) => (
                    <Card 
                        key={index} 
                        name={item.name} 
                        image={item.image1} 
                        id={item._id} 
                        price={item.price} 
                        theme="dark" // pass dark theme to Card
                    />
                ))}
            </div>
        </div>
    )
}

export default LatestCollection
