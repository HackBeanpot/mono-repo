export const smallPuff = {
  initial: {
    x: -30,
    opacity: 0.01
  },
  animate: {
    x: 30,
    y: [0, -20, -30, -40],
    opacity: [0.1, 1, 0],
    transition: {
      delay: 1,
      repeatDelay: 0.5,
      duration: 2,
      repeat: Infinity
    }
  }
};

export const smallPuff2 = {
  initial: {
    x: -45,
    opacity: 0.01
  },
  animate: {
    x: 40,
    y: [0, -30, -40, -50],
    opacity: [0.1, 1, 0],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      delay: 2,
      repeatDelay: 0.6,
      bounce: 100
    }
  }
};

export const bigPuff = {
  initial: {
    x: -47,
    opacity: 0.01
  },
  animate: {
    x: 50,
    y: [0, 10 - 30, -20, -40, -50, -60],
    opacity: [0.1, 1, 0],
    transition: {
      duration: 2.3,
      repeat: Infinity,
      repeatDelay: 0.2
    }
  }
};
