

import React from 'react'

function Title({ text1, text2 }) {
  return (
    <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center
                   bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
                   text-transparent bg-clip-text'>
      {text1} {text2}
    </h2>
  )
}

export default Title





