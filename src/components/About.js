import AboutImg from "../assets/about.png";
import { motion } from "framer-motion";

export default function About() {
  const config = {
    summary:
      "Frontend Developer with expertise in React.js and Next.js, crafting high-performance web applications for optimal user experiences.",
    experience:
      "Currently building real-time monitoring dashboards at Cautio.in, specializing in responsive interfaces and performance optimization.",
    skills: [
      "React.js, Next.js, TypeScript",
      "Node.js, Express, MongoDB",
      "React Query, Tailwind CSS",
      "Git, Figma, RESTful APIs",
    ],
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
      className="flex flex-col md:flex-row bg-secondary px-5 py-16"
      id="about"
    >
      <motion.div
        className="py-5 md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={AboutImg}
          alt="About Me"
          className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
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
            About Me
            <span className="absolute bottom-0 left-0 w-[100px] h-1 bg-primary"></span>
          </motion.h1>

          <motion.p
            className="pb-6 font-montserrat text-xl leading-relaxed text-gray-200"
            variants={itemVariants}
          >
            {config.summary}
          </motion.p>

          <motion.p
            className="pb-6 font-montserrat text-lg leading-relaxed text-gray-200"
            variants={itemVariants}
          >
            {config.experience}
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={itemVariants}
          >
            {config.skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-primary/10 rounded-lg p-3 font-montserrat text-sm backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(var(--primary-rgb), 0.2)",
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
