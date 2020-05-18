import React, { useState } from "react";
import {
  Toolbar,
  IconButton,
  makeStyles,
  createStyles,
  Avatar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HeaderDrawer from "./HeaderDrawer";
import HeaderLinks from "./HeaderLinks";
import ChangeColorOnScroll from "./ChangeColorOnScroll";
import logo from "../../assets/img/logo.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    logo: {
      marginRight: "auto",
    },
  })
);

const Header: React.SFC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const classes = useStyles();

  const hadleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ChangeColorOnScroll>
      <Toolbar>
        <IconButton edge="start" color="inherit" className={classes.logo}>
          <Avatar src={logo} />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="menu"
          edge="end"
          onClick={() => {
            setOpen(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <HeaderDrawer hadleDrawerClose={hadleDrawerClose} open={open}>
          <HeaderLinks handleDrawerClose={hadleDrawerClose} />
        </HeaderDrawer>
      </Toolbar>
    </ChangeColorOnScroll>
  );
};

export default Header;
