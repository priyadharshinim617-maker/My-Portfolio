import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-purple-600 mb-20"
      >
        Experience
      </motion.h1>

      {/* Timeline */}
      <div className="relative w-full max-w-5xl">

        {/* Vertical Line */}
        <div className="absolute left-6 top-0 h-full w-1 bg-purple-300 rounded-full"></div>

        {/* Timeline Dot */}
        <div className="absolute left-[14px] top-8 w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-lg"></div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="ml-20 bg-white rounded-3xl shadow-xl p-8"
        >
          {/* Role */}
          <div className="flex items-center gap-3 mb-4">
            <FaBriefcase className="text-purple-600 text-2xl" />
            <h2 className="text-3xl font-bold">
              Java Full Stack Developer
            </h2>
          </div>

          {/* Company */}
          <h3 className="text-xl font-semibold text-gray-700">
            Scope Tech Software Solutions
          </h3>

          {/* Location */}
          <p className="flex items-center gap-2 text-gray-500 mt-2">
            <FaMapMarkerAlt />
            Madurai, Tamil Nadu
          </p>

          {/* Duration */}
          <p className="flex items-center gap-2 text-gray-500 mt-2 mb-8">
            <FaCalendarAlt />
            Jan 2025 – May 2025
          </p>

          {/* Responsibilities */}
          <ul className="space-y-4 text-lg text-gray-700">

            <li>
              ✔ Developed responsive web applications using
              HTML5, CSS3, JavaScript, and Bootstrap.
            </li>

            <li>
              ✔ Worked with Core Java concepts for application
              development and debugging.
            </li>

            <li>
              ✔ Used Git and GitHub for version control and
              team collaboration.
            </li>

            <li>
              ✔ Participated in testing, bug fixing, and
              Software Development Life Cycle (SDLC) activities.
            </li>

          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;