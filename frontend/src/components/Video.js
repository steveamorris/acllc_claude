import React from 'react';
import { Typography, Box } from '@mui/material';

const Video = () => {
  return (
    <Box sx={{ my: 4 }}>
            <Box sx={{ my: 4, textAlign: 'left' }}>
      <Typography variant="h6" component="h1" gutterBottom>
      Video Section
      </Typography>
      </Box>
      <Typography variant="h5" gutterBottom>
        Video explaining Process
      </Typography>
      <Box sx={{ width: '100%', height: '315px', bgcolor: 'grey.300', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography>Video Placeholder</Typography>
      </Box>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Positioning Video to filter out certain people
      </Typography>
    </Box>
  );
};

export default Video;