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
    { title: 'We Focus on High Quality', description: 'We are not wasteful, but we error on the side of over-engineering.' },
    { title: 'We agree on a Fair Price', description: 'We are not the cheapest, but we are competitive.' },
    { title: 'We Maintain a Tidy Worksite', description: 'We maximize cleanliness, and minimize site disruption.' },
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