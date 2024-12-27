'use client'

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaHome, FaBuilding, 
         FaChartLine, FaHandshake, FaUsers, FaBullhorn, FaLaptop, FaUserTie, 
         FaGraduationCap, FaLanguage, FaCar, FaDownload } from 'react-icons/fa'

// Types
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

// Component
export default function CVPortfolio() {
  // Data
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl font-bold">Smko Salah Jawhar</h1>
                <FaHome className="text-5xl md:hidden" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Real Estate Professional</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-27%20at%204.37.50%20PM-pJNDh4A8SrNuIAk1hOqqcAs4hMigfv.jpeg"
                alt="Smko Salah Jawhar"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Profile Section */}
          <section className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Profile</h2>
            <p className="text-gray-700 leading-relaxed">
              As a dedicated Real Estate Professional with over two years of experience, I bring a wealth of knowledge in property sales, marketing, and team leadership. My tenure as Branch Manager at Malu Mulk Company saw our team consistently surpass sales targets. I pride myself on forging genuine connections with clients, ensuring a smooth property search experience, and delivering complete satisfaction. My expertise in crafting effective marketing strategies uniquely showcases properties and drives client engagement. Grounded in principles of honesty, teamwork, and unwavering work ethic, I consistently strive for success – not just for myself, but for my clients and team as well.
            </p>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-blue-800">Professional Experience</h2>
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
                  <div className="flex items-center mb-4">
                    {job.icon}
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-blue-800">{job.title}</h3>
                      <p className="text-blue-600 font-medium">{job.company}</p>
                      <p className="text-gray-600">{job.period}</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-700">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-blue-800">Key Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-lg font-semibold ml-4 text-blue-800">{category.category}</h3>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-gray-700">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-blue-800">Education</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-3xl text-blue-600" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-blue-800">Bachelor of Arts in English Language and Literature</h3>
                  <p className="text-blue-600 font-medium">University of Sulaymaniyah, Sulaymaniyah</p>
                  <p className="text-gray-600">Graduated in 2022</p>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Developed strong communication, analytical, and interpersonal skills.</li>
                <li className="text-gray-700">Completed coursework in linguistics, communication, and cultural studies, which provided a solid foundation for client relations and marketing.</li>
                <li className="text-gray-700">Engaged in projects and activities that enhanced organizational and problem-solving skills.</li>
              </ul>
            </div>
          </section>

          {/* Languages Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-blue-800">Languages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
                  <div className="flex items-center mb-4">
                    <FaLanguage className="text-3xl text-blue-600" />
                    <h3 className="text-lg font-semibold ml-4 text-blue-800">{lang.name}</h3>
                  </div>
                  <p className="text-blue-600 font-medium">{lang.level}</p>
                  <p className="text-gray-700 mt-2">{lang.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hobbies Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-blue-800">Hobbies and Interests</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
              <ul className="space-y-4">
                {hobbies.map((hobby, index) => (
                  <li key={index} className="flex items-center">
                    {hobby.icon}
                    <span className="ml-4 text-gray-700">{hobby.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Download CV Button */}
        <div className="bg-blue-100 p-6 text-center">
          <a
            href="/Smko_Salah_Jawhar_CV.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            <FaDownload className="mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  )
}
