export const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60,
    },
    final: {
      opacity: 1,
      y: 0,
    },
  };
export const fadeInLeft = {
    initial: {
      opacity: 0,
      x: 160,
    },
    final: {
      opacity: 1,
      x: 0,
    },
  };
export const stagger = {
    initial: {
    },
    final: {
      transition:{
        staggerChildren: 0.1,
      }
    },
  };
export const pageSwitchAnimation = {
    initial: {
      opacity: 0,
    },
    final: {
      opacity: 1,
      transition:{
        delay: 0.1,
        duration: 0.1,
      }
    },
    exit: {
      opacity: 0,
      transition:{
        delay: 0.1,
        ease: 'easeInOut',
      }
    },
  };

// export const slideAndBounce = {
//     initial: {
//       width: 0,
//     },
//     final: {
//       width: level,
//       transition: {
//         duration: 0.5,
//         type: "spring",
//         damping: 10,
//         stiffness: 100,
//       },
//     },
//   };