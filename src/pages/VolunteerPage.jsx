import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import { motion } from 'framer-motion';

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    ward: '',
    role: 'volunteer',
    whatsapp: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }; // <-- add semicolon here

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="fixed top-0 left-0 w-full z-10 bg-white/80 backdrop-blur-sm">
        <BackButton className="m-4" />
      </div>

      <main className="container mx-auto px-4 pt-20 pb-16 lg:pt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Content */}
            <div className="text-left lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Let's build Nagpur
                <span className="text-orange-500"> together</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From local volunteers to digital warriors — every voice matters in shaping our city's future.
              </p>

              <div className="hidden lg:block space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Join the Community</h3>
                    <p className="text-gray-600">Be part of a growing network of change-makers</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Make an Impact</h3>
                    <p className="text-gray-600">Contribute to meaningful local initiatives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">Ward / Locality</label>
                  <input
                    type="text"
                    name="ward"
                    value={formData.ward}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                    placeholder="Enter your ward or locality"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">Preferred Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  >
                    <option value="volunteer">General Volunteer</option>
                    <option value="social">Social Media Warrior</option>
                    <option value="ground">On-ground Team Member</option>
                    <option value="technical">Technical Support</option>
                  </select>
                </div>

                <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-xl">
                  <input
                    type="checkbox"
                    id="whatsapp"
                    name="whatsapp"
                    checked={formData.whatsapp}
                    onChange={handleChange}
                    className="w-5 h-5 rounded text-orange-500 focus:ring-orange-500 border-gray-300"
                  />
                  <label htmlFor="whatsapp" className="text-sm text-gray-700">
                    Join our WhatsApp community for updates and coordination
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium hover:bg-orange-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-orange-500/20"
                >
                  Join the Movement
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default VolunteerPage;
