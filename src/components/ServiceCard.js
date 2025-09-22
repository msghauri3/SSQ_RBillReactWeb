import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';

const ServiceCard = ({ title, description, icon, color }) => {
  // Use blue color variants for all cards
  const blueColors = ['#002e5b', '#00498a', '#0066cc'];
  const cardColor = color === '#6366f1' ? blueColors[0] : 
                    color === '#ec4899' ? blueColors[1] : 
                    blueColors[2];

  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        border: `4px solid ${cardColor}`,
        borderTop: `8px solid ${cardColor}`,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            width: 60,
            height: 60,
            background: cardColor,
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: 'white',
            mb: 2
          }}
        >
          {icon}
        </Box>
        <Typography 
          variant="h5" 
          component="h3" 
          sx={{ 
            fontWeight: 600,
            mb: 1.5,
            color: cardColor // Use the blue color for title
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ lineHeight: 1.6 }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          size="medium" 
          sx={{ 
            backgroundColor: cardColor,
            color: 'white',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: cardColor,
              opacity: 0.9
            }
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;