export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const slideDownVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const slideLeftVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const slideRightVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.05, 
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export const buttonHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  tap: { scale: 0.95 }
}

export const textReveal = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

export const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: { duration: 0.2, ease: "easeIn" }
  }
}

export const loadingScreenVariants = {
  initial: { scale: 1 },
  animate: { 
    scale: 50,
    borderRadius: "50%",
    transition: { duration: 0.8, ease: "easeInOut" }
  }
}

export const navbarVariants = {
  hidden: { y: -100 },
  visible: { 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const glowVariants = {
  initial: { boxShadow: "0 0 0 rgba(13, 148, 136, 0)" },
  animate: {
    boxShadow: [
      "0 0 20px rgba(13, 148, 136, 0.5)",
      "0 0 40px rgba(13, 148, 136, 0.8)",
      "0 0 20px rgba(13, 148, 136, 0.5)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const typewriterVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 2, ease: "easeInOut" }
  }
}

export const progressVariants = {
  hidden: { width: 0 },
  visible: (width) => ({
    width: `${width}%`,
    transition: { duration: 1, ease: "easeOut" }
  })
}

export const bounceVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeOut"
    }
  }
}

export const rotateVariants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  }
}

export const pulseVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const shakeVariants = {
  initial: { x: 0 },
  animate: {
    x: [-5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
}

export const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const slideInFromBottom = {
  hidden: { y: 100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const parallaxVariants = {
  initial: { y: 0 },
  animate: (scrollY) => ({
    y: scrollY * 0.5,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  })
}

export const morphVariants = {
  initial: {
    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
  },
  animate: {
    borderRadius: [
      "60% 40% 30% 70% / 60% 30% 70% 40%",
      "30% 60% 70% 40% / 50% 60% 30% 60%",
      "60% 40% 30% 70% / 60% 30% 70% 40%"
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const drawVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
}

export const pathVariants = {
  hidden: {
    pathLength: 0,
    fill: "rgba(13, 148, 136, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(13, 148, 136, 0.1)",
    transition: {
      duration: 2,
      ease: "easeInOut",
      fill: { delay: 1 }
    }
  }
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
}
