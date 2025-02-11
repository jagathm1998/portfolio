import ResumeImg from "../assets/resume.jpg";
import { motion } from "framer-motion";

export default function Resume() {
  const config = {
    link: "https://drive.google.com/file/d/1GvRrwRA0tLT2Qd43-u4DnL4SCU9d8EPj/view?usp=drive_link",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-secondary px-5 py-16"
    >
      <motion.div
        className="py-5 md:w-1/2 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          className="w-[300px] rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
          src={ResumeImg}
          alt="Resume Preview"
        />
      </motion.div>

      <motion.div
        className="md:w-1/2 flex justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center text-white max-w-xl">
          <motion.h1
            className="text-4xl font-poppins font-bold mb-8 relative"
            variants={itemVariants}
          >
            Resume
            <span className="absolute bottom-0 left-0 w-[100px] h-1 bg-primary"></span>
          </motion.h1>

          <motion.p
            className="pb-6 font-montserrat text-lg leading-relaxed text-gray-200"
            variants={itemVariants}
          >
            You can view and download my resume to learn more about my
            professional experience and skills.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              className="inline-block bg-primary/10 rounded-lg py-3 font-montserrat text-sm backdrop-blur-sm hover:scale-105 hover:bg-primary/20 transition-all duration-300"
              href={config.link}
              download
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
