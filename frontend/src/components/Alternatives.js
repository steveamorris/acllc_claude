import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const Alternatives = () => {
  const reasons = [
    'Feature Reason 1',
    'Feature Reason 2',
    'Feature Reason 3',
  ];

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Why alternatives won't work for you
      </Typography>
      <Typography variant="h6" gutterBottom>
        Why most Concrete companies lead to nowhere
      </Typography>
      <Grid container spacing={2}>
        {reasons.map((reason, index) => (
          <Grid item xs={12} key={index}>
            <Typography variant="body1">{reason}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Alternatives;