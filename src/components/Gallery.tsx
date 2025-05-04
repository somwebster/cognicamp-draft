
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Predictive Maintenance System",
      creator: "Manufacturing Solutions Inc.",
      description: "An AI-powered system that analyzes equipment sensor data to predict failures before they occur, reducing downtime by 37% and maintenance costs by 28% across 12 production facilities.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Natural Language Processing for Legal Documents",
      creator: "LegalTech Innovations",
      description: "Custom NLP solution that reviews and extracts key information from legal contracts, reducing document processing time by 82% and improving accuracy to 96.5% for a leading law firm.",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Customer Behavior Analytics Platform",
      creator: "RetailMetrics",
      description: "An integrated AI solution that analyzes customer interactions across digital and physical touchpoints, helping a retail chain increase conversion rates by 23% and customer retention by 18%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Medical Diagnostic Assistant",
      creator: "HealthAI Solutions",
      description: "AI-powered diagnostic tool that analyzes medical images with 94% accuracy, now deployed in 37 hospitals nationwide and assisting radiologists in early detection of conditions.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Supply Chain Optimization Engine",
      creator: "Logistics International",
      description: "Machine learning solution that optimizes global supply chains in real-time, resulting in 15% reduction in shipping costs and 22% decrease in inventory holding requirements.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="animate-fade-in opacity-0 [animation-delay:0.2s] text-3xl font-bold text-gray-900 sm:text-4xl">Success Stories</h2>
          <p className="animate-fade-in opacity-0 [animation-delay:0.3s] mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Real-world AI solutions built with InquestAI
          </p>
        </div>

        {/* Project carousel */}
        <div className="mt-12 relative animate-fade-in opacity-0 [animation-delay:0.4s]">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full p-4">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="md:flex">
                      <div className="md:flex-1">
                        <div className="h-48 md:h-full bg-gray-200 relative">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                            <div>
                              <p className="text-white text-xs uppercase tracking-wider">Enterprise Solution</p>
                              <h3 className="text-white text-lg font-bold">{project.title}</h3>
                              <p className="text-white/80 text-sm">by {project.creator}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:flex-1 p-6">
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        <p className="mt-2 text-gray-600">{project.description}</p>
                        <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm">
                            <span className="font-semibold">Technologies used:</span> InquestAI, Computer Vision, Natural Language Processing, Predictive Analytics
                          </p>
                          <div className="mt-2 flex items-center">
                            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                              </svg>
                            </div>
                            <span className="ml-2 text-sm text-primary font-medium">View Case Study</span>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center">
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                              {project.creator.charAt(0)}
                            </div>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">ROI: 3.8x</p>
                            <p className="text-sm text-gray-500">Implementation time: 12 weeks</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {projects.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
