import React from 'react'

const TopContainer = () => {
  return (
      <div className='px-3'>
        <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-thin'>Enhancify</h3>

        <div className='w-full py-10 md:py-14 flex flex-col items-end justify-center'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin text-end'>Ai Image Enhancer</h1>
            <h3 className='text-xs sm:text-lg md:text-xl lg:text-2xl font-thin pt-1 md:pt-2 text-end'>Upload Your Image, Let AI Do The Rest</h3>
        </div>
      </div>
  )
}

export default TopContainer