"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

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
        { x: 15, y: 34, w: 163, h: 125 },
        { x: 13.25, y: 191, w: 163, h: 125 },
        { x: 14, y: 347, w: 163, h: 125 },
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
    <div className="flex justify-center items-center">
      <canvas ref={canvasRef} className="border shadow-lg" />
      
      {/* Button column */}
      <div className="ml-6 flex flex-col gap-4 w-48">
        <Link href={"/"}>
          <button className="px-4 py-2 bg-[#da2f30] text-white rounded-lg hover:bg-[#b12626] cursor-pointer w-full">
            Home
          </button>
        </Link>
        <Link href={"/booth"}>
          <button className="px-4 py-2 bg-[#da2f30] text-white rounded-lg hover:bg-[#b12626] cursor-pointer w-full">
            Click New Picture
          </button>
        </Link>
        <Link href={"/photostrip-preview"}>
          <button className="px-4 py-2 bg-[#da2f30] text-white rounded-lg hover:bg-[#b12626] cursor-pointer w-full">
            Select New PhotoStrip
          </button>
        </Link>
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-[#da2f30] text-white rounded-lg hover:bg-[#b12626] cursor-pointer w-full"
        >
          Download Photostrip
        </button>
      </div>
    </div>
  );
};

export default Result;
