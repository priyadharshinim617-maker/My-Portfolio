import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#F8FAFC] py-20 px-6"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center text-purple-600 mb-16"
      >
        Education
      </motion.h1>

      {/* Education Cards */}
      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* College */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.03, y: -8 }}
          className="bg-white rounded-3xl shadow-xl p-8 border-l-8 border-purple-600"
        >
          <div className="flex items-center gap-3 mb-5">
            <FaGraduationCap className="text-4xl text-purple-600" />
            <h2 className="text-2xl font-bold">
              Bachelor of Computer Science & Engineering
            </h2>
          </div>

          <h3 className="text-xl font-semibold text-gray-700">
            Latha Mathavan Engineering College
          </h3>

          <p className="flex items-center gap-2 mt-4 text-gray-600">
            <FaCalendarAlt />
            Aug 2021 – May 2025
          </p>

          <p className="flex items-center gap-2 mt-3 text-gray-600">
            <FaMapMarkerAlt />
            Madurai, Tamil Nadu
          </p>

          <div className="mt-6">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">
              CGPA : 7.6
            </span>
          </div>
        </motion.div>

        {/* HSC */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 1.03, y: -8 }}
          className="bg-white rounded-3xl shadow-xl p-8 border-l-8 border-purple-600"
        >
          <div className="flex items-center gap-3 mb-5">
            <FaSchool className="text-4xl text-purple-600" />
            <h2 className="text-2xl font-bold">
              Higher Secondary Certificate (HSC)
            </h2>
          </div>

          <h3 className="text-xl font-semibold text-gray-700">
            Holy Family Girls Hr. Sec. School
          </h3>

          <p className="flex items-center gap-2 mt-4 text-gray-600">
            <FaCalendarAlt />
            Jun 2019 – Mar 2021
          </p>

          <p className="flex items-center gap-2 mt-3 text-gray-600">
            <FaMapMarkerAlt />
            Madurai, Tamil Nadu
          </p>

          <div className="mt-6">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">
              Percentage : 88.33%
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Education;