
"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  FaDocker,
  FaFigma,
  FaReact,
  FaJsSquare,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTensorflow, SiDjango, SiCplusplus, SiTailwindcss, SiC } from "react-icons/si";

export default function Skillset() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const skills = [
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-5xl md:text-6xl" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400 text-5xl md:text-6xl" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-400 text-5xl md:text-6xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300 text-5xl md:text-6xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-5xl md:text-6xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400 text-5xl md:text-6xl" /> },
    { name: "Django", icon: <SiDjango className="text-green-500 text-5xl md:text-6xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-red-500 text-5xl md:text-6xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl md:text-6xl" /> },
    { name: "Java", icon: <FaJava className="text-orange-600 text-5xl md:text-6xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl md:text-6xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300 text-5xl md:text-6xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600 text-5xl md:text-6xl" /> },
    { name: "C", icon: <SiC className="text-gray-400 text-5xl md:text-6xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-5xl md:text-6xl" /> },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 relative overflow-hidden"
    >
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 z-10 text-center"
      >
        My <span className="text-gray-300">Skillset</span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-center z-10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            drag
            dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileDrag={{
              rotate: 360,
              transition: { duration: 1, repeat: Infinity, ease: "linear" },
            }}
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex flex-col items-center justify-center bg-white rounded-xl sm:rounded-2xl shadow-xl cursor-pointer transform rotate-6"
          >
            {skill.icon}
            <p className="mt-2 text-black text-sm sm:text-base font-semibold text-center">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        className="mt-10 sm:mt-12 text-sm sm:text-base md:text-lg text-gray-400 z-10 text-center px-4"
      >
        I&apos;m constantly learning and exploring new technologies to stay ahead in the ever-evolving world of software development.
      </motion.p>
    </section>
  );
}







