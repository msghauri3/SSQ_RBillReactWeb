import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "AI Development",
      description: "We create intelligent AI solutions including machine learning models, natural language processing, and computer vision applications.",
      image: "/services/card01.png",
      buttonText: "Explore AI Solutions"
    },
    {
      id: 2,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs. We develop robust, scalable applications using modern technologies.",
      image: "/services/card01.png",
      buttonText: "View Portfolio"
    },
    {
      id: 3,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android. We create user-friendly mobile experiences.",
      image: "/services/card01.png",
      buttonText: "See Mobile Apps"
    },
    {
      id: 4,
      title: "Web Development",
      description: "Full-stack web development services creating responsive, high-performance websites and web applications.",
      image: "/services/card01.png",
      buttonText: "Discover Solutions"
    },
    {
      id: 5,
      title: "Web Design",
      description: "Beautiful, intuitive web designs that convert visitors into customers. We focus on user experience and visual appeal.",
      image: "/services/card01.png",
      buttonText: "View Designs"
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      {/* Page Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
          Our Services
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
          Comprehensive digital solutions tailored to your business needs.
        </Typography>
      </Box>

      {/* --- Grid Container --- */}
      <Box sx={{
        display: 'grid',
        // Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 4, // Sets consistent spacing between grid items
        width: '100%'
      }}>
        {/* --- Grid Items --- */}
        {services.map((service) => (
          <Paper
            key={service.id}
            elevation={3}
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              height: '100%', // Ensures all cards have the same height in a row
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 6
              }
            }}
          >
            {/* Service Image */}
            <Box
              component="img"
              src={service.image}
              alt={service.title}
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderRadius: 1,
                mb: 3
              }}
            />
            
            {/* Service Title */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
              {service.title}
            </Typography>
            
            {/* Service Description */}
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6, mb: 3, flexGrow: 1 }}>
              {service.description}
            </Typography>
            
            {/* Call to Action Button */}
            <Button
              variant="outlined"
              endIcon={<ArrowForward />}
              fullWidth
              sx={{
                borderColor: '#002e5b',
                color: '#002e5b',
                '&:hover': {
                  backgroundColor: '#002e5b',
                  color: 'white'
                }
              }}
            >
              {service.buttonText}
            </Button>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default ServicesPage;