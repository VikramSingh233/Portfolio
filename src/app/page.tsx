"use client";
import Image from "next/image";
import Link from "next/link";


import Box from "@/components/Box";
import AboutMe from "@/components/AboutMe";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import ContactForm from "@/components/ContactForm";
import { useEffect, useState ,useCallback} from "react";




const projects = [
  { id: 1, title: "Question Bank", category: "Web Development",content:"" , image:"",sourceCodeUrl:"#",accessUrl:"#" },
  { id: 2, title: "Project-2", category: "Machine Learning",content:"" , image:"",sourceCodeUrl:"#",accessUrl:"#" },
  { id: 3, title: "Project-3", category: "AI",content:"" , image:"",sourceCodeUrl:"#",accessUrl:"#" },
  { id: 4, title: "Project-4", category: "Data Science",content:"" , image:"",sourceCodeUrl:"#",accessUrl:"#" },
  { id: 5, title: "Project-5", category: "Other",content:"" , image:"",sourceCodeUrl:"#",accessUrl:"#" },
];
const professions = [
  "Full-Stack Developer", "MERN Stack" ,"Next.js","Machine Learning", "Artificial Intelligence", "Data Science",
]

export default function Home() {
  
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const words = professions[currentProfessionIndex].split("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProjects =
    selectedCategory === "All"? projects: projects.filter((project) => project.category === selectedCategory);
    useEffect(() => {
      if (wordIndex < words.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => (prev ? prev + "" + words[wordIndex] : words[wordIndex]));
          setWordIndex(wordIndex + 1);
        }, 150); 
  
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setWordIndex(0);
          setCurrentProfessionIndex((prev) => (prev + 1) % professions.length);
        }, 500); 
      }
    }, [wordIndex, currentProfessionIndex, words]);


  return (
    <main className=" bg-[#faf2eb] m-0 p-0">
<div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 py-6">
      {/* Profile Image and Info */}
      <div className="flex flex-col items-center md:w-6/12 w-full relative ml-5">
        <div className="flex flex-col items-center xs:bg-[#f6ebe3] bg-[faf2eb] p-4 rounded-lg xs:shadow-md w-full max-w-sm">
          <Image
            className="object-cover rounded-full w-48 h-48"
            src="https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1"
            alt="Vikram Singh"
            width={200}
            height={200}
          />
          <h1 className="font-bold text-black text-3xl mt-4 border-b-4 border-orange-400 pb-1">VIKRAM SINGH</h1>
          <h2 className="font-bold text-black xs:text-lg text-xl  mt-3 h-7"> {displayedText}</h2>
          
          <div className="flex gap-4 mt-3">
            <Link href="https://www.instagram.com/vikram_singh_iconic/">
              <svg className="h-7 w-7 text-slate-700 hover:text-orange-700 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </Link>
            <Link href="https://github.com/VikramSingh233">
              <svg className="h-7 w-7 text-slate-700 hover:text-orange-700 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/vikram-singh-11318926a/">
              <svg className="h-7 w-7 text-slate-700 hover:text-orange-700 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
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
      
      {/* About Me Section */}
      <div className="flex flex-col items-center bg-[#faf2eb] md:w-5/12 w-full p-4 ml-7 rounded-lg mt-6 md:mt-0 md:ml-8">
        <h2 className="font-bold text-black text-3xl">About Me</h2>
        <p className="font-semibold text-black text-lg mt-2">
          I am a versatile Full-Stack Developer with strong expertise in MERN Stack, Next.js, Machine Learning, and Artificial Intelligence (AI). I specialize in building scalable, high-performance web applications, blending the latest technologies to deliver seamless, data-driven solutions.
        </p>
        {showAboutMe && (
          <p className="font-bold text-black text-lg mt-4">
            I’m passionate about solving complex problems, optimizing processes, and continuously improving my technical skills to stay at the forefront of web development and AI technologies.
          </p>
        )}
        <button
          className="mt-4 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
          onClick={() => setShowAboutMe(!showAboutMe)}
        >
          {showAboutMe ? 'Show Less' : 'Know More'}
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
            experience: "<1 Years",
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
       <div className="flex justify-center items-center w-10/12 h-16 m-auto mt-16 ">
        <ul className="flex justify-center items-center flex-wrap text-xl font-bold">
          {["All", "Web Development", "Machine Learning", "AI", "Data Science", "Other"].map((category) => (
            <li
              key={category}
              className={`inline-block mr-4 cursor-pointer px-4 py-2 rounded-md transition-all text-black ${
                selectedCategory === category ? "bg-orange-500 text-black" : "hover:text-orange-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center flex-col w-full">
        {filteredProjects.map((project) => (
          <Box
            key={project.id}
            title={project.title}
            content={project.content}
            image={project.image}
            sourceCodeUrl={project.sourceCodeUrl}
            accessUrl={project.accessUrl}
          />
        ))}
      </div>


      <Education />
      <WorkExperience />
      <ContactForm />
    </main>
  );
}
