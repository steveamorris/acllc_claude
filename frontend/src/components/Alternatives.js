import React from 'react';
import { Typography, Box, ImageList, ImageListItem } from '@mui/material';

const Alternatives = () => {
  const images = [
    '/images/website/no_surprises.png',
    '/images/website/porr_quality.png',
    '/images/website/mess.png',
  ];

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Don't settle for the stress and disappointment of working with others . . .
      </Typography>
      <Typography variant="h6" gutterBottom>
        Avoid headaches with one simple call
      </Typography>
      <ImageList sx={{ width: '100%', height: 'auto' }} cols={3} rowHeight="auto">
        {images.map((img, index) => (
          <ImageListItem key={index}>
            <img
              src={img}
              alt={`Alternative ${index + 1}`}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Alternatives;