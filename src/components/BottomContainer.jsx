import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'

const BottomContainer = () => {
  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setloading] = useState(false)

    const UploadImageHandler = (file) => {
        setUploadImage(URL.createObjectURL(file));
        setloading(true);
        
    }

  return (
    <div className='w-full '>
        <div className='w-full pt-10 pb-8 px-3 md:px-0 md:py-12 rounded-2xl md:rounded-4xl flex flex-col items-center justify-center bg-[#FFDAAA]'>
                 
                 <ImageUpload
                    UploadImageHandler={UploadImageHandler}
                  />

                 <ImagePreview
                   loading={loading}
                   uploadImage={uploadImage}
                   enhancedImage={enhancedImage}
                  />
        </div>
    </div>
  )
}

export default BottomContainer