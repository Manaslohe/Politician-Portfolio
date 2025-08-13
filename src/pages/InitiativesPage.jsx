import React, { useState } from 'react';
import BackButton from '../components/BackButton';

const initiatives = [
  {
    title: 'Development Projects',
    description: 'Roadworks, drainage systems, ward-wise amenities upgrades across Nagpur West.',
    icon: '🏗️'
  },
  {
    title: 'Education & Youth',
    description: 'Distribution of study materials, setup of youth training camps, and school sanitation drives.',
    icon: '📚'
  },
  {
    title: 'Women Empowerment',
    description: 'Mahila Melavas, safety helpline facilitation, and job-oriented workshops for women.',
    icon: '👥'
  },
  {
    title: 'Health & Cleanliness',
    description: 'Ayushman Bharat enrollment drives, COVID-19 camps, Swachh Nagpur campaigns.',
    icon: '🏥'
  },
  {
    title: 'Nagpur West Local Work',
    description: 'Direct ward engagement with residents, weekly grievance hearings, and project follow-ups.',
    icon: '🏘️'
  }
];

const InitiativesPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <BackButton />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Initiatives</h1>
          <div className="space-y-6">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => setExpandedId(expandedId === index ? null : index)}
                  className="w-full text-left p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{initiative.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{initiative.title}</h3>
                      <p className={`text-gray-600 ${expandedId === index ? '' : 'line-clamp-2'}`}>
                        {initiative.description}
                      </p>
                    </div>
                    <span className="text-orange-500 font-medium">
                      {expandedId === index ? 'Show Less' : 'Read More'}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default InitiativesPage;
