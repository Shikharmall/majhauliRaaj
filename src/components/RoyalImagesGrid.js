"use client";

import Image from "next/image";
import ImageModal from "./ImageModel";
import { useState } from "react";

export default function RoyalImagesGrid({ images }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div key={index} className="overflow-hidden rounded shadow-md">
              <Image
                src={item.url}
                width={500}
                height={300}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openModal(item)}
              />
            </div>
          ))}
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={selectedImage}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
