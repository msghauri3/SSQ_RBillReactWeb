import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8, minHeight: '60vh' }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 4, color: '#002e5b' }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
        We are a creative team dedicated to delivering exceptional digital experiences 
        that help businesses grow and succeed in the modern landscape.
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, color: '#002e5b' }}>
              Our Mission
            </Typography>
            <Typography>
              To provide innovative solutions that drive business growth and create 
              meaningful digital experiences for our clients.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, color: '#002e5b' }}>
              Our Vision
            </Typography>
            <Typography>
              To be the leading digital agency known for creativity, quality, 
              and exceptional customer service.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;