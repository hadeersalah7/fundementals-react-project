import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const getIntialDarkMode = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)')?.matches
    console.log(prefersDarkMode)
    return prefersDarkMode
}
  
export const AppProvider = ({ children }) => {
  
  const [isDarkTheme, setIsDarkTheme] = useState(false);
      (getIntialDarkMode())
  const [searchTerm, setSearchTerm] = useState("cat");

  const toggleTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
  };
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme])
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
