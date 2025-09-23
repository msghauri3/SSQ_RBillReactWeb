import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

const services = [
  {
    title: "Artificial Intelligence",
    description: "Transform your business with AI-powered solutions — from machine learning to intelligent automation, we build systems that make smarter decisions.",
    image: "/cards/card01.png"
  },
  {
    title: "Website Development",
    description: "Beautiful, responsive, and performance-driven websites tailored to your brand — designed to deliver a seamless user experience.",
       image: "/cards/card02.png"
  },
  {
    title: "Web Applications",
    description: "Robust, scalable web applications built using .NET Core and modern frameworks, ensuring security, reliability, and high performance.",
      image: "/cards/card02.png"
  },
  {
    title: "Internet of Things (IoT)",
    description: "Connect, innovate, and transform with IoT solutions that integrate devices, collect data, and deliver real-time insights.",
       image: "/cards/card01.png"
  },
  {
    title: "Web3 Development",
    description: "Empowering the decentralized future with blockchain, smart contracts, and dApps — secure and transparent digital ecosystems.",
     image: "/cards/card02.png"
  },
  {
    title: "DevOps Services",
    description: "Accelerate innovation with seamless CI/CD pipelines, infrastructure automation, and efficient cloud operations.",
       image: "/cards/card01.png"
  }
];

const ServicesPage = () => {
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
        Our Services
      </Typography>

      {services.map((service, index) => (
        <Grid
          key={index}
          container
          spacing={4}
          alignItems="stretch"
          sx={{ mb: 6 }}
        >
          {/* Alternate layout for variety (image left/right) */}
          {index % 2 === 0 ? (
            <>
              {/* Left Column - Image */}
              <Grid item xs={6}>
                <Card sx={{ boxShadow: 4, borderRadius: 3, overflow: 'hidden', height: '100%' }}>
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      minHeight: '300px',
                      objectFit: 'cover'
                    }}
                  />
                </Card>
              </Grid>

              {/* Right Column - Text */}
              <Grid item xs={6}>
                <Card sx={{ p: 4, boxShadow: 4, borderRadius: 3, height: '100%' }}>
                  <CardContent>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </>
          ) : (
            <>
              {/* Right Column - Text (reversed layout) */}
              <Grid item xs={6}>
                <Card sx={{ p: 4, boxShadow: 4, borderRadius: 3, height: '100%' }}>
                  <CardContent>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Left Column - Image */}
              <Grid item xs={6}>
                <Card sx={{ boxShadow: 4, borderRadius: 3, overflow: 'hidden', height: '100%' }}>
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      minHeight: '300px',
                      objectFit: 'cover'
                    }}
                  />
                </Card>
              </Grid>
            </>
          )}
        </Grid>
      ))}
    </Container>
  );
};

export default ServicesPage;
