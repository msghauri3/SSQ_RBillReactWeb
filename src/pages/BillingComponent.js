import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  MenuItem,
  Button,
  Box,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';
import { Search, Print, Download } from '@mui/icons-material';

const BillingComponent = () => {
  const [billingData, setBillingData] = useState({
    billingType: '',
    btNo: '',
    project: '',
    customerName: '',
    address: '',
    totalAmount: 0,
    billDate: new Date().toISOString().split('T')[0]
  });

  const [billGenerated, setBillGenerated] = useState(false);
  const [error, setError] = useState('');

  // Projects
  const projects = [
    { value: 'mohlanwal', label: 'MOHLANWAL - Residential' },
    { value: 'orchards', label: 'Orchard / EMC / NASHEMAN / ROSE GARDEN' }
  ];

  // Default amounts based on project and billing type
  const defaultAmounts = {
    electricity: {
      mohlanwal: 2500,
      orchards: 3000
    },
    maintenance: {
      mohlanwal: 1500,
      orchards: 2000
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingData(prev => ({
      ...prev,
      [name]: value
    }));

    if (error) setError('');
  };

  const handleProjectChange = (e) => {
    const project = e.target.value;
    const billingType = billingData.billingType;

    const amount = billingType ? (defaultAmounts[billingType]?.[project] || 0) : 0;

    setBillingData(prev => ({
      ...prev,
      project: project,
      totalAmount: amount
    }));
  };

  const handleBillingTypeChange = (type) => {
    const project = billingData.project;
    const amount = project ? (defaultAmounts[type]?.[project] || 0) : 0;

    setBillingData(prev => ({
      ...prev,
      billingType: type,
      totalAmount: amount
    }));
    if (error) setError('');
  };

  const calculateBill = () => {
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

    const mockCustomerData = {
      customerName: `Customer ${billingData.btNo}`,
      address: `House #${billingData.btNo}, ${billingData.project === 'mohlanwal' ? 'Mohlanwal Project' : 'Orchards Project'}`
    };

    setBillingData(prev => ({
      ...prev,
      ...mockCustomerData
    }));

    setBillGenerated(true);
    setError('');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const billContent = `
      BILL RECEIPT
      ============
      BTNo: ${billingData.btNo}
      Project: ${billingData.project}
      Customer: ${billingData.customerName}
      Address: ${billingData.address}
      Billing Type: ${billingData.billingType === 'electricity' ? 'Electricity' : 'Maintenance'}
      Total Amount: Rs. ${billingData.totalAmount}
      Date: ${billingData.billDate}
    `;

    const blob = new Blob([billContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bill_${billingData.btNo}_${billingData.billDate}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetForm = () => {
    setBillingData({
      billingType: '',
      btNo: '',
      project: '',
      customerName: '',
      address: '',
      totalAmount: 0,
      billDate: new Date().toISOString().split('T')[0]
    });
    setBillGenerated(false);
    setError('');
  };

  const fieldStyles = {
    '& .MuiInputBase-root': {
      height: '50px',
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px',
    },
    '& .MuiInputLabel-root': {
      transform: 'translate(14px, 14px) scale(1)',
      '&.Mui-focused, &.MuiFormLabel-filled': {
        transform: 'translate(14px, -9px) scale(0.75)',
      }
    },
    width: '100%'
  };

  const selectStyles = {
    '& .MuiSelect-select': {
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      padding: '12px 14px',
    },
    width: '100%'
  };

  return (
    
      <Box sx={{ backgroundColor: "#002e5b", pt: 17, pb: 6 }}>
  <Container maxWidth="md" sx={{ py: 4 }}>

      <Paper elevation={3} sx={{backgroundColor: "#e6f0fa", p: 4 }}>

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
              color: "white",        // text white ho jaye ga
              mr: 1,                 // thoda gap
            }}
          >
            BAHRIA TOWN
          </Box>
          Billing System
        </Typography>


        <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#002e5b', textAlign: 'center' }}>
          GENERATE DUPLICATE BILL
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

  
          {/* Electricity / Maintenance Buttons */}
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant={billingData.billingType === "electricity" ? "contained" : "outlined"}
                onClick={() => handleBillingTypeChange("electricity")}
                sx={{
                  flex: 1,
                  backgroundColor: billingData.billingType === "electricity" ? "#002e5b" : "white",
                  color: billingData.billingType === "electricity" ? "#fff" : "#002e5b",
                  "&:hover": {
                    backgroundColor: billingData.billingType === "electricity" ? "#00498a" : "rgba(0,46,91,0.1)",
                  },
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
                  "&:hover": {
                    backgroundColor: billingData.billingType === "maintenance" ? "#00498a" : "rgba(0,46,91,0.1)",
                  },
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
              sx={{fieldStyles,backgroundColor: "white"}}
              label="BTNo"
              name="btNo"
              value={billingData.btNo}
              onChange={handleInputChange}
              placeholder="Enter BTL Number (e.g 12345)"
              fullWidth
            />
          </Grid>

          {/* Project Selection */}
          <Grid item xs={12} sx={{ mb: 3 }}>
            <FormControl fullWidth sx={{fieldStyles,backgroundColor: "white"}}>
              <InputLabel>Project</InputLabel>
              <Select
                name="project"
                value={billingData.project}
                onChange={handleProjectChange}
                placeholder="Please select your project type"
                label="Project"
              >
                {projects.map((project) => (
                  <MenuItem key={project.value} value={project.value}>
                    {project.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Action Buttons */}
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
              <Button
                variant="contained"
                startIcon={<Search />}
                onClick={calculateBill}
                size="large"
                sx={{
                  backgroundColor: '#002e5b',
                  px: 4,
                  height: '50px',
                  '&:hover': { backgroundColor: '#00498a' }
                }}
              >
                Generate Bill
              </Button>
              <Button
                variant="outlined"
                onClick={resetForm}
                size="large"
                sx={{
                  borderColor: '#002e5b',
                  color: '#002e5b',
                  height: '50px',
                  backgroundColor: "white"
                }}
              >
                Reset
              </Button>
            </Box>
          </Grid>

        {/* Bill Display */}
        {billGenerated && (
          <Box sx={{ mt: 4 }}>
            <Paper elevation={2} sx={{ p: 3, backgroundColor: '#f8f9fa' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
                Bill Receipt
              </Typography>

              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold', width: '30%' }}>BTNo:</TableCell>
                      <TableCell>{billingData.btNo}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>Project:</TableCell>
                      <TableCell>{projects.find(p => p.value === billingData.project)?.label}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>Customer Name:</TableCell>
                      <TableCell>{billingData.customerName}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>Address:</TableCell>
                      <TableCell>{billingData.address}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>Billing Type:</TableCell>
                      <TableCell>{billingData.billingType === 'electricity' ? 'Electricity' : 'Maintenance'}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>Total Amount:</TableCell>
                      <TableCell><strong>Rs. {billingData.totalAmount}</strong></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>Bill Date:</TableCell>
                      <TableCell>{billingData.billDate}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 3 }}>
                <Button
                  variant="contained"
                  startIcon={<Print />}
                  onClick={handlePrint}
                  size="large"
                  sx={{
                    backgroundColor: '#002e5b',
                    height: '50px',
                    '&:hover': { backgroundColor: '#00498a' }
                  }}
                >
                  Print Bill
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<Download />}
                  onClick={handleDownload}
                  size="large"
                  sx={{
                    borderColor: '#002e5b',
                    color: '#002e5b',
                    height: '50px'
                  }}
                >
                  Download
                </Button>
              </Box>
            </Paper>
          </Box>
        )}
      </Paper>
    </Container>
  </Box>
    
  );
};

export default BillingComponent;
