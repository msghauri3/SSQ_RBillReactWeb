import React from "react";
import { Button, TextField } from "@mui/material";

const Subscribe = () => {
  return (
    <section
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 50, 150, 0.5), rgba(0, 50, 150, 0.5)), 
          url('/Projects/Bahria Town Safari Villas.jpg')
        `,
        backgroundAttachment: "fixed", // 👈 makes image stay fixed (parallax)
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "120px 20px",
        textAlign: "center",
        position: "relative",
        color: "#fff",
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontSize: "30px",
            letterSpacing: "2px",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          SUBSCRIBE TO OUR NEWSLETTER
        </h2>

        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <TextField
            type="email"
            placeholder="Your Email"
            variant="outlined"
            size="medium"
            sx={{
              flex: 1,
              backgroundColor: "#fff",
              borderRadius: "30px 0 0 30px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px 0 0 30px",
              },
            }}
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: "0 30px 30px 0",
              padding: "15px 30px",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            SUBSCRIBE
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;

