import { Box, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="overline">Overline</Typography>
      <Typography variant="subtitle1">Subtitle</Typography>
      <Typography variant="body1">Body Text</Typography>
    </Box>
  );
};

export default Hero;
