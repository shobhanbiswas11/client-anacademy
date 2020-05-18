import React, { useState, useEffect } from "react";
import { AppBar, makeStyles, Theme } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) => {
  return {
    root: {
      transition: "all .3s ease",
    },
    trans: {
      boxShadow: "none",
      backgroundColor: "transparent",
      color: "white",
    },
  };
});

const ChangeColorOnScroll: React.SFC = ({ children }) => {
  const [isOpec, setIsOpec] = useState(false);
  const { trans, root } = useStyle();
  const appliedClass = isOpec ? "" : trans;

  useEffect(() => {
    window.addEventListener("scroll", checkPosition);

    return () => {
      window.removeEventListener("scroll", checkPosition);
    };
  });

  const checkPosition = () => {
    const ThreshodPixel = 40;

    if (window.scrollY > ThreshodPixel) {
      setIsOpec(true);
    } else {
      setIsOpec(false);
    }
  };

  return (
    <AppBar
      color="inherit"
      className={appliedClass}
      classes={{
        root,
      }}
    >
      {children}
    </AppBar>
  );
};

export default ChangeColorOnScroll;
