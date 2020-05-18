import React from "react";
import HorizontalSection from "./HorizontalSection";
import {
  Card,
  Avatar,
  Typography,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import BusinessIcon from "@material-ui/icons/Business";

const useStyle = makeStyles((theme) => {
  return {
    iconHolder: {
      height: "60px",
      width: "60px",
      margin: "1rem auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: `${theme.palette.primary.main}`,
      borderRadius: "50%",

      "& > svg": {
        height: "65%",
        width: "65%",
        color: "white",
      },
    },
  };
});

const RenderCard = (Icon: any, heading: string, content: string) => {
  const { iconHolder } = useStyle();

  return (
    <Card>
      <div className={iconHolder}>
        <Icon />
      </div>

      <Typography
        variant="h4"
        color="textSecondary"
        component="h2"
        align="center"
      >
        {heading}
      </Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

const DATA = [
  {
    Icon: BusinessIcon,
    heading: "Heading",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni fugiat veritatis, officiis voluptatem odio voluptatibus fuga aperiam explicabo accusantium. Natus iusto sed quis, est omnis distinctio nemo modi. Nisi.",
  },
  {
    Icon: BusinessIcon,
    heading: "Heading",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni doloribus accusantium esse velit voluptates voluptatibus soluta eligendi dicta facere quisquam accusamus, numquam consequatur sunt ratione quo nostrum animi dignissimos iste alias totam dolor cumque quae quibusdam possimus. Quos, sunt at!",
  },
  {
    Icon: BusinessIcon,
    heading: "Heading",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni doloribus accusantium esse velit voluptates voluptatibus soluta eligendi dicta facere quisquam accusamus, numquam consequatur sunt ratione quo nostrum animi dignissimos iste alias totam dolor cumque quae quibusdam possimus. Quos, sunt at!",
  },
];

const WhatWeProvide: React.SFC = () => {
  return (
    <HorizontalSection title="What We Provide">
      {DATA.map(({ Icon, heading, content }) => {
        return RenderCard(Icon, heading, content);
      })}
    </HorizontalSection>
  );
};

export default WhatWeProvide;
