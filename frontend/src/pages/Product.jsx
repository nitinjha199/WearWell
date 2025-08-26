
import React from 'react'
import LatestCollection from '../component/LatestCollection'
import BestSeller from '../component/BestSeller'

function Product() {
  return (
    <div className='w-full min-h-[100vh] bg-gray-900 text-gray-200 flex flex-col items-center py-10 gap-16'>
        <LatestCollection />
        <BestSeller />
    </div>
  )
}

export default Product



