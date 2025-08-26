
import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'
import Card from './Card'

function RelatedProduct({ category, subCategory, currentProductId }) {
    const { products } = useContext(shopDataContext)
    const [related, setRelated] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            const filtered = products
                .filter(item => category === item.category)
                .filter(item => subCategory === item.subCategory)
                .filter(item => currentProductId !== item._id)
            setRelated(filtered.slice(0, 4))
        }
    }, [products, category, subCategory, currentProductId])

    return (
        <div className='my-[60px] md:my-[80px] px-4 md:px-16 bg-gray-900 text-gray-200'>
            {/* Section Title */}
            <div className='ml-2 md:ml-8 mb-6'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>

            {/* Related Products */}
            <div className='w-full mt-8 flex flex-wrap justify-center gap-8'>
                {related.map((item, index) => (
                    <Card
                        key={index}
                        id={item._id}
                        name={item.name}
                        price={item.price}
                        image={item.image1}
                        theme="dark"
                    />
                ))}
            </div>
        </div>
    )
}

export default RelatedProduct
