const container = {
  hidden: { opacity: 0, y: '50vh' },
  staggerFadeInAndUp: {
    opacity: 1,
    y: '0',
    transition: {
      staggerChildren: 0.2
    }
  },
  fadeInAndUp: {
    opacity: 1,
    y: '0'
  }
};

const item = {
  hidden: { opacity: 0, y: '50vh' },
  staggerFadeInAndUp: { opacity: 1, y: 0 },
  fadeInAndUp: {
    opacity: 1,
    y: '0'
  }
};

export default { container, item };
