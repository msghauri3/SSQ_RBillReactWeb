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

  // Billing types
  const billingTypes = [
    { value: 'electricity', label: 'Electricity Billing' },
    { value: 'maintenance', label: 'Maintenance Billing' }
  ];

  // Projects
  const projects = [
    { value: 'mohlanwal', label: 'Mohlanwal' },
    { value: 'orchards', label: 'Orchards' }
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

    // Clear error when user starts typing
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

  const handleBillingTypeChange = (e) => {
    const billingType = e.target.value;
    const project = billingData.project;
    
    const amount = project ? (defaultAmounts[billingType]?.[project] || 0) : 0;
    
    setBillingData(prev => ({
      ...prev,
      billingType: billingType,
      totalAmount: amount
    }));
  };

  const calculateBill = () => {
    // Validation
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

    // Mock customer data based on BTNo
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

  // Fixed styles for proper sizing
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
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 3, color: '#002e5b', textAlign: 'center' }}>
          Billing System
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Only three fields as requested */}
        <Grid container spacing={3}>
          {/* Billing Type Selection */}
          <Grid item xs={12} md={4}>
            <FormControl fullWidth sx={selectStyles}>
              <InputLabel>Billing Type</InputLabel>
              <Select
                name="billingType"
                value={billingData.billingType}
                onChange={handleBillingTypeChange}
                label="Billing Type"
              >
                {billingTypes.map((type) => (
                  <MenuItem key={type.value} value={type.value}>
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* BTNo Input */}
          <Grid item xs={12} md={4}>
            <TextField
              sx={fieldStyles}
              label="BTNo"
              name="btNo"
              value={billingData.btNo}
              onChange={handleInputChange}
              placeholder="Enter BT Number"
              fullWidth
            />
          </Grid>

          {/* Project Selection */}
          <Grid item xs={12} md={4}>
            <FormControl fullWidth sx={selectStyles}>
              <InputLabel>Project</InputLabel>
              <Select
                name="project"
                value={billingData.project}
                onChange={handleProjectChange}
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
          <Grid item xs={12}>
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
                  height: '50px'
                }}
              >
                Reset
              </Button>
            </Box>
          </Grid>
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
  );
};

export default BillingComponent;