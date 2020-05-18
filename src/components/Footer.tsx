import React from "react";
import { AppBar, Toolbar, makeStyles, TextField, Box } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
  return {
    toolbar: {
      color: "white",
    },
    textField: {},
  };
});

const Footer: React.SFC = () => {
  const { textField, toolbar } = useStyle();

  return (
    <AppBar position="static">
      <Toolbar className={toolbar}>
        <div>Logo</div>
        <Box borderColor="error.main">
          <TextField />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
