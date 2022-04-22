export const isAfterDate = (dateA, dateB) => dateA > dateB;
export const compare = (a, b) => a.getTime() - b.getTime();

export const getFullYear = () => new Date().getFullYear();
export const getMonth = () => new Date().getMonth() + 1;
export const getDate = () => new Date().getDate();
export const getHours = () => new Date().getHours();
export const getMinutes = () => new Date().getMinutes();
