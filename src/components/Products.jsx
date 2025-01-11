import React, { useRef, useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react'



function Products() {
    const data = [
        {title: "Arqitel" , desc:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate." , live:true , case:false},
        {title: "TTR" , desc:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design." , live:true , case:false},
        {title: "YIR 2022" , desc:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate." , live:true , case:false},
        {title: "Yahoo!" , desc:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop." , live:true , case:true}
    ]
    const videos = [
      "https://antra77.github.io/Refokus-Clone/assets/arqitel-94yUcBU8.mp4",
      "https://refokuzzz-cloned.vercel.app/assets/yahoo--FL9ySUE.webm",
      "https://refokuzzz-cloned.vercel.app/assets/yir-IiuY-KSG.webm",
      "https://refokuzzz-cloned.vercel.app/assets/ttr-C2lTQdRZ.webm"
    ];


    const [pos , setpos] = useState(46)

    const mover = (val)=>{
      setpos(val*23)
    }
    
  return (
    <div  className='relative max-w-screen-xl mt-10 mx-auto '>
     {data.map((item,index)=>(
        <Product index={index} mover={mover} title={item.title} desc={item.desc} live={item.live} casee={item.case} key={index}/>
     ))}
     <div className='w-full top-0 h-[23rem]  pointer-events-none absolute'>
      <motion.div 
        initial={{y:pos , x: "-50%"}}
        animate={{y:pos+"rem"}} 
        transition={{ease: [0.34, 1.56, 0.64, 1] , duration: .5}}
      
      className='videos w-[34rem] h-full rounded-xl absolute left-[40%] overflow-hidden '>
         {videos.map((item, index)=>(
           <motion.div  animate={{y:-pos+"rem"}}   transition={{ease: [0.34, 1.56, 0.64, 1] , duration: .5}} className='w-full h-full'>
            <video muted loop  preload="auto" autoPlay   src={item}></video>
           </motion.div>
         ))}
          {/* <motion.div animate={{y:-pos+"rem"}} className='w-full h-full bg-red-100'></motion.div>
          <motion.div animate={{y:-pos+"rem"}} className='w-full h-full bg-red-700'></motion.div>
          <motion.div animate={{y:-pos+"rem"}} className='w-full h-full bg-red-600'></motion.div>
          <motion.div animate={{y:-pos+"rem"}} className='w-full h-full bg-red-500'></motion.div> */}
        
      </motion.div>
     </div>
    </div>
  )
}

export default Products

