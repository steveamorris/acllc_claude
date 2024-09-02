import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'grey.200', p: 6, mt: 4 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="body2">
            email@email.com
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            Logo
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            Phone #
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;