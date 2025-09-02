
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
// import Link from "next/link";
import "./globals.css";
// import bg_image from "@/assets/bg_image.png"
// import { motion } from "framer-motion";
import Image from 'next/image'
// import curtain from "@/assets/urt.png"
import Logo from "@/assets/LWK PhotoBooth (2).png"

import Side from "@/assets/Untitled design (8).png"
// import { useState } from "react";

const leagueSpartan = League_Spartan({
   weight: ["400", "500", "700"], // choose weights you need
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LwkPhotoBooth",
  description: "Click your Lwk!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} w-full h-screen bg-cover bg-center flex flex-col items-center`}
        
      >
         <div className="flex  w-3/5 justify-center items-center">
          <Image src={Logo} alt="Logo" height={60} />
        </div>
        {/*
        <div className="h-full w-full flex justify-center items-center">
            <Image className="w-1/5 h-full" src={Side} alt="Side Image"/>
         
          <div className="w-3/5 h-full overflow-y-auto">
            {children}
          </div>
          
          
            <Image className="w-1/5 h-full scale-x-[-1]" src={Side} alt="Side Image"/>
          

        
         </div> */}
         <div className="h-full w-full flex justify-center items-stretch">

  <div className="w-1/5 flex justify-center items-center">
    <Image className="h-full w-auto object-contain" src={Side} alt="Side Image"/>
  </div>


  <div className="w-3/5 h-9/10 overflow-scroll">
    {children}
  </div>

  <div className="w-1/5 flex justify-center items-center">
    <Image className="h-full w-auto object-contain scale-x-[-1]" src={Side} alt="Side Image"/>
  </div>
</div>

        
       
      </body>
    </html>
  );
}
