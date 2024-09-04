import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const CallToAction = () => {
  return (
    <Box sx={{ my: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Call to Action!</Typography>
      <Typography variant="h5" gutterBottom>
        Need a new driveway without all the headaches?
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Book Call
      </Button>
    </Box>
  );
};

export default CallToAction;