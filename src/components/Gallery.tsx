
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Plant Identifier",
      student: "Team Greenleaf",
      description: "An AI app that identifies 20+ common houseplants and provides care instructions.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Wildlife Tracker",
      student: "Team Safari",
      description: "Helps identify local wildlife and track animal populations in the Evanston area.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Recycling Helper",
      student: "Team EcoSmart",
      description: "Determines if items are recyclable and provides proper disposal instructions.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      quote: "My daughter came home every day excited about what she learned. Now she wants to study computer science in college!",
      author: "Parent of 8th grade student",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "I never thought I could build an AI app in just one week. This bootcamp changed how I think about technology.",
      author: "Jacob, 7th grade student",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
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
          <h2 className="animate-fade-in opacity-0 [animation-delay:0.2s] text-3xl font-bold text-gray-900 sm:text-4xl">Gallery</h2>
          <p className="animate-fade-in opacity-0 [animation-delay:0.3s] mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            See what our students have created
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
                              <p className="text-white text-xs uppercase tracking-wider">Student Project</p>
                              <h3 className="text-white text-lg font-bold">{project.title}</h3>
                              <p className="text-white/80 text-sm">by {project.student}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:flex-1 p-6">
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        <p className="mt-2 text-gray-600">{project.description}</p>
                        <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm">
                            <span className="font-semibold">Technologies used:</span> Teachable Machine, HTML/CSS, Gemini AI
                          </p>
                          <div className="mt-2 flex items-center">
                            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                              </svg>
                            </div>
                            <span className="ml-2 text-sm text-primary font-medium">View on InquestAI</span>
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

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 animate-fade-in opacity-0 [animation-delay:0.6s]">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 card-hover"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h10zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                  <p className="mt-4 text-sm font-medium text-gray-900">{testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
