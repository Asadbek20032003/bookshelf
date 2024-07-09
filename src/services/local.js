export const getLocal = (key) => {
  const data = localStorage.getItem(key);
  if (data) return JSON.parse(data);
  else return null;
};

export const setLocal = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
