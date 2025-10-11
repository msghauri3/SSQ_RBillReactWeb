import React, { useState } from "react";
import { 
  Container, 
  Paper, 
  TextField, 
  MenuItem, 
  Button, 
  Box, 
  FormControl, 
  InputLabel, 
  Typography, 
  Select, 
  Alert, 
  CircularProgress,
  useTheme,
  useMediaQuery 
} from "@mui/material";
import { generateElectricityPDF } from "../reports/ElectricityBill";
import { generateMaintenancePDF } from "../reports/MaintenanceBill";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


const Billing = () => {
  const [billingData, setBillingData] = useState({
    billingType: "electricity",
    btNo: "",
    project: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Modern gradient color palette
  const colors = {
    primary: "#6366f1",
    primaryLight: "#818cf8",
    primaryDark: "#4f46e5",
    secondary: "#ec4899",
    accent: "#f59e0b",
    backgroundGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    paper: "#ffffff",
    text: "#1e293b",
    textLight: "#64748b",
    textLighter: "#94a3b8",
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b"
  };

  const projects = [
    { value: "Mohlanwal", label: "Mohlanwal" },
    { value: "Orchards", label: "Orchard / EMC / NASHEMAN / ROSE GARDEN" },
  ];

  const handleInputChange = (e) => {
    setBillingData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleProjectChange = (e) => {
    setBillingData((prev) => ({ ...prev, project: e.target.value }));
    if (error) setError("");
  };

  const handleBillingTypeChange = (type) => {
    setBillingData((prev) => ({ ...prev, billingType: type }));
    if (error) setError("");
  };

  const handleGenerate = async () => {
    if (!billingData.billingType) return setError("Please select billing type");
    if (!billingData.btNo) return setError("Please enter BTNo");
    if (!billingData.project) return setError("Please select project");

    setLoading(true);
    setError("");

    try {
      const apiUrl = `https://localhost:7108/api/${billingData.billingType === "electricity"
        ? "ElectricityBill"
        : "MaintenanceBill"
        }?btNo=${billingData.btNo}&project=${billingData.project
        }&billingType=${billingData.billingType}`;

      console.log("🌐 API URL:", apiUrl);

      const response = await fetch(apiUrl);

      if (response.status === 404) {
        setError("No bill found for this BTNo and Project.");
        setLoading(false);
        return;
      }

      if (!response.ok) throw new Error("Failed to fetch bill data");

      const data = await response.json();
      console.log("✅ API Response:", data);

      if (!data || data.length === 0) {
        setError("No bill found for this BTNo and Project.");
      } else {
        if (billingData.billingType === "electricity") {
          generateElectricityPDF(data, projects);
        } else {
          generateMaintenancePDF(data, projects);
        }
      }
    } catch (err) {
      console.error("❌ Fetch Error:", err);
      setError("Error fetching bill data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setBillingData({ billingType: "electricity", btNo: "", project: "" });
    setError("");
  };

  // Enhanced field styles with modern look
  const fieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 8px rgba(99, 102, 241, 0.1)',
      '&:hover fieldset': {
        borderColor: colors.primaryLight,
        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.15)',
      },
      '&.Mui-focused fieldset': {
        borderColor: colors.primary,
        borderWidth: '2px',
        boxShadow: '0 4px 16px rgba(99, 102, 241, 0.2)',
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: colors.primary,
      fontWeight: '600',
    },
    "& .MuiInputBase-root": { 
      height: "56px",
      borderRadius: '12px',
      fontSize: '16px'
    },
    "& .MuiOutlinedInput-input": { 
      padding: "16px 20px",
      color: colors.text,
    },
    "& .MuiInputLabel-root": {
      transform: "translate(20px, 18px) scale(1)",
      color: colors.textLighter,
      fontSize: '16px',
      "&.Mui-focused, &.MuiFormLabel-filled": {
        transform: "translate(20px, -9px) scale(0.85)",
        color: colors.primary,
        backgroundColor: '#ffffff',
        padding: '0 8px',
        fontWeight: '600'
      },
    },
    width: "100%",
  };

  // Generate Bill Button - Fixed loading state
  const primaryButtonStyle = {
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(99, 102, 241, 0.4)',
    fontWeight: 'bold',
    textTransform: 'none',
    padding: '16px 32px',
    height: '56px',
    fontSize: '16px',
    letterSpacing: '0.5px',
    minWidth: '180px',
    flex: 1,
    '&:hover': {
      background: `linear-gradient(135deg, ${colors.primaryDark} 0%, #4338ca 100%)`,
      boxShadow: '0 8px 25px rgba(99, 102, 241, 0.5)',
      transform: 'translateY(-1px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
    '&:disabled': {
      background: '#e2e8f0',
      color: '#94a3b8',
      boxShadow: 'none',
    },
    transition: 'all 0.3s ease'
  };

  // Reset Button with small width
  const resetButtonStyle = {
    border: `2px solid ${colors.textLight}`,
    borderRadius: '12px',
    color: colors.text,
    fontWeight: '600',
    textTransform: 'none',
    padding: '16px 20px',
    height: '56px',
    fontSize: '14px',
    backgroundColor: 'white',
    letterSpacing: '0.5px',
    minWidth: '120px',
    '&:hover': {
      backgroundColor: '#f8fafc',
      border: `2px solid ${colors.text}`,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transform: 'translateY(-1px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
    transition: 'all 0.3s ease'
  };

  // Billing type buttons with icons
  const billingTypeButtonStyle = (isActive) => ({
    borderRadius: '12px',
    textTransform: 'none',
    fontWeight: 'bold',
    padding: '16px 20px',
    flex: 1,
    minWidth: '140px',
    height: '56px',
    fontSize: '15px',
    background: isActive 
      ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`
      : 'rgba(255, 255, 255, 0.9)',
    color: isActive ? '#fff' : colors.text,
    border: isActive ? 'none' : `2px solid rgba(255, 255, 255, 0.3)`,
    boxShadow: isActive 
      ? '0 6px 20px rgba(99, 102, 241, 0.4)' 
      : '0 4px 12px rgba(0,0,0,0.1)',
    backdropFilter: 'blur(10px)',
    '&:hover': {
      background: isActive 
        ? `linear-gradient(135deg, ${colors.primaryDark} 0%, #4338ca 100%)`
        : 'rgba(255, 255, 255, 1)',
      boxShadow: isActive 
        ? '0 8px 25px rgba(99, 102, 241, 0.5)' 
        : '0 6px 20px rgba(0,0,0,0.15)',
      transform: 'translateY(-1px)',
    },
    transition: 'all 0.3s ease'
  });

  // Icons for billing types
  const getBillingTypeIcon = (type, isActive) => {
    const iconStyle = {
      fontSize: '20px',
      marginRight: '8px',
      color: isActive ? '#fff' : colors.primary
    };

    switch (type) {
      case 'electricity':
        return <ElectricBoltIcon sx={iconStyle} />;
      case 'maintenance':
        return <HomeRepairServiceIcon sx={iconStyle} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ 
      background: colors.backgroundGradient,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      py: { xs: 4, md: 6 },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.2) 0%, transparent 50%)',
        zIndex: 1,
      }
    }}>
      {/* Animated background elements */}
      <Box sx={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        filter: 'blur(40px)',
        animation: 'float 6s ease-in-out infinite',
        zIndex: 1,
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.08)',
        filter: 'blur(30px)',
        animation: 'float 8s ease-in-out infinite 1s',
        zIndex: 1,
      }} />
      
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 3 } }}>
        <Paper 
          elevation={24}
          sx={{ 
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            p: { xs: 3, md: 5 },
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
              borderRadius: '24px 24px 0 0',
            }
          }}
        >

          {/* Header Section - Combined BAHRIA TOWN with Billing System */}
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography 
              variant="h3" 
              component="h1" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 2, 
                color: colors.text,
                fontSize: { xs: '2rem', md: '2.75rem' },
                background: `linear-gradient(135deg, ${colors.text} 0%, ${colors.primary} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                lineHeight: 1.2
              }}
            >
              <Box 
                component="span" 
                sx={{ 
                  display: 'inline-block',
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                  color: 'white',
                  px: 3,
                  py: 1,
                  borderRadius: '12px',
                  boxShadow: '0 6px 20px rgba(99, 102, 241, 0.4)',
                  mr: 2,
                  fontSize: { xs: '1.5rem', md: '2rem' }
                }}
              >
                BAHRIA TOWN
              </Box>
              Billing System
            </Typography>
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ 
                fontWeight: '600', 
                color: colors.textLight,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                letterSpacing: '0.5px'
              }}
            >
              Generate Duplicate Bill
            </Typography>
          </Box>

          {/* Error Message */}
          {error && (
            <Alert 
              severity="error" 
              sx={{ 
                mb: 4, 
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)',
                textAlign: 'center',
                fontSize: '15px',
                fontWeight: '500',
                '& .MuiAlert-icon': {
                  fontSize: '24px'
                }
              }}
            >
              {error}
            </Alert>
          )}

          {/* Billing Type Selection with Icons */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: '600', 
                mb: 3,
                color: colors.text,
                textAlign: 'center',
                fontSize: '1.1rem'
              }}
            >
              Select Billing Type
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: 'center',
              flexWrap: { xs: 'wrap', sm: 'nowrap' }
            }}>
              {["electricity", "maintenance"].map((type) => (
                <Button 
                  key={type} 
                  variant={billingData.billingType === type ? "contained" : "outlined"} 
                  onClick={() => handleBillingTypeChange(type)}
                  sx={billingTypeButtonStyle(billingData.billingType === type)}
                  startIcon={getBillingTypeIcon(type, billingData.billingType === type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Form Fields - Full width and stacked vertically */}
          <Box sx={{ mb: 4 }}>
            {/* BTNo Input - Full width */}
            <Box sx={{ mb: 3 }}>
              <TextField 
                sx={fieldStyles} 
                label="BT Number" 
                name="btNo" 
                value={billingData.btNo} 
                onChange={handleInputChange} 
                placeholder="Enter your BT Number (e.g 12345)" 
                fullWidth 
              />
            </Box>

            {/* Project Dropdown - Full width */}
            <Box>
              <FormControl fullWidth sx={fieldStyles}>
                <InputLabel>Select Project</InputLabel>
                <Select 
                  name="project" 
                  value={billingData.project} 
                  onChange={handleProjectChange} 
                  label="Select Project"
                >
                  {projects.map((project) => (
                    <MenuItem key={project.value} value={project.value}>
                      {project.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Action Buttons - Fixed loading state and added reset button */}
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            justifyContent: 'center',
            alignItems: 'center',
            mt: 4
          }}>
            <Button 
              variant="outlined" 
              onClick={resetForm} 
              size="large" 
              sx={resetButtonStyle}
              startIcon={<RestartAltIcon />}
            >
              Reset
            </Button>
            <Button 
              variant="contained" 
              onClick={handleGenerate} 
              size="large" 
              disabled={loading}
              sx={primaryButtonStyle}
            >
              {loading ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={20} color="inherit" />
                  Generating...
                </Box>
              ) : (
                "Generate Bill"
              )}
            </Button>
          </Box>

        </Paper>
      </Container>

      {/* Add floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </Box>
  );
};

export default Billing;