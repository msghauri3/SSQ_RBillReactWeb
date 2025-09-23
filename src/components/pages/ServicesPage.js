import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { DesignServices, Code, RocketLaunch } from '@mui/icons-material';
import ServiceCard from '../ServiceCard';

const ServicesPage = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "We create intuitive and beautiful user interfaces that enhance user experience.",
      icon: <DesignServices />,
      color: "#002e5b"
    },
    {
      title: "Web Development", 
      description: "Our developers build responsive, fast, and secure websites.",
      icon: <Code />,
      color: "#00498a"
    },
    {
      title: "Digital Marketing",
      description: "We help you reach your target audience with effective strategies.",
      icon: <RocketLaunch />,
      color: "#0066cc"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8, minHeight: '60vh' }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 4, color: '#002e5b' }}>
        Our Services
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 6 }}>
        Discover our comprehensive range of services designed to meet your business needs.
      </Typography>
      
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ServiceCard 
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesPage;