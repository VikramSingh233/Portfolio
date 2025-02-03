"use client"

import React from 'react'
export default function UnderConstruction() {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <div className="bg-white p-8 rounded-3xl shadow-2xl text-center border border-gray-200 max-w-lg transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-3xl font-bold text-gray-800">🚧 Under Construction 🚧</h1>
          <p className="text-gray-600 mt-3">We&apos;re working hard to bring you something amazing. Stay tuned!</p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-300">Notify Me</button>
          </div>
        </div>
      </div>
    );
  }