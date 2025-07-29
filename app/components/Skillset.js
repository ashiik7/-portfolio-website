"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Import icons
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

  // Skills array with icons
  const skills = [
    { name: "Python", icon: <FaPython className="text-yellow-400 text-6xl" /> },
    { name: "Django", icon: <SiDjango className="text-green-500 text-6xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
    { name: "Java", icon: <FaJava className="text-red-500 text-6xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-400 text-6xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300 text-6xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-400 text-6xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-6xl" /> },
    { name: "C", icon: <SiC className="text-blue-500 text-6xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-6xl" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400 text-6xl" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-400 text-6xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300 text-6xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-6xl" /> },
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
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8 relative overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        className="text-6xl font-bold mb-12 z-10"
      >
        My <span className="text-gray-300">Skillset</span>
      </motion.h2>

      {/* Skill cards */}
      <motion.div
        className="flex gap-8 flex-wrap justify-center z-10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            drag
            dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileDrag={{
              rotate: 360,
              transition: { duration: 1, repeat: Infinity, ease: "linear" },
            }}
            className="w-36 h-36 flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl cursor-pointer transform rotate-12"
          >
            {skill.icon}
            <p className="mt-2 text-black font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Text below cards */}
      <motion.p
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        className="mt-12 text-lg text-gray-400 z-10 text-center"
      >
        I'm constantly learning and exploring new technologies <br /> to stay ahead in the ever-evolving world of software development.
      </motion.p>

      {/* Drag instruction */}
      <motion.div
        className="absolute top-1/3 right-24 text-white text-xl z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p className="italic">drag me</p>
        <div className="w-16 h-0.5 bg-white rotate-45 mt-2"></div>
      </motion.div>
    </section>
  );
}






