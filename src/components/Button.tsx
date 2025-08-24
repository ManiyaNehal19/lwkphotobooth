import React from 'react'
import Link from 'next/link'
type button_type = {
place:string,
link_href:string
}
const Button = ({place, link_href}:button_type) => {
  return (
   
        <Link href={link_href} className='w-full'>
        <button className='p-3 w-full bg-[#da2f30] rounded-full m-3 text-[#dedadc] hover:bg-[#b12626] hover:cursor-pointer font-semibold '>{place}</button>
        </Link>
  )
}

export default Button