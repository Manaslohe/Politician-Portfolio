import React from 'react';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';

const AboutPage = () => {
  const timeline = [
    { year: '1966', event: 'Born in Nagpur, Maharashtra (23rd August)' },
    { year: '1985', event: 'Appointed as member of Indian National Congress' },
    { year: '1989', event: 'Completed B.Com from Dharampeth Arts & Commerce College, Nagpur' },
    { year: '2002-2005', event: 'Served as Mayor of Nagpur Municipal Corporation' },
    { year: '2010-2017', event: 'Leader of Opposition, Nagpur Municipal Corporation' },
    { year: '2014-present', event: 'President, Nagpur District Congress Committee' },
    { year: '2019', event: 'Elected as MLA from Nagpur West' },
    { year: '2023-present', event: 'Senate Member, RTM Nagpur University' },
    { year: '2024', event: 'Re-elected as MLA and contested Lok Sabha elections from Nagpur' }
  ];

  const roles = [
    'MLA – Nagpur West (2019-present)',
    'President – Nagpur District Congress Committee',
    'Former Mayor – Nagpur Municipal Corporation',
    'Senate Member – RTM Nagpur University',
    'Former Leader of Opposition – NMC (2010-2017)'
  ];

  const values = [
    'Grassroots Leadership',
    'Urban Development',
    'Youth Empowerment',
    'Social Justice',
    'Public Service'
  ];

  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="min-h-auto bg-gray-100"
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              About Vikas Pandurang Thakre
            </h1>
            <div className="w-24 h-1 bg-[#0640AD] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Born on August 23, 1966, Vikas Pandurang Thakre is a prominent Indian politician and 
              senior member of the Indian National Congress from Nagpur, Maharashtra. With over 40 
              years in public life, he currently serves as an MLA representing Nagpur West and as 
              the President of the Nagpur District Congress Committee. His journey from humble 
              beginnings to becoming a key political figure in Vidarbha region exemplifies his 
              dedication to public service and grassroots leadership.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Early Life Section - New Addition */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Early Life & Education</h2>
          <div className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            <p>
              Born to Pandurang and Nirmala Thakre, Vikas Thakre comes from a humble, non-political 
              background. He completed his Bachelor of Commerce degree from Dharampeth Arts & Commerce 
              College under Nagpur University in 1989, laying the foundation for his future in public service.
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
                <div className="w-24 pt-1 flex-shrink-0 text-[#0640AD] font-bold">{item.year}</div>
                <div className="flex-grow pl-8 border-l-2 border-gray-200 group-hover:border-[#0640AD] transition-colors duration-300">
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quotes Section with updated quotes */}
      <motion.section
        className="bg-gray-100 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Over four decades of public service have taught me that true leadership means being accessible to people at all times.",
              "Development must reach every corner of our constituency, leaving no citizen behind."
            ].map((quote, index) => (
              <blockquote key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-xl text-gray-700 italic mb-4">{quote}</p>
                <cite className="text-[#0640AD] font-semibold">- Vikas Thakre</cite>
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
                    <span className="w-2 h-2 bg-[#0640AD] rounded-full mr-4"></span>
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
                    <span className="w-2 h-2 bg-[#0640AD] rounded-full mr-4"></span>
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

