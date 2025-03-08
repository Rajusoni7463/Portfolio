// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X } from "lucide-react"
// import { Button } from "./ui/button"

// const menuVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: -20,
//     transition: {
//       ease: "easeInOut",
//     },
//   },
// }

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center justify-between">
//         <Link to="/" className="font-bold text-xl text-foreground">
//           Portfolio
//         </Link>

//         {/* Mobile menu button */}
//         <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>

//         {/* Desktop navigation */}
//         <nav className="hidden md:flex items-center gap-6">
//           <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
//             Home
//           </Link>
//           <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
//             Projects
//           </a>
//           <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
//             Contact Me
//           </a>
//           <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
//             About Me
//           </a>
//           <Button variant="outline" asChild>
//             <Link to="/resume">Resume</Link>
//           </Button>
//         </nav>

//         {/* Mobile navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden"
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               <nav className="flex flex-col p-4">
//                 <Link
//                   to="/"
//                   className="py-2 text-sm font-medium hover:text-primary transition-colors"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Home
//                 </Link>
//                 <a
//                   href="#projects"
//                   className="py-2 text-sm font-medium hover:text-primary transition-colors"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Projects
//                 </a>
//                 <a
//                   href="#contact"
//                   className="py-2 text-sm font-medium hover:text-primary transition-colors"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Contact Me
//                 </a>
//                 <a
//                   href="#about"
//                   className="py-2 text-sm font-medium hover:text-primary transition-colors"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   About Me
//                 </a>
//                 <Button variant="outline" className="mt-2" asChild>
//                   <Link to="/resume" onClick={() => setIsMenuOpen(false)}>
//                     Resume
//                   </Link>
//                 </Button>
//               </nav>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      ease: "easeInOut",
    },
  },
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || "")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
        <img src="/letter-r.png" alt="Logo" className="h-10" />
        <span className="font-bold text-xl text-foreground">Portfolio</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.name.toLowerCase() ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              {item.name}
            </a>
          ))}
          <Button variant="outline" asChild>
            <Link to="/resume">Resume</Link>
          </Button>
        </nav>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <nav className="flex flex-col p-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`py-2 text-sm font-medium transition-colors ${
                      activeSection === item.name.toLowerCase() ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button variant="outline" className="mt-2" asChild>
                  <Link to="/resume" onClick={() => setIsMenuOpen(false)}>
                    Resume
                  </Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}


