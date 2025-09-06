import React, { createContext, useState, useContext } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([]);

  const openMenu = () => {
    setIsOpen(true);
    setHistory([{ type: "root" }]);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setHistory([]);
  };

  const openSub = (type, key, path = []) => {
    setHistory((prev) => [...prev, { type, key, path }]);
  };

  const goBack = () => {
    setHistory((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  const current = history[history.length - 1] || { type: "root" };

  return (
    <MenuContext.Provider
      value={{ isOpen, openMenu, closeMenu, openSub, goBack, current }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
