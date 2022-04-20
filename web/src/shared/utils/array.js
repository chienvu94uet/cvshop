export const removeDuplicate = (arr) => [...new Set(arr)];

export const resize = (size, arr) => (arr.length = size);

export const add = (arr, newItem) => {
  return [...arr, newItem];
};

export const sum = (arr) =>
  arr.reduce((previousValue, currentValue) => currentValue + previousValue, 0);
