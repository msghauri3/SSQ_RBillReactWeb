import React from "react";
import {
  Paper,
  Container,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useTheme } from "@mui/material/styles";

const LinksBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = React.useState("billing");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 👈 md ~ 900px

  const tabs = [
    { id: "billing", label: "Billing", type: "scroll" },
    { id: "about", label: "About", type: "scroll" },
    { id: "projects", label: "Projects", type: "scroll" },
    { id: "contact", label: "Contact", type: "scroll" },
    { id: "netmetering", label: "Net Metering", type: "route", path: "/netmetering" },
  ];

  React.useEffect(() => {
    if (location.pathname === "/netmetering") setActiveTab("netmetering");
  }, [location.pathname]);

  const handleClick = (tab) => {
    if (tab.type === "route") {
      setActiveTab(tab.id);
      navigate(tab.path);
      handleMenuClose();
      return;
    }

    if (location.pathname === "/") {
      scroller.scrollTo(tab.id, { duration: 450, smooth: true, offset: -80 });
      setActiveTab(tab.id);
    } else {
      navigate("/", { state: { scrollTo: tab.id } });
      setActiveTab(tab.id);
    }
    handleMenuClose();
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        top: 40,
        left: 0,
        right: 0,
        zIndex: 1100,
        borderRadius: 0,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1.5,
          }}
        >
          {/* ✅ Logo */}
          <Box >
            <img
              src="/logo.png"
              alt="logo"
              style={{
                width: 70,
                objectFit: "fill",
                cursor: "pointer", // 👈 hover pe pointer cursor
              }}
              onClick={() => {
                setActiveTab("billing");
                navigate("/", { state: { scrollTo: "billing" } });
              }}
            />
          </Box>

          {/* ✅ Desktop Links */}
          {!isMobile ? (
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => handleClick(tab)}
                  sx={{
                    color: activeTab === tab.id ? "#002e5b" : "text.secondary",
                    borderBottom: activeTab === tab.id ? "3px solid #002e5b" : "none",
                    borderRadius: 0,
                    px: 2.5,
                    fontSize: "0.95rem",
                    "&:hover": {
                      backgroundColor: "rgba(0,46,91,0.05)",
                      color: "#002e5b",
                    },
                  }}
                >
                  {tab.label}
                </Button>
              ))}
            </Box>
          ) : (
            <>
              {/* ✅ Mobile Dropdown Menu */}
              <IconButton onClick={handleMenuOpen}>
                <MenuIcon sx={{ color: "#002e5b" }} />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    backgroundColor: "white",
                    color: "#002e5b",
                    mt: 1,
                  },
                }}
              >
                {tabs.map((tab) => (
                  <MenuItem
                    key={tab.id}
                    onClick={() => handleClick(tab)}
                    sx={{
                      color: activeTab === tab.id ? "#002e5b" : "text.secondary",
                      fontWeight: activeTab === tab.id ? 600 : 400,
                    }}
                  >
                    {tab.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Box>
      </Container>
    </Paper>
  );
};

export default LinksBar;
