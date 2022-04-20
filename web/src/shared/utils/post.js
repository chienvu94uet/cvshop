export const readingTime = (target) => {
  const ele = document.querySelector(target);
  const wpm = 225;
  // \s+: remove space, new line, tab
  const words = ele.innerText.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wpm);
  return minutes;
};
