import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Mobile Shop Management System",
    description:
      "Developed a Mobile Shop Management System with authentication, product management, Add to Cart, Buy Now, and Payment features.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    github: "YOUR_GITHUB_LINK",
  },
  {
    title: "AI Powered Resume Analyzer",
    description:
      "Built an AI-powered Resume Analyzer that evaluates resumes, analyzes skills, matches job roles, and provides feedback.",
    tech: ["React", "Java", "Spring Boot", "HTML", "CSS"],
    github: "YOUR_GITHUB_LINK",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a responsive portfolio website with modern UI, animations, GitHub, LinkedIn and Email integration.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "YOUR_GITHUB_LINK",
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

            {/* Project Image */}
            <div className="h-52 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">

              <h2 className="text-white text-3xl font-bold text-center px-5">
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

                {project.tech.map((tech, i) => (

                  <span
                    key={i}
                    className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
                >
                  <FaGithub />
                  View on GitHub
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