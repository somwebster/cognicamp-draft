
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Image Recognition Game",
      creator: "Evanston Middle School",
      description: "6th grade students created an interactive game that recognizes everyday objects using AI image recognition. Students collected and labeled over 500 images to train their model, achieving 87% accuracy in identifying common classroom items.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Weather Prediction Assistant",
      creator: "Chicago STEM Academy",
      description: "A team of 4th and 5th graders built a weather prediction tool that analyzes local patterns and gives suggestions for outdoor activities. The students combined historical weather data with machine learning to predict conditions with 72% accuracy.",
      image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Recycling Helper",
      creator: "Springfield Junior High",
      description: "8th grade environmental club members developed an app that helps users identify whether items can be recycled by analyzing photos. The AI model was trained on 1,200+ images of common household waste items and achieved 83% classification accuracy.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Language Learning Buddy",
      creator: "Rockford Elementary",
      description: "3rd graders created an interactive language learning assistant that helps students practice Spanish vocabulary through voice recognition. The app recognizes pronunciation patterns and provides friendly feedback to improve language skills.",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Prairie Wildlife Identifier",
      creator: "Champaign Science Club",
      description: "Middle school students developed an AI tool that identifies native Illinois prairie plants and animals from photos. The project combined computer vision with a database of regional wildlife, helping students learn about local ecosystems.",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
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
          <h2 className="animate-fade-in opacity-0 [animation-delay:0.2s] text-3xl font-bold text-gray-900 sm:text-4xl">Midwest Student Innovations</h2>
          <p className="animate-fade-in opacity-0 [animation-delay:0.3s] mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Amazing projects created by Illinois K-12 students in our AI bootcamps
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
                            <span className="font-semibold">Skills learned:</span> Image Recognition, Data Collection, Model Training, User Experience Design
                          </p>
                          <div className="mt-2 flex items-center">
                            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                              </svg>
                            </div>
                            <span className="ml-2 text-sm text-primary font-medium">View Project Demo</span>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center">
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                              {project.creator.charAt(0)}
                            </div>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Program: 5-Day AI Bootcamp</p>
                            <p className="text-sm text-gray-500">Spring 2024 Cohort</p>
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
