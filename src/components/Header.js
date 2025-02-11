import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/#about" },
    { title: "Projects", href: "/#projects" },
    { title: "Resume", href: "/#resume" },
    { title: "Contact", href: "/#contact" },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-primary/90">
      <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
        <motion.a
          className="font-poppins font-bold text-2xl text-black hover:text-white transition-colors duration-300"
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Jagath
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navItems.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={item.href}
                  className="font-montserrat text-white hover:text-black transition-colors duration-300 text-lg"
                >
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {toggleMenu ? (
            <XMarkIcon className="text-white h-6 w-6" />
          ) : (
            <Bars3Icon className="text-white h-6 w-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {toggleMenu && (
          <motion.nav
            className="block md:hidden absolute w-full bg-primary/95 backdrop-blur-sm"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col items-center py-6 gap-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.title}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href={item.href}
                    onClick={() => setToggleMenu(false)}
                    className="font-montserrat text-white hover:text-black transition-colors duration-300 text-xl"
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
