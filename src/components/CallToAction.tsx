
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="register" className="py-16 bg-gradient-to-br from-primary/90 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Spots are limited – Join the AI movement today!
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Don't miss this opportunity to learn cutting-edge AI skills in a fun, 
            supportive environment. Our bootcamp fills up quickly!
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
              Sponsor a Student
            </Button>
          </div>
          
          <div className="mt-8 text-blue-100">
            <p>Have questions? Contact us at:</p>
            <a href="mailto:connect@aimakerslab.org" className="font-semibold text-white hover:underline">
              connect@aimakerslab.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
