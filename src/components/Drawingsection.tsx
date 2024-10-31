'use client';
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function DrawingSection() {
  const drawingImages = [
    { image: '/images/drawing/drawing (1).jpg' },
    { image: '/images/drawing/drawing (2).jpg' },
    { image: '/images/drawing/drawing (3).jpg' },
    { image: '/images/drawing/drawing (4).jpg' },
    { image: '/images/drawing/drawing (5).jpg' },
    { image: '/images/drawing/drawing (6).jpg' },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Drawings</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Explore Our Technical Drawings</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {drawingImages.map((drawing, index) => (
            <div key={index} className="bg-black rounded-lg overflow-hidden shadow-lg transform transition-transform duration-200 hover:scale-105">
              <img src={drawing.image} alt={`Drawing ${index + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DrawingSection;
