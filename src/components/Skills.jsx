


// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

// const skills = [
//   { name: "React", level: 90 },
//   { name: "Flutter", level: 85 },
//   { name: "TypeScript", level: 80 },
//   { name: "Node.js", level: 75 },
//   { name: "JavaScript", level: 95 },
//   { name: "Nest.js", level: 85 },
//   { name: "Sql", level: 70 },
//   { name: "Git", level: 80 },
// ]

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//     },
//   },
// }

// export default function Skills() {
//   return (
//     <motion.div className="py-12" variants={containerVariants} initial="hidden" animate="visible">
//       <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {skills.map((skill) => (
//           <motion.div key={skill.name} variants={itemVariants}>
//             <Card className="border-border/40 bg-card/50">
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-lg">{skill.name}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="w-full bg-muted rounded-full h-4 mb-1">
//                   <motion.div
//                     className="bg-primary h-4 rounded-full"
//                     initial={{ width: 0 }}
//                     animate={{ width: `${skill.level}%` }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                   />
//                 </div>
//                 <CardDescription className="text-right">{skill.level}%</CardDescription>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   )
// }


"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const skills = [
  { name: "React", level: 90 },
  { name: "Flutter", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "JavaScript", level: 95 },
  { name: "Nest.js", level: 85 },
  { name: "Sql", level: 70 },
  { name: "Git", level: 80 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export default function Skills() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  // Reset and trigger animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} className="py-12" variants={containerVariants} initial="hidden" animate={controls}>
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div key={skill.name} variants={itemVariants} custom={index}>
            <Card className="border-border/40 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-muted rounded-full h-4 mb-1">
                  <motion.div
                    className="bg-primary h-4 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                  />
                </div>
                <CardDescription className="text-right">{skill.level}%</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}



