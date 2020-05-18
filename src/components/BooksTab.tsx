import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.primary.light,
    color: "white",
    fontWeight: "bold",
  },
}));

export default function BooksTab({
  value,
  handleChange,
  tabs,
}: {
  value: number;
  handleChange: any;
  tabs: string[];
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {tabs.map((tab, i) => (
          <Tab label={tab} key={tab + i} />
        ))}
      </Tabs>
    </div>
  );
}
