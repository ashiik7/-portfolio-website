"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDribbble,
  FaFacebook,
  FaMedium ,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Orbit Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] rounded-full border border-gray-800 top-[-200px] left-[-200px] opacity-20"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full border border-gray-800 top-[100px] left-[100px] opacity-10"></div>
        <div className="absolute w-[1000px] h-[1000px] rounded-full border border-gray-700 top-[-300px] right-[-300px] opacity-10"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-900/30 blur-3xl bottom-0 right-0"></div>
      </div>

      {/* Heading */}
      <motion.h1
        className="text-6xl font-bold mb-6 z-10 text-left w-full max-w-5xl px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Let’s <br /> Connect.
      </motion.h1>

      {/* Email */}
      <p className="text-gray-400 text-lg mb-8 z-10 px-6 w-full max-w-5xl">
        ashikprincy09@gmail.com
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 mb-12 z-10">
         <a href="https://x.com/kishorashik" target="_blank" rel="noopener noreferrer">
         <FaTwitter className="text-3xl hover:text-blue-400 cursor-pointer transition" />
         </a>
         <a href="https://www.instagram.com/ashiik_7/?igsh=MXZjM2xlbWJoemR2aw%3D%3D&utm_source=qr#" target="_blank" rel="noopener noreferrer">
         <FaInstagram className="text-3xl hover:text-pink-400 cursor-pointer transition" />
         </a>
         <a href="https://github.com/ashiik7" target="_blank" rel="noopener noreferrer">
         <FaGithub className="text-3xl hover:text-gray-400 cursor-pointer transition" />
         </a>
         <a href="https://www.facebook.com/ashik.kishor.77/" target="_blank" rel="noopener noreferrer">
         <FaFacebook className="text-3xl hover:text-blue-600 cursor-pointer transition" />
         </a>
         <a href="https://medium.com/@ashikkishor" target="_blank" rel="noopener noreferrer">
         <FaMedium className="text-3xl hover:text-green-400 cursor-pointer transition" />
         </a>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 text-gray-300 max-w-5xl w-full px-6 z-10">
        <div>
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          <p className="text-sm">
            Check out the things I'm good at, from building websites to design
            and more.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Experience</h3>
          <p className="text-sm">
            I have worked with amazing companies and teams, and I am proud of
            what I’ve achieved.
          </p>
        </div>
        <div>
        
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">GitHub</h3>
          <p className="text-sm">
            Check out my GitHub profile for my latest projects and
            contributions.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-sm">
            I design & develop modern and accessible web interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}
