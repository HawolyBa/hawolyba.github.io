import React from 'react'
import Image from 'next/image'

const Card = ({ image, title, stack, link }) => {
  return (
    <div className="group relative w-full max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden min-w-[200px] shadow-sm bg-zinc-900 border border-emerald-900 p-2">
      {/* Image */}
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-zinc-300 group-hover:text-emerald-500 transition duration-300">
          {title}
        </h2>
        <p className="text-sm text-gray-500 mt-2">{stack}</p>
      </div>

      {/* Overlay Animation */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 bg-emerald-500 bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex items-center justify-center text-white text-lg font-bold opacity-0 group-hover:opacity-100"
      >
        Voir le site
      </a>
    </div>
  );
};

export default Card