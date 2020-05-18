import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Grid,
  ExpansionPanelActions,
  Button,
  Divider,
  Box,
} from "@material-ui/core";
import { BOOKS } from "../data";
import BooksTab from "./BooksTab";
import Section from "./Section";

function printExpan(Book: {
  name: string;
  author: string;
  description: string;
}) {
  return (
    <ExpansionPanel key={`${Book.name}${Math.random().toString()}`}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Box>
          <Typography variant="h6" component="h2">
            {Book.name}
          </Typography>
          <Typography variant="caption">{Book.author}</Typography>
        </Box>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{Book.description}</Typography>
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button size="small" color="primary">
          Buy Now
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
}

const Books: React.SFC = () => {
  const [genre, setGenre] = useState<number>(0);

  const handleGenreChnage = (e: any, value: number) => {
    setGenre(value);
  };

  return (
    <Section title="Recomended Books">
      <Grid container>
        <BooksTab
          value={genre}
          handleChange={handleGenreChnage}
          tabs={BOOKS.map((book) => book.genre)}
        />
        {BOOKS.map((book) => printExpan(book))}
      </Grid>
    </Section>
  );
};

export default Books;
