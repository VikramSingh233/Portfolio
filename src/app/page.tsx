"use client";
import Image from "next/image";
import Link from "next/link";

import Box from "@/components/Box";
import AboutMe from "@/components/AboutMe";
import { useState } from "react";

export default function Home() {

  const [showAboutMe, setShowAboutMe] = useState(false);

  return (
    <main className=" bg-[#d7c2af] m-0 p-0">
      <div className="min-h-screen  xs:w-[93vw]  xs:ml-0 ml-24 py-2 xs:flex xs:flex-row ">
        <div className="flex flex-col xs:bg-[#d7c2af] xs:w-4/12 xs:h-[80vh] h-[50vh] w-12/12 relative -mt-2 ">
          <div className="flex flex-col  justify-center items-center z-20 xs:bg-[#f1e2d6] xs:w-10/12 xs:h-[60vh] h-[50vh] w-12/12  xs:absolute left-40 xs:shadow-gray-900 xs:shadow-inner bg-[#d7c2af] top-28 xs:ml-20 xs:mt-6 ml-2">
            <div className="flex flex-col justify-center items-center bg-[#d7c2af] p-3">
              <Image
                className="object-cover rounded-full w-[250px] h-[250px] "
                src="https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1"
                alt=""
                width={200}
                height={100}
              ></Image>

              <h1 className="font-bold font-sans text-black text-3xl border-b-orange-400 border-y-4">
                VIKRAM SINGH
              </h1>
              <h3 className="font-bold font-sans text-black text-sm mt-3">
                Full-Stack Developer | MERN Stack & Next.js
              </h3>
              <div className="flex gap-6 mx-auto mt-2">
                <Link
                  href="https://www.instagram.com/vikram_singh_iconic/"
                  className="hover:text-orange-700"
                >
                  <svg
                    className="h-7 w-7 text-slate-700  hover:text-orange-700"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <rect x="4" y="4" width="16" height="16" rx="4" />{" "}
                    <circle cx="12" cy="12" r="3" />{" "}
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </Link>

                <Link
                  href="https://github.com/VikramSingh233"
                  className="text-black"
                >
                  <svg
                    className="h-7 w-7 text-slate-700 hover:text-orange-700"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/vikram-singh-11318926a/"
                  className="text-black"
                >
                  <svg
                    className="h-7 w-7 text-slate-700 hover:text-orange-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                    <rect x="2" y="9" width="4" height="12" />{" "}
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link href="" className="text-black">
                  <svg
                    className="h-7 w-7 text-slate-700 hover:text-orange-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#d7c2af]  xs:w-5/12  xs:h-[80vh] h-[auto] w-12/12  xs:ml-56 xs:p-2 rounded-lg relative xs:mt-6 ml-2">
          <h2 className="font-bold font-sans text-black text-2xl">About Me</h2>
          <p className="font-bold font-sans text-black text-lg">
            I am a versatile Full-Stack Developer with strong expertise in MERN
            Stack , Next.js, Machine Learning, and Artificial Intelligence (AI).
            I specialize in building scalable, high-performance web
            applications, blending the latest technologies to deliver seamless,
            data-driven solutions.
          </p>
          <p className="font-bold font-sans text-black text-lg mt-4 ">
            I’m passionate about solving complex problems, optimizing processes,
            and continuously improving my technical skills to stay at the
            forefront of web development and AI technologies.
          </p>
          <button
        
        className="flex items-center justify-center gap-2 px-4 py-2 w-full sm:w-auto 
                 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-all 
                 duration-300 transform hover:scale-102 shadow-md hover:shadow-lg mt-3"
      >
        <span 
        className="font-medium cursor-pointer hover:text-cyan-300 transition-colors"
        onClick={() => setShowAboutMe(!showAboutMe)}
      >
        {showAboutMe ? 'Show Less' : 'Know More'}
      </span>
      </button>
        </div>
      </div>

      
     {showAboutMe && (
        <AboutMe
          personalInfo={{
            name: "Vikram Singh",
            profession: "Full Stack Developer and AI Enthusiast",
            age: "20 Years",
            city: "Ahmedabad, Gujarat",
            email: "dnsingh655@gmail.com", // Fixed duplicate .com
            degree: "Computer Science",
            website: "https://vikram-singh-portfolio.vercel.app", // Fixed .com to .app
            experience: "1+ Years",
            specialization: "Web Development and Machine Learning",
            college: "Institute of Infrastructure Technology Research and Management, Ahmedabad",
            birthdate: "13 July 2005",
            goal: "To create impactful web solutions that solve real-world problems while mentoring the next generation of developers.",
            bio: "Passionate developer with expertise in modern web technologies. Experienced in building scalable applications and leading technical teams. Constantly learning and adapting to new challenges in the ever-evolving tech landscape.",
          }}
        />
      )}
    










    <h1 className="flex justify-center items-center">
      <span className="font-bold font-sans text-black text-5xl">Projects</span>
    </h1>
      <div className="flex justify-center items-center flex-col w-full">
        <div>
          <Box
            title="Question Bank"
            content="This is a professionally designed box component with hover effects and transitions."
            image="https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?cs=srgb&dl=book-education-knowledge-2099691.jpg&fm=jpg"
            sourceCodeUrl="#"
            accessUrl="#"
          />
        </div>
        <div>
          <Box
            title="Project-2"
            content="This is a professionally designed box component with hover effects and transitions."
            image="https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?cs=srgb&dl=book-education-knowledge-2099691.jpg&fm=jpg"
              sourceCodeUrl="#"
            accessUrl="#"
          />
        </div>
        <div>
          <Box
            title="Project-3"
            content="This is a professionally designed box component with hover effects and transitions."
            image="https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?cs=srgb&dl=book-education-knowledge-2099691.jpg&fm=jpg"
              sourceCodeUrl="#"
            accessUrl="#"
          />
        </div>
        <div>
          <Box
            title="Project-4"
            content="This is a professionally designed box component with hover effects and transitions."
            image="https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?cs=srgb&dl=book-education-knowledge-2099691.jpg&fm=jpg"
              sourceCodeUrl="#"
            accessUrl="#"
          />
        </div>
        <div>
          <Box
            title="Project-5"
            content="This is a professionally designed box component with hover effects and transitions."
            image="https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?cs=srgb&dl=book-education-knowledge-2099691.jpg&fm=jpg"
              sourceCodeUrl="#"
            accessUrl="#"
          />
        </div>
      </div>
    </main>
  );
}
