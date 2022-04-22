export const isNull = (val) => val === null;
export const isUndefined = (val) => typeof val === undefined;
export const isNaN = (val) => Number.isNaN(val);
export const isArray = (val) => Array.isArray(val);
export const isString = (val) =>
  typeof val === "string" || val instanceof String;
export const isObject = (val) =>
  typeof val === "object" && val !== null && !isArray(val);
export const isTruthy = (val) => Boolean(val);
export const isFalsy = (val) => !Boolean(val);
