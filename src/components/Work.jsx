import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {
   const [images , setimages] = useState([
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png" , top:"50%" , left:"50%" , isActive:false},
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png" , top:"53%" , left:"46%" , isActive:false},
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png" , top:"46%" , left:"53%" , isActive:false},
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png" , top:"50%" , left:"50%" , isActive:false},
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png" , top:"45%" , left:"45%" , isActive:false},
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png" , top:"63%" , left:"54%" , isActive:false}
])

const { scrollYProgress } = useScroll()

useMotionValueEvent(scrollYProgress, "change", (latest) => {
  function showimages(arr){
    setimages(prev=>(
      prev.map((item,index)=>(
        arr.indexOf(index) === -1 ? {...item , isActive:false} : {...item , isActive:true}
      ))
    ))
  }

  switch(Math.floor(latest*100)){
    case 0 :
     showimages([])
      break;
    case 1 :
     showimages([0])
      break;
    case 2 :
      showimages([0,1])
      break;
    case 3 :
      showimages([0,1,2])
      break;
    case 4 :
      showimages([0,1,2,3])
      break;
    case 5 :
      showimages([0,1,2,3,4])
      break;
    case 6 :
      showimages([0,1,2,3,4,5])
      break;
    case 7 :
      showimages([0,1,2,3,4,5,6])
      break;
  }
})

  return (
    <div className='w-full '>
        <div className='relative max-w-screen-xl  mx-auto '>
              <div className='text-[30vw] leading-none tracking-tight font-medium  text-center  '>work</div>
              <div className=' w-full h-full absolute top-0 '>
                    {images.map((item,index)=>(
                       item.isActive &&  <img style={{top:item.top , left: item.left}} className='w-60 absolute rounded-lg -translate-x-[50%] -translate-y-[50%]' src={item.url} alt="" />
                    ))}
              </div>
        </div>
      
    </div>
  )
}

export default Work
