export const breakpoints = {
  mobile: 320,
  tabletXs: 470,
  tabletSm: 500,
  tablet: 768,
  tabletLg: 1024,
  desktop: 1280,
  desktopLg: 1440,
};

export const min = {
  mobile: `(min-width: ${breakpoints.mobile}px)`,
  tabletXs: `(min-width: ${breakpoints.tabletSm}px)`,
  tabletSm: `(min-width: ${breakpoints.tabletSm}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  tabletLg: `(min-width: ${breakpoints.tabletLg}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
  desktopLg: `(min-width: ${breakpoints.desktopLg}px)`
};

export const max = {
  mobile: `(max-width: ${breakpoints.mobile}px)`,
  tabletXs: `(max-width: ${breakpoints.tabletSm}px)`,
  tabletSm: `(max-width: ${breakpoints.tabletSm}px)`,
  tablet: `(max-width: ${breakpoints.tablet}px)`,
  tabletLg: `(max-width: ${breakpoints.tabletLg}px)`,
  desktop: `(max-width: ${breakpoints.desktop}px)`,
  desktopLg: `(max-width: ${breakpoints.desktopLg}px)`,
 
};
