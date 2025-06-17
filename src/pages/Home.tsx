
import React from 'react';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Testimonials />
      
      {/* AI Technology Showcase */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powered by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Advanced AI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge solutions leverage the latest in artificial intelligence and machine learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Machine Learning",
                description: "Advanced algorithms that learn and adapt to your business needs",
                icon: "🧠"
              },
              {
                title: "Natural Language Processing",
                description: "Sophisticated communication interfaces for seamless human-AI interaction",
                icon: "💬"
              },
              {
                title: "Computer Vision",
                description: "Visual recognition and analysis capabilities for enhanced automation",
                icon: "👁️"
              },
              {
                title: "Predictive Analytics",
                description: "Data-driven insights to forecast trends and optimize decision-making",
                icon: "📊"
              },
              {
                title: "Robotic Process Automation",
                description: "Intelligent automation of repetitive tasks and workflows",
                icon: "🤖"
              },
              {
                title: "Deep Learning",
                description: "Neural networks that solve complex problems with unprecedented accuracy",
                icon: "🔬"
              }
            ].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
