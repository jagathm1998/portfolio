import { motion } from "framer-motion";

export default function Contact() {
  const config = {
    email: "jagathm2801@gmail.com",
    phone: "+91 8870567163",
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
      id="contact"
      className="flex flex-col bg-primary px-5 py-16 text-white"
    >
      <motion.div
        className="flex flex-col items-center max-w-xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl font-poppins font-bold mb-8 relative"
          variants={itemVariants}
        >
          Contact
          <span className="absolute bottom-0 left-0 w-[100px] h-1 bg-secondary"></span>
        </motion.h1>

        <motion.p
          className="pb-8 font-montserrat text-lg text-center leading-relaxed"
          variants={itemVariants}
        >
          If you want to discuss more in detail, please contact me
        </motion.p>

        <motion.div
          className="space-y-4 w-full max-w-md"
          variants={itemVariants}
        >
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <p className="font-montserrat">
              <span className="font-bold">Email: </span>
              <a
                href={`mailto:${config.email}`}
                className="hover:text-secondary transition-colors duration-300"
              >
                {config.email}
              </a>
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <p className="font-montserrat">
              <span className="font-bold">Phone: </span>
              <a
                href={`tel:${config.phone}`}
                className="hover:text-secondary transition-colors duration-300"
              >
                {config.phone}
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
