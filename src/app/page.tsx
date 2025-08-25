"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import curtain from "@/assets/urt.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <>
      <div className="w-full h-6/7 relative overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: open ? "-100%" : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className=" w-full h-full z-30"
        >
          <Image src={curtain} alt="Curtain" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <div className="w-full">
        <button
          onClick={handleClick}
          className="p-3 w-full bg-[#da2f30] rounded-full m-3 text-[#dedadc] hover:bg-[#b12626] hover:cursor-pointer font-semibold"
        >
          Continue
        </button>
      </div>
    </>
  );
}
