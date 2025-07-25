"use client";
import LanguageContext from "@/context/languageContext";
import Image from "next/image";
import { useContext, useEffect } from "react";

export default function ImageModal({ isOpen, imageSrc, onClose }) {
  const { language } = useContext(LanguageContext);
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

      {/* Image Wrapper */}
      <div
        className="relative max-w-6xl w-full h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Full Image */}
        <Image
          src={imageSrc?.url}
          alt="Full Image"
          fill
          className="object-contain rounded-md"
        />

        {/* Label */}
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xl z-10 bg-black/70 px-4 py-2 rounded">
          {language === "english"
            ? imageSrc?.estate?.toUpperCase()
            : imageSrc?.estateHindi?.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
