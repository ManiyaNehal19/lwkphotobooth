"use client"
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import Image from 'next/image'
import { useRef } from 'react'
import bow_red from "@/assets/Untitled design (10).png"
import bow_silver from "@/assets/Untitled design (11).png"
import Timer from './Timer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import { json } from 'stream/consumers'
const WebcamCapture = () => {
const webcamRef = useRef<Webcam>(null);
const [filter, setfilter] = useState("none");
const [selected, setselected] = useState("Normal");
const [timer, settimer] = useState(false);
// const image_array= [];
const [timerActive, setTimerActive] = useState(false);
const [countdown, setCountdown] = useState(0);
const [shotsTaken, setShotsTaken] = useState(0);
const [photos, setPhotos] = useState<string[]>([]);
const router = useRouter();
// const [showCountdown, setShowCountdown] = useState(true);
const capture = () => {
 // base64 image, you can save it or display it
setPhotos([]);       // reset old photos
setShotsTaken(0);
setCountdown(3);     // start first countdown
setTimerActive(true);
settimer(true);
  };
  useEffect(()=>{
    if(!timerActive) return;
    if(countdown>0){
      const time = setTimeout(() => {
        setCountdown(countdown-1)
      }, 1000);
      return ()=>clearTimeout(time);
    }
    if(countdown===0 && timerActive){

      const pause = setTimeout(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) setPhotos(prev => [...prev, imageSrc]);

        if (shotsTaken < 2) {
        setShotsTaken(prev => prev + 1);
        setCountdown(3);
      } else {
        setTimerActive(false);
      }
      }, 1500);

      return () => clearTimeout(pause);
    }
  },[timerActive, countdown, shotsTaken])
  if (photos.length === 3) {
  localStorage.setItem("photos", JSON.stringify(photos));
}
useEffect(()=>{
  if(photos.length===3){
  router.push("/photostrip-preview")
  }
},[photos.length])
  return (
    <>
    
    
    <div className="flex flex-col w-full items-center">
      <div className='w-full h-3/5 flex items-center justify-center'>
        <Webcam
        mirrored={true}
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="rounded-2xl shadow-lg"
        style={{filter}}
      />
      
  <>
    
        {timer && (<Timer key={countdown} countdown={countdown} />)}
      
  </>

      {/* <Image src={bow_red} alt='bow red' height={150} width={150} className='absolute top-20 left-95 -rotate-20'/>
      <Image src={bow_silver} alt='bow silver' height={150} width={150} className=' absolute bottom-13 right-90 '/> */}

      </div>
      
      <button
        onClick={capture}
        disabled={timer}
        className={`${timer?"cursor-not-allowed  bg-gray-400":" hover:bg-[#b12626] bg-[#da2f30] hover:cursor-pointer "} mt-4 px-4 py-2 w-3/4 rounded-xl  text-white`}
        
      >
        Capture Photo
      </button>
      <div className='w-3/4 flex justify-between'>
        <button className={`${selected==="Normal"?"bg-[#da2f30]":"bg-gray-500 hover:bg-gray-700"} text-white rounded-lg w-1/5 p-2 mt-2 hover:cursor-pointer `} onClick={()=>{
        setfilter("none")
        setselected("Normal");
        }}>Lwk Normal</button>
        <button className={`${selected==="GrayScale"?"bg-[#da2f30]":"bg-gray-500 hover:bg-gray-700"} text-white rounded-lg w-1/5 p-2 mt-2 hover:cursor-pointer `} onClick={()=>{
        setfilter("grayscale(100%)")
        setselected("GrayScale");
        }}>Lwk Gray</button>
        <button className={`${selected==="Funky"?"bg-[#da2f30]":"bg-gray-500 hover:bg-gray-700"} text-white rounded-lg w-1/5 p-2 mt-2 hover:cursor-pointer `} onClick={()=>{
        setfilter("hue-rotate(90deg)")
        setselected("Funky");
        }}>Lwk Funky</button>
        <button className={`${selected==="Sepia"?"bg-[#da2f30]":"bg-gray-500 hover:bg-gray-700"} text-white rounded-lg w-1/5 p-2 mt-2 hover:cursor-pointer `} onClick={()=>
        {
        setfilter("sepia(80%)")
        setselected("Sepia");
        }}>Lwk Vintage</button>


      </div>
    </div>
  </>
  )
}
export default WebcamCapture