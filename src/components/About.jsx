import aboutImg from "../assets/DivyanshuCharak.jpg";
import { ABOUT_TEXT, CONNECT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-gradientFrom to-gradientTo bg-[400%] animate-gradient"></div>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 animate-float"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-full w-1/2 lg:w-1/3" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <p className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-500 bg-clip-text tracking-tight text-transparent
             my-2 max-w-xl py-6 text-justify ">
              {CONNECT}
            </p>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
