


// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
// import { Button } from "./ui/button"
// import { ExternalLink, Github } from "lucide-react"

// const projects = [
//   {
//     id: 1,
//     title: "DocMedx",
//     description: "A full-stack Doctor Appointment Booking built with React, Node.js, and MongoDB.",
//     image: "/appointment.jpg",
//     tags: ["React", "Node.js", "MongoDB", "Express"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com/example/project",
//   },
//   {
//     id: 2,
//     title: "Connectify",
//     description: " A mobile application that enables users to share posts, engage with content",
//     image: "/connectify.jpg",
//     tags: ["Flutter", "TypeScript", "Nest.js"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com/example/project",
//   },
//   {
//     id: 3,
//     title: "Overlapping circle",
//     description: "Draws circles on click, dynamically calculates intersections between them, and changes their color based on the number of overlaps.",
//     image: "/overlaping.jpg",
//     tags: ["React",  "Framer Motion"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com/example/project",
//   },
//   {
//     id: 4,
//     title: "Blog App",
//     description: "A blog platform that showcases the latest articles and featured posts, allowing users to explore, read, and engage with insightful content.",
//     image: "/blog.jpg",
//     tags: ["Flutter", "API Integration", "Getx"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com/example/project",
//   },
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

// export default function Projects() {
//   return (
//     <motion.div className="py-12" variants={containerVariants} initial="hidden" animate="visible">
//       <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projects.map((project) => (
//           <motion.div key={project.id} variants={itemVariants}>
//             <Card className="overflow-hidden border-border/40 bg-card/50">
//               <div className="relative h-48 w-full">
//                 <img
//                   src={project.image || "/placeholder.svg"}
//                   alt={project.title}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//               <CardHeader>
//                 <CardTitle>{project.title}</CardTitle>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {project.tags.map((tag) => (
//                     <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription>{project.description}</CardDescription>
//               </CardContent>
//               <CardFooter className="flex gap-2">
//                 {project.liveUrl && (
//                   <Button variant="outline" size="sm" asChild>
//                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                       <ExternalLink className="mr-2 h-4 w-4" />
//                       Live Demo
//                     </a>
//                   </Button>
//                 )}
//                 {project.githubUrl && (
//                   <Button variant="outline" size="sm" asChild>
//                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                       <Github className="mr-2 h-4 w-4" />
//                       Code
//                     </a>
//                   </Button>
//                 )}
//               </CardFooter>
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

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "DocMedx",
    description: "A full-stack Doctor Appointment Booking built with React, Node.js, and MongoDB.",
    image: "/appointment.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Rajusoni7463/DocMedx",
  },
  {
    id: 2,
    title: "MiniWebX",
    description: "An efficient website creation platform that lets users build their own sites easily. After setup, users receive an email with their website link for instant access. No coding required—just create and launch!",
    image: "/miniwebx.png",
    tags: ["React", "Javascript", "Node.js"],
    liveUrl: "https://miniwebx.com/",
    githubUrl: "https://github.com/Rajusoni7463",
  },
  {
    id: 3,
    title: "Overlapping circle",
    description: "Draws circles on click, dynamically calculates intersections between them, and changes their color based on the number of overlaps.",
    image: "/overlapingCircle.png",
    tags: ["React","Framer Motion"],
    liveUrl: "https://overlapping-circle.vercel.app/",
    githubUrl: "https://github.com/Rajusoni7463/Overlapping_circle",
  },
  {
    id: 4,
    title: "Blog App",
    description: "A blog platform that showcases the latest articles and featured posts, allowing users to explore, read, and engage with insightful content.",
    image: "/blog.jpg",
    tags: ["Flutter", "API Integration", "Getx"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Rajusoni7463",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: index * 0.2,
      duration: 0.8,
    },
  }),
}

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
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
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div key={project.id} custom={index} variants={cardVariants}>
            <Card className="overflow-hidden border-border/40 bg-card/50 h-full">
              <motion.div
                className="relative h-48 w-full overflow-hidden"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2 + 0.3,
                }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.2 + 0.5 + tagIndex * 0.1,
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.liveUrl && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.2 + 0.8,
                    }}
                  >
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                )}
                {project.githubUrl && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.2 + 0.9,
                    }}
                  >
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}



