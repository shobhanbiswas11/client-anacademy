import React from "react";
import { Container, ThemeProvider, CssBaseline } from "@material-ui/core";
import Hero from "./components/Hero";
import theme from "./theme";
import WhatWeProvide from "./components/WhatWeProvide";
import Books from "./components/Books";
import SubjectWiseLecture from "./components/SubjectWiseLecture";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      <Container maxWidth="lg">
        <WhatWeProvide />
        <Books />
        <SubjectWiseLecture />
      </Container>
    </ThemeProvider>
  );
}

export default App;
