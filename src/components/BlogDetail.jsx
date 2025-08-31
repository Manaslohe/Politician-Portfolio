import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogData from '../data/blogData';
import bannerBlogData from '../data/bannerBlogData';
import CallToAction from './CallToAction';
import BackButton from './BackButton';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    // Find the blog in bannerBlogData first, then fallback to blogData
    const currentBlog =
      bannerBlogData.find(blog => blog.id === parseInt(id)) ||
      blogData.find(blog => blog.id === parseInt(id));

    if (currentBlog) {
      setBlog(currentBlog);

      // Get related blogs only from blogData (excluding the current blog)
      const related = blogData
        .filter(b => b.id !== currentBlog.id)
        .sort(() => 0.5 - Math.random()) // Shuffle array
        .slice(0, 3);

      setRelatedBlogs(related);

      // Scroll to top
      window.scrollTo(0, 0);
    } else {
      // Redirect to blog list if blog not found
      navigate('/blog');
    }
  }, [id, navigate]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0640AD]"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <BackButton />
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-gray-900">
        <img 
          src={blog.image || blog.coverImage} 
          alt={blog.title} 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-16 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 flex items-center">
             
              <span className="text-sm text-gray-300">
                {new Date(blog.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              {blog.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              {blog.excerpt}
            </p>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <article className="bg-white shadow-md rounded-xl p-6 md:p-10">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-[#0640AD] prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: blog.content || "Content not available." }}
          />
        </article>
        
        {/* CTA Section */}
        <div className="mt-10 md:mt-16 bg-gradient-to-r from-[#0640AD] to-blue-600 rounded-xl p-6 md:p-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join #NagpurChaVikas</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Be part of the movement to transform Nagpur. Join our community of changemakers and contribute to the city's development.
          </p>
          <button className="bg-white text-[#0640AD] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Join the Movement
          </button>
        </div>
        
        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">More Articles You Might Like</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map(relatedBlog => (
                <div 
                  key={relatedBlog.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedBlog.id}`)}
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={relatedBlog.image} 
                      alt={relatedBlog.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium text-[#0640AD] bg-blue-50 px-2 py-1 rounded-full">
                      {relatedBlog.category || "General"}
                    </span>
                    <h3 className="font-bold text-lg mt-2 mb-2 hover:text-[#0640AD] transition-colors">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button
                onClick={() => navigate('/blog')}
                className="text-[#0640AD] font-medium hover:text-blue-700 flex items-center gap-1 mx-auto"
              >
                View all articles
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
};

export default BlogDetail;
