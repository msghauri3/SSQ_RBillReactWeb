import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8, minHeight: '60vh' }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 'bold',
          mb: 6,
          color: '#002e5b',
          textAlign: 'center'
        }}
      >
        About Us
      </Typography>

      {/* ✅ Force One Row + Two Columns Always */}
      <Grid container spacing={4} alignItems="stretch">
        
        {/* Left Column - Image */}
        <Grid item xs={6}>
          <Card sx={{ boxShadow: 4, borderRadius: 3, overflow: 'hidden', height: '100%' }}>
            <Box
              component="img"
              src="/cards/card01.png"
              alt="About Our Company"
              sx={{
                width: '100%',
                height: '100%',
                minHeight: '400px',
                objectFit: 'cover'
              }}
            />
          </Card>
        </Grid>

        {/* Right Column - About Text */}
        <Grid item xs={6}>
          <Card sx={{ p: 4, boxShadow: 4, borderRadius: 3, height: '100%' }}>
            <CardContent>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#002e5b' }}>
                Our Story
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
                At <strong>Coditium</strong>, we are committed to delivering innovative software solutions 
                that empower businesses to succeed in the digital era. Our expertise includes 
                <strong> .NET Core applications, mobile app development, and AI-driven projects</strong> 
                designed to enhance efficiency and decision-making.
                <br /><br />
                We focus on <strong>quality, scalability, and security</strong>, ensuring that every project 
                we deliver aligns with industry standards and best practices. Our mission is simple: 
                to build technology that drives growth and innovation.
              </Typography>

              <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f0f7ff', borderRadius: 2 }}>
                    <Typography variant="h5" sx={{ color: '#002e5b', fontWeight: 'bold' }}>
                      5+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Years Experience
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f0f7ff', borderRadius: 2 }}>
                    <Typography variant="h5" sx={{ color: '#002e5b', fontWeight: 'bold' }}>
                      100+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Projects Completed
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#002e5b' }}>
                  Our Values
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                  • Innovation & Creativity • Quality & Excellence • 
                  Customer Satisfaction • Continuous Improvement • Team Collaboration
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
