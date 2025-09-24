import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8, minHeight: '80vh' }}>
      {/* Page Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
          About Us
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
          Crafting Digital Excellence Through Innovative Software Solutions
        </Typography>
      </Box>

      {/* Main Content - One Row, Two Columns */}
      <Paper elevation={2} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <Grid container spacing={0} sx={{ minHeight: '500px' }}>
          
          {/* First Column - Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/aboutus/card01.png" 
              alt="Our Software Development Team"
              sx={{
                width: '100%',
                height: '100%',
                minHeight: '500px',
                objectFit: 'cover',
                display: 'block'
              }}
              onError={(e) => {
                e.target.src = '/about-placeholder.jpg';
              }}
            />
          </Grid>
          
          {/* Second Column - Details */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: 6, 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              backgroundColor: '#f8f9fa'
            }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#002e5b' }}>
                Who We Are
              </Typography>
              
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, fontSize: '1.1rem' }}>
                We are a passionate team of software engineers, designers, and digital strategists 
                dedicated to transforming ideas into powerful digital solutions. With years of 
                experience in the tech industry, we specialize in creating custom software that 
                drives business growth and delivers exceptional user experiences.
              </Typography>
              
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4, fontSize: '1.1rem' }}>
                Our mission is to bridge the gap between technology and business needs, providing 
                innovative solutions that are scalable, secure, and future-ready. We believe in 
                the power of technology to solve complex problems and create meaningful impact 
                for our clients worldwide.
              </Typography>

              {/* Key Highlights */}
              <Box sx={{ mb: 4 }}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002e5b' }}>
                        20+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Years Experience
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002e5b' }}>
                        50+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Projects Delivered
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002e5b' }}>
                        50+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Happy Clients
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002e5b' }}>
                        24/7
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Support
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* Core Values */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#002e5b' }}>
                  Our Core Values
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['Innovation', 'Quality', 'Reliability', 'Excellence', 'Collaboration'].map((value, index) => (
                    <Box
                      key={index}
                      sx={{
                        px: 2,
                        py: 1,
                        backgroundColor: '#002e5b',
                        color: 'white',
                        borderRadius: 2,
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}
                    >
                      {value}
                    </Box>
                  ))}
                </Box>
              </Box>

              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  backgroundColor: '#002e5b',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  alignSelf: 'flex-start',
                  '&:hover': {
                    backgroundColor: '#00498a'
                  }
                }}
              >
                Learn More About Our Work
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Additional Info Section */}
      
    </Container>
  );
};

export default AboutPage;