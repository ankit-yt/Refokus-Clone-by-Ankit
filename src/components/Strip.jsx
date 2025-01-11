import React from 'react'

function Strip({url , num}) {
  return (
    <div className='w-[20%] flex justify-between px-3 py-3 border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-500'>
        <img src={url} alt="" />
        <span className='text-sm font-semibold'>{num}</span>
      
    </div>
  )
}

export default Strip
