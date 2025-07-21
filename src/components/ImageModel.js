"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function ImageModal({ isOpen, imageSrc, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl z-10 cursor-pointer"
        onClick={onClose}
      >
        &times;
      </button>
      <div
        className="relative max-w-6xl w-full max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <Image
          src={imageSrc.url}
          alt="Full Image"
          width={1200}
          height={800}
          className="w-full h-full object-contain rounded-md"
        />
        <p className="absolute bottom-4 right-4 text-white text-1xl z-10 cursor-pointer bg-black px-3 rounded">
          {imageSrc.estate}
        </p>
      </div>
    </div>
  );
}
