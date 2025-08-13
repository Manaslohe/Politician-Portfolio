import React from 'react';
import { useNavigate } from 'react-router-dom';

const SAMPLE_BLOGS = [
  {
    id: 1,
    title: "Development Plans",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Updated image
    excerpt: "At Vikas Thakre's office, we provide a variety of services to empower communities and drive sustainable development.",
    date: "2024-01-15",
    category: "Infrastructure"
  },
  {
    id: 2,
    title: "Voter Engagement",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Updated image
    excerpt: "Vikas Thakre offers services that empower communities through active participation and democratic processes.",
    date: "2024-01-10",
    category: "Community"
  },
  {
    id: 3,
    title: "Our Services",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Updated image
    excerpt: "We provide services that empower communities through comprehensive support and dedicated public service.",
    date: "2024-01-05",
    category: "Public Service"
  }
];

const BlogList = () => {
  const navigate = useNavigate();

  return (
    <section id="blog-list-section" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-orange-500">Latest</span>{' '}
            <span className="text-gray-900">Updates</span>
          </h2>
        </div>
        
        {/* Cards Grid */}
        <div className="grid gap-8 md:gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_BLOGS.map((blog, index) => (
            <div
              key={blog.id}
              className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                index === 0 
                  ? 'shadow-lg hover:shadow-2xl hover:shadow-blue-500/10' 
                  : index === 1 
                  ? 'shadow-lg hover:shadow-2xl hover:shadow-purple-500/10'
                  : 'shadow-lg hover:shadow-2xl hover:shadow-green-500/10'
              }`}
            >
              {/* Image Container */}
              <div className="relative h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${
                  index === 0 
                    ? 'bg-gradient-to-t from-blue-600 to-transparent' 
                    : index === 1 
                    ? 'bg-gradient-to-t from-purple-600 to-transparent'
                    : 'bg-gradient-to-t from-green-600 to-transparent'
                }`}></div>

                {/* Category Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${
                  index === 0 
                    ? 'bg-blue-500' 
                    : index === 1 
                    ? 'bg-purple-500'
                    : 'bg-green-500'
                }`}>
                  {blog.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 lg:p-8 space-y-4">
                {/* Title */}
                <h3 className={`text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                  index === 0 
                    ? 'text-gray-800 group-hover:text-blue-600' 
                    : index === 1 
                    ? 'text-gray-800 group-hover:text-purple-600'
                    : 'text-gray-800 group-hover:text-green-600'
                }`}>
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                  {blog.excerpt}
                </p>

                {/* Bottom Section */}
                <div className="pt-4 flex items-center justify-between">
                  {/* Date */}
                  <span className="text-xs lg:text-sm text-gray-400 font-medium">
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>

                  {/* Read More Arrow */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    index === 0 
                      ? 'bg-blue-50 group-hover:bg-blue-500' 
                      : index === 1 
                      ? 'bg-purple-50 group-hover:bg-purple-500'
                      : 'bg-green-50 group-hover:bg-green-500'
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-all duration-300 group-hover:translate-x-1 ${
                        index === 0 
                          ? 'text-blue-500 group-hover:text-white' 
                          : index === 1 
                          ? 'text-purple-500 group-hover:text-white'
                          : 'text-green-500 group-hover:text-white'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-transparent rounded-3xl transition-all duration-300 ${
                index === 0 
                  ? 'group-hover:border-blue-200' 
                  : index === 1 
                  ? 'group-hover:border-purple-200'
                  : 'group-hover:border-green-200'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button
            className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
            onClick={() => navigate('/blog')}
          >
            <span className="flex items-center gap-2">
              View All Updates
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogList;