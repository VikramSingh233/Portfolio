import React from 'react'
import { useState } from 'react'
const AccessPanel = () => {

     const [isHovered, setIsHovered] = useState(false);
  return (
    <div>

    <div className="max-w-2xl mx-auto ml-5 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg border border-gray-200 mt-12 transition-all hover:shadow-xl">
    <div className="flex flex-col items-center space-y-4">
      {/* Icon Container */}
      <div className="p-4 bg-white rounded-full shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </div>

      {/* Text Content */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
        Unlock Full Access
      </h2>
      <p className="text-gray-600 text-center leading-relaxed">
        Get exclusive access to my complete resume, technical projects on GitHub, 
        and private repositories. Sign up now to view detailed case studies 
        and code samples.
      </p>

      {/* Signup Button */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        
        className={`px-8 py-3 rounded-full font-semibold transition-all transform ${
          isHovered ? 'scale-105 shadow-lg' : 'scale-100 shadow-md'
        } ${
          isHovered 
            ? 'bg-blue-600 text-white' 
            : 'bg-white text-blue-600 border-2 border-blue-500'
        }`}
      >
        Sign Up Now
      </button>

      <p className="text-sm text-gray-500 text-center mt-2">
          Already have access? 
          <a href="/login" className="text-blue-600 hover:underline ml-1">
            Log in here
          </a>
        </p>

      </div>
    </div>

    </div>
  )
}

export default AccessPanel