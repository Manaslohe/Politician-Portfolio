import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Image Section */}
          <div className="relative">
            <img 
              src="/Vikasthakrenagpur.jpg" 
              alt="Vikas Thakre"
              className="w-full h-[70%] object-cover rounded-lg shadow-md"
            />
            
            {/* Quote Overlay */}
            <div className="absolute bottom-10 left-0 right-10 bg-gray-500 text-white p-8 lg:p-12 rounded-lg shadow-lg">
              <blockquote className="mb-8">
                <p className="text-white text-lg lg:text-xl leading-relaxed font-normal italic mb-6">
                  Our mission is to provide executive leadership,<br />
                  as well as set priorities and goals for the City<br />
                  and its neighbourhoods.
                </p>
              </blockquote>
              
              <div className="text-right">
                <cite className="text-[#0640AD] text-2xl font-bold not-italic">Vikas Thakre</cite>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="bg-white p-8 lg:p-16 flex flex-col justify-center rounded-lg shadow-md">
            <div className="space-y-8">
              {/* Small Header */}
              <p className="text-[#0640AD] text-sm font-medium tracking-wide uppercase">
                A Brief Introduction
              </p>

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  About<br />
                  Vikas Thakre
                </h1>
                {/* Orange underline */}
                <div className="w-16 h-1 bg-[#0640AD] mb-8"></div>
              </div>

              {/* Description Text */}
              <div className="space-y-6">
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  An experienced public servant and two-time MLA from Nagpur West, Vikas Thakre has dedicated his life to people's welfare and inclusive development. His leadership journey spans across grassroots activism to executive governance, promoting economic development and wealth creation, social development, and improvement of the environment.
                </p>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  Vikas Thakre also has various other duties in relation to culture and tourism, including responsibility for the city and its government.
                </p>
              </div>

              {/* Learn More Button */}
              <div className="pt-4">
                <Link to="/about">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 uppercase tracking-wide">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;