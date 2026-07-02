import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl w-full">

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-purple-600"
        >
          Let's Connect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mt-4 mb-12 text-lg"
        >
          I'm always open to discussing new opportunities,
          collaborations, and exciting projects.
        </motion.p>

        {/* Contact Card */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200"
        >

          <div className="space-y-8">

            {/* Email */}

            <div className="flex items-center gap-5">

              <div className="bg-purple-100 p-4 rounded-full">
                <FaEnvelope className="text-purple-600 text-2xl" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>

                <a
                  href="mailto:priyadharshinim617@gmail.com"
                  className="text-gray-600 hover:text-purple-600 duration-300"
                >
                  priyadharshinim617@gmail.com
                </a>
              </div>

            </div>

            {/* Phone */}

            <div className="flex items-center gap-5">

              <div className="bg-purple-100 p-4 rounded-full">
                <FaPhoneAlt className="text-purple-600 text-2xl" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>

                <a
                  href="tel:+918124892344"
                  className="text-gray-600 hover:text-purple-600 duration-300"
                >
                  +91 81248 92344
                </a>
              </div>

            </div>

            {/* GitHub */}

            <div className="flex items-center gap-5">

              <div className="bg-purple-100 p-4 rounded-full">
                <FaGithub className="text-purple-600 text-2xl" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">GitHub</h3>

                <a
                  href="https://github.com/priyadharshinim617-maker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 duration-300 break-all"
                >
                  github.com/priyadharshinim617-maker
                </a>
              </div>

            </div>

            {/* LinkedIn */}

            <div className="flex items-center gap-5">

              <div className="bg-purple-100 p-4 rounded-full">
                <FaLinkedin className="text-purple-600 text-2xl" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">LinkedIn</h3>

                <a
                  href="https://www.linkedin.com/in/priyadharshini-m-925864358/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 duration-300 break-all"
                >
                  linkedin.com/in/priyadharshini-m-925864358
                </a>
              </div>

            </div>

            {/* Location */}

            <div className="flex items-center gap-5">

              <div className="bg-purple-100 p-4 rounded-full">
                <FaMapMarkerAlt className="text-purple-600 text-2xl" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Location</h3>

                <p className="text-gray-600">
                  Madurai, Tamil Nadu, India
                </p>
              </div>

            </div>

          </div>

          {/* Button */}

          <div className="mt-12 text-center">

            <a
              href="mailto:priyadharshinim617@gmail.com"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition duration-300 shadow-lg"
            >
              Send Email
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;