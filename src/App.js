import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Button,
  Fab 
} from '@mui/material';
import { 
  KeyboardArrowUp,
  DesignServices,
  Code,
  RocketLaunch
} from '@mui/icons-material';
import TopBar from './components/TopBar';
import LinksBar from './components/LinksBar';
import SliderBar from './components/SliderBar';
import AnimatedText from './components/AnimatedText';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer'; // Import the Footer component
import ScrollTop from './components/ScrollTop';

// Main App Component
const App = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "We create intuitive and beautiful user interfaces that enhance user experience and engagement.",
      icon: <DesignServices />,
      color: "#002e5b" // Blue color
    },
    {
      title: "Web Development",
      description: "Our developers build responsive, fast, and secure websites using the latest technologies.",
      icon: <Code />,
      color: "#00498a" // Lighter blue
    },
    {
      title: "Digital Marketing",
      description: "We help you reach your target audience and grow your business with effective marketing strategies.",
      icon: <RocketLaunch />,
      color: "#0066cc" // Even lighter blue
    }
  ];

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'background.default' }}>
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>
      
      <div id="back-to-top-anchor" />
      
      <TopBar />
      <LinksBar />
      <SliderBar />
      
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center' }}>
          <AnimatedText text="Welcome to Our Amazing Platform" />
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ 
              maxWidth: 600, 
              mx: 'auto', 
              lineHeight: 1.6 
            }}
          >
            Discover incredible features and beautiful designs that will transform your digital experience with cutting-edge technology.
          </Typography>
        </Box>
      </Container>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 2,
            color: '#002e5b' // Blue color for heading
          }}
        >
          Our Services
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          align="center" 
          sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
        >
          We offer a wide range of services to help your business grow and succeed in the digital world.
        </Typography>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Paper 
          elevation={4} 
          sx={{ 
            p: 6, 
            background: 'linear-gradient(135deg, #002e5b 0%, #00498a 100%)', // Blue gradient
            color: 'white'
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Contact us today and let's create something amazing together.
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            sx={{
              backgroundColor: 'white',
              color: '#002e5b', // Blue color
              fontWeight: 'bold',
              px: 4,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)'
              }
            }}
          >
            Contact Us
          </Button>
        </Paper>
      </Container>

      {/* Use the Footer component */}
      <Footer />
      
      <ScrollTop>
        <Fab 
          color="primary" 
          size="medium" 
          aria-label="scroll back to top"
          sx={{
            backgroundColor: '#002e5b', // Blue background
            '&:hover': {
              backgroundColor: '#00498a' // Lighter blue on hover
            }
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </Box>
  );
};

export default App;