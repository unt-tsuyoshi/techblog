// export const breakpoints = [576, 768, 992, 1200];
// export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
export const breakpoints = {
  md: 768,
  lg: 1024,
};

export const breakpointUp = (key) => {
  const bp = breakpoints[key];
  return `@media (min-width: ${bp}px)`;
};
