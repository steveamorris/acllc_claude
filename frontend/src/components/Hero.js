import React from 'react';
import { Typography, Box } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ my: 4, textAlign: 'center' }}>
      <Box sx={{ my: 4, textAlign: 'left' }}>
      <Typography variant="h6" component="h1" gutterBottom>
      Hero Section
      </Typography>
      </Box>
      <Typography variant="h1" component="h1" gutterBottom>
      Professionally Installed 
      </Typography>
      <Typography variant="h1" component="h1" gutterBottom>
      Concrete Structures 
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
      We provide full-service concrete installation for foundations, driveways, patios,
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
      and retaining walls, along with expert demolition and site preparation. 
      </Typography>
    </Box>
  );
};

export default Hero;