import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';

const OutcomeFraming = () => {
  const stats = ['Stat 1', 'Stat 2', 'Stat 3'];

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Outcome Framing
      </Typography>
      <Typography variant="h6" gutterBottom>
        Get the outcome you expect
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum outcome framing statement all the services
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Button variant="outlined" fullWidth>{stat}</Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OutcomeFraming;