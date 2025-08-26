

import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function BestSeller() {
    const { products } = useContext(shopDataContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const filterProduct = products.filter(item => item.bestseller)
        setBestSeller(filterProduct.slice(0, 4))
    }, [products])

    return (
        <div className="w-full flex flex-col items-center py-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200">
            {/* Heading */}
            <div className='text-center mb-6'>
                <Title text1="BEST" text2="SELLERS" /> 

                {/* Subtext with premium accent */}
                <p className='mt-4 text-gray-300 text-[15px] md:text-[18px] lg:text-[20px] max-w-[600px] mx-auto leading-relaxed'>
                    Tried, Tested, <span className='text-pink-500 font-semibold'>Loved</span> – Discover Our All-Time Best Sellers.
                </p>
            </div>

            {/* Cards */}
            <div className='w-full flex flex-wrap justify-center gap-8 px-4 md:px-10'>
                {bestSeller.map((item, index) => (
                    <Card 
                        key={index} 
                        name={item.name} 
                        image={item.image1} 
                        id={item._id} 
                        price={item.price} 
                        theme="dark" // Dark theme for consistency
                    />
                ))}
            </div>
        </div>
    )
}

export default BestSeller

