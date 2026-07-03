import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Mobile Shop Management System",
    description:
      "Developed a Mobile Shop Management System using React JS with user authentication, product management, Add to Cart, Buy Now, and Payment Processing functionalities.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    github:
      "https://github.com/priyadharshinim617-maker/Mobile-Shop-Management-System",
    demo: "#",
  },

  {
    title: "AI Powered Resume Analyzer",
    description:
      "Built an AI-powered Resume Analyzer that evaluates resumes, analyzes skills, matches job roles, and provides intelligent feedback to improve resume quality.",
    tech: ["React", "Java", "Spring Boot", "HTML", "CSS"],
    github:
      "https://github.com/priyadharshinim617-maker/AI-Powered-Resume-Analyzer",
    demo: "https://ai-resume-analyser-frontend-sigma.vercel.app",
  },

  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a modern responsive portfolio with React, Tailwind CSS, Framer Motion animations, GitHub integration, and contact section.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github:
      "https://github.com/priyadharshinim617-maker/My-Portfolio",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white py-20 px-8"
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center text-purple-600 mb-16"
      >
        My Projects
      </motion.h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-7xl mx-auto">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
          >

            {/* Header */}

            <div className="h-52 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">

              <h2 className="text-white text-3xl font-bold text-center px-6">
                {project.title}
              </h2>

            </div>

            {/* Content */}

            <div className="p-6">

              <p className="text-gray-600 leading-7">
                {project.description}
              </p>

              {/* Tech Stack */}

              <div className="flex flex-wrap gap-3 mt-6">

                {project.tech.map((item, i) => (

                  <span
                    key={i}
                    className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {item}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="flex gap-4 mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl hover:bg-black transition duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    if (project.demo === "#") {
                      e.preventDefault();
                    }
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition duration-300 ${
                    project.demo === "#"
                      ? "bg-purple-400 text-white"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}

export default Projects;