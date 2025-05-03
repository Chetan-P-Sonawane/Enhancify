import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  console.log(props.isPortrait);
  return (
    <div className=' mt-10   flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-6 lg:gap-16 xl:gap-24 w-full '>

        {/*  Original Image preview  */}
  {

    props.uploadImage && (

      <div className=' rounded-xl border-4 md:border-6 border-dashed border-[#d194ef] transition-all overflow-hidden flex flex-col'>

        <h2 className=' text-sm md:text-base tracking-wide text-center py-3 text-white font-bold bg-[#d194ef]'>Original</h2>

        { props.uploadImage ?
          (
          <div className='flex items-center justify-center'>
            <img src={props.uploadImage}
              alt=""
                className={`${props.isPortrait ? "md:h-86 lg:h-86 xl:h-[25vw] " : "md:h-60 lg:h-[23vw]"} w-auto object-cover`} />
          </div>
          )
          :
          (
            <div className='h-full py-2 text-sm md:text-base font-thin tracking-wide bg-[#F1F1F1] flex items-center justify-center text-center'>
              No Image Selected
            </div>
          )
        }

      </div>
    )
  }

        {/*  Enhanced Image preview  */}
  {

    props.uploadImage && (

      <div className='rounded-xl border-4 md:border-6 border-dashed border-[#d194ef]  transition-all overflow-hidden flex flex-col'>

        <h2 className='w-full md:text-base tracking-wide text-center py-3 font-bold text-white bg-[#d194ef]'>Enhanced</h2>

        {props.uploadImage && !props.loading &&
          (
           <div className='flex items-center justify-center'>
            <img src={props.uploadImage}
               alt=""
              className={`${props.isPortrait ? "md:h-86 lg:h-86 xl:h-[25vw]" : "md:h-60 lg:h-[23vw] "} w-auto object-cover`} />
            </div>
          )
        }
        { props.loading ?
          <Loading />
          :
          ( props.enhancedImage && (
            <div className='h-full py-2 text-sm md:text-base font-thin tracking-wide bg-[#F1F1F1] flex items-center justify-center text-center'>
              No Enhnaced Image
            </div>)
          )
        }

      </div>
    )
  }
    </div>
  )
}

export default ImagePreview