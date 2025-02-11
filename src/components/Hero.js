import HeroImg from "../assets/hero.png";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Hero() {
  const config = {
    subtitle: "Frontend Developer | Full Stack Explorer.",
    social: {
      github: "https://github.com/jagathm1998",
      facebook: "https://www.facebook.com/jagath.jagath.9849",
      linkedin: "https://www.linkedin.com/in/jagath-mj/",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.6,
      },
    },
  };

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center items-center md:items-start overflow-hidden">
      <motion.div
        className="md:w-1/2 flex flex-col items-center md:items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-poppins text-white text-5xl md:text-6xl font-bold leading-tight text-center md:text-left tracking-tight"
          variants={itemVariants}
        >
          Hey, I'm{" "}
          <motion.span
            className="text-black inline-block"
            animate={{
              rotate: [0, -10, 10, 0],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3,
              },
            }}
          >
            J
          </motion.span>
          agath
        </motion.h1>

        <motion.p
          className="font-montserrat text-2xl md:text-3xl text-center md:text-left mt-4 font-medium"
          variants={itemVariants}
        >
          {config.subtitle}
        </motion.p>

        <motion.p
          className="font-montserrat text-2xl md:text-2xl text-center md:text-left mt-4 font-normal leading-relaxed"
          variants={itemVariants}
        >
          Crafting Scalable, High-Performance & User-Centric Web Experiences
        </motion.p>

        <motion.div
          className="flex justify-center md:justify-start py-10"
          variants={itemVariants}
        >
          <motion.a
            href={config.social.github}
            className="pr-5 hover:text-white transition-colors duration-300"
            variants={socialVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AiOutlineGithub size={40} />
          </motion.a>
          <motion.a
            href={config.social.linkedin}
            className="hover:text-white transition-colors duration-300"
            variants={socialVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AiOutlineLinkedin size={40} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.img
        className="md:w-1/3 rounded-lg shadow-lg mt-8 md:mt-0"
        src={HeroImg}
        alt="Hero"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      />
    </section>
  );
}
