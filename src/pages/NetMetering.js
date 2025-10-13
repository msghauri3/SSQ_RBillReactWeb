// import React from "react";
// import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from "@mui/material";

// const NetMeteringPage = () => {
//   const documents = [
//     { title: "SOPs (Download)", file: "/docs/NM-SOPs (Final Draft).pdf" },
//     { title: "Feasibility Assessment Form (Download)", file: "/docs/Feasibility Assessment Form.pdf" },
//     { title:"Specimen for Unerdertaking(Download)", file: "/docs/Undertaking (specimen).pdf" },
//     { title: "Format for Photos(to be attached)", file: "/docs/Format for Photos Attachment.pdf" },
//     { title: "Licensed Solar Installers/Vendors(Link)", file: "https://www.ppib.gov.pk/", external: true },
//     { title: "Blacklisted Installers/Vendors", noLink: true },
//   ];

//   return (
//     <Container maxWidth="lg" sx={{ pb: 15.5 ,pt: 23 }}>
//       <Typography 
//         variant="h3" 
//         sx={{ fontWeight: "bold", color: "#002e5b", mb: 6, textAlign: "center" }}
//       >
//         Net Metering Documents
//       </Typography>

//       <Grid container spacing={4}>
//         {documents.map((doc, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card elevation={3} sx={{ borderRadius: 3, height: "100%" }}>
//               <CardContent sx={{ textAlign: "center" }}>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#002e5b" }}>
//                   {doc.title}
//                 </Typography>                
//               </CardContent>
//               <CardActions sx={{ justifyContent: "center", pb: 2 }}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   href={doc.file}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   sx={{
//                     backgroundColor: "#002e5b",
//                     "&:hover": { backgroundColor: "#00498a" }
//                   }}
//                 >
//                   {doc.external ? "Visit Site" : "Download"}
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default NetMeteringPage;


import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from "@mui/material";

const NetMeteringPage = () => {
  const documents = [
    //{ title: "SOPs (Download)", file: "/docs/NM-SOPs (Final Draft).pdf" },
   // { title: "Feasibility Assessment Form (Download)", file: "/docs/Feasibility Assessment Form.pdf" },
   // { title:"Specimen for Undertaking (Download)", file: "/docs/Undertaking (specimen).pdf" },
   // { title: "Format for Photos (to be attached)", file: "/docs/Format for Photos Attachment.pdf" },
   // { title: "Licensed Solar Installers/Vendors (Link)", file: "https://www.ppib.gov.pk/", external: true },
   // { title: "Blacklisted Installers/Vendors", noLink: true },

     { title: "SOPs (Download)",file:"/docs/NM-SOPs (Final Draft).pdf"},
    { title: "Feasibility Assessment\nForm (Download)",file:"/docs/Feasibility Assessment Form.pdf" },
    { title:"Specimen for\nUndertaking (Download)",file:"/docs/Undertaking (specimen).pdf" },
    { title: "Format for\nPhotos (to be attached)",file:"/docs/Format for Photos Attachment.pdf" },
    { title: "Licensed Solar\nInstallers/Vendors (Link)",file:"https://www.ppib.gov.pk/", external: true },
    { title: "Blacklisted Installers/Vendors",noLink: true },
  ];

  return (
    <section
      style={{
        position: "sticky",
        backgroundImage: `url('/Projects/Bahria Town Safari Villas.jpg')`, // 👈 your image path here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      {/* 🔵 Overlay Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 30, 80, 0.3)", // semi-transparent blue overlay
          backdropFilter: "blur(5px)", // 👈 adds background blur
          zIndex: 1,
        }}
      ></div>

      {/* 🌟 Page Content */}
      <Container
        maxWidth="lg"
        sx={{
          pb: 15.5,
          pt: 23,
          position: "relative",
          zIndex: 2, // keep content above overlay
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#fff", // white for contrast
            mb: 6,
            textAlign: "center",
          }}
        >
          Net Metering Documents
        </Typography>

        <Grid container spacing={4}>
          {documents.map((doc, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                elevation={5}
                sx={{
                  borderRadius: 3,
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.9)", // translucent white
                  backdropFilter: "blur(5px)",
                }}
              >
                <CardContent sx={{ textAlign: "center",pb:1  }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      color: "#002e5b",
                    }}
                  >
                    {doc.title}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", pb:1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#002e5b",
                      "&:hover": { backgroundColor: "#00498a" },
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
    </section>
  );
};

export default NetMeteringPage;
