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
    bold: {
      fontWeight: "bolder",
      color: theme.palette.grey[800],
    },
    thin: {
      fontWeight: "lighter",
      color: theme.palette.grey[600],
    },
    colored: {
      color: theme.palette.primary.main,
    },
  };
});

const Hero: React.SFC = () => {
  const { bold, thin, colored } = useStyle();

  return (
    <WithBG>
      <Container>
        <Header />
        <Box paddingTop="12rem" paddingBottom="5rem" textAlign="center">
          <Typography component="h1" variant="h3">
            <span className={bold}>We are ready to start</span>{" "}
            <span className={thin}>from where you stuck</span>
          </Typography>
          <Box my={3} width="90%" mx="auto">
            <Typography>
              A Ninja Level <span className={colored}>Guide Centre </span>For{" "}
              <span className={colored}>WBCS</span> And All Other Comparative
              Exams.
            </Typography>
          </Box>
        </Box>
        <Box textAlign="center">
          <Button
            style={{ marginRight: "1rem" }}
            variant="contained"
            color="primary"
            size="large"
          >
            Demo Class
          </Button>
          <Button variant="contained" color="primary" size="large">
            Contact Us
          </Button>
        </Box>
      </Container>
    </WithBG>
  );
};

export default Hero;
