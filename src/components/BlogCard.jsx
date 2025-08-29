import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-xl cursor-pointer"
      onClick={() => navigate(`/blog/${blog.id}`)}
    >
      {/* Image Container with aspect ratio box */}
      <div className="relative pt-[56.25%] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Container */}
      <div className="p-5 md:p-6">
        {/* Date */}
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          {new Date(blog.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </div>
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 group-hover:text-[#0640AD] transition-colors duration-300">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base line-clamp-3 mb-4">
          {blog.excerpt}
        </p>

        {/* Read More Link */}
        <div className="flex items-center text-[#0640AD] font-medium text-sm group-hover:font-semibold transition-all duration-300">
          Read more
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
