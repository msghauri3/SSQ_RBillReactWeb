import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from "@mui/material";

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
    <Container maxWidth="lg" sx={{ pb: 15.5 ,pt: 23 }}>
      <Typography 
        variant="h3" 
        sx={{ fontWeight: "bold", color: "#002e5b", mb: 6, textAlign: "center" }}
      >
        Net Metering Documents
      </Typography>

      <Grid container spacing={4}>
        {documents.map((doc, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card elevation={3} sx={{ borderRadius: 3, height: "100%" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#002e5b" }}>
                  {doc.title}
                </Typography>                
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "#002e5b",
                    "&:hover": { backgroundColor: "#00498a" }
                  }}
                >
                  {doc.external ? "Visit Site" : "Download"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NetMeteringPage;
