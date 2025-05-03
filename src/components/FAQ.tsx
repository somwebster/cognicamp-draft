
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is this bootcamp for?",
      answer: "This bootcamp is designed for students in grades 6-10 who are interested in learning about artificial intelligence through hands-on projects. No prior coding experience is necessary."
    },
    {
      question: "What do I need to bring?",
      answer: "Students should bring a laptop, curiosity, and enthusiasm! All software used is free and web-based, so there's no need to install anything in advance."
    },
    {
      question: "Where is the bootcamp held?",
      answer: "The bootcamp takes place at the Evanston Community Center. We provide a safe, supervised environment with all necessary equipment and resources."
    },
    {
      question: "Is the bootcamp free?",
      answer: "Yes! Thanks to our sponsors and partners, the bootcamp is offered free of charge. We have a limited number of spots available, and scholarships are available for students who need additional support for transportation or equipment."
    },
    {
      question: "What will students learn?",
      answer: "Students will learn the fundamentals of AI, specifically focusing on image recognition. They'll train their own AI model, create a web application, integrate with Gemini AI, and publish their project online."
    },
    {
      question: "Who are the instructors?",
      answer: "Our instructors are experienced educators and technology professionals with backgrounds in computer science, education, and artificial intelligence. All instructors undergo background checks and are trained to work with K-12 students."
    }
  ];

  const toggleQuestion = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">For Students & Parents</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Answers to commonly asked questions
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div 
                className={`flex items-center justify-between bg-white rounded-lg border border-gray-200 shadow-sm p-4 cursor-pointer ${
                  openQuestion === index ? 'rounded-b-none' : ''
                }`}
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openQuestion === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                )}
              </div>
              
              {openQuestion === index && (
                <div className="bg-white border-t-0 border border-gray-200 rounded-b-lg p-6 shadow-sm">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
