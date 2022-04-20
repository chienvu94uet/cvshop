export const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

export const capitalize = (str) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
