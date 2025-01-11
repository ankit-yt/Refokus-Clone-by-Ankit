import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full   '>
        <div className=' mx-auto max-w-screen-xl py-20 flex gap-3 '>
            <Card width={"basis-1/3"} start={false}/>
            <Card width={"basis-2/3"} start={true} hover={true}/>
        </div>
      
    </div>
  )
}

export default Cards
