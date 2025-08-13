import React from 'react';
import { FileText, Users, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VisionMission = () => {
  const cards = [
    {
      title: "Development for All",
      description: "Inclusive infrastructure growth across wards and sectors.",
      Icon: FileText,
    },
    {
      title: "Youth First",
      description: "Skill development, education, and employment-driven action.",
      Icon: Target,
    },
    {
      title: "Empowered Nagpur",
      description: "A cleaner, connected, and future-ready Nagpur West.",
      Icon: Users,
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vision & Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our guiding principles for a better tomorrow.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="text-orange-500 text-2xl">★</span>
            ))}
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.Icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {card.description}
                </p>

                {/* Button */}
                <button
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                  onClick={() => navigate('/initiatives')}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
