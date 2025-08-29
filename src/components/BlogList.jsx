import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, ArrowRight, Clock } from 'lucide-react';
import blogData from '../data/blogData';
import bannerBlogData from '../data/bannerBlogData';
import BlogCard from './BlogCard';

const BlogList = () => {
  const navigate = useNavigate();
  
  // Fetch the banner blog from the separate array
  const bannerBlog = bannerBlogData[0];
  
  // Fetch the remaining blogs from the main blog data
  const displayedBlogs = blogData.slice(0, 3);
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="blog-list-section" className="py-16 lg:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-[#0640AD]">Latest</span>{' '}
            <span className="text-gray-900">Updates</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about our initiatives, developments, and community activities in Nagpur.
          </p>
        </div>
        
        {/* Featured Latest Blog Banner (60% width on desktop, full width on mobile) */}
        <div className="mb-16">
          <div className="relative mx-auto w-full md:w-[80%] lg:w-[70%] overflow-hidden rounded-2xl shadow-xl bg-white">
            {/* "Latest" badge */}
            <div className="absolute top-4 left-4 z-10 bg-[#0640AD] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              #Latest
            </div>
            
            {/* Image container */}
            <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
              <img 
                src={bannerBlog.coverImage} 
                alt={bannerBlog.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Date and reading time */}
              <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-3 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarDays size={16} />
                  <span>{formatDate(bannerBlog.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{bannerBlog.readTime} min read</span>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {bannerBlog.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 line-clamp-3">
                {bannerBlog.excerpt}
              </p>
              
              {/* Read More button */}
              <button 
                onClick={() => navigate(`/blog/${bannerBlog.id}`)}
                className="flex items-center gap-2 text-[#0640AD] font-semibold hover:underline"
              >
                Read Full Article <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Section title for other blogs */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-2xl font-bold text-gray-900">More Updates</h3>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>
        
        {/* Cards Grid for other blogs */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button
            className="group bg-[#0640AD] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center gap-2 mx-auto"
            onClick={() => navigate('/blog')}
          >
            View All Updates
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogList;