import React from 'react'
import { IoIosReturnRight } from "react-icons/io";


function Button({title = "Start a Project"}) {
  return (
    <div className='w-40 flex justify-between items-center text-sm text-black font-semibold rounded-full  px-4 py-2 bg-zinc-100'>
        {title}
      <IoIosReturnRight />
    </div>
  )
}

export default Button
