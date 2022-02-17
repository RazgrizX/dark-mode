import { useEffect, useState } from "react";

const DARK_MODE_LS_KEY = "dark-mode-enabled";
export function useDarkMode() {
  const cachedValue = localStorage.getItem(DARK_MODE_LS_KEY) === "true" ? true : false;
  const initialValue = cachedValue ? cachedValue : false;
  const [darkModeEnabled, setDarkModeEnabled] = useState(initialValue);

  function setState(value) {
    setDarkModeEnabled(value);
    localStorage.setItem(DARK_MODE_LS_KEY, value);
  }

  useEffect(() => {
    if (darkModeEnabled) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkModeEnabled]);

  return [darkModeEnabled, setState];
}
