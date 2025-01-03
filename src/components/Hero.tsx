import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-blue-600">John Doe</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Full Stack Developer
            </p>
            <p className="text-gray-600 mb-8 max-w-lg">
              I craft elegant solutions to complex problems using modern web technologies.
              Let's build something amazing together.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Hire Me
              </a>
              <a href="#portfolio" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
                View Work
              </a>
            </div>
            <div className="flex gap-6 mt-8 justify-center md:justify-start">
              <a href="https://github.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;