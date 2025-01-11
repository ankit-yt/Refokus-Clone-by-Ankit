import React from 'react'

function Footer() {
  return (
    <div className='w-full mt-28  '>
        <div className='max-w-screen-xl mx-auto flex '>
            <div className='basis-5/6 '>
                <h1 className='text-[10.5rem] font-medium leading-none tracking-tight'>Refokus.</h1>
                {["Privacy Policy" ,"Cookie Policy" ,"Impressum" , "Terms"].map((item, index)=>(
                    <a className='text-sm  text-zinc-500 py-5 px-3 inline-block' href="#" key={index}>{item}</a>
                ))}
            </div>
            <div className='basis-1/2 flex justify-between'>
                <div className='flex gap-14'>
                <div className='text-sm text-zinc-500'>
                    <h4 className='mb-10'>Social</h4>
                    {["Instagram", "Twitter (X?)" ,"LinkedIn"].map((item,index)=>(
                        <a className='flex py-1' href="#" key={index}>{item}</a>
                    ))}
                </div>
                <div className='text-sm text-zinc-500'>
                    <h4 className='mb-10'>Social</h4>
                    {["Home","Work","Careers","Contact"].map((item,index)=>(
                        <a className='flex text-zinc-300 py-1' href="#" key={index}>{item}</a>
                    ))}
                </div>
                </div>
                <div className=''>
                    <p className='text-right mt-10 text-sm'>Refokus is a pioneering digital <br/> agency driven by design and <br/> empowered by technology  </p>
                    <img className='w-28 mt-5 ml-auto' src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
