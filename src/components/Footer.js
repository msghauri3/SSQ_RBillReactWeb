import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Button 
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#002e5b', // Blue background
        color: 'white',
        py: 6,
        mt: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              YourBrand
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Creating beautiful digital experiences that captivate your audience and drive results.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone sx={{ mr: 1, fontSize: '20px' }} />
              <Typography variant="body2">+1 (555) 123-4567</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 1, fontSize: '20px' }} />
              <Typography variant="body2">info@yourbrand.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ mr: 1, fontSize: '20px' }} />
              <Typography variant="body2">123 Design Street, Creative City</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((network) => (
                <Button
                  key={network}
                  variant="outlined"
                  size="small"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  {network}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;