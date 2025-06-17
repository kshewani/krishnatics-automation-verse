
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Industries",
      position: "CEO",
      content: "Krishnatics Labs transformed our operations with their AI chatbot solution. Customer response time improved by 75% and satisfaction scores reached all-time highs.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c2c5?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "Global Finance Solutions",
      position: "CTO",
      content: "The custom AI software developed by Krishnatics Labs revolutionized our risk assessment process. We've seen a 60% reduction in processing time and improved accuracy.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      company: "Healthcare Innovations",
      position: "Director of Operations",
      content: "Their enterprise blockchain solution provided unprecedented transparency and security for our patient data management. Truly innovative work!",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform with AI automation
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-cyan-500/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full border-2 border-cyan-400"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-lg md:text-xl text-gray-200 mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <p className="text-cyan-400 font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentTestimonial].position} at {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
