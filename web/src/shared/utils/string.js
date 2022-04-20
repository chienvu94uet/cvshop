export const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

export const capitalize = (str) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const getDescription = (text, number) =>
  text.length < number + 1 ? text : text.slice(0, number) + "...";
