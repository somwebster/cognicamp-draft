import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
const HeroSection = () => {
  return <div className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Abstract shapes */}
      <div className="hidden lg:block absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center py-16 md:py-20 lg:py-28">
          <div className="order-2 md:order-1">
            <h1 className="animate-fade-in opacity-0 [animation-delay:0.2s] text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Midwest Vibe – 
              <span className="text-primary block">Build Your First AI App</span>
            </h1>
            <p className="animate-fade-in opacity-0 [animation-delay:0.4s] mt-6 text-xl text-gray-600 max-w-2xl">
              A hands-on bootcamp for K–12 students to learn AI by building, creating, and sharing.
            </p>
            <p className="animate-fade-in opacity-0 [animation-delay:0.5s] mt-4 text-xl font-medium text-primary italic">
              Powered by Inquestai.com
            </p>
            
            {/* Event details with icons */}
            <div className="animate-fade-in opacity-0 [animation-delay:0.5s] mt-6 flex flex-col space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="text-lg text-gray-700">Illinois, USA</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <span className="text-lg text-gray-700">July 1 - July 5</span>
              </div>
            </div>
            
            <div className="animate-fade-in opacity-0 [animation-delay:0.6s] mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-blue-600 text-white w-full sm:w-auto">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              {/* Animated shape 1 */}
              <div className="absolute left-0 top-0 w-40 h-40 md:w-48 md:h-48 animate-float" style={{
              animation: 'float 7s ease-in-out infinite'
            }}>
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80&blend=4285F4&blend-alpha=10&blend-mode=normal&blend-saturation=100" alt="Tech background" className="w-full h-full object-contain rounded-lg" />
              </div>
              
              {/* Animated shape 2 */}
              <div className="absolute right-0 bottom-0 w-48 h-48 md:w-56 md:h-56 animate-float" style={{
              animation: 'float 6s ease-in-out infinite 0.5s'
            }}>
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80&blend=4285F4&blend-alpha=10&blend-mode=normal&blend-saturation=100" alt="Student coding" className="w-full h-full object-contain rounded-lg" />
              </div>
              
              {/* Central animated image */}
              <div className="absolute left-1/4 top-1/4 w-52 h-52 md:w-64 md:h-64 z-10 animate-float" style={{
              animation: 'float 8s ease-in-out infinite 1s'
            }}>
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80&blend=4285F4&blend-alpha=5&blend-mode=normal&blend-saturation=50" alt="AI learning" className="w-full h-full object-contain rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;