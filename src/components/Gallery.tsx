
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = [{
    title: "Voice-Activated Weather Assistant",
    creator: "Lincoln Middle School, 7th Grade",
    description: "A weather app that uses speech recognition to provide forecasts. Students learned about APIs, natural language processing, and voice interfaces while building a practical tool that provides real-time weather updates for their community.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Wildlife Identification App",
    creator: "Evanston Elementary, 5th Grade",
    description: "An image recognition app that helps identify local Illinois wildlife. Students collected and labeled images from local parks, then trained a simplified machine learning model to identify common birds, mammals, and insects native to Illinois.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Math Homework Helper",
    creator: "Northside High School, 10th Grade",
    description: "An interactive app that solves and explains math problems step-by-step. High school students created algorithms to break down algebra, geometry, and calculus problems while providing clear explanations for younger students.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Illinois History Chatbot",
    creator: "Springfield Middle School, 8th Grade",
    description: "A conversational AI that answers questions about Illinois history. Students researched state history and created a comprehensive knowledge base that powers their educational chatbot, making local history more accessible and engaging.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Recycling Sorter",
    creator: "Chicago STEM Academy, 6th Grade",
    description: "A computer vision app that identifies recyclable materials. Students built and trained an image recognition model to help their school community sort waste properly, reducing contamination in recycling bins by 43% in their first month.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }];

  const nextSlide = () => {
    setCurrentSlide(prev => prev === projects.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? projects.length - 1 : prev - 1);
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Student Project Gallery</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            See what students have built in previous bootcamps
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <Card className="border border-gray-200">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <img 
                      src={projects[currentSlide].image} 
                      alt={projects[currentSlide].title}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-2">{projects[currentSlide].title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{projects[currentSlide].creator}</p>
                    <p className="text-gray-700">{projects[currentSlide].description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <button 
            onClick={prevSlide} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-4 space-x-2">
            {projects.map((_, idx) => (
              <button 
                key={idx} 
                className={`h-2.5 w-2.5 rounded-full ${idx === currentSlide ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
