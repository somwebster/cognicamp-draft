import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = [{
    title: "Voice-Activated Weather Assistant",
    creator: "Lincoln Middle School, 7th Grade",
    description: "A weather app that uses speech recognition to provide forecasts. Students learned about APIs, natural language processing, and voice interfaces while building a practical tool that provides real-time weather updates for their community.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Wildlife Identification App",
    creator: "Evanston Elementary, 5th Grade",
    description: "An image recognition app that helps identify local Illinois wildlife. Students collected and labeled images from local parks, then trained a simplified machine learning model to identify common birds, mammals, and insects native to Illinois.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Math Homework Helper",
    creator: "Northside High School, 10th Grade",
    description: "An interactive app that solves and explains math problems step-by-step. High school students created algorithms to break down algebra, geometry, and calculus problems while providing clear explanations for younger students.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Illinois History Chatbot",
    creator: "Springfield Middle School, 8th Grade",
    description: "A conversational AI that answers questions about Illinois history. Students researched state history and created a comprehensive knowledge base that powers their educational chatbot, making local history more accessible and engaging.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Recycling Sorter",
    creator: "Chicago STEM Academy, 6th Grade",
    description: "A computer vision app that identifies recyclable materials. Students built and trained an image recognition model to help their school community sort waste properly, reducing contamination in recycling bins by 43% in their first month.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }];
  const nextSlide = () => {
    setCurrentSlide(prev => prev === projects.length - 1 ? 0 : prev + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? projects.length - 1 : prev - 1);
  };
  return;
};
export default Gallery;