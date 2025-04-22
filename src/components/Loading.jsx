import React from 'react'

const Loading = () => {
  return (
      <div className='h-full py-10 bg-[#F1F1F1] flex items-center justify-center'>
          <div className=' animate-spin border-3 border-t-transparent border-[#FFDAAA] w-6 h-6 md:w-10 md:h-10 rounded-full'></div>
      </div>
  )
}

export default Loading