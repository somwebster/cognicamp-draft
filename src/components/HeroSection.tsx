
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Abstract shapes */}
      <div className="hidden lg:block absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="animate-fade-in opacity-0 [animation-delay:0.2s] text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              AI Makers Lab – 
              <span className="text-primary block">Build Your First AI App</span>
            </h1>
            <p className="animate-fade-in opacity-0 [animation-delay:0.4s] mt-6 text-xl text-gray-600 max-w-2xl">
              A hands-on bootcamp for K–12 students to learn AI by building, creating, and sharing.
            </p>
            <p className="animate-fade-in opacity-0 [animation-delay:0.5s] mt-4 text-xl font-medium text-primary italic">
              Your quest to build with AI starts here.
            </p>
            <div className="animate-fade-in opacity-0 [animation-delay:0.6s] mt-10 sm:flex space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-primary hover:bg-blue-600 text-white">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-blue-50">
                View Past Projects
              </Button>
            </div>
          </div>
        </div>
        
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="animate-float h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-contain bg-center bg-no-repeat" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')" }}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
