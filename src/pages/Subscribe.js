import React from "react";
import { Button, TextField } from "@mui/material";

const Subscribe = () => {
  return (
    <section
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), 
          url('https://source.unsplash.com/1600x500/?workspace,desk')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 20px",
        textAlign: "center",
        position: "relative",
        color: "#fff", // text white for contrast
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontSize: "28px",
            letterSpacing: "3px",
            fontWeight: "bold",
            marginBottom: "30px",
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
