

import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";
import CartTotal from '../component/CartTotal';

function Cart() {
  const { products, currency, cartItem, updateQuantity } = useContext(shopDataContext)
  const [cartData, setCartData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className='w-[99vw] min-h-screen p-5 overflow-hidden bg-gray-900 text-gray-200'>
      
      {/* Title */}
      <div className='text-center mt-20'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {/* Cart Items */}
      <div className='w-full mt-10 flex flex-col gap-6'>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div key={index} className='w-full border border-gray-700 rounded-2xl bg-gray-800 shadow-xl p-4'>
                <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4'>
                  
                  {/* Image */}
                  <img className='w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-md object-cover' src={productData.image1} alt="" />
                  
                  {/* Details */}
                  <div className='flex flex-col gap-2 flex-1 text-center sm:text-left'>
                    <p className='text-lg sm:text-xl font-semibold text-gray-200'>{productData.name}</p>
                    <div className='flex justify-center sm:justify-start items-center gap-4'>
                      <p className='text-base sm:text-lg text-pink-400 font-medium'>{currency} {productData.price}</p>
                      <p className='w-10 h-10 text-sm text-gray-500 bg-gray-700 rounded-md flex items-center justify-center border border-gray-600'>{item.size}</p>
                    </div>
                  </div>

                  {/* Quantity + Delete */}
                  <div className="flex items-center gap-3 mt-2 sm:mt-0">
                    <input
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                      className='w-14 sm:w-20 px-2 py-1 text-gray-200 text-sm sm:text-base font-semibold bg-gray-700 border border-gray-600 rounded-full focus:ring-2 focus:ring-pink-400'
                      onChange={(e) =>
                        (e.target.value === '' || e.target.value === '0')
                          ? null
                          : updateQuantity(item._id, item.size, Number(e.target.value))
                      }
                    />
                    <RiDeleteBin6Line
                      className='text-pink-400 w-6 h-6 cursor-pointer hover:text-pink-500 transition'
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                    />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      {/* Cart Total + Checkout */}
      <div className='flex justify-center sm:justify-start items-end my-10'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal darkMode={true}/>
          <button
            className='text-lg hover:bg-pink-600 cursor-pointer bg-pink-500 py-3 px-10 rounded-2xl text-white flex items-center justify-center gap-5 border border-pink-400 ml-0 sm:ml-8 mt-5 transition'
            onClick={() => {
              if (cartData.length > 0) {
                navigate("/placeorder");
              } else {
                console.log("Your cart is empty!");
              }
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart


