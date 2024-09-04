import React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';

const Testimonial = ({ content }) => (
  <Card>
    <CardContent>
      <Typography variant="body2">{content}</Typography>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  const testimonials = [
    { id: 1, content: 'Testimonial 1' },
    { id: 2, content: 'Testimonial 2' },
    { id: 3, content: 'Testimonial 3' },
  ];

  return (
    <Grid container spacing={2} sx={{ my: 4 }}>
      {testimonials.map((testimonial) => (
        <Grid item xs={12} sm={4} key={testimonial.id}>
          <Testimonial content={testimonial.content} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Testimonials;