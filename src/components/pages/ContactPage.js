import React from 'react';
import { Container, Typography, Grid, TextField, Button, Box, Paper } from '@mui/material';

const ContactPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8, minHeight: '60vh' }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 4, color: '#002e5b' }}>
        Contact Us
      </Typography>
      
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
            Get in touch with us to discuss your project requirements. We're here to help you bring your ideas to life.
          </Typography>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 1, color: '#002e5b' }}>
              Contact Information
            </Typography>
            <Typography>Email: info@Coditium.com</Typography>
            <Typography>Phone: +92 (333) 519-1392</Typography>
            <Typography>Address: Bahria Town, Karachi</Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 3, color: '#002e5b' }}>
              Send us a Message
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField label="Your Name" variant="outlined" fullWidth />
              <TextField label="Your Email" variant="outlined" fullWidth />
              <TextField label="Subject" variant="outlined" fullWidth />
              <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  backgroundColor: '#002e5b',
                  '&:hover': { backgroundColor: '#00498a' }
                }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;