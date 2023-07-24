import React, { useState } from "react";
import Container from "../Shared/Container/Container";

const PhotoGallery = () => {
  // Replace these URLs with your own images
  const imageUrls = [
    "https://images.unsplash.com/photo-1543269865-cbf427effbad",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    "https://images.unsplash.com/photo-1550305080-4e029753abcf",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    "https://plus.unsplash.com/premium_photo-1670252112175-dfb05b4db59d",
    "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df",

    "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    "https://images.unsplash.com/photo-1570616969692-54d6ba3d0397",
  ];

  return (
    <Container>
      <div className="text-center my-10">
        <p className="uppercase text-primary font-medium underline underline-offset-4 decoration-4 mb-2">
          Our Gallery
        </p>
        <h2 className="capitalize font-Poppins text-4xl font-bold">
          Capturing Memories
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full transition-transform duration-300 transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-center h-full"></div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PhotoGallery;
