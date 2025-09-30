import React from "react";
import { Box, Stack, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#222",
        color: "white",
        textAlign: "center",
        py: 6,            
        mt: "auto",
        minHeight: "140px" 
      }}
    >
      <Stack direction="row" justifyContent="center" spacing={3}>
        <IconButton color="inherit" href="https://facebook.com" target="_blank">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com" target="_blank">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit" href="https://instagram.com" target="_blank">
          <InstagramIcon />
        </IconButton>
      </Stack>
      <Typography variant="body2" sx={{ mt: 2 }}>
        © 2025, All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
