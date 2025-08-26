
import React from 'react'

function NewLetterBox() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // you can add API call or logic here later
    console.log("Subscribed!");
  };

  return (
    <div className='w-full h-[40vh] bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] flex items-center justify-center flex-col gap-4 p-4'>
      {/* Title */}
      <p className='md:text-3xl text-xl text-gray-800 font-semibold text-center'>
        Subscribe now & get <span className="text-pink-500">20% off</span>
      </p>

      {/* Subtext */}
      <p className='md:text-lg text-sm text-gray-600 font-medium text-center max-w-[600px]'>
        Subscribe now and enjoy exclusive savings, special deals, and early access to new collections.
      </p>

      {/* Form */}
      <form 
        onSubmit={handleSubmit} 
        className='w-full flex items-center justify-center gap-3 mt-4 px-4 flex-wrap'
      >
        <input 
          type="email" 
          placeholder='Enter your email' 
          className='w-[600px] max-w-[80%] h-[45px] px-5 rounded-full border border-gray-300 
                     focus:ring-2 focus:ring-pink-400 focus:outline-none text-gray-800 shadow-sm'
          required 
        />
        <button 
          type='submit' 
          className='bg-pink-500 hover:bg-pink-600 transition text-white font-medium px-6 py-2 
                     rounded-full shadow-md'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewLetterBox
