

import React, { useContext, useEffect, useState } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

function Home() {
  const [totalProducts, setTotalProducts] = useState(0)
  const [totalOrders, setTotalOrders] = useState(0)

  const { serverUrl } = useContext(authDataContext)

  const fetchCounts = async () => {
    try {
      const products = await axios.get(`${serverUrl}/api/product/list`, {}, { withCredentials: true })
      setTotalProducts(products.data.length)

      const orders = await axios.post(`${serverUrl}/api/order/list`, {}, { withCredentials: true })
      setTotalOrders(orders.data.length)
    } catch (err) {
      console.error("Failed to fetch counts", err)
    }
  }

  useEffect(() => {
    fetchCounts()
  }, [])

  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-br from-[#1f2937] via-[#374151] to-[#4b5563] text-gray-100 relative'>
      <Nav />
      <Sidebar />

      <div className='w-[70vw] h-[100vh] absolute left-[25%] flex flex-col gap-10 py-24'>
        <h1 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500'>
          WearWell Admin Panel
        </h1>

        <div className='flex flex-col md:flex-row items-start md:items-stretch justify-start gap-12'>
          {/* Total Products Card */}
          <div className='bg-gray-800 border border-gray-700 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-4 md:text-2xl text-lg w-[400px] max-w-[90%] h-[200px]'>
            <span>Total No. of Products:</span>
            <span className='bg-gray-900 border border-gray-600 rounded-2xl px-6 py-2 flex items-center justify-center'>
              {totalProducts}
            </span>
          </div>

          {/* Total Orders Card */}
          <div className='bg-gray-800 border border-gray-700 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-4 md:text-2xl text-lg w-[400px] max-w-[90%] h-[200px]'>
            <span>Total No. of Orders:</span>
            <span className='bg-gray-900 border border-gray-600 rounded-2xl px-6 py-2 flex items-center justify-center'>
              {totalOrders}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
