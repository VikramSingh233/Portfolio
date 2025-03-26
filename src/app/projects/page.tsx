"use client"

import React from 'react'

import { useState } from "react";
import Box from '@/components/Box';




const projects = [
  { id: 1, title: "Question Bank", category: "Full Stack",content:"A Question Bank Website where you can manage all your questions and answers of differnt topics , different levels of difficulty and of different subjects . There is a special feature where you can automatically generate a pdf for a question paper with some simple instructions." , image:"https://images.squarespace-cdn.com/content/v1/62d3bbd1faeb0e33ddbad6da/dd7a63b3-819b-4751-9279-bd6fe95ef9f1/Question+Bank.png",sourceCodeUrl:"https://github.com/VikramSingh233/QuestionBank-Website" },
  { id: 2, title: "Ghost chat app", category: "Full Stack",content:"A Chatting App for confidential and secret talk where no one can see the active status of others and there is not feature of read receipts. For confirming that the receiver have seen the messages , the sender can send a notification for that. Also we are only storing the messages for 24 hours only after that all the messages are delete from the database." , image:"/Ghostchatapp.png",sourceCodeUrl:"https://github.com/VikramSingh233/GhostChatApp"},
  // { id: 3, title: "Project-3", category: "AI",content:"" , image:"",sourceCodeUrl:"#",accessUrl:"#" },
  // { id: 4, title: "Project-4", category: "Data Science",content:"" , image:"",sourceCodeUrl:"#",accessUrl:"#" },
  // { id: 5, title: "Project-5", category: "Other",content:"" , image:"",sourceCodeUrl:"#",accessUrl:"#" },
];
const Page = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredProjects =
      selectedCategory === "All"? projects: projects.filter((project) => project.category === selectedCategory);
      console.log("Selected Category:", selectedCategory);
console.log("Filtered Projects:", filteredProjects);

  return (
   <div>

    




           <div className="flex justify-center items-center w-10/12 h-16 m-auto mt-16 ">
        <ul className="flex justify-center items-center flex-wrap text-xl font-bold">
          {["All", "Full Stack", "Machine Learning", "AI", "Data Science", "Other"].map((category) => (
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
            
          />
        ))}
      </div>
   </div>
  )
}

export default Page