import React from 'react'
import pic_1 from "@/assets/photostrips/Untitled design (10).png"
import pic_2 from "@/assets/photostrips/Untitled design (11).png"
import pic_3 from "@/assets/photostrips/Untitled design (12).png"
import pic_4 from "@/assets/photostrips/Untitled design (13).png"
import pic_5 from "@/assets/photostrips/Untitled design (16).png"
import pic_6 from "@/assets/photostrips/Untitled design (17).png"
import pic_7 from "@/assets/photostrips/Untitled design (18).png"
import pic_8 from "@/assets/photostrips/Untitled design (19).png"
import pic_9 from "@/assets/photostrips/Untitled design (20).png"

import TemplateCard from './TemplateCard'

const url_pic = [pic_1, pic_2, pic_3, pic_4, pic_5, pic_6,pic_7, pic_8, pic_9];
const StripPreview = () => {
  return (
    <div className=' gap-3 grid grid-cols-3'>
        {url_pic.map((url_strip, index) => (
            <TemplateCard key={index} url={url_strip}/>
        ))}
    </div>
  )
}

export default StripPreview