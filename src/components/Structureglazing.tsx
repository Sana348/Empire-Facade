'use client'; 
import React from "react";

const structureGlazingContent = [
  { image: '/images/structure/structure (1).jpg' },
  { image: '/images/structure/structure (2).jpg' },
  { image: '/images/structure/structure (3).jpg' },
  { image: '/images/structure/structure (4).jpg' },
  { image: '/images/structure/structure (5).jpg' },
  { image: '/images/structure/structure (6).jpg' },
  { image: '/images/structure/structure (7).jpg' },
  { image: '/images/structure/structure (8).jpg' },
  { image: '/images/structure/structure (9).jpg' },
  { image: '/images/structure/structure (10).jpg' },
  { image: '/images/structure/structure (11).jpg' },
  { image: '/images/structure/structure (12).jpg' },
  { image: '/images/structure/structure (13).jpg' },
  { image: '/images/structure/structure (14).jpg' },
  { image: '/images/structure/structure (15).jpg' },
  { image: '/images/structure/structure (16).jpg' },
  { image: '/images/structure/structure (17).jpg' },
  { image: '/images/structure/structure (18).jpg' },
  { image: '/images/structure/structure (19).jpg' },
  { image: '/images/structure/structure (20).jpg' },
  { image: '/images/structure/structure (21).jpg' }
];


function StructureGlazing() {
  return (
    <div className="py-12 bg-gray-900">
      <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Structural Glazing</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {structureGlazingContent.map((item, index) => (
          <div key={index} className="bg-black rounded-lg overflow-hidden shadow-lg transform transition-transform duration-200 hover:scale-105">
            <img src={item.image} alt="Structural glazing sample" className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StructureGlazing;

