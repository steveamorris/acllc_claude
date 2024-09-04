import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>A little about the Owner</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: '100%', height: '200px', bgcolor: 'grey.300', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography>Pic of Robert</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>A little about Robert</Typography>
          <Typography variant="body1">Description about Robert goes here...</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;