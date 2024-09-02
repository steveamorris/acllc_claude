import React from 'react';
import { Typography, Box } from '@mui/material';

const MoreTestimonials = () => {
  return (
    <Box sx={{ my: 4, bgcolor: 'grey.200', p: 3 }}>
      <Typography variant="h5" gutterBottom align="center">
        Testimonials
      </Typography>
      {/* Add more detailed testimonials here */}
    </Box>
  );
};

export default MoreTestimonials;