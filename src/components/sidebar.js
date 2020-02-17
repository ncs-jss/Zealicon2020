import React, { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Burger, Menu } from "../subcomponents";
import FocusLock from "react-focus-lock";

const SideBar = () => {
  const theme = {
    primaryDark: "#0D0C1D",
    primaryLight: "#EFFFFA",
    primaryHover: "#343078",
    mobile: "768px"
  };
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <div ref={node} className="d-md-none">
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
      </>
    </ThemeProvider>
  );
};

export default SideBar;
