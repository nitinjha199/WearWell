

import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'

function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(shopDataContext)

  return (
    <div className='w-full'>
      {/* Title */}
      <div className='text-xl py-3'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      {/* Totals Box */}
      <div className='flex flex-col gap-3 mt-2 p-5 border border-gray-700 rounded-xl bg-gray-800 shadow-md'>
        <div className='flex justify-between text-gray-200 text-base sm:text-lg font-medium'>
          <p>Subtotal</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr className='border-gray-700' />
        <div className='flex justify-between text-gray-200 text-base sm:text-lg font-medium'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}</p>
        </div>
        <hr className='border-gray-700' />
        <div className='flex justify-between text-gray-100 text-base sm:text-lg font-semibold'>
          <p>Total</p>
          <p>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</p>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
