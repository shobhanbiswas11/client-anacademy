import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import heroImg from "../../assets/img/hero_image.jpg";

const useStyle = makeStyles((theme: Theme) => {
  return {
    root: {
      background: `linear-gradient(
        rgba(255, 255, 255, 0.9), 
        rgba(255, 255, 255, 0.3)
        ),
        url(${heroImg})`,
      minHeight: "100vh",
      //   backgroundSize: "cover",
      backgroundAttachment: "fixed",
    },
  };
});

const WithBG: React.SFC = ({ children }) => {
  const { root } = useStyle();
  return <div className={root}>{children}</div>;
};

export default WithBG;
