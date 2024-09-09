import React from 'react';
import { AppBar, Toolbar, Button, Box, Link, useTheme, useMediaQuery } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="sticky" color="default" elevation={2}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
        <Box sx={{ flex: isMobile ? 1 : 0.5 }}>
          <img 
            src="/images/website/acllc_Logo_name.png" 
            alt="ACLLC Logo" 
            style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
          />
        </Box>
        {!isMobile && (
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Link 
              href="tel:678-758-7580" 
              color="inherit" 
              underline="hover" 
              sx={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <PhoneIcon sx={{ mr: 1 }} />
              678-758-7580
            </Link>
          </Box>
        )}
        <Box sx={{ flex: isMobile ? 1 : 0.5, display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            variant="contained" 
            color="primary"
            size="large"
            sx={{
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
              },
            }}
          >
            Book Call
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;