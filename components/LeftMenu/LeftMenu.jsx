import React from 'react'
import FileUpload from '../DropZone/FileUpload'

const LeftMenu = () => {
  return (
    <div className=" h-100 w-100">

      <div className='rounded-xl h-[510px]'>
        <div className="p-2 mt-2 ml-2 font-sans text-[1.125rem] leading-[1.5rem] tracking-[0px] font-semibold">
          Add Media
        </div>
        <FileUpload />
      </div>
    </div>
  )
}

export default LeftMenu