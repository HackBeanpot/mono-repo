export const sunRays = {
  animate: {
    scale: [0.9, 1.2, 0.9],
    rotate: [10, 25, 10, 25, 10],
    transition: {
      repeat: Infinity,
      duration: 14
    }
  }
};

export const moonRock = {
  animate: {
    rotate: [-13, 20, -13],
    transition: {
      repeat: Infinity,
      duration: 10
    }
  }
};


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
export const fadeInLeft = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
};

export const fadeInRight = {
  initial: {
    x: 60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5
    }
  }
};