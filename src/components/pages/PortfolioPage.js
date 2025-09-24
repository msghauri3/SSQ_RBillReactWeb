import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Box, 
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Close, Launch, Code } from '@mui/icons-material';

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const projects = [
    {
      id: 1,
      title: "Website Development",
      description: "Professional web development services offering custom solutions, responsive designs, and modern user experiences for businesses of all sizes.",
      image: "/portfolio/card01.png",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Responsive Design"],
      features: ["Custom Solutions", "Responsive Design", "Modern UX", "SEO Optimized"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "SalonHub",
      description: "A comprehensive salon management system featuring online booking, service management, and customer reviews. Perfect for modern salons and beauty centers looking to digitize their operations.",
      image: "/portfolio/card02.png",
      category: "Management System",
      technologies: ["React", "Express.js", "MySQL", "Stripe API"],
      features: ["Online Booking", "Service Management", "Customer Reviews", "Payment Integration"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Review Menu Hub",
      description: "A dynamic restaurant menu and review platform that helps restaurants showcase their offerings and collect customer feedback. Features digital menus, ratings, and customer engagement tools.",
      image: "/portfolio/card03.png",
      category: "Restaurant Platform",
      technologies: ["Vue.js", "Firebase", "Google Maps API", "Real-time Updates"],
      features: ["Digital Menus", "Rating System", "Customer Feedback", "Analytics"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Elite POS",
      description: "A powerful Point of Sale system with inventory management, sales tracking, and detailed reporting. Perfect for retail stores, restaurants, and small businesses.",
      image: "/portfolio/card04.png",
      category: "POS System",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "WebSocket"],
      features: ["Inventory Management", "Sales Tracking", "Reporting", "Multi-store Support"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Medical Appointment System",
      description: "A comprehensive medical appointment scheduling system with patient management, appointment tracking, and automated reminders. Ideal for clinics and healthcare providers.",
      image: "/portfolio/card05.png",
      category: "Healthcare System",
      technologies: ["Angular", "Python", "SQLite", "Twilio API"],
      features: ["Appointment Scheduling", "Patient Management", "Automated Reminders", "Medical Records"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "AI Analytics Dashboard",
      description: "An intelligent analytics dashboard powered by AI, providing real-time insights, predictive analytics, and data visualization for informed decision-making.",
      image: "/portfolio/card06.png",
      category: "Analytics Platform",
      technologies: ["React", "Python", "TensorFlow", "D3.js"],
      features: ["Real-time Insights", "Predictive Analytics", "Data Visualization", "AI-powered"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "Excellence Academy",
      description: "A comprehensive school management system featuring admissions, programs, events management, and an interactive gallery. Perfect for modern educational institutions.",
      image: "/portfolio/card07.png",
      category: "Education System",
      technologies: ["Laravel", "Vue.js", "MySQL", "File Upload"],
      features: ["Admissions Management", "Program Management", "Events Calendar", "Student Portal"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Clinic Management System",
      description: "A specialized system for dental practices featuring patient records, treatment planning, appointment scheduling, and billing management.",
      image: "/portfolio/card08.png",
      category: "Healthcare Management",
      technologies: [".NET", "SQL Server", "React", "Chart.js"],
      features: ["Patient Records", "Treatment Planning", "Appointment Scheduling", "Billing"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 9,
      title: "FitZone Gym Management",
      description: "Comprehensive gym management system featuring membership tracking, class scheduling, trainer management, and performance analytics. Ideal for modern fitness centers.",
      image: "/portfolio/card09.png",
      category: "Fitness Management",
      technologies: ["React Native", "Node.js", "MongoDB", "Push Notifications"],
      features: ["Membership Tracking", "Class Scheduling", "Trainer Management", "Performance Analytics"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 8, minHeight: '100vh' }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
          Coditium Portfolio
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
          Explore our latest projects and innovative solutions across various industries. 
        </Typography>
      </Box>

      {/* PROPER GRID LAYOUT - 3 columns */}
      <Grid 
        container 
        spacing={4} 
        sx={{ 
          display: 'grid',
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            md: 'repeat(3, 1fr)' 
          },
          gap: 4,
          // Remove default Material-UI grid spacing
          width: '100%',
          margin: 0
        }}
      >
        {projects.map((project) => (
          <Box 
            key={project.id}
            sx={{ 
              width: '100%',
              // Ensure proper grid item behavior
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{ 
                  objectFit: 'cover',
                  borderBottom: '2px solid',
                  borderColor: 'divider'
                }}
                onError={(e) => {
                  e.target.src = '/portfolio/card01.png';
                }}
              />
              
              {/* Project Content */}
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Chip 
                  label={project.category} 
                  size="small" 
                  sx={{ 
                    mb: 2, 
                    backgroundColor: '#002e5b', 
                    color: 'white',
                    fontSize: '0.75rem'
                  }} 
                />
                
                <Typography 
                  variant="h5" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 2,
                    color: '#002e5b',
                    minHeight: '64px'
                  }}
                >
                  {project.title}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    lineHeight: 1.6,
                    mb: 2,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {project.description}
                </Typography>
                
                <Button 
                  variant="outlined" 
                  fullWidth
                  sx={{ 
                    mt: 'auto',
                    borderColor: '#002e5b',
                    color: '#002e5b',
                    '&:hover': {
                      backgroundColor: '#002e5b',
                      color: 'white'
                    }
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Grid>

      {/* Project Details Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog} 
        maxWidth="md" 
        fullWidth
        fullScreen={isMobile}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ m: 0, p: 3, pb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002e5b' }}>
                  {selectedProject.title}
                </Typography>
                <IconButton onClick={handleCloseDialog}>
                  <Close />
                </IconButton>
              </Box>
              <Chip 
                label={selectedProject.category} 
                sx={{ 
                  mt: 1,
                  backgroundColor: '#002e5b', 
                  color: 'white' 
                }} 
              />
            </DialogTitle>
            
            <DialogContent sx={{ p: 3 }}>
              <CardMedia
                component="img"
                height="250"
                image={selectedProject.image}
                alt={selectedProject.title}
                sx={{ 
                  objectFit: 'cover',
                  borderRadius: 1,
                  mb: 3
                }}
              />
              
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
                {selectedProject.description}
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, color: '#002e5b' }}>
                    Key Features
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProject.features.map((feature, index) => (
                      <Chip 
                        key={index}
                        label={feature} 
                        sx={{ 
                          backgroundColor: '#f0f7ff',
                          color: '#002e5b'
                        }} 
                      />
                    ))}
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, color: '#002e5b' }}>
                    Technologies Used
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProject.technologies.map((tech, index) => (
                      <Chip 
                        key={index}
                        label={tech} 
                        variant="outlined"
                        sx={{ borderColor: '#002e5b', color: '#002e5b' }}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            
            <DialogActions sx={{ p: 3, pt: 1 }}>
              <Button 
                startIcon={<Launch />}
                variant="contained"
                sx={{ 
                  backgroundColor: '#002e5b',
                  '&:hover': { backgroundColor: '#00498a' }
                }}
              >
                Live Demo
              </Button>
              <Button 
                startIcon={<Code />}
                variant="outlined"
                sx={{ 
                  borderColor: '#002e5b',
                  color: '#002e5b'
                }}
              >
                Source Code
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default PortfolioPage;