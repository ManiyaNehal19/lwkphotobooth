"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Link from 'next/link'
const TemplateCard = ({url}:{url:StaticImageData}) => {
    const onHandle = (selected_photostrip:StaticImageData)=>{
        localStorage.setItem("photostripSelected", JSON.stringify(selected_photostrip));
    }
  return (
    <div className='bg-[] flex items-center justify-center flex-col border border-0.5 border-[#b12626] p-2 '>
        <Image src={url} alt='Photostrip' height={150} className='w-auto'/>
        <Link href={"/result"} >
        <button 
        onClick={()=>onHandle(url)}
        className='rounded-lg bg-[#da2f30] cursor-pointer p-3 m-1 hover:bg-[#b12626] px-10'>
            Select
        </button>
        </Link>
    
    </div>
  )
}

export default TemplateCard