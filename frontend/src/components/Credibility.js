import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const Credibility = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: '100%', height: '200px', bgcolor: 'grey.300', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography>Pic of Completed Job</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Case Study</Typography>
          <Typography variant="body1">Description of the case study goes here...</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Credibility;