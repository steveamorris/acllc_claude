import React from 'react';
import { Typography, Box } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ my: 4, textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Value Proposition Catchy Phrase
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Generic Services Category Line
      </Typography>
    </Box>
  );
};

export default Hero;