import photo from "../assets/photo_under_1MB.jpg";
import resume from "../assets/PRIYA M_FullStackDeveloper_Resume (1).pdf";
import { motion } from "framer-motion";
function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-16"
    >
      <div className="max-w-7xl w-full flex items-center justify-between gap-10">

        {/* Left Content */}
        <motion.div
         className="flex-1"
         initial={{ x: -120, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 1 }}
          >
          <p className="text-xl text-purple-600 font-semibold">
            Hello 👋
          </p>

          <h1 className="text-6xl font-bold mt-3 text-gray-800">
            I'm
            <br />
            Priyadharshini M
          </h1>

          <h2 className="text-2xl mt-5 text-purple-600 font-semibold">
            Java Full Stack Developer
          </h2>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            Passionate Java Full Stack Developer with knowledge in
            Java, Spring Boot, React JS, HTML, CSS,
            JavaScript and MySQL.
            I enjoy building modern, responsive
            and user-friendly web applications.
          </p>

<div className="flex gap-4 mt-16">

  <a
    href={resume}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
  >
    View Resume
  </a>

  <a
    href={resume}
    download
    className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition"
  >
    Download Resume
  </a>

</div>

        </motion.div>


        {/* Right Image */}

        <motion.div
  className="flex-1 flex justify-center"
  initial={{ x: 120, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>

          <div className="w-80 h-[420px] bg-purple-200 rounded-[50%] overflow-hidden shadow-2xl">

            <img
              src={photo}
              alt="Profile"
              className="w-full h-full object-cover"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Home;