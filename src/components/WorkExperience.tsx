// WorkExperience.jsx
"use client";
import React from 'react';

const WorkEntry = ({ company, duration, project, description }) => {
  return (
    <div className="mb-6 ml-4">
      <div className="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
      <h3 className="text-lg font-semibold text-gray-900">{company}</h3>
      <p className="mb-2 text-gray-600">{duration}</p>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900">{project}</h4>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

const WorkExperience = () => {
  const workData = [
    {
      company: 'Intern at Cognifyz',
      duration: 'Jan-2025 - Present',
      project: 'Full-Stack Developer',
      description: 'Led development of a full-stack web application with React and Node.js'
    },
    {
      company: 'Intern at CodeTach',
      duration: 'Jan 2025 - Present',
      project: 'Full-Stack Developer',
      description: 'Worked on a full-stack web application with React and Node.js'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-black">Work Experience</h2>
      <div className="relative pl-2 border-l-2 border-blue-200">
        {workData.map((work, index) => (
          <WorkEntry key={index} {...work} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;