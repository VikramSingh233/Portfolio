"use client";

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (


    <div className='flex justify-center items-center w-full flex-wrap h-50 bg-white text-white md:gap-10 max-w-screen-2xl  dark:text-white'>
      <div className='flex justify-center items-center w-full flex-wrap h-20   text-white md:gap-10 max-w-screen-2xl  dark:text-white'>
        <div className='flex flex-col p-2  md:w-auto w-2/3 flex-wrap  my-3'>
          <p className='text-black font-bold mx-auto '>Call</p>
          <Link href="tel:7607928008" className='text-black mx-auto hover:text-orange-700'>+91 7607928008</Link>
        </div>

        <div className='flex flex-col p-2  md:w-auto w-2/3 flex-wrap  my-3'>
          <p className='text-black font-bold mx-auto'>Write</p>
          <Link href="mailto:dnsingh655@gmail.com" className='text-black mx-auto hover:text-orange-700'>dnsingh655@gmail.com</Link>
        </div>

        <div className='flex flex-col p-2  md:w-auto w-2/3 flex-wrap  my-3'>
          <p className='text-black font-bold mx-auto'>Follow</p>
          <div className='flex gap-4 mx-auto'>
            <Link href="https://www.instagram.com/vikram_singh_iconic/" className='hover:text-orange-700'>
              <svg className="h-6 w-6 text-slate-700  hover:text-orange-700" width="24" height="24" viewBox="0 0 24 24"  stroke="currentColor" fill="none" >  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
            </Link>

            <Link href="https://github.com/VikramSingh233" className='text-black'>
              <svg className="h-6 w-6 text-slate-700 hover:text-orange-700" width="24" height="24" viewBox="0 0 24 24"  stroke="currentColor" fill="none" >  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg>
            </Link>
            <Link href="https://www.linkedin.com/in/vikram-singh-11318926a/" className='text-black'>
              <svg className="h-6 w-6 text-slate-700 hover:text-orange-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" >  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
            </Link>
            <Link href="" className='text-black'>
              <svg className="h-6 w-6 text-slate-700 hover:text-orange-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" >  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
            </Link>
          </div>
        </div>

        <div className='flex flex-col p-2  md:w-auto w-2/3 flex-wrap  my-3'>
          <p className='text-black font-thin mx-auto'>@ 2025 by Vikram Singh</p>
          <Link href="" className='text-black mx-auto'>All rights reserved</Link>
        </div>
      </div>

      {/* <div className='flex  md:flex-row justify-center items-center md:w-full md:flex-wrap h-20  text-white md:gap-10 md:mt-0 md:relative  dark:text-white  max-w-96  mr-5 absolute right-0 flex-col gap-10'>
        <Link href="/" className='text-black hover:text-orange-700 font-bold'>Home</Link>
        <Link href="/projects" className='text-black hover:text-orange-700 font-bold'>Projects</Link>
        <Link href="/contact" className='text-black hover:text-orange-700 font-bold'>Contact</Link>
        <Link href="/resume" className='text-black hover:text-orange-700 font-bold'>Resume</Link>
        
        
        

      </div> */}
    </div>
  )
}

export default Footer
