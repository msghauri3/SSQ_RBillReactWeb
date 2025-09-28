import React, { useState } from 'react';
import { Container, Paper, TextField, MenuItem, Button, Box, Grid, FormControl, InputLabel,Typography, Select, Alert } from '@mui/material';
import { generatePDF } from '../reports/ElectricityBill'; // PDF function import

const BillingComponent = () => {
  const [billingData, setBillingData] = useState({
    billingType: 'electricity',
    btNo: '',
    project: ''
  });
  const [error, setError] = useState('');

  const projects = [
    { value: 'mohlanwal', label: 'MOHLANWAL - Residential' },
    { value: 'orchards', label: 'Orchard / EMC / NASHEMAN / ROSE GARDEN' }
  ];

  const handleInputChange = (e) => {
    setBillingData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleProjectChange = (e) => {
    setBillingData(prev => ({ ...prev, project: e.target.value }));
  };

  const handleBillingTypeChange = (type) => {
    setBillingData(prev => ({ ...prev, billingType: type }));
    if (error) setError('');
  };

  const handleGenerate = () => {
    if (!billingData.billingType) {
      setError('Please select billing type');
      return;
    }
    if (!billingData.btNo) {
      setError('Please enter BTNo');
      return;
    }
    if (!billingData.project) {
      setError('Please select project');
      return;
    }

    generatePDF(billingData, projects);
  };

  const resetForm = () => {
    setBillingData({ billingType: 'electricity', btNo: '', project: '' });
    setError('');
  };

  const fieldStyles = {
    '& .MuiInputBase-root': { height: '50px' },
    '& .MuiOutlinedInput-input': { padding: '12px 14px' },
    '& .MuiInputLabel-root': {
      transform: 'translate(14px, 14px) scale(1)',
      '&.Mui-focused, &.MuiFormLabel-filled': { transform: 'translate(14px, -9px) scale(0.75)' }
    },
    width: '100%'
  };

  return (
    <Box sx={{ backgroundColor: "#002e5b", pt: 17, pb: 6 }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ backgroundColor: "#e6f0fa", p: 4 }}>

              {/* Headings */}
  <Typography
    variant="h4"
    component="h1"
    sx={{
      fontWeight: "bold",
      mb: 3,
      color: "#002e5b",
      textAlign: "center"
    }}
  >
    <Box
      component="span"
      sx={{
        display: "inline-block",
        px: 0.5,
        py: 0.1,
        borderRadius: "5px",
        backgroundColor: "#002e5b",
        color: "white",
        mr: 1,
      }}
    >
      BAHRIA TOWN
    </Box>
    Billing System
  </Typography>

  <Typography
    variant="h5"
    component="h5"
    sx={{ fontWeight: 'bold', mb: 3, color: '#002e5b', textAlign: 'center' }}
  >
    GENERATE DUPLICATE BILL
  </Typography>

          {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

          {/* Billing Type Buttons */}
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant={billingData.billingType === "electricity" ? "contained" : "outlined"}
                onClick={() => handleBillingTypeChange("electricity")}
                sx={{
                  flex: 1,
                  backgroundColor: billingData.billingType === "electricity" ? "#002e5b" : "white",
                  color: billingData.billingType === "electricity" ? "#fff" : "#002e5b",
                  "&:hover": { backgroundColor: billingData.billingType === "electricity" ? "#00498a" : "rgba(0,46,91,0.1)" },
                  height: "50px"
                }}
              >
                Electricity
              </Button>
              <Button
                variant={billingData.billingType === "maintenance" ? "contained" : "outlined"}
                onClick={() => handleBillingTypeChange("maintenance")}
                sx={{
                  flex: 1,
                  backgroundColor: billingData.billingType === "maintenance" ? "#002e5b" : "white",
                  color: billingData.billingType === "maintenance" ? "#fff" : "#002e5b",
                  "&:hover": { backgroundColor: billingData.billingType === "maintenance" ? "#00498a" : "rgba(0,46,91,0.1)" },
                  height: "50px"
                }}
              >
                Maintenance
              </Button>
            </Box>
          </Grid>

          {/* BTNo Input */}
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField
              sx={{ fieldStyles, backgroundColor: "white" }}
              label="BTNo"
              name="btNo"
              value={billingData.btNo}
              onChange={handleInputChange}
              placeholder="Enter BT Number (e.g 12345)"
              fullWidth
            />
          </Grid>

          {/* Project Selection */}
          <Grid item xs={12} sx={{ mb: 3 }}>
            <FormControl fullWidth sx={{ fieldStyles, backgroundColor: "white" }}>
              <InputLabel>Project</InputLabel>
              <Select
                name="project"
                value={billingData.project}
                onChange={handleProjectChange}
                label="Project"
              >
                {projects.map((project) => (
                  <MenuItem key={project.value} value={project.value}>{project.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Action Buttons */}
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
              <Button
                variant="contained"
                onClick={handleGenerate} // PDF generate function called here
                size="large"
                sx={{ backgroundColor: '#002e5b', px: 4, height: '50px', '&:hover': { backgroundColor: '#00498a' } }}
              >
                Generate Bill
              </Button>
              <Button
                variant="outlined"
                onClick={resetForm}
                size="large"
                sx={{ borderColor: '#002e5b', color: '#002e5b', height: '50px', backgroundColor: "white" }}
              >
                Reset
              </Button>
            </Box>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default BillingComponent;
