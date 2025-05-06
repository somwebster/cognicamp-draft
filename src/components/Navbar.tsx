
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { RegistrationModal } from './RegistrationModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">CogniCamp</span>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium transition-colors">Home</a>
            <a href="#what-you-build" className="text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium transition-colors">What You'll Build</a>
            <a href="#daily-breakdown" className="text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium transition-colors">Schedule</a>
            <a href="#faq" className="text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium transition-colors">FAQ</a>
            <a 
              href="#register" 
              className="bg-primary text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              onClick={handleRegisterClick}
            >
              Register Now
            </a>
          </div>
          
          <div className="flex md:hidden items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#what-you-build" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">What You'll Build</a>
            <a href="#daily-breakdown" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Schedule</a>
            <a href="#faq" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
            <a 
              href="#register" 
              className="bg-primary text-white block px-3 py-2 rounded-md text-base font-medium mt-4"
              onClick={handleRegisterClick}
            >
              Register Now
            </a>
          </div>
        </div>
      )}

      <RegistrationModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </nav>
  );
};

export default Navbar;
