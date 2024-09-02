import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const ProblemFraming = () => {
  const clientProblems = [
    'Client problem 1',
    'Client problem 2',
    'Client problem 3',
    'Client problem 4',
    'Client problem 5',
  ];

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Problem Framing
      </Typography>
      <Typography variant="h6" gutterBottom>
        Client Problem Statement
      </Typography>
      <Grid container spacing={2}>
        {clientProblems.map((problem, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Typography variant="body1">{problem}</Typography>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body2" sx={{ mt: 2 }}>
        At least 3 or 5 that customer can say YES to
      </Typography>
    </Box>
  );
};

export default ProblemFraming;