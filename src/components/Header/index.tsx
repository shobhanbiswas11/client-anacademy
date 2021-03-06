import React, { useState } from "react";
import {
  Toolbar,
  IconButton,
  makeStyles,
  createStyles,
  Avatar,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HeaderDrawer from "./HeaderDrawer";
import HeaderLinks from "./HeaderLinks";
import ChangeColorOnScroll from "./ChangeColorOnScroll";
import logo from "../../assets/img/logo.png";
import AboutYourTeacher from "../AboutYourTeacher";

const useStyles = makeStyles((theme) =>
  createStyles({
    logo: {
      marginRight: "auto",
    },
    teacherBtn: {
      marginRight: theme.spacing(2),
    },
  })
);

const Header: React.SFC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [teacherSectionOpen, setTeacherSectionOpen] = useState<boolean>(false);

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
        <Button
          color="inherit"
          variant="outlined"
          className={classes.teacherBtn}
          size="small"
          onClick={() => {
            setTeacherSectionOpen(true);
          }}
        >
          Your Teacher
        </Button>
        <IconButton
          color="inherit"
          aria-label="menu"
          edge="end"
          onClick={() => {
            setOpen(true);
          }}
        >
          <MenuIcon color="inherit" />
        </IconButton>
        <HeaderDrawer hadleDrawerClose={hadleDrawerClose} open={open}>
          <HeaderLinks handleDrawerClose={hadleDrawerClose} />
        </HeaderDrawer>
      </Toolbar>
      <AboutYourTeacher
        open={teacherSectionOpen}
        setOpen={setTeacherSectionOpen}
      />
    </ChangeColorOnScroll>
  );
};

export default Header;
