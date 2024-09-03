import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';

const OutcomeFraming = ({ title, description }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

const OutcomeFramings = () => {
  const outcomes = [
    { title: 'Increased Property Value', description: 'High-quality concrete work enhances the appearance and functionality of a property, leading to increased property value. A well-executed driveway, patio, or walkway can make a home more attractive to potential buyers.' },
    { title: 'Durability and Longevity', description: 'Professionally installed concrete structures are built to last, reducing the need for frequent repairs and replacements. This durability translates to long-term savings and less hassle for the homeowner.              ' },
    { title: 'Time and Stress Savings', description: 'Working with a reliable contractor who delivers projects on time and communicates effectively reduces the stress and inconvenience often associated with home improvement projects.                                       ' },
  ];

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h2" gutterBottom>
      Built to Last, Delivered with Care.
      </Typography>
      <Typography variant="h3" gutterBottom>
      Your Vision, Our Precision.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Lorem ipsum outcome framing statement all the services
      </Typography>
      <Grid container spacing={2}>
        {outcomes.map((outcome, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <OutcomeFraming title={outcome.title} description={outcome.description} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OutcomeFramings;