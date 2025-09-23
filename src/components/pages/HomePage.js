import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import SliderBar from '../SliderBar';
import AnimatedText from '../AnimatedText';
import HorizontalCardCarousel from '../HorizontalCardCarousel';

const HomePage = () => {
  const featuredServices = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance and scalability.",
      image: "/card01.png",  // Your actual image 1
      buttonText: "Learn More"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed to enhance user experience and drive engagement.",
      image: "/card02.png",  // Your actual image 2
      buttonText: "View Portfolio"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and reach target audiences.",
      image: "/card03.png",  // Your actual image 3
      buttonText: "Get Started"
    },
    {
      title: "Mobile Applications",
      description: "Cross-platform mobile applications developed for iOS and Android with native performance.",
      image: "/card04.png",  // Your actual image 4
      buttonText: "See Examples"
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with secure payment integration and inventory management systems.",
      image: "/card05.png",  // Your actual image 5
      buttonText: "Explore Solutions"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions tailored to your business requirements.",
      image: "/card06.png",  // Your actual image 6
      buttonText: "Discover More"
    }
  ];

  return (
    <>
      <SliderBar />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <AnimatedText text="Our Services" />
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
            Discover our comprehensive range of digital solutions
          </Typography>
        </Box>
        
        <HorizontalCardCarousel cards={featuredServices} />
      </Container>
    </>
  );
};

export default HomePage;