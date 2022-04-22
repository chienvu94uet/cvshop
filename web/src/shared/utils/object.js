export const clone = (obj) => JSON.parse(JSON.stringify(obj));

export const deepClone = (obj) => structuredClone(obj);

export const clean = (obj) => {
  if (!obj) return {};
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if ([null, "", undefined].includes(value)) {
      delete result[key];
    }

    return result;
  });
};

export const jsonStringifyKeepUndefined = (obj) =>
  JSON.stringify(obj, (key, value) => (value === undefined ? null : value));

export const isSame = (a, b) =>
  jsonStringifyKeepUndefined(a) === jsonStringifyKeepUndefined(b);
