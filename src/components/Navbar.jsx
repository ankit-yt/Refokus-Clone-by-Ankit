import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl flex justify-between border-b-[0.1px] border-zinc-700 py-6 gap-20 mx-auto '>
        <div className='flex gap-20 '>
          <img className=' w-20 ' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
          <div className='flex font-["satoshi_regular] items-center justify-center gap-10'>
              {["Home","Work","Culture" , "" ,  "News"].map((item,index)=>(
                 item.length === 0 ? <span className='inline-block w-[2px] h-4 bg-zinc-500'></span> : <a href="" className='flex text-sm items-center '>{index === 1 && <span style={{ boxShadow: '0px 0px 0.55em rgb(0, 255, 25)' }}
                 className='bg-green-500 w-1 h-1 mr-1 inline-block rounded-full'></span>}{item}</a>

              ))}
          </div>
        </div>
        <Button/>
      
    </div>
  )
}

export default Navbar
