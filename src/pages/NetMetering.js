import React from "react";
import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";

const NetMeteringPage = () => {
  const documents = [
    { title: "SOPs (Download)", file: "/docs/NM-SOPs (Final Draft).pdf" },
    { title: "Feasibility Assessment Form (Download)", file: "/docs/Feasibility Assessment Form.pdf" },
    { title:"Specimen for Unerdertaking(Download)", file: "/docs/Undertaking (specimen).pdf" },
    { title: "Format for Photos(to be attached)", file: "/docs/Format for Photos Attachment.pdf" },
    { title: "Licensed Solar Installers/Venders(Link)", file: "https://www.ppib.gov.pk/", external: true },
    { title: "Blacklisted Installers/Vendors", noLink: true },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Net Metering Documents
      </Typography>

      <Grid container spacing={2}>
        {documents.map((doc, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="h6">{doc.title}</Typography>
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  href={doc.file}
                  target="_blank"     
                  rel="noopener noreferrer"
                >
                  {doc.external ? "Visit Site" : "Download"}
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NetMeteringPage;
