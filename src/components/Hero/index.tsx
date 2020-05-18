import React from "react";
import {
  Typography,
  makeStyles,
  Box,
  Button,
  Theme,
  Container,
} from "@material-ui/core";
import Header from "../Header";
import WithBG from "./WithBG";

const useStyle = makeStyles((theme: Theme) => {
  return {
    root: {
      color: "white",
      height: "100%",
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    name: {
      // fontWeight: "bold",
      fontSize: "3.4em",
      letterSpacing: "1px",
    },
    subtitle: {
      lineHeight: "1.4rem",
    },
    colored: {
      color: theme.palette.primary.light,
    },
  };
});

const Hero: React.SFC = () => {
  const { root, name, subtitle, colored } = useStyle();

  return (
    <WithBG>
      <Header />
      <Container className={root}>
        <Box marginBottom="2.5rem">
          <Typography variant="h1" className={name} align="center" gutterBottom>
            An Academy
          </Typography>
          <Typography variant="subtitle1" align="center" className={subtitle}>
            A Ninja Level Guide Center For <span className={colored}>WBCS</span>{" "}
            And All Other <span className={colored}>Comparative Exams</span>.
          </Typography>
        </Box>

        <Box>
          <Button
            color="primary"
            variant="contained"
            style={{ marginRight: "1rem" }}
          >
            Demo Class
          </Button>
          <Button color="primary" variant="contained">
            Enroll
          </Button>
        </Box>
      </Container>
    </WithBG>
  );
};

export default Hero;
