import React from 'react';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

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
      <div className="relative bg-white text-gray-800 pt-16 pb-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Get in Touch with Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or need assistance? We're here to help. Reach out to us today.
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          className="grid lg:grid-cols-2 gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0640AD] focus:border-[#0640AD] transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email / Phone
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0640AD] focus:border-[#0640AD] transition-all"
                  placeholder="Enter your email or phone"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0640AD] focus:border-[#0640AD] transition-all"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0640AD] text-white py-3 rounded-lg font-medium hover:bg-[#05368F] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Office Address</h3>
              <address className="not-italic text-gray-600 space-y-2">
                <p>Office of MLA Vikas Thakre</p>
                <p>Nagpur West Constituency, Maharashtra</p>
                <p>Pin: 4400XX</p>
              </address>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Details</h3>
              <div className="space-y-2 text-gray-600">
                <p>Email: <a href="mailto:contact@vikasthakre.in" className="text-[#0640AD] hover:underline">contact@vikasthakre.in</a></p>
                <p>Phone: <a href="tel:+91XXXXXXXXXX" className="text-[#0640AD] hover:underline">+91-XXXXXXXXXX</a></p>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-[300px] rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default ContactPage;
