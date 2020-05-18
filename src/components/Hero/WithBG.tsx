import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import heroImg from "../../assets/img/hero_image.jpg";

const useStyle = makeStyles((theme: Theme) => {
  return {
    root: {
      background: `linear-gradient(
        rgba(0, 0, 0, 0.7), 
        rgba(0, 0, 0, 0.7)
        ),
        url(${heroImg})`,
      height: "100vh",
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
