import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Calendar, User, Clock, Eye, ChevronRight } from 'lucide-react';
import BackButton from '../components/BackButton';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Water Supply Issue in Pratap Nagar Addressed by Vikas Thakre",
    author: "Vikas Thakre Team",
    date: "2024-07-30",
    image: "/blogs/water-supply.jpg",
    categories: ["Water", "Nagpur", "Public Welfare"],
    excerpt: "Addressing the persistent water supply issues in Pratap Nagar that have been affecting thousands of residents for months.",
    readTime: "5 min read",
    views: "1.2k",
  },
  // ...existing blog posts...
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simulate loading
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearchTerm = post.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.categories.includes(selectedCategory);
      return matchesSearchTerm && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <BackButton />

      {/* Hero Section */}
      <div className="relative bg-white text-gray-800 pt-16 pb-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Stay Updated with Our Latest Blogs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Explore insights, updates, and stories that shape our community.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0640AD] focus:border-[#0640AD] transition-colors"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors"
          >
            <Filter size={18} />
            Filters
          </button>
        </div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center py-20"
            >
              <div className="w-16 h-16 border-4 border-[#0640AD] border-t-transparent rounded-full animate-spin" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Blog Cards */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map(post => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform transform hover:scale-105"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <User size={16} />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye size={16} />
                          {post.views}
                        </div>
                      </div>
                      <button className="mt-4 w-full bg-[#0640AD] text-white py-2 rounded-lg hover:bg-[#05368F] transition-colors flex items-center justify-center gap-2">
                        Read More
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogPage;
