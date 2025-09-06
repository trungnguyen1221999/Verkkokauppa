import React, { createContext, useState, useContext } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([0]); // menu gốc luôn là index 0

  const openMenu = () => {
    setIsOpen(true);
    setHistory([0]);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setHistory([0]);
  };

  const openSub = (index) => {
    setHistory((prev) => [...prev, index]);
  };

  const goBack = () => {
    setHistory((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  const currentIndex = history[history.length - 1];

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        openMenu,
        closeMenu,
        openSub,
        goBack,
        currentIndex,
        history,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
