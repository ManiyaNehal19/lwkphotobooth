"use client"
import React, { useState, useEffect, useRef } from "react";

const Result = () => {
  const [photostrip, setPhotostrip] = useState<any>(null);
  const [imagesArray, setImagesArray] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
  const photostripLS = localStorage.getItem("photostripSelected");
  const imagesArrayLS = localStorage.getItem("photos");


  if (photostripLS && imagesArrayLS) {
    try {
      const parsedPhotostrip = JSON.parse(photostripLS);
      const parsedImages = JSON.parse(imagesArrayLS);

      // console.log("Parsed photostrip:", parsedPhotostrip);
      // console.log("Parsed images:", parsedImages);

      setPhotostrip(parsedPhotostrip);
      setImagesArray(parsedImages);
    } catch (err) {
      console.error("JSON parse error:", err);
    }
  }
}, []);


useEffect(() => {
  if (!photostrip || imagesArray.length === 0 || !canvasRef.current) return;

  const ctx = canvasRef.current.getContext("2d");
  if (!ctx) return;

  const width = 192;   
  const height = 576; 
  canvasRef.current.width = width;
  canvasRef.current.height = height;
  const stripImg = new Image();
  stripImg.src = photostrip.src;
  stripImg.onload = () => {
    ctx.drawImage(stripImg, 0, 0, width, height);

    const slots = [
      { x: 15, y: 35, w: 163, h: 125 },   
      { x: 13, y: 190, w: 163, h: 125 },  
      { x: 15, y: 346, w: 163, h: 125 },   
    ];

    imagesArray.forEach((photo, i) => {
      if (!slots[i]) return; 
      const img = new Image();
      img.src = photo;
      img.onload = () => {
        const { x, y, w, h } = slots[i];
        ctx.drawImage(img, x, y, w, h);
      };
    });
  };
}, [photostrip, imagesArray]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const dataUrl = canvasRef.current.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "photostrip.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <canvas ref={canvasRef} className="border shadow-lg" />
      <button
        onClick={handleDownload}
        className="mt-4 px-4 py-2 bg-[#da2f30] text-white rounded-lg hover:bg-[#b12626] cursor-pointer"
      >
        Download Photostrip
      </button>
    </div>
  );
};

export default Result;
