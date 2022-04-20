// https://1loc.dev/
export const removeDuplicate = (arr) => [...new Set(arr)];

export const resize = (size, arr) => (arr.length = size);

export const add = (arr, newItem) => {
  return [...arr, newItem];
};

export const sum = (arr) =>
  arr.reduce((previousValue, currentValue) => currentValue + previousValue, 0);

export const castArray = (value) => (Array.isArray(value) ? value : [value]);

export const isEmpty = (arr) => Array.isArray(arr) && !arr.length;

export const clone = (arr) => JSON.parse(JSON.stringify(arr));

export const isEqual = (arr1, arr2) => {
  return (
    JSON.stringify([...new Set(arr1)].sort()) ===
    JSON.stringify([...new Set(arr2)].sort())
  );
};

export const countOccurences = (arr, key) => {
  return arr.reduce((previousValue, currentValue) => {
    return currentValue === key ? previousValue + 1 : previousValue;
  }, 0);
};

export const empty = (arr) => (arr.length = 0);

export const min = (arr) => Math.min(...arr);

export const max = (arr) => Math.max(...arr);
