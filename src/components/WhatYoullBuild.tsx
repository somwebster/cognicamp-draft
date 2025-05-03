
import { BookOpen, Code, Share } from "lucide-react";

const WhatYoullBuild = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Train an image model with Teachable Machine",
      description: "Collect and label images to train your own custom AI model."
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Build an app using Gemini AI",
      description: "Create an interactive application powered by Google's Gemini AI."
    },
    {
      icon: <Share className="h-10 w-10 text-primary" />,
      title: "Publish your project on InquestAI",
      description: "Share your creation with the world on a professional platform."
    }
  ];

  return (
    <section id="what-you-build" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What You'll Build</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Create your own AI-powered image recognition application in just one week
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card-hover bg-white rounded-xl border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-6 sm:p-10">
            <div className="sm:flex items-center">
              <div className="sm:flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hands-on learning experience</h3>
                <p className="text-gray-600">
                  Students will work in teams to design, train, and deploy their own image classification 
                  model, resulting in a fully functional web app that can identify objects in real-time.
                </p>
              </div>
              <div className="mt-6 sm:mt-0 sm:ml-10 sm:flex-1">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm aspect-video">
                  <div className="h-full w-full flex items-center justify-center text-gray-400">
                    [Student Project Preview]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullBuild;
