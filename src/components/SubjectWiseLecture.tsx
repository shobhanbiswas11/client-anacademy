import React from "react";
import Section from "./Section";
import { Grid, Paper, Typography, Link, Button } from "@material-ui/core";

const SUBJECT = [...new Array(7)].map((item) => {
  return {
    name: "History",
    discritption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perferendis totam accusamus facilis architecto deleniti temporibus expedita sit est similique.",
  };
});

const SubjectWiseLecture: React.SFC = () => {
  return (
    <Section title="Subject Wise Lecture">
      <Grid container spacing={2}>
        {SUBJECT.map((sub, i) => (
          <Grid item xs={4} key={sub.name + i}>
            <Paper
              elevation={4}
              style={{
                padding: "1.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                href="https://www.youtube.com/results?search_query=anacademy"
                target="_blank"
                color="primary"
              >
                {sub.name}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default SubjectWiseLecture;
