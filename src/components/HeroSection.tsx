
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
              CogniCamp –
              <span className="text-primary block text-3xl sm:text-4xl md:text-5xl">Build AI Apps. No Code. Pure Vibe.</span>
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
              {/* Main hero image */}
              <div className="w-full h-full flex justify-center items-center animate-float" style={{
                animation: 'float 8s ease-in-out infinite'
              }}>
                <img 
                  src="/lovable-uploads/3273cf58-33f6-48cb-8b7e-5e0dd07c0cd2.png" 
                  alt="AI learning illustration" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;
