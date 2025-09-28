import React, { useState, useEffect } from "react";
import { useScrollTrigger, Slide, Box, Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

function ScrollTop(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const [isDark, setIsDark] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    // Footer observer
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Example: Section ke hisaab se toggle
      if (scrollY > 600 && scrollY < 1450) {
        setIsDark(true); // dark bg section → white button
      } else {
        setIsDark(false); // light bg section → dark button
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center" });
    }
  };

  return (
    <Slide in={trigger} direction="up">
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 2000 }}
      >
        <Fab
          sx={{
            backgroundColor:
              isDark || isFooterVisible ? "white" : "black",
            color: isDark || isFooterVisible ? "black" : "white",
            "&:hover": {
              backgroundColor:
                isDark || isFooterVisible ? "#f0f0f0" : "#333",
            },
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Slide>
  );
}

export default ScrollTop;
