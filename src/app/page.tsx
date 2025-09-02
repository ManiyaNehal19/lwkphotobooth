"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import curtain from "@/assets/urt.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { div } from "framer-motion/client";

export default function Home() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      router.push("/booth");
    }, 1200); 
  };

  return (
    <div className="w-full flex flex-col h-full justify-center items-center overflow-hidden">
      {/* <div className="w-9/10 h-9/10 relative overflow-hidden"> */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: open ? "-100%" : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          // className=" w-full h-full z-30"
          className="w-9/10 h-full relative overflow-hidden"

        >
          <Image src={curtain} alt="Curtain" className="w-full h-full object-cover" />
        </motion.div>
      {/* </div> */}

     
        <button
          onClick={handleClick}
          className="p-3 w-9/10 bg-[#da2f30] rounded-full m-3 text-[#dedadc] hover:bg-[#b12626] hover:cursor-pointer font-semibold"
        >
          Continue
        </button>
      
    </div>
  );
}
