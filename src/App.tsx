import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import { motion } from 'framer-motion';


function FloatingCube({ delay = 0 }) {
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0, rotate: 0 }}
      animate={{ 
        y: "-100vh",
        opacity: [0, 1, 1, 0],
        rotate: 360,
      }}
      transition={{ 
        duration: Math.random() * 5 + 10,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
      className="absolute w-8 h-8 bg-gradient-to-tr from-[#FFD700] to-transparent opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        filter: 'blur(2px)'
      }}
    />
  );
}

function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <FloatingCube key={i} delay={i * 0.5} />
      ))}
    </div>
  );
}

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const technicalSkills = {
    'Languages & Libraries': [
      'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'SQL'
    ],
    'Machine Learning & AI': [
      'Machine Learning', 'Deep Learning', 'Natural Language Processing (NLP)',
      'Large Language Models (LLMs)', 'Generative AI', 'Retrieval-Augmented Generation (RAG)'
    ],
    'Frameworks & Tools': [
      'Crew AI', 'Hugging Face Transformers', 'OpenAI API', 'Gradio', 'Streamlit', 'Flask', 'Groq API'
    ],
    'Platforms & Deployment': [
      'Hugging Face Spaces', 'GitHub', 'Render', 'Azure(Beginner)'
    ],
    'Data Engineering & Processing': [
      'Web Scraping', 'Audio Processing (Whisper, TextGen)', 'SQL/NoSQL Databases (MongoDB, Oracle SQL)'
    ]
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1jMHvRGLd7fgzrFnYWyK11FpqHTLzigOy';
    link.download = 'Saiteja_Pallerla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMailTo = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:saitejapallerla14@gmail.com';
  };
  return (
    <div className="min-h-screen bg-[#1C1D24] text-white relative">
      <BackgroundAnimation />
  
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold mb-4 section-title"
              >
                Saiteja Pallerla
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-[#FFD700] mb-6 animate-shimmer"
              >
                Associate Software Engineer & Passionate AI Engineer 
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-gray-400 mb-8"
              >
                Building data-driven solutions in healthcare with a passion for AI and machine learning.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-6 flex-wrap"
              >
                <motion.button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 bg-[#FFD700] text-[#1C1D24] px-6 py-3 rounded-lg font-bold hover:bg-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </motion.button>
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={handleMailTo}
                    className="p-3 rounded-lg bg-[#1C1D24] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1C1D24] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Mail size={20} />
                  </motion.button>
                  <motion.a
                    href="tel:7995060161"
                    className="p-3 rounded-lg bg-[#1C1D24] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1C1D24] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Phone size={20} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/saitejapallerla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#1C1D24] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1C1D24] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Saiteja1244"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#1C1D24] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1C1D24] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </motion.div>
            </div>
  
            {/* Right column - GIF with gradient effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Gradient background effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#FFA500] opacity-20 rounded-full transform -rotate-6 animate-glow"></div> */}
              
              {/* GIF overlay */}
              <img 
                src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                alt="Coding animation"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Technical Skills Section */}
      <section className="py-20 px-4 md:px-8 bg-[#2A2B32]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-full rounded-lg bg-gradient-to-br from-[#FFD700] to-[#FFA500] opacity-20 absolute transform -rotate-6 animate-glow"></div>
            <div className="w-full rounded-lg bg-[#1C1D24] relative z-10 p-8">
              <h3 className="text-2xl font-bold section-title mb-8">Technical Skills</h3>
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <motion.div 
                  key={category} 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-[#FFD700] mb-2 section-title">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span 
                        key={skill}
                        className="bg-[#343541] px-3 py-1 rounded-full text-sm hover:bg-[#FFD700] hover:text-[#1C1D24] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center section-title">
            Professional Experience
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-[#FFD700] before:to-transparent before:animate-glow">
              <h3 className="text-2xl font-bold mb-2 text-[#FFD700] section-title">Carelon Global Solutions</h3>
              <p className="text-xl mb-4">Associate Software Engineer</p>
              <p className="text-gray-400 mb-4">Nov 2023 – Present</p>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">ABACUS – Commercial Underwriting System</h4>
                  <p className="text-gray-300 mb-4">
                    Worked on ABACUS, a comprehensive commercial underwriting system designed to support rating, quoting, and underwriting of healthcare plans.
                  </p>
                  <h5 className="text-[#FFD700] mb-2 section-title">Key Contributions:</h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Handled rating logic configuration and managed structured data flow to the ABACUS UI</li>
                    <li>Updated and maintained logic using Excel-based formulas and SQL queries</li>
                    <li>Configured custom benefit plans based on actuarial data</li>
                    <li>Transformed unstructured inputs into structured data for Oracle SQL and MongoDB integration</li>
                    <li>Automated data operations across Excel, SQL Developer, and MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 bg-[#2A2B32]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center section-title">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-[#1C1D24] p-8 rounded-lg hover:bg-gradient-to-br hover:from-[#2A2B32] hover:to-[#FFD700] hover:bg-opacity-20 transition-all duration-300 animate-glow"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">MarketMind</h3>
                <a href="https://github.com/Saiteja1244/MarketMind" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:text-white transition-colors">
                  <Github size={24} />
                </a>
              </div>
              <p className="text-[#FFD700] mb-4 section-title">Multimodal Market Analysis Assistant</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Python-based market analysis solution</li>
                <li>Competitor analysis and product evaluation</li>
                <li>AI-driven insights and recommendations</li>
                <li>Automated HTML report generation</li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-[#1C1D24] p-8 rounded-lg hover:bg-gradient-to-br hover:from-[#2A2B32] hover:to-[#FFD700] hover:bg-opacity-20 transition-all duration-300 animate-glow"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Legal AI Agent</h3>
                <a href="https://github.com/Saiteja1244/LegalAI" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:text-white transition-colors">
                  <Github size={24} />
                </a>
              </div>
              <p className="text-[#FFD700] mb-4 section-title">Automated Legal Research and Analysis</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Multi-agent design using state-of-the-art LLMs</li>
                <li>Advanced search integration with Tavily</li>
                <li>Automated legal research and document analysis</li>
                <li>Task-specific workflows for accuracy</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center section-title">
            Education
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#2A2B32] p-8 rounded-lg hover:bg-gradient-to-br hover:from-[#2A2B32] hover:to-[#FFD700] hover:bg-opacity-20 transition-all duration-300 animate-glow"
          >
            <h3 className="text-xl font-bold mb-2">Sreenidhi Institute of Science and Technology</h3>
            <p className="text-[#FFD700] mb-2 section-title">B-Tech in Electronics and Computer Engineering</p>
            <p className="text-gray-400 mb-4">2019 – 2023</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Graduated with first-class honors</li>
              <li>Relevant Coursework: Machine Learning, Python, Embedded Systems</li>
              <li>Published research paper in reputable journal</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="py-20 px-4 md:px-8 bg-[#2A2B32]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 section-title">
            Let's Connect
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, collaborating on exciting projects, 
            or just having a great conversation about technology and innovation.
          </p>
          <div className="flex justify-center gap-4">
            <motion.button 
              onClick={handleMailTo}
              whileHover={{ scale: 1.1 }}
              className="p-4 rounded-lg bg-[#1C1D24] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1C1D24] transition-all duration-300"
            >
              <Mail size={24} />
            </motion.button>
            <motion.a 
              href="https://linkedin.com/in/saitejapallerla"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-4 rounded-lg bg-[#1C1D24] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1C1D24] transition-all duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="https://github.com/Saiteja1244"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-4 rounded-lg bg-[#1C1D24] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1C1D24] transition-all duration-300"
            >
              <Github size={24} />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;