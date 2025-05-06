
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const DailyBreakdown = () => {
  const [openDay, setOpenDay] = useState<number | null>(null);
  const days = [{
    number: 1,
    title: "Train your first image AI",
    color: "bg-blue-500",
    content: ["Understand the basics of image classification", "Collect and label training data", "Train your first model using Teachable Machine"]
  }, {
    number: 2,
    title: "Build the app front-end",
    color: "bg-green-500",
    content: ["Design the user interface for your application", "Learn basic HTML and CSS concepts", "Integrate your trained model into a web page"]
  }, {
    number: 3,
    title: "Add Gemini AI",
    color: "bg-orange-500",
    content: ["Introduction to Google's Gemini AI capabilities", "Generate creative descriptions from image detections", "Add intelligent feedback to your application"]
  }, {
    number: 4,
    title: "Improve + Storyboard",
    color: "bg-red-500",
    content: ["Refine your model with additional training data", "Improve the user interface and experience", "Plan and create a presentation storyboard"]
  }, {
    number: 5,
    title: "Present & Publish",
    color: "bg-purple-500",
    content: ["Final touches and improvements", "Present your project to the group", "Publish your creation on InquestAI"]
  }];

  const toggleDay = (index: number) => {
    if (openDay === index) {
      setOpenDay(null);
    } else {
      setOpenDay(index);
    }
  };

  return <section id="daily-breakdown" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Daily Breakdown</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Our step-by-step learning journey over the week
          </p>
        </div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block" />
          
          {days.map((day, index) => (
            <div key={index} className="mb-8 relative z-10">
              {/* Timeline item */}
              <div className="flex flex-col md:flex-row items-center">
                {/* Left side - visible on desktop */}
                <div className="md:w-1/2 md:pr-12 hidden md:block">
                  {index % 2 === 0 && (
                    <div className="flex justify-end">
                      <Collapsible className={`${day.color} text-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 w-80 flex flex-col`}>
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-xl font-bold">Day {day.number}</h3>
                        </div>
                        <p className="text-white/90 font-medium mb-4">{day.title}</p>
                        
                        <ul className="space-y-2 mt-2">
                          {day.content.map((item, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <div className="h-4 w-4 bg-white/30 rounded-full flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                                <svg className="h-2 w-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-white/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <CollapsibleTrigger className="mt-4 w-full flex items-center justify-center text-white/80 hover:text-white transition-colors">
                          <div className="flex items-center space-x-1">
                            <span className="text-sm font-medium">Show details</span>
                            <ChevronDown className="h-4 w-4" />
                          </div>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent className="mt-4 pt-3 border-t border-white/20">
                          <div className="text-sm text-white/90">
                            <p>Additional information about Day {day.number}</p>
                            <ul className="mt-2 space-y-1 list-disc list-inside pl-2">
                              <li>Begin with setup and preparation</li>
                              <li>Focus on hands-on practice</li>
                              <li>Complete daily challenges</li>
                            </ul>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  )}
                </div>
                
                {/* Circle indicator */}
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className={`${day.color} h-12 w-12 rounded-full border-4 border-white shadow flex items-center justify-center text-white font-bold cursor-pointer`} onClick={() => toggleDay(index)}>
                    {day.number}
                  </div>
                </div>

                {/* Right side - visible on desktop */}
                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  {index % 2 === 1 && (
                    <div className="flex justify-start">
                      <Collapsible className={`${day.color} text-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 w-80 flex flex-col`}>
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-xl font-bold">Day {day.number}</h3>
                        </div>
                        <p className="text-white/90 font-medium mb-4">{day.title}</p>
                        
                        <ul className="space-y-2 mt-2">
                          {day.content.map((item, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <div className="h-4 w-4 bg-white/30 rounded-full flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                                <svg className="h-2 w-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-white/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <CollapsibleTrigger className="mt-4 w-full flex items-center justify-center text-white/80 hover:text-white transition-colors">
                          <div className="flex items-center space-x-1">
                            <span className="text-sm font-medium">Show details</span>
                            <ChevronDown className="h-4 w-4" />
                          </div>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent className="mt-4 pt-3 border-t border-white/20">
                          <div className="text-sm text-white/90">
                            <p>Additional information about Day {day.number}</p>
                            <ul className="mt-2 space-y-1 list-disc list-inside pl-2">
                              <li>Begin with setup and preparation</li>
                              <li>Focus on hands-on practice</li>
                              <li>Complete daily challenges</li>
                            </ul>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  )}
                </div>
                
                {/* Mobile view */}
                <div className="w-full md:hidden">
                  <Collapsible className={`${day.color} text-white p-4 rounded-lg shadow-md`}>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="font-bold">{day.number}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{day.title}</h3>
                        <ul className="space-y-2 mt-2">
                          {day.content.map((item, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <div className="h-4 w-4 bg-white/30 rounded-full flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                                <svg className="h-2 w-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-white/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <CollapsibleTrigger className="mt-4 w-full flex items-center justify-center text-white/80 hover:text-white transition-colors">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium">Show details</span>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="mt-4 pt-3 border-t border-white/20">
                      <div className="text-sm text-white/90">
                        <p>Additional information about Day {day.number}</p>
                        <ul className="mt-2 space-y-1 list-disc list-inside pl-2">
                          <li>Begin with setup and preparation</li>
                          <li>Focus on hands-on practice</li>
                          <li>Complete daily challenges</li>
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
              
              {/* Separator for mobile */}
              <div className="md:hidden mt-6">
                <Separator className="bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};

export default DailyBreakdown;
