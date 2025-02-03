"use client";
import React from 'react';

// Define type for education entry props
interface EducationEntryProps {
  type: string;
  institution: string;
  duration: string;
  description?: string; // Optional
  focus?: string;       // Optional
}

const EducationEntry = ({ type, institution, duration, description, focus }: EducationEntryProps) => {
  return (
    <div className="mb-6 ml-4">
      <div className="absolute w-3 h-3 bg-orange-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
      <h3 className="text-lg font-semibold text-gray-900">{type}</h3>
      <p className="mb-2 text-gray-600">{institution} • {duration}</p>
      {description && <p className="mb-2 text-gray-600">{description}</p>}
      {focus && <p className="text-gray-500">Focus: {focus}</p>}
    </div>
  );
};

const Education = () => {
  // Type the education data array
  const educationData: EducationEntryProps[] = [
    {
      type: 'Secondary Education',
      institution: 'Saruswati Vidya Mandir Deoria Utter Pradesh',
      duration: '2016-2023',
      description: 'Completed secondary education with 87% aggregate'
    },
    {
      type: 'Bachelor of Technology',
      institution: 'Institute of Infrastructure Technology Research and Management (IITRM) Ahemdabad Gujarat',
      duration: '2023-Present',
      focus: 'Computer Science'
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-black">Education</h2>
      <div className="relative pl-8 border-l-2 border-orange-200">
        {educationData.map((edu, index) => (
          <EducationEntry
            key={index}
            type={edu.type}
            institution={edu.institution}
            duration={edu.duration}
            description={edu.description}
            focus={edu.focus}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;