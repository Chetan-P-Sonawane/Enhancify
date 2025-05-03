import React, { useEffect, useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI } from '../utils/enhancedImageAPI'

const BottomContainer = () => {
  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setloading] = useState(false)
  const [isPortrait, setIsportrait] = useState(false);

  useEffect(() => {

    if(!uploadImage) return

    const img = new Image();
    img.src = uploadImage;
    img.onload = () => {
      setIsportrait(img.naturalHeight > img.naturalWidth);
    }
    console.log("Updated isPortrait:", isPortrait);

  }, [uploadImage]);

    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setloading(true);

        try{
          const enhancedURL = await enhancedImageAPI(file);
          setEnhancedImage(enhancedURL);
          setloading(false);
        }catch(error){
          console.log(error);
          alert("Error while enhancing the image. Please try again later")
        }
    }

  return (
    <div className='w-full '>
      <div className='min-h-[50vh] px-3 sm:px-6 md:px-6 lg:px-16 xl:px-24 w-full pt-10 pb-8  md:py-12 rounded-2xl md:rounded-4xl flex flex-col items-center justify-center bg-[#FFDAAA]'>
                 
                 <ImageUpload
                    UploadImageHandler={UploadImageHandler}
                  />

                 <ImagePreview
                   isPortrait={isPortrait}
                   loading={loading}
                   uploadImage={uploadImage}
                   enhancedImage={enhancedImage?.image}
                  />
        </div>
    </div>
  )
}

export default BottomContainer