import LocalStorage from "shared/utils/localstorage";

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = React.useState(
    LocalStorage.get(storageKey) ?? fallbackState
  );

  React.useEffect(() => {
    LocalStorage.set(storageKey, value);
  }, [value, storageKey]);

  return [value, setValue];
};

export default useLocalStorage;

// use: const [isOpen, setOpen] = useLocalStorage('is-open', false);
