//import React from 'react'
import logo from "../assets/divyanshuLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomPositions = () => {
  const positions = [];
  for (let i = 0; i < 10; i++) {
    positions.push({ x: getRandomInt(-50, 50), y: getRandomInt(-50, 50) });
  }
  return positions;
};

const Navbar = () => {

  const positions = getRandomPositions();

  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
      <motion.div
          className="flex flex-shrink-0 items-center"
          animate={{
            x: positions.map(pos => pos.x),
            y: positions.map(pos => pos.y)
          }} 
          transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }} 
        >
          <img className="mx-2 w-20 rounded-2xl" src={logo} alt="logo" />
        </motion.div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/divyanshu-charak-a1820516a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/divyanshu144" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare />
          </a>
          <a href="https://www.instagram.com/divyanshu_charak/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
