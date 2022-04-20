const LocalStorage = {
  set(key, value, ttl) {
    const now = new Date();

    const item = {
      value,
      expire: now.getTime() + ttl,
    };

    localStorage.setItem(key, JSON.stringify(item));
  },

  get(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;
    const itemCache = JSON.parse(itemStr);
    if (itemCache.expire < new Date().getTime()) {
      LocalStorage.remove(key);
      return null;
    }

    return itemCache.value;
  },

  remove(key) {
    localStorage.removeItem(key);
  },
};

export default LocalStorage;
