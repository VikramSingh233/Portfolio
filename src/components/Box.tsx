"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BoxProps {
  title: string;
  content: string;
  image?: string; // Make optional if not always required
  sourceCodeUrl: string;
}

const Box = ({ title, content, image, sourceCodeUrl }: BoxProps) => {
  return (
    <div className="w-[70%] mx-auto my-10 flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg bg-[#f6ebe3] transition-all duration-300 hover:shadow-xl hover:scale-102">
      {/* Image Section */}
      <div className="md:w-2/5">
        {image && (
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-scale-down transition-transform duration-500 hover:scale-103 hover:animate-pulse"
            width={500}
            height={500}
          />
        )}
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="font-bold text-3xl mb-4 text-gray-800">{title}</h2>
        <p className="text-gray-600 text-lg">{content}</p>
        
        {/* Source Code Button */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl mx-auto">
          <Link
            href={sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 w-full sm:w-auto 
                     bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-all 
                     duration-300 transform hover:scale-102 shadow-md hover:shadow-lg mt-3"
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="font-medium">View Source Code</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Box;