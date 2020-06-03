import * as React from "react";
import { Grid, Paper, Box, Typography } from "@material-ui/core";

export interface HorizontalSectionProps {
  title: string;
  children: React.ReactNode[];
}

const HorizontalSection: React.SFC<HorizontalSectionProps> = ({
  title,
  children,
}) => {
  if (children) {
    return (
      <Box my={10}>
        <Typography
          style={{ marginBottom: "2rem" }}
          component="h2"
          variant="h4"
          align="center"
        >
          {title}
        </Typography>
        <Grid container spacing={2}>
          {children.map((child) => (
            <Grid item xs={12} key={Math.random().toString()}>
              {child}
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
  return null;
};

export default HorizontalSection;
