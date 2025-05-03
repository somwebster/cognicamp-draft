
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const DailyBreakdown = () => {
  const [openDay, setOpenDay] = useState<number | null>(null);

  const days = [
    {
      number: 1,
      title: "Train your first image AI",
      color: "bg-blue-500",
      content: [
        "Understand the basics of image classification",
        "Collect and label training data",
        "Train your first model using Teachable Machine"
      ]
    },
    {
      number: 2,
      title: "Build the app front-end",
      color: "bg-green-500",
      content: [
        "Design the user interface for your application",
        "Learn basic HTML and CSS concepts",
        "Integrate your trained model into a web page"
      ]
    },
    {
      number: 3,
      title: "Add Gemini AI",
      color: "bg-orange-500",
      content: [
        "Introduction to Google's Gemini AI capabilities",
        "Generate creative descriptions from image detections",
        "Add intelligent feedback to your application"
      ]
    },
    {
      number: 4,
      title: "Improve + Storyboard",
      color: "bg-red-500",
      content: [
        "Refine your model with additional training data",
        "Improve the user interface and experience",
        "Plan and create a presentation storyboard"
      ]
    },
    {
      number: 5,
      title: "Present & Publish",
      color: "bg-purple-500",
      content: [
        "Final touches and improvements",
        "Present your project to the group",
        "Publish your creation on InquestAI"
      ]
    }
  ];

  const toggleDay = (index: number) => {
    if (openDay === index) {
      setOpenDay(null);
    } else {
      setOpenDay(index);
    }
  };

  return (
    <section id="daily-breakdown" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Daily Breakdown</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Our step-by-step learning journey over the week
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          {days.map((day, index) => (
            <div key={index} className="mb-4 day-item">
              <div 
                className={`flex items-center justify-between bg-white rounded-lg border border-gray-200 shadow-sm p-4 cursor-pointer ${
                  openDay === index ? 'rounded-b-none' : ''
                }`}
                onClick={() => toggleDay(index)}
              >
                <div className="flex items-center">
                  <div className={`${day.color} h-10 w-10 flex items-center justify-center rounded-lg text-white font-semibold mr-4`}>
                    {day.number}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Day {day.number}: {day.title}</h3>
                </div>
                {openDay === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
              
              {openDay === index && (
                <div className="bg-white border-t-0 border border-gray-200 rounded-b-lg p-6 shadow-sm">
                  <ul className="space-y-2">
                    {day.content.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="h-5 w-5 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-2 text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyBreakdown;
