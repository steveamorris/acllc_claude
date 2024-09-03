import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const ProblemFraming = () => {
  const clientProblems = [
    '**Stress:**',
    '**Disappointment:**',
    '**Anger:**',
    '**Anxiety:**',
    ' **Inconvenience:**',
  ];

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        You need a new driveway, but what can go wrong?
      </Typography>
      <Grid container spacing={2}>
        {clientProblems.map((problem, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Typography variant="body1">{problem}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProblemFraming;