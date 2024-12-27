// CVPortfolio.tsx
'use client';

import React, { useRef, useState } from 'react';
import {
  FaBirthdayCake,
  FaBuilding,
  FaBullhorn,
  FaCar,
  FaChartLine,
  FaDownload,
  FaEnvelope,
  FaGraduationCap,
  FaHandshake,
  FaHome,
  FaLanguage,
  FaLaptop,
  FaMapMarkerAlt,
  FaPhone,
  FaUsers,
  FaUserTie
} from 'react-icons/fa';

// --------------------------------------
// Define interfaces for data
// --------------------------------------
interface Job {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  icon: React.ReactNode;
}

interface SkillCategory {
  category: string;
  skills: string[];
  icon: React.ReactNode;
}

interface Language {
  name: string;
  level: string;
  description: string;
}

// ---------------------
// Define your data
// ---------------------
const jobs: Job[] = [
  {
    title: "Real Estate Sales Agent",
    company: "Malu Mulk Company, Vital Branch",
    period: "May 2023 – February 2024",
    responsibilities: [
      "Managed and closed property transactions with renewed focus on client engagement.",
      "Enhanced branch marketing strategies, increasing property inquiries and sales cycles.",
      "Provided expert guidance for informed property purchase decisions.",
      "Strengthened client relationships, generating repeat business and referrals."
    ],
    icon: <FaBuilding className="text-3xl text-blue-600" />
  },
  {
    title: "Branch Manager",
    company: "Malu Mulk Company, Farmanbaran Branch",
    period: "March 2023 – May 2023",
    responsibilities: [
      "Led branch operations, managing agents and overseeing property transactions.",
      "Achieved 20% increase in monthly sales through innovative strategies.",
      "Mentored team members in client relations and sales negotiations.",
      "Maintained high client satisfaction through transparent, efficient service."
    ],
    icon: <FaUsers className="text-3xl text-blue-600" />
  },
  {
    title: "Real Estate Sales Agent",
    company: "Malu Mulk Company, Vital Branch",
    period: "May 2022 – February 2023",
    responsibilities: [
      "Closed over 50 property transactions, generating significant branch revenue.",
      "Developed tailored marketing plans to increase property visibility.",
      "Conducted property tours and open houses, highlighting key features.",
      "Built strong client relationships, resulting in referrals and repeat business."
    ],
    icon: <FaHandshake className="text-3xl text-blue-600" />
  },
  {
    title: "Self-Employed",
    company: "",
    period: "May 2016 – 2022",
    responsibilities: [
      "Managed sales of properties, vehicles, and assets with customized solutions.",
      "Specialized in residential and commercial property transactions.",
      "Expanded services to include vehicle sales, ensuring transparent dealings.",
      "Built loyal client base through personalized solutions and exceptional service.",
      "Conducted market analysis for accurate property and vehicle valuations.",
      "Negotiated contracts, prioritizing client satisfaction and long-term trust.",
      "Established reputation as reliable consultant in property and vehicle markets."
    ],
    icon: <FaChartLine className="text-3xl text-blue-600" />
  }
];

const skillCategories: SkillCategory[] = [
  {
    category: "Real Estate Expertise",
    skills: [
      "Property Sales and Leasing",
      "Investment Advisory",
      "Property Valuation",
      "Contract Management",
      "Real Estate Market Research"
    ],
    icon: <FaHome className="text-3xl text-blue-600" />
  },
  {
    category: "Marketing and Sales",
    skills: [
      "Target Audience Identification",
      "Advertising Campaigns",
      "Sales Pipeline Management",
      "Competitive Analysis"
    ],
    icon: <FaBullhorn className="text-3xl text-blue-600" />
  },
  {
    category: "Client and Customer Relations",
    skills: [
      "Customer Service Excellence",
      "Personalized Solutions",
      "Conflict Resolution",
      "Networking"
    ],
    icon: <FaUsers className="text-3xl text-blue-600" />
  },
  {
    category: "Leadership and Teamwork",
    skills: [
      "Team Building",
      "Motivation and Inspiration",
      "Collaboration"
    ],
    icon: <FaChartLine className="text-3xl text-blue-600" />
  },
  {
    category: "Analytical and Technical Skills",
    skills: [
      "CRM Tools",
      "Market Insights",
      "Technology Integration",
      "Trend Forecasting"
    ],
    icon: <FaLaptop className="text-3xl text-blue-600" />
  },
  {
    category: "Personal Qualities",
    skills: [
      "Attention to Detail",
      "Time Management",
      "Professionalism",
      "Resilience",
      "Creativity"
    ],
    icon: <FaUserTie className="text-3xl text-blue-600" />
  }
];

const languages: Language[] = [
  {
    name: "Kurdish",
    level: "Native",
    description: "Fluent in both verbal and written communication."
  },
  {
    name: "English",
    level: "Advanced",
    description: "Strong command for business, and conversational use."
  },
  {
    name: "Arabic",
    level: "Advanced",
    description: "Strong command for business and client communication."
  }
];

const hobbies = [
  {
    text: "Real Estate Trends: Passionate about exploring the latest trends and innovations in the real estate market.",
    icon: <FaHome className="text-2xl text-blue-600" />
  },
  {
    text: "Marketing and Branding: Enthusiastic about designing creative campaigns and exploring new marketing techniques.",
    icon: <FaBullhorn className="text-2xl text-blue-600" />
  },
  {
    text: "Automobiles: Deep interest in vehicles, particularly in exploring market dynamics and maintaining a network for vehicle sales.",
    icon: <FaCar className="text-2xl text-blue-600" />
  },
  {
    text: "Networking: Enjoy building meaningful connections with professionals in various industries.",
    icon: <FaUsers className="text-2xl text-blue-600" />
  },
  {
    text: "Technology: Interested in learning and applying modern tools to enhance efficiency in sales and client management.",
    icon: <FaLaptop className="text-2xl text-blue-600" />
  }
];

// --------------------------------------------------
// MAIN COMPONENT
// --------------------------------------------------
export default function CVPortfolio() {
  const pdfRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const generatePDF = async () => {
    window.location.href = '/smko_salah_jawhar_sv.pdf';

  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* The container to capture for PDF */}
      <div
        ref={pdfRef}
        className={`max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden ${
          isGeneratingPdf ? 'w-[1200px] max-w-[1200px] text-[20px]' : ''
        }`}
      >
        {/*
          ----------------------------------
          FIRST PDF PAGE:
          Header + Profile + "Professional Experience" heading
          + 1st job + 2nd job + 3rd job
          ----------------------------------
        */}
        <section className="pdf-section p-8">
          {/* HEADER */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-[40px] font-bold">Smko Salah Jawhar</h1>
                  <FaDownload
                    className="text-[20px] md:hidden cursor-pointer"
                    onClick={generatePDF}
                    title="Download PDF"
                  />
                </div>
                <h2 className="text-[20px] font-semibold mb-4">Real Estate Professional</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2" />
                    <span>smko1salah@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-2" />
                    <span>+964 770 124 6383</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Erbil, Iraq</span>
                  </div>
                  <div className="flex items-center">
                    <FaBirthdayCake className="mr-2" />
                    <span>April 15th, 1997</span>
                  </div>
                </div>
              </div>
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/smko.jpeg"
                  alt="Smko Salah Jawhar"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* PROFILE */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 mb-6">
            <h2 className="text-[20px] font-semibold mb-4 text-blue-800">Profile</h2>
            <p className="text-gray-700 leading-relaxed">
              As a dedicated Real Estate Professional with over two years of experience, I bring a 
              wealth of knowledge in property sales, marketing, and team leadership. My tenure as 
              Branch Manager at Malu Mulk Company saw our team consistently surpass sales targets. 
              I pride myself on forging genuine connections with clients, ensuring a smooth property 
              search experience, and delivering complete satisfaction. My expertise in crafting 
              effective marketing strategies uniquely showcases properties and drives client engagement. 
              Grounded in principles of honesty, teamwork, and unwavering work ethic, I consistently 
              strive for success – not just for myself, but for my clients and team as well.
            </p>
          </div>

          {/* PROFESSIONAL EXPERIENCE Heading */}
          <h2 className="text-[20px] font-semibold mb-4 text-blue-800">
            Professional Experience
          </h2>

          {/* FIRST THREE JOBS */}
          <div className="space-y-6">
            {/* 1st job */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
              <div className="flex items-center mb-4">
                {jobs[0].icon}
                <div className="ml-4">
                  <h3 className="text-[20px] font-semibold text-blue-800">
                    {jobs[0].title}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {jobs[0].company}
                  </p>
                  <p className="text-gray-600">{jobs[0].period}</p>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {jobs[0].responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>

            {/* 2nd job */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
              <div className="flex items-center mb-4">
                {jobs[1].icon}
                <div className="ml-4">
                  <h3 className="text-[20px] font-semibold text-blue-800">
                    {jobs[1].title}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {jobs[1].company}
                  </p>
                  <p className="text-gray-600">{jobs[1].period}</p>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {jobs[1].responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>

            {/* 3rd job */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
              <div className="flex items-center mb-4">
                {jobs[2].icon}
                <div className="ml-4">
                  <h3 className="text-[20px] font-semibold text-blue-800">
                    {jobs[2].title}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {jobs[2].company}
                  </p>
                  <p className="text-gray-600">{jobs[2].period}</p>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {jobs[2].responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/*
          -------------------------------------------------------
          SECOND PAGE (and onward):
          The 4th job + Key Skills + Education + Languages + Hobbies
          -------------------------------------------------------
        */}
        <section className="pdf-section p-8">
          {/* 4th job (Self-Employed) */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200 mb-6">
            <div className="flex items-center mb-4">
              {jobs[3].icon}
              <div className="ml-4">
                <h3 className="text-[20px] font-semibold text-blue-800">{jobs[3].title}</h3>
                <p className="text-gray-600">{jobs[3].period}</p>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {jobs[3].responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pdf-section p-8">
          {/* KEY SKILLS */}
          <h2 className="text-[20px] font-semibold mb-6 text-blue-800">Key Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-[20px] font-semibold ml-4 text-blue-800">{category.category}</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {category.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="pdf-section p-8">
          {/* EDUCATION */}
          <h2 className="text-[20px] font-semibold mb-6 text-blue-800">Education</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-4xl text-blue-600" />
              <div className="ml-4">
                <h3 className="text-[20px] font-semibold text-blue-800">
                  Bachelor of Arts in English Language and Literature
                </h3>
                <p className="text-blue-600 font-medium">University of Sulaymaniyah, Sulaymaniyah</p>
                <p className="text-gray-600">Graduated in 2022</p>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Developed strong communication, analytical, and interpersonal skills.</li>
              <li>Completed coursework in linguistics, communication, and cultural studies.</li>
              <li>Engaged in projects and activities that enhanced organizational and problem-solving skills.</li>
            </ul>
          </div>
        </section>

        <section className="pdf-section p-8">
          {/* LANGUAGES */}
          <h2 className="text-[20px] font-semibold mb-6 text-blue-800">Languages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                <div className="flex items-center mb-2">
                  <FaLanguage className="text-2xl text-blue-600" />
                  <h3 className="text-[20px] font-semibold ml-2 text-blue-800">{lang.name}</h3>
                </div>
                <p className="text-base text-blue-600 font-medium">{lang.level}</p>
                <p className="text-sm text-gray-700 mt-1">{lang.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pdf-section p-8">
          {/* HOBBIES */}
          <h2 className="text-[20px] font-semibold mb-6 text-blue-800">Hobbies and Interests</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
            <ul className="space-y-4 text-gray-700">
              {hobbies.map((hobby, index) => (
                <li key={index} className="flex items-center">
                  {hobby.icon}
                  <span className="ml-4">{hobby.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* DOWNLOAD BUTTON */}
        <div className="bg-blue-100 p-6 text-center">
          <button
            onClick={generatePDF}
            aria-label="Download Smko Salah Jawhar's CV as PDF"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold 
                       rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            <FaDownload className="mr-2" />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
