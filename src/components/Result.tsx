import { div } from 'framer-motion/client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
const Result = () => {
    const [photostrip, setphotostrip] = useState();
    const [images_array, setimages_array] = useState();
    useEffect(() => {
        const photostrip_ls= localStorage.getItem("photostripSelected");
        const images_array_ls =localStorage.getItem("photos");
        if(photostrip_ls&&images_array_ls){
        setphotostrip(JSON.parse(photostrip_ls));
        setimages_array(JSON.parse(images_array_ls));
        console.log(typeof(photostrip), typeof(images_array))
        }
    }, [])
    
   
  return (
    <div>
        {/* {images_arr.map((src, idx) => (
        <Image key={idx} src={src} alt={`Screenshot ${idx}`} />
      ))} */}
      Result
    </div>
  )
}

export default Result