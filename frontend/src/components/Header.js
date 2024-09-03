import React from 'react';
import { AppBar, Toolbar, Button, Box, Link } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ flex: 1 }}>
          <img 
            src="/images/website/acllc_Logo_name.png" 
            alt="ACLLC Logo" 
            style={{ height: '80px', width: 'auto', objectFit: 'contain' }}
          />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Link 
            href="tel:678-758-7580" 
            color="inherit" 
            underline="hover" 
            sx={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            678-758-7580
          </Link>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="primary">
            Book Call
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;