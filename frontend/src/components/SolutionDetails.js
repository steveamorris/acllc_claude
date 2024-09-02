import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';

const SolutionDetail = ({ title, description }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

const SolutionDetails = () => {
  const solutions = [
    { title: 'Solution Name 1', description: 'Description 1' },
    { title: 'Solution Name 2', description: 'Description 2' },
    { title: 'Solution Name 3', description: 'Description 3' },
  ];

  return (
    <Box sx={{ my: 4 }}>
      <Grid container spacing={2}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <SolutionDetail title={solution.title} description={solution.description} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SolutionDetails;