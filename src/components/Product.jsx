import React from 'react'
import Button from './Button'

function Product({title , desc , index , mover , live , casee}) {
  return (
    <div onMouseEnter={()=>{mover(index)}} className=' w-full flex h-[23rem] text-white justify-between items-center py-16 px-3'>
        <h1 className='text-5xl font-medium '>{title}</h1>
        <div className='w-1/3'>
            <p className='mb-10 '>{desc}</p>
            <div className='flex gap-4'>
            < Button title={"live"}/>
            {casee && <Button title={"Case study"}/>}
            </div>
        </div>
      
    </div>
  )
}

export default Product
