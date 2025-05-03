
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center">
                <span className="font-bold text-white text-2xl">AI Makers Lab</span>
              </div>
              <p className="mt-3 text-sm text-gray-400 text-center md:text-left">
                Empowering the next generation of AI innovators
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Program</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#what-you-build" className="text-gray-400 hover:text-white">What You'll Build</a></li>
                <li><a href="#daily-breakdown" className="text-gray-400 hover:text-white">Daily Schedule</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white">Student Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="mailto:connect@aimakerslab.org" className="text-gray-400 hover:text-white">Email Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Become a Mentor</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Sponsor</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            
            <p className="mt-6 md:mt-0 text-base text-gray-400 text-center">
              In collaboration with InquestAI | Powered by local educators & mentors
            </p>
            
            <p className="mt-6 md:mt-0 text-sm text-gray-500">
              &copy; {new Date().getFullYear()} AI Makers Lab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
