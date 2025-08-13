import React from 'react';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';

const AboutPage = () => {
  const timeline = [
    { year: '1965', event: 'Born in Nagpur, Maharashtra' },
    { year: '1980s–90s', event: 'Early involvement in student activism through NSUI' },
    { year: '2000s', event: 'Held leadership roles in Youth Congress Maharashtra' },
    { year: '2004–2009', event: 'Served as Mayor of Nagpur Municipal Corporation' },
    { year: '2019 & 2024', event: 'Elected as MLA, Nagpur West (INC)' }
  ];

  const roles = [
    'MLA – Nagpur West (INC)',
    'Former Mayor – Nagpur Municipal Corporation',
    'Former President – NSUI Maharashtra & Youth Congress Maharashtra'
  ];

  const values = [
    'Secularism & Social Justice',
    'Democratic Empowerment',
    'Inclusive Growth'
  ];

  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      <BackButton />

      {/* Hero Section */}
      <motion.section
        className="bg-white py-20 shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              About Vikas Thakre
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Vikas Pandurang Thakre is a two-time elected Member of Legislative Assembly (MLA) from 
              Nagpur West, Maharashtra. A seasoned political leader affiliated with the Indian National 
              Congress, he has held multiple public offices including Mayor of Nagpur and President of 
              Maharashtra NSUI and Youth Congress.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Political Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex group">
                <div className="w-24 pt-1 flex-shrink-0 text-orange-500 font-bold">{item.year}</div>
                <div className="flex-grow pl-8 border-l-2 border-gray-200 group-hover:border-orange-500 transition-colors duration-300">
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quotes Section */}
      <motion.section
        className="bg-gray-100 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Politics is not a profession, it's a pledge to serve.",
              "Every citizen deserves dignity, opportunity, and action from their representative."
            ].map((quote, index) => (
              <blockquote key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-xl text-gray-700 italic mb-4">{quote}</p>
                <cite className="text-orange-500 font-semibold">- Vikas Thakre</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Roles & Values Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Leadership Roles</h2>
              <ul className="space-y-4">
                {roles.map((role, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-4"></span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Party Values</h2>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-4"></span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;

