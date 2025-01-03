import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies.',
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with attention to detail.',
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Full Stack',
      description: 'End-to-end development from database design to front-end implementation.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer with experience in creating modern web applications.
            I love learning new technologies and solving complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;