"use client";

import React from 'react';
import { FiUser, FiCalendar, FiMapPin, FiMail, FiBook, FiGlobe, FiBriefcase, FiTarget } from 'react-icons/fi';

// Define the type for personalInfo
interface PersonalInfo {
  name: string;
  email: string;
  location?: string;
  age: string;
  city: string;
  degree: string;
  website: string;
  experience: string;
  profession: string;
  goal: string;
  specialization: string;
  college: string;
  birthdate: string;
  bio: string;
}

// Define the type for the component props
interface AboutMeProps {
  personalInfo: PersonalInfo;
}

const AboutMe = ({ personalInfo }: AboutMeProps) => {
  return (
    <div className={`max-w-6xl mx-auto px-4 py-12`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#f3d9c2] rounded-2xl shadow-lg p-8">
        {/* Left Column - Personal Details */}
        <div className="space-y-6 border-r-0  md:pr-8 ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FiUser className="mr-2 text-[#ff8d29]" />
            Personal Details
          </h2>

          <div className="space-y-4">
            <DetailItem icon={<FiCalendar />} title="Age" value={personalInfo.age} />
            <DetailItem icon={<FiMapPin />} title="Location" value={personalInfo.city} />
            <DetailItem icon={<FiMail />} title="Email" value={personalInfo.email} link={`mailto:${personalInfo.email}`} />
            <DetailItem icon={<FiBook />} title="Education" value={personalInfo.degree} />
            <DetailItem icon={<FiGlobe />} title="Website" value={personalInfo.website} link={personalInfo.website} />
            <DetailItem icon={<FiBriefcase />} title="Experience" value={personalInfo.experience} />
          </div>
        </div>

        {/* Right Column - Bio and Goals */}
        <div className="space-y-6 md:pl-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{personalInfo.name}</h1>
            <p className="text-xl text-slate-800 font-semibold">{personalInfo.profession}</p>
          </div>

          <div className="space-y-6">
            <SectionBlock
              icon={<FiTarget className="text-xl bg-orange-50" />}
              title="Career Goals"
              content={personalInfo.goal}
            />

            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#ff8d29] mb-3">Key Details</h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-gray-700">
                  <span>Specialization:</span>
                  <span className="font-medium">{personalInfo.specialization}</span>
                </li>
                <li className="flex justify-between text-gray-700">
                  <span>Degree From:</span>
                  <span className="font-medium">{personalInfo.college}</span>
                </li>
                <li className="flex justify-between text-gray-700">
                  <span>Birthdate:</span>
                  <span className="font-medium">{personalInfo.birthdate}</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <p className="text-gray-600 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Detail Item Component
interface DetailItemProps {
  icon: JSX.Element;
  title: string;
  value: string;
  link?: string;
}

const DetailItem = ({ icon, title, value, link }: DetailItemProps) => (
  <div className="flex items-center space-x-4 group">
    <div className="p-2 bg-blue-100 rounded-lg text-[#ff8d29] group-hover:bg-blue-600 group-hover:text-white transition-colors">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-sm text-gray-500">{title}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#ff8d29] transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-gray-700">{value}</p>
      )}
    </div>
  </div>
);

// Reusable Section Block Component
interface SectionBlockProps {
  icon: JSX.Element;
  title: string;
  content: string;
}

const SectionBlock = ({ icon, title, content }: SectionBlockProps) => (
  <div className="bg-gray-50 rounded-xl p-6">
    <div className="flex items-center mb-3">
      <span className="text-[#ff8d29] mr-2">{icon}</span>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{content}</p>
  </div>
);

export default AboutMe;
