
// "use client"

// import { useEffect } from "react"
// import { motion, useAnimation } from "framer-motion"
// import { useInView } from "react-intersection-observer"
// import Navbar from "../components/Navbar"
// import Hero from "../components/Hero"
// import Skills from "../components/Skills"
// import Projects from "../components/Projects"
// import Footer from "../components/Footer"

// const sectionVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// }

// function AnimatedSection({ children, id }) {
//   const controls = useAnimation()
//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   })

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible")
//     } else {
//       controls.start("hidden")
//     }
//   }, [controls, inView])

//   return (
//     <motion.section id={id} ref={ref} animate={controls} initial="hidden" variants={sectionVariants}>
//       {children}
//     </motion.section>
//   )
// }

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-background dark">
//       <Navbar />
//       <main className="container mx-auto px-4 py-8">
//         <AnimatedSection id="home">
//           <Hero />
//         </AnimatedSection>
//         <AnimatedSection id="skills">
//           <Skills />
//         </AnimatedSection>
//         <AnimatedSection id="projects">
//           <Projects />
//         </AnimatedSection>
//       </main>
//       <Footer />
//     </div>
//   )
// }


import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  )
}



