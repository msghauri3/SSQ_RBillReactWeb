import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';

const PortfolioPage = () => {
  const portfolioItems = [
    {
      title: "E-Commerce Website",
      description: "A modern e-commerce platform with seamless user experience.",
      image: "/portfolio1.jpg" // Replace with your image path
    },
    {
      title: "Corporate Website",
      description: "A professional corporate website with responsive design.",
      image: "/portfolio2.jpg"
    },
    {
      title: "Mobile Application",
      description: "A cross-platform mobile app with intuitive interface.",
      image: "/portfolio3.jpg"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8, minHeight: '60vh' }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 4, color: '#002e5b' }}>
        Portfolio
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 6 }}>
        Explore our latest projects and creative work.
      </Typography>
      
      <Grid container spacing={4}>
        {portfolioItems.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1, color: '#002e5b' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PortfolioPage;