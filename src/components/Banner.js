import React from "react";

export default function Banner({ title }) {
  return (
    <div
      className="relative h-40 md:h-80 mb-12 flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/img/royal4.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Optional overlay */}
      <h1 className="relative z-10 text-5xl text-white">{title || ""}</h1>
    </div>
  );
}
