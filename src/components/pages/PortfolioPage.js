import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

const portfolioProjects = [
  {
    title: "Electricity & Maintenance Billing System",
    description: "A secure .NET Core MVC/Web API application integrated with DevExtreme grids for real-time billing, reporting, and recovery management. Delivered with optimized SQL queries and automated reporting.",
    image: "/cards/card01.png"
  },
  {
    title: "School Management System",
    description: "End-to-end solution covering admissions, grading, and announcements. Built with .NET Core, DevExtreme dashboards, and workflow automation for seamless school operations.",
   image: "/cards/card01.png"
  },
  {
    title: "HR & Payroll Management",
    description: "Enterprise-grade HR system with automated payroll, tax deductions, attendance integration, and API-first architecture for extensibility.",
  image: "/cards/card01.png"
  },
  {
    title: "Property Management System (IBM Notes/Domino)",
    description: "Enterprise solution for property/asset management including Transfers, Payments, Verification, and Tax Collection. Includes role-based access and audit logging.",
  image: "/cards/card01.png"
  },
  {
    title: "Plots & Hajj Balloting System",
    description: "Designed a secure, transparent balloting system ensuring fairness, auditability, and compliance with regulations.",
    image: "/cards/card01.png"
  },
  {
    title: "Context-Aware Chatbot (RAG)",
    description: "AI-powered chatbot using ChromaDB-based vector search for contextual, precise, and retrieval-augmented answers.",
  image: "/cards/card01.png"
  },
  {
    title: "Voice Chatbot",
    description: "Real-time voice-enabled assistant built with Ollama + VAPI for natural speech-to-text and text-to-speech interactions.",
   image: "/cards/card01.png"
  },
  {
    title: "Car Data Analyzer",
    description: "AI-driven solution that scrapes, processes, and analyzes automotive market data to provide pricing trends and insights.",
     image: "/cards/card01.png"
  }
];

const PortfolioPage = () => {
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
        Our Portfolio
      </Typography>

      {portfolioProjects.map((project, index) => (
        <Grid
          key={index}
          container
          spacing={4}
          alignItems="stretch"
          sx={{ mb: 6 }}
        >
          {index % 2 === 0 ? (
            <>
              {/* Left Column - Image */}
              <Grid item xs={6}>
                <Card sx={{ boxShadow: 4, borderRadius: 3, overflow: 'hidden', height: '100%' }}>
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
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
                      {project.title}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </>
          ) : (
            <>
              {/* Right Column - Text (Reversed Layout) */}
              <Grid item xs={6}>
                <Card sx={{ p: 4, boxShadow: 4, borderRadius: 3, height: '100%' }}>
                  <CardContent>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Left Column - Image */}
              <Grid item xs={6}>
                <Card sx={{ boxShadow: 4, borderRadius: 3, overflow: 'hidden', height: '100%' }}>
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
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

export default PortfolioPage;
