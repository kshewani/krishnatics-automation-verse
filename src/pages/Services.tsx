
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "AI-Enabled Custom Software",
      description: "Bespoke software solutions powered by artificial intelligence to streamline your unique business processes and enhance operational efficiency.",
      features: [
        "Custom AI algorithm development",
        "Integration with existing systems",
        "Scalable architecture design",
        "Real-time data processing",
        "Advanced analytics dashboard"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational interfaces that provide 24/7 customer support and enhance user engagement through natural language processing.",
      features: [
        "Natural language understanding",
        "Multi-language support",
        "Integration with CRM systems",
        "Sentiment analysis",
        "Continuous learning capabilities"
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
    },
    {
      title: "Agentic AI Solutions",
      description: "Autonomous AI agents that can perform complex tasks, make decisions, and adapt to changing conditions without human intervention.",
      features: [
        "Autonomous decision-making",
        "Multi-agent coordination",
        "Dynamic task allocation",
        "Learning from interactions",
        "Goal-oriented behavior"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
    },
    {
      title: "AI Corporate Training Programs",
      description: "Comprehensive training initiatives to upskill your workforce in AI technologies and prepare them for the future of work.",
      features: [
        "Customized curriculum design",
        "Hands-on workshops",
        "AI literacy programs",
        "Leadership training",
        "Certification programs"
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
    },
    {
      title: "Enterprise Blockchain Solutions",
      description: "Secure, transparent, and decentralized blockchain implementations for enterprise-level applications and smart contracts.",
      features: [
        "Smart contract development",
        "Decentralized applications (DApps)",
        "Blockchain integration",
        "Security auditing",
        "Consensus mechanism design"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI automation solutions designed to transform your business operations and drive unprecedented growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl border border-cyan-500/20"
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can revolutionize your operations
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
