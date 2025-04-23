import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  return (
    <div className=' mt-10 px-3 sm:px-6 md:px-6 lg:px-16 xl:px-24 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-6 lg:gap-16 xl:gap-24 w-full md:h-[61vh] '>

        {/*  Original Image preview  */}
      <div className=' w-full h-full overflow-hidden flex flex-col'>

        <h2 className=' text-sm md:text-xl font-thin text-center py-2 bg-[#EDC9FF]'>Original</h2>

        { props.uploadImage ?
          (
          <div className='flex items-center justify-center'>
            <img src={props.uploadImage}
              alt=""
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
            <img src={props.enhancedImage}
               alt=""
              className='w-full md:h-109 object-cover' />
            </div>
          )
        }

        { props.loading ?
          <Loading />
          :
          ( !props.enhancedImage && (
            <div className='h-full py-2 text-sm md:text-lg font-thin bg-[#F1F1F1] flex items-center justify-center'>
              No Enhnaced Image
            </div>)
          )
        }

      </div>
    </div>
  )
}

export default ImagePreview