
import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Global Bank Digital Transformation",
      client: "Major Financial Institution",
      category: "AI-Enabled Custom Software",
      challenge: "Manual loan processing taking weeks, high error rates, and poor customer experience",
      solution: "Implemented AI-powered loan assessment system with machine learning algorithms for risk analysis",
      results: [
        "Reduced processing time from 2 weeks to 2 hours",
        "Decreased error rates by 87%",
        "Improved customer satisfaction by 92%",
        "Saved $2.3M annually in operational costs"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      technologies: ["Machine Learning", "Natural Language Processing", "Cloud Computing", "API Integration"]
    },
    {
      title: "E-commerce Customer Service Revolution",
      client: "Leading Retail Platform",
      category: "AI Chatbots",
      challenge: "Overwhelming customer inquiries, 24/7 support needs, and high operational costs",
      solution: "Deployed intelligent chatbot with advanced NLP capabilities and seamless human handoff",
      results: [
        "Handled 78% of inquiries without human intervention",
        "Reduced response time from hours to seconds",
        "Cut customer service costs by 65%",
        "Increased customer satisfaction score to 4.8/5"
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      technologies: ["Natural Language Processing", "Sentiment Analysis", "Multi-language Support", "CRM Integration"]
    },
    {
      title: "Supply Chain Optimization System",
      client: "Manufacturing Giant",
      category: "Agentic AI Solutions",
      challenge: "Complex supply chain management, inventory optimization, and demand forecasting",
      solution: "Implemented autonomous AI agents for supply chain management and predictive analytics",
      results: [
        "Optimized inventory levels reducing waste by 45%",
        "Improved demand forecasting accuracy by 89%",
        "Automated 95% of routine supply chain decisions",
        "Increased operational efficiency by 73%"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      technologies: ["Predictive Analytics", "Multi-Agent Systems", "IoT Integration", "Real-time Processing"]
    },
    {
      title: "Healthcare Data Security Platform",
      client: "Regional Healthcare Network",
      category: "Enterprise Blockchain",
      challenge: "Patient data security, interoperability between systems, and regulatory compliance",
      solution: "Built blockchain-based patient data management system with smart contracts",
      results: [
        "Achieved 100% data integrity and security",
        "Reduced data breach incidents to zero",
        "Improved interoperability across 50+ facilities",
        "Ensured full HIPAA compliance"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      technologies: ["Blockchain", "Smart Contracts", "Encryption", "Distributed Systems"]
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Studies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped organizations achieve remarkable results through innovative AI solutions
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-cyan-500/20 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
                      <span className="text-cyan-400 font-semibold">{study.category}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {study.title}
                    </h3>
                    
                    <p className="text-xl text-gray-300 font-medium">
                      Client: {study.client}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover rounded-xl shadow-lg border border-cyan-500/20"
                    />
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-4">Results Achieved</h4>
                      <ul className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you achieve similar results
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
