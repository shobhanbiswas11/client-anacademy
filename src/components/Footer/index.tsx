import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Grid,
  makeStyles,
  InputBase,
  Button,
} from "@material-ui/core";

export interface FooterProps {}

const useStyle = makeStyles((theme) => {
  return {
    root: {
      color: "white",
      border: "1px solid white",
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(0.1, 1),
      width: "100%",
    },
    btn: {
      color: theme.palette.primary.main,
      backgroundColor: "white",
      padding: theme.spacing(0.9, 1),
    },
  };
});

const Footer: React.SFC<FooterProps> = () => {
  const { root, btn } = useStyle();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg" disableGutters>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={7}>
              <InputBase classes={{ root }} placeholder="Enter your email" />
            </Grid>
            <Grid item xs={5}>
              <Button variant="contained" className={btn} size="small">
                Hear From Us
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
