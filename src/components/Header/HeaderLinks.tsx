import React, { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  IconButton,
} from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const LISTS = [
  {
    name: "Recomended Books",
    icon: MenuBookIcon,
    url: "#",
  },
  {
    name: "Subject Wise Lecture",
    icon: MenuBookIcon,
    url: "#",
  },
  {
    name: "About Us",
    icon: MenuBookIcon,
    url: "#",
  },
];

const HeaderLinks: React.SFC<{ handleDrawerClose: any }> = ({
  handleDrawerClose,
}) => {
  return (
    <List>
      <ListItem button onClick={handleDrawerClose}>
        <IconButton edge="start">
          <ChevronRightIcon />
        </IconButton>
      </ListItem>
      <Divider />
      {LISTS.map((list) => (
        <Fragment key={list.name}>
          <ListItem button>
            <ListItemIcon>
              <list.icon />
            </ListItemIcon>
            <ListItemText primary={list.name.toUpperCase()} />
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

export default HeaderLinks;
