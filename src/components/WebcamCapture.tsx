"use client"
import React, { useState } from 'react'
import Webcam from 'react-webcam'
import { useRef } from 'react'
const WebcamCapture = () => {
const webcamRef = useRef<Webcam>(null);
const capture = () => {
const imageSrc = webcamRef.current?.getScreenshot();
console.log(imageSrc); // base64 image, you can save it or display it
  };
  const [filter, setfilter] = useState("none");
  const [selected, setselected] = useState("Normal");
  return (
    <div className="flex flex-col w-full items-center">
      <Webcam
        mirrored={true}
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="rounded-2xl shadow-lg"
        style={{filter}}
      />
      <button
        onClick={capture}
        className="mt-4 px-4 py-2 w-3/4 rounded-xl bg-[#da2f30] hover:bg-[#b12626] hover:cursor-pointer text-white"
      >
        Capture Photo
      </button>
      <div className='w-3/4 flex justify-between'>
        <button className={`${selected==="Normal"?"bg-[#da2f30]":"bg-gray-500 hover:bg-gray-700"} text-white rounded-lg w-1/5 p-3 mt-2 hover:cursor-pointer `} onClick={()=>{
        setfilter("none")
        setselected("Normal");
        }}>Lwk Normal</button>
        <button className={`${selected==="GrayScale"?"bg-[#da2f30]":"bg-gray-500 hover:bg-gray-700"} text-white rounded-lg w-1/5 p-3 mt-2 hover:cursor-pointer `} onClick={()=>{
        setfilter("grayscale(100%)")
        setselected("GrayScale");
        }}>Lwk Gray</button>
        <button className={`${selected==="Funky"?"bg-[#da2f30]":"bg-gray-500 hover:bg-gray-700"} text-white rounded-lg w-1/5 p-3 mt-2 hover:cursor-pointer `} onClick={()=>{
        setfilter("hue-rotate(90deg)")
        setselected("Funky");
        }}>Lwk Funky</button>
        <button className={`${selected==="Sepia"?"bg-[#da2f30]":"bg-gray-500 hover:bg-gray-700"} text-white rounded-lg w-1/5 p-3 mt-2 hover:cursor-pointer `} onClick={()=>
        {
        setfilter("sepia(80%)")
        setselected("Sepia");
        }}>Lwk Vintage</button>


      </div>
    </div>
  
  )
}
export default WebcamCapture