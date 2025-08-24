import React from 'react'
import Image from 'next/image'
import curtain from "@/assets/Untitled design (9).png"
const Booth = () => {
  return (

    
       <Image src={curtain} alt='Curtain'
      
       className='h-full w-full object-contain'
       />

  )
}

export default Booth