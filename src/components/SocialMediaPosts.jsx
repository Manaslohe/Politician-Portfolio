import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const SocialMediaPosts = () => {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      content: "Proud to announce our new community initiative that will benefit thousands of local residents. Together we can make a difference! 🌟 #CommunityFirst #Progress",
      likes: "2.5K",
      comments: "342",
      shares: "128"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      content: "Great meeting with youth leaders today discussing future development plans. The energy and ideas were incredible! 💡 #YouthEmpowerment #Leadership",
      likes: "1.8K",
      comments: "245",
      shares: "89"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a",
      content: "Celebrating the success of our recent education campaign. Thank you to all volunteers and supporters! 🎓 #Education #Community",
      likes: "3.2K",
      comments: "421",
      shares: "156"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Social Media Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay connected with our latest updates and community engagement
          </p>
          <div className="w-24 h-1 bg-[#0640AD] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={post.image} 
                alt="Post" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-800 mb-4">{post.content}</p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <Heart size={20} className="text-gray-500" />
                    <span className="text-gray-600 text-sm">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle size={20} className="text-gray-500" />
                    <span className="text-gray-600 text-sm">{post.comments}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Share2 size={20} className="text-gray-500" />
                    <span className="text-gray-600 text-sm">{post.shares}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaPosts;
