const customAnimationVariants = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'afterChildren'
    }
  },
  hidden: {
    opacity: 0,
    y: '25vh',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.08,
      delayChildren: 0
    }
  }
};

const containerAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.5
    }
  }
};

const itemAnimation = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
};

export default { customAnimationVariants, containerAnimation, itemAnimation };
