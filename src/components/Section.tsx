import * as React from "react";
import { Box, Typography } from "@material-ui/core";

export interface SectionProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

const Section: React.SFC<SectionProps> = ({ title, children }) => {
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
        {children}
      </Box>
    );
  }
  return null;
};

export default Section;
