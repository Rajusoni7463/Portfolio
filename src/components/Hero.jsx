
// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Button } from "./ui/button";
// // Import the image correctly

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

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
// };

// export default function Hero() {
//   return (
//     <motion.div
//       className="py-12 md:py-24"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Left Section */}
//         <motion.div className="space-y-6" variants={itemVariants}>
//           <motion.h1
//             className="text-4xl md:text-6xl font-bold tracking-tight"
//             variants={itemVariants}
//           >
//             Hi, I'm <span className="text-primary">Raju Kumar</span>
//           </motion.h1>
//           <motion.p
//             className="text-xl text-muted-foreground"
//             variants={itemVariants}
//           >
//             A passionate full-stack developer specializing in building
//             exceptional digital experiences.
//           </motion.p>
//           <motion.div
//             className="flex flex-col sm:flex-row gap-3"
//             variants={itemVariants}
//           >
//             <Button asChild>
//               <a href="#contact">
//                 Contact Me <ArrowRight className="ml-2 h-4 w-4" />
//               </a>
//             </Button>
//             <Button variant="outline" asChild>
//               <a href="#projects">View My Work</a>
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Right Section (Circular Profile Image) */}
//         <motion.div
//           className="relative h-60 w-60 md:h-96 md:w-96 rounded-full overflow-hidden border-4 border-primary shadow-lg flex items-center justify-center mx-auto md:ml-[170px]"
//           variants={itemVariants}
//         >
//           <img
//             src="/portfolio.jpeg"
//             alt="Profile"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }


"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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

export default function Hero() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} className="py-12 md:py-24" variants={containerVariants} initial="hidden" animate={controls}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.h1 className="text-4xl md:text-6xl font-bold tracking-tight" variants={itemVariants}>
            Hi, I'm <span className="text-primary">Raju Kumar</span>
          </motion.h1>
          <motion.p className="text-xl text-muted-foreground" variants={itemVariants}>
            A passionate full-stack developer specializing in building exceptional digital experiences.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-3" variants={itemVariants}>
            <Button asChild>
              <a href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative h-60 w-60 md:h-96 md:w-96 rounded-full overflow-hidden border-4 border-primary shadow-lg flex items-center justify-center mx-auto md:ml-[170px]"
           variants={itemVariants}
         >
           <img
            src="/portfolio.jpeg"
             alt="Profile"
             className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.div>

  )
}


