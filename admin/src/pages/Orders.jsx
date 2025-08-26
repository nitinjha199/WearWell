


import React, { useContext, useEffect, useState } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { SiEbox } from "react-icons/si";

function Orders() {

  let [orders, setOrders] = useState([])
  let { serverUrl } = useContext(authDataContext)

  const fetchAllOrders = async () => {
    try {
      const result = await axios.post(serverUrl + '/api/order/list', {}, { withCredentials: true })
      setOrders(result.data.reverse())
    } catch (error) {
      console.log(error)
    }
  }

  const statusHandler = async (e, orderId) => {
    try {
      const result = await axios.post(serverUrl + '/api/order/status', { orderId, status: e.target.value }, { withCredentials: true })
      if (result.data) await fetchAllOrders()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#374151] text-gray-100'>
      <Nav />
      <div className='flex w-full'>
        <Sidebar />

        <div className='w-[82%] lg:ml-[320px] md:ml-[230px] mt-[70px] flex flex-col gap-6 py-8 px-6 md:px-12'>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "1.8rem",
            fontWeight: "700",
            background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fcd34d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 10px rgba(251,191,36,0.5)"
          }} className='mb-6'>
            All Orders List
          </h1>

          {orders.length > 0 ? orders.map((order, index) => (
            <div key={index} className='w-full bg-gray-800 rounded-xl flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 md:p-6 gap-4 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105'>
              
              <SiEbox className='w-[60px] h-[60px] text-white p-2 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500' />

              <div className='flex-1 flex flex-col gap-2 text-gray-200 text-sm sm:text-base'>
                <div className='flex flex-wrap gap-1 font-medium'>
                  {order.items.map((item, idx) => (
                    <span key={idx}>
                      {item.name.toUpperCase()} * {item.quantity} <span>{item.size}</span>{idx < order.items.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>

                <div className='text-gray-400 text-sm sm:text-base'>
                  <p>{order.address.firstName} {order.address.lastName}</p>
                  <p>{order.address.street}, {order.address.city}, {order.address.state}, {order.address.country} - {order.address.pinCode}</p>
                  <p>{order.address.phone}</p>
                </div>
              </div>

              <div className='text-gray-200 text-sm sm:text-base flex flex-col gap-1'>
                <p>Items: {order.items.length}</p>
                <p>Method: {order.paymentMethod}</p>
                <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                <p className='text-lg font-semibold'>₹ {order.amount}</p>
              </div>

              <select
                value={order.status}
                onChange={(e) => statusHandler(e, order._id)}
                className='px-3 py-2 rounded-lg border-none text-gray-900 font-semibold shadow-md cursor-pointer transition-transform hover:scale-105'
                style={{
                  background: (() => {
                    switch (order.status) {
                      case "Order Placed":
                        return "linear-gradient(to right, #38b2ac, #81e6d9)"; // teal
                      case "Packing":
                        return "linear-gradient(to right, #f6ad55, #fbd38d)"; // orange
                      case "Shipped":
                        return "linear-gradient(to right, #63b3ed, #90cdf4)"; // blue
                      case "Out for delivery":
                        return "linear-gradient(to right, #ed64a6, #fbb6ce)"; // pink
                      case "Delivered":
                        return "linear-gradient(to right, #68d391, #9ae6b4)"; // green
                      default:
                        return "linear-gradient(to right, #a0aec0, #e2e8f0)"; // gray
                    }
                  })(),
                }}
              >
                <option value="Order Placed" className="text-black">Order Placed</option>
                <option value="Packing" className="text-black">Packing</option>
                <option value="Shipped" className="text-black">Shipped</option>
                <option value="Out for delivery" className="text-black">Out for delivery</option>
                <option value="Delivered" className="text-black">Delivered</option>
              </select>

            </div>
          )) : (
            <div className='text-gray-400 text-lg'>No orders available.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Orders
