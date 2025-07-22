"use client";

import Image from "next/image";
import Link from "next/link";
import ImageModal from "./ImageModel";
import { useState } from "react";

export default function ImagesGrid({ images }) {
  if (!images || images.length === 0) return null;

  const visibleImages = images.slice(0, images.length - 1);
  const moreImage = images[images.length - 1];

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleImages.map((item, index) => (
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

          {/* + More Block */}
          <div className="relative overflow-hidden rounded shadow-md group">
            <Image
              src={moreImage.url}
              width={500}
              height={300}
              alt="More Images"
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <Link
              href="/gallery"
              className="absolute inset-0 flex items-center justify-center bg-black/50"
            >
              <span className="text-white text-sm font-bold px-4 py-2 rounded">
                + More
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={selectedImage}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
