import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';

const OutcomeFraming = () => {
  const stats = ['Stat 1', 'Stat 2', 'Stat 3'];

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h1" gutterBottom>
      Built to Last, Delivered with Care.
      </Typography>
      <Typography variant="h2" gutterBottom>
      Your Vision, Our Precision.
      </Typography>
      <Typography variant="h4" gutterBottom>
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