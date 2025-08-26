
import React from 'react'

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="animate-spin h-10 w-10 rounded-full 
                      border-4 border-t-pink-500 border-b-pink-300 
                      border-l-transparent border-r-transparent shadow-lg">
      </div>
    </div>
  )
}

export default Loading
