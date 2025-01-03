import React from 'react';

const Resume = () => {
  const experiences = [
    {
      period: '2020 - Present',
      title: 'Senior Developer',
      company: 'Tech Corp',
      description: 'Leading development of enterprise web applications.',
    },
    {
      period: '2018 - 2020',
      title: 'Full Stack Developer',
      company: 'StartUp Inc',
      description: 'Developed and maintained multiple client projects.',
    },
  ];

  const education = [
    {
      period: '2014 - 2018',
      degree: 'Bachelor in Computer Science',
      school: 'University of Technology',
      description: 'Graduated with honors, specialized in web technologies.',
    },
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Resume</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-600">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                  <span className="text-sm text-blue-600 font-semibold">{exp.period}</span>
                  <h4 className="text-xl font-bold text-gray-800 mt-1">{exp.title}</h4>
                  <p className="text-gray-600 font-medium">{exp.company}</p>
                  <p className="text-gray-600 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-600">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                  <span className="text-sm text-blue-600 font-semibold">{edu.period}</span>
                  <h4 className="text-xl font-bold text-gray-800 mt-1">{edu.degree}</h4>
                  <p className="text-gray-600 font-medium">{edu.school}</p>
                  <p className="text-gray-600 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;