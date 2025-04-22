import React from 'react'

const ImageUpload = (props) => {
    
    const ShowImageHandler = (e) =>{
       const file = e.target.files[0];
       if(file){
           props.UploadImageHandler(file);
       }
    }

    return (
     <div className='bg-[#F1F1F1] p-2 rounded-xl md:rounded-2xl'>
        <label htmlFor="fileInput" className='select-none block border-dashed leading-none py-3 px-4 md:py-4 md:px-7 rounded-xl md:rounded-2xl cursor-pointer border-2 hover:border-[#d194ef] border-[#EDC9FF] transition-all'>
            <input type="file" id="fileInput" className='hidden' onChange={ShowImageHandler} />
            <span className='text-xs md:text-lg font-thin md:font-regular'>Browser or Drag & drop to Upload</span>
        </label>
     </div>
    )
}

export default ImageUpload