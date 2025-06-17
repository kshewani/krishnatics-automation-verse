
import React from 'react';
import { Calendar } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Enterprise Automation",
      excerpt: "Exploring how artificial intelligence is revolutionizing business processes and creating new opportunities for growth and efficiency.",
      author: "Dr. Krishnan Patel",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "AI Trends",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&w=800&h=400&fit=crop",
      tags: ["Artificial Intelligence", "Automation", "Enterprise"]
    },
    {
      title: "Building Intelligent Chatbots: Best Practices",
      excerpt: "A comprehensive guide to developing AI-powered chatbots that provide exceptional user experiences and drive business value.",
      author: "Sarah Technology",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&w=800&h=400&fit=crop",
      tags: ["Chatbots", "NLP", "User Experience"]
    },
    {
      title: "Blockchain Technology in Healthcare: Security and Privacy",
      excerpt: "Examining the transformative potential of blockchain technology in securing patient data and improving healthcare interoperability.",
      author: "Michael Chen",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Blockchain",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&w=800&h=400&fit=crop",
      tags: ["Blockchain", "Healthcare", "Security"]
    },
    {
      title: "Machine Learning for Predictive Analytics",
      excerpt: "How machine learning algorithms are enabling businesses to forecast trends, optimize operations, and make data-driven decisions.",
      author: "Dr. Krishnan Patel",
      date: "November 28, 2024",
      readTime: "15 min read",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&w=800&h=400&fit=crop",
      tags: ["Machine Learning", "Analytics", "Data Science"]
    },
    {
      title: "The Rise of Agentic AI: Autonomous Decision Making",
      excerpt: "Understanding how autonomous AI agents are changing the landscape of business automation and decision-making processes.",
      author: "Emily Rodriguez",
      date: "November 20, 2024",
      readTime: "9 min read",
      category: "AI Innovation",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&w=800&h=400&fit=crop",
      tags: ["Agentic AI", "Automation", "Decision Making"]
    },
    {
      title: "AI Training Programs: Preparing Your Workforce",
      excerpt: "Essential strategies for implementing effective AI training programs that prepare your team for the future of work.",
      author: "Sarah Technology",
      date: "November 15, 2024",
      readTime: "11 min read",
      category: "Training",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&w=800&h=400&fit=crop",
      tags: ["Training", "Workforce", "Education"]
    }
  ];

  const categories = ["All", "AI Trends", "Development", "Blockchain", "Machine Learning", "AI Innovation", "Training"];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Insights & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Innovation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest thoughts on AI, automation, and digital transformation
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-gray-400 text-sm space-x-4">
                    <span>{post.author}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 text-cyan-400 rounded-lg hover:from-cyan-500/30 hover:to-purple-600/30 transition-all duration-300">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with AI Innovations
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest insights and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
