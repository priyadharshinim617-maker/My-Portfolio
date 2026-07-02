import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiFigma,
} from "react-icons/si";

function Skills() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Horizontal animation
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["15%", "-65%"]
  );

  return (
    <section
      id="skills"
      ref={ref}
      className="relative h-[300vh] bg-[#F8FAFC]"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

        <h1 className="text-6xl font-bold text-center text-purple-600 mb-16">
          Tech Skills
        </h1>

        <motion.div
          style={{ x }}
          className="flex gap-10 w-max px-40"
        >

          {/* Frontend */}

          <SkillCard
            title="Frontend"
            skills={[
              [<FaHtml5 />, "HTML"],
              [<FaCss3Alt />, "CSS"],
              [<FaJs />, "JavaScript"],
              [<FaReact />, "React JS"],
            ]}
          />

          {/* Backend */}

          <SkillCard
            title="Backend"
            skills={[
              [<FaJava />, "Java"],
              [<SiSpringboot />, "Spring Boot"],
            ]}
          />

          {/* Database */}

          <SkillCard
            title="Database"
            skills={[
              [<SiMysql />, "MySQL"],
            ]}
          />

          {/* Tools */}

          <SkillCard
            title="Tools"
            skills={[
              [<FaGitAlt />, "Git"],
              [<FaGithub />, "GitHub"],
              [<SiPostman />, "Postman"],
              [<SiFigma />, "Figma"],
            ]}
          />

        </motion.div>

      </div>
    </section>
  );
}

function SkillCard({ title, skills }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="w-[340px] h-[420px] bg-white rounded-3xl shadow-xl p-8 flex flex-col"
    >
      <h2 className="text-4xl font-bold mb-10">
        {title}
      </h2>

      <div className="space-y-6 text-2xl">

        {skills.map(([icon, text], index) => (

          <div
            key={index}
            className="flex items-center gap-4"
          >
            {icon}

            <span>{text}</span>

          </div>

        ))}

      </div>

    </motion.div>
  );
}

export default Skills;