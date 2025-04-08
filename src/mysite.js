import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './index.css';
import './App.css';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Project 1",
      description: "A sophisticated web application built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "An AI-powered data analytics dashboard",
      tags: ["Python", "TensorFlow", "React"],
      link: "#"
    },
    {
      title: "Project 3",
      description: "E-commerce platform with real-time inventory management",
      tags: ["Next.js", "Firebase", "Stripe"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a  className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
              Portfolio
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>


            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-yellow-500 transition-colors">About</a>
              <a href="#projects" className="hover:text-yellow-500 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-2">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="hover:text-yellow-500 transition-colors">About</a>
                <a href="#projects" className="hover:text-yellow-500 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 pt-16">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            Adhithyan SN
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Adhithyansn" className="p-2 hover:text-yellow-500 transition-colors">
              <Github size={24}/>
            </a>
            <a href="www.linkedin.com/in/adhi12323
" className="p-2 hover:text-yellow-500 transition-colors text">
              <Linkedin size={24} />
            </a>
            <a  className="p-2 hover:text-yellow-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-black">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-800">
              <p>
                I'm a passionate web application developer with expertise in building modern web applications.
                With 1+ years of experience in full-stack development, I specialize in
                creating responsive and user-friendly applications.
              </p>
              <p>
                My tech stack includes React, React Native, .Net and various modern web technologies.
                I'm always eager to learn new technologies and tackle challenging projects.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-black">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'AWS', 'Docker', 'Git'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-black text-white rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500 transition-colors">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-yellow-500 hover:text-yellow-400"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-black text-center">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-800 mb-2">Name</label>
                <input 
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2025 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;