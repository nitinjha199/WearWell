

import React, { useContext, useEffect, useState } from 'react';
import Title from '../component/Title';
import { shopDataContext } from '../context/ShopContext';
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';

function Order() {
  const [orderData, setOrderData] = useState([]);
  const { currency } = useContext(shopDataContext);
  const { serverUrl } = useContext(authDataContext);

  const loadOrderData = async () => {
    try {
      const result = await axios.post(`${serverUrl}/api/order/userorder`, {}, { withCredentials: true });
      if (result.data) {
        const allOrdersItem = [];
        result.data.forEach(order => {
          order.items.forEach(item => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date
            });
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, []);

  return (
    <div className='w-full min-h-screen p-5 pb-[150px] bg-gray-900 text-gray-200'>
      
      {/* Title */}
      <div className='text-center mt-20'>
        <Title text1={'MY'} text2={'ORDER'} />
      </div>

      {/* Orders */}
      <div className='w-full flex flex-col gap-5 mt-5'>
        {orderData.map((item, index) => (
          <div 
            key={index} 
            className='w-full border border-gray-700 rounded-2xl shadow-xl bg-gray-800 p-4 flex flex-col md:flex-row items-start gap-4'
          >
            
            {/* Product Image */}
            <img 
              src={item.image1} 
              alt={item.name} 
              className='w-[130px] h-[130px] rounded-md object-cover' 
            />

            {/* Product Details */}
            <div className='flex flex-col flex-1 gap-2'>
              <p className='text-lg md:text-2xl font-semibold text-gray-200'>{item.name}</p>
              <div className='flex flex-wrap gap-4 text-sm md:text-base text-gray-400'>
                <p>{currency} {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Size: {item.size}</p>
              </div>
              <p className='text-sm md:text-base text-gray-500'>
                Date: <span className='text-gray-200'>{new Date(item.date).toDateString()}</span>
              </p>
              <p className='text-sm md:text-base text-gray-500'>Payment Method: {item.paymentMethod}</p>
            </div>

            {/* Status */}
            <div className='flex flex-col items-end justify-between'>
              <div className='flex items-center gap-2 mb-2'>
                <span className={`w-3 h-3 rounded-full ${item.status === 'Delivered' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                <p className='text-sm md:text-base font-medium text-gray-200'>{item.status}</p>
              </div>
              <button 
                onClick={loadOrderData} 
                className='px-4 py-2 rounded-md bg-pink-500 text-white text-sm md:text-base hover:bg-pink-600 transition-colors'
              >
                Track Order
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
