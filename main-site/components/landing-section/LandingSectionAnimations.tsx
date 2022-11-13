export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
};

export const emojiRotate = {
  animate: {
    rotate: [0, 200, -200, 360, 0],
    x: [-800, 800, -800, 800, -800],
    y: [400, -400, 400],
    transition: { repeat: Infinity, duration: 10 }
  }
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5
    }
  }
};
