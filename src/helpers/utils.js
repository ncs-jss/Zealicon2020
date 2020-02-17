export function isMobile() {
  if (!process.browser) {
    return false;
  }

  return global.innerWidth <= 840;
}
