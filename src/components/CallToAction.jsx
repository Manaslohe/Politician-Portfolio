import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import

const CallToAction = () => {
  const navigate = useNavigate(); // Add this hook

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          Be a part of the change you wish to see.<br />
          Join the Vikas Movement.
        </h2>
        <button
          className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
          onClick={() => navigate('/volunteer')}
        >
          <span className="flex items-center gap-2">
            Join Now
          </span>
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
