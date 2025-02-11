import websiteImg1 from "../assets/limoImage.png";
import websiteImg2 from "../assets/qtrip-website.png";
import websiteImg3 from "../assets/blog-website.png";
import websiteImg4 from "../assets/qkart-ecommerce.png";
import websiteImg5 from "../assets/admin-ui-image.png";
import websiteImg6 from "../assets/taskease.png";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const config = {
    projects: [
      {
        title: "Limo",
        image: websiteImg1,
        description:
          "Project management platform with task-tracking and real-time collaboration",
        tech: ["Next.js", "TypeScript", "Appwrite"],
        github: "https://github.com/jagathm1998/limo-task-management",
        live: "https://limo-project.vercel.app",
      },
      {
        title: "Personal Blog",
        image: websiteImg3,
        description: "Full-stack blog with JWT auth and admin dashboard",
        tech: ["Node.js", "Express", "MongoDB"],
        github: "https://github.com/jagathm1998/NodeJs-Blog",
        live: "https://node-js-blog.onrender.com/",
      },
      {
        title: "Admin UI",
        image: websiteImg5,
        description: "A modular admin UI for Geek Trust using React.js",
        tech: ["React.js", "REST API"],
        github: "https://github.com/jagathm1998/adminui",
        live: "https://admin-ui-mj.vercel.app/",
      },
      {
        title: "QKart",
        image: websiteImg4,
        description: "E-commerce platform with cart and checkout system",
        tech: ["React.js", "REST API"],
        github:
          "https://github.com/jagathm1998/jagathm1998-ME_QKART_FRONTEND_V2",
        live: "https://qkart-fe1.netlify.app/",
      },
      {
        title: "QTrip",
        image: websiteImg2,
        description: "Dynamic travel website with city exploration features",
        tech: ["JavaScript", "Bootstrap"],
        github: "https://github.com/jagathm1998/jagathm1998-ME_QTRIPDYNAMIC",
        live: "https://jagath-qtripdynamic.netlify.app/",
      },
      {
        title: "TaskEase",
        image: websiteImg6,
        description:
          "A task management application using React.js with features for adding, editing, saving and deleting tasks",
        tech: ["JavaScript", "Bootstrap"],
        github: "https://github.com/jagathm1998/TaskEase",
        live: "https://mj-to-do-list.vercel.app/",
      },
    ],
  };

  return (
    <section id="projects" className="py-20 px-5 bg-primary">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h1 className="text-4xl font-poppins font-bold text-white mb-6 relative inline-block">
            Projects
            <span className="absolute bottom-0 left-0 w-2/3 h-1 bg-secondary"></span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-xl bg-white/5 h-[280px] backdrop-blur-sm">
                {/* Image */}
                <div className="h-36 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-poppins font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-montserrat mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full font-montserrat"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay with Links */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <FiGithub className="text-white text-xl" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <FiExternalLink className="text-white text-xl" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
