import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  return (
    <div className=' mt-10 md:px-18 flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-24 w-full md:h-[61vh] '>

        {/*  Original Image preview  */}
      <div className=' w-full h-full overflow-hidden flex flex-col'>

        <h2 className=' text-sm md:text-xl font-thin text-center py-2 bg-[#EDC9FF]'>Original</h2>

        { props.uploadImage ?
          (
          <div className='flex items-center justify-center'>
            <img src={props.uploadImage}
              alt="No Image Selected"
              className='w-full md:h-109 object-cover' />
          </div>
          )
          :
          (
            <div className='h-full py-2 text-sm md:text-lg font-thin bg-[#F1F1F1] flex items-center justify-center'>
              No Image Selected
            </div>
          )
        }

      </div>

        {/*  Enhanced Image preview  */}
      <div className='w-full h-full overflow-hidden flex flex-col'>

        <h2 className='w-full text-sm md:text-xl font-thin text-center py-2 bg-[#EDC9FF]'>Enhanced</h2>

        { props.enhancedImage && !props.loading &&
          (
           <div className='flex items-center justify-center'>
              <img src="https://images.unsplash.com/photo-1744566917600-57a72a02a6d8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt="No Image Selected"
              className='w-full md:h-109 object-cover' />
            </div>
          )
        }

        { props.loading ?
          <Loading />
          :
          (
            <div className='h-full py-2 text-sm md:text-lg font-thin bg-[#F1F1F1] flex items-center justify-center'>
              No Image Selected
            </div>
          )
        }

      </div>
    </div>
  )
}

export default ImagePreview