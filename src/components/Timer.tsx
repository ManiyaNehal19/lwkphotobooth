import React from 'react'
import { motion } from 'framer-motion'
type countdown_type={
    countdown:number |string
}
const Timer = ({countdown}:countdown_type) => {
  if(countdown===0){
    countdown = "Lwk Clicked"
  };
  const type = typeof(countdown);
  return (
    <motion.span
          key={countdown} 
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`${type==="string"?"text-white  text-3xl font-semibold absolute top-40":"text-white text-9xl font-bold absolute"}`}
        >
          {countdown}
        </motion.span>

  )
}

export default Timer