import React, { useState } from "react";
import { Container, Paper, TextField, MenuItem, Button, Box, Grid, FormControl, InputLabel, Typography, Select, Alert, CircularProgress } from "@mui/material";
import { generateElectricityPDF } from "../reports/ElectricityBill";
import { generateMaintenancePDF } from "../reports/MaintenanceBill";

const Billing = () => {
  const [billingData, setBillingData] = useState({
    billingType: "electricity",
    btNo: "",
    project: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      // 🔹 Dummy data for testing (Design purpose)
      const dummyData = [
        {
          btNo: billingData.btNo,
          project: billingData.project,
          billingType: billingData.billingType
        },
      ];

      console.log("✅ Using Dummy Data:", dummyData);

      if (billingData.billingType === "electricity") {
        generateElectricityPDF(dummyData, projects);
      } else {
        generateMaintenancePDF(dummyData, projects);
      }
      /*
      const apiUrl = `https://localhost:7108/api/${billingData.billingType === "electricity"
        ? "ElectricityBill"
        : "MaintenanceBill"
        }/GetBillDetails?btNo=${billingData.btNo}&project=${billingData.project
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
        // ✅ Alag report call karo
        if (billingData.billingType === "electricity") {
          generateElectricityPDF(data, projects);
        } else {
          generateMaintenancePDF(data, projects);
        }
      }
        */
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

  const fieldStyles = {
    "& .MuiInputBase-root": { height: "50px" },
    "& .MuiOutlinedInput-input": { padding: "12px 14px" },
    "& .MuiInputLabel-root": {
      transform: "translate(14px, 14px) scale(1)",
      "&.Mui-focused, &.MuiFormLabel-filled": {
        transform: "translate(14px, -9px) scale(0.75)",
      },
    },
    width: "100%",
  };

  return (
    <Box sx={{ backgroundColor: "#002e5b", pt: 17, pb: 6 }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ backgroundColor: "#e6f0fa", p: 4 }}>

          {/* Headings */}
          <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", mb: 3, color: "#002e5b", textAlign: "center" }}>
            <Box component="span" sx={{ display: "inline-block", px: 0.5, py: 0.1, borderRadius: "5px", backgroundColor: "#002e5b", color: "white", mr: 1 }}>BAHRIA TOWN</Box> Billing System
          </Typography>
          <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", mb: 3, color: "#002e5b", textAlign: "center" }}>GENERATE DUPLICATE BILL</Typography>

          {/* Error Message */}
          {error && <Alert severity="error" sx={{ mb: 3, textAlign: "center" }}>{error}</Alert>}

          {/* Billing Type Buttons */}
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              {["electricity", "maintenance"].map((type) => (
                <Button key={type} variant={billingData.billingType === type ? "contained" : "outlined"} onClick={() => handleBillingTypeChange(type)} sx={{ flex: 1, backgroundColor: billingData.billingType === type ? "#002e5b" : "white", color: billingData.billingType === type ? "#fff" : "#002e5b", "&:hover": { backgroundColor: billingData.billingType === type ? "#00498a" : "rgba(0,46,91,0.1)" }, height: "50px" }}>{type.charAt(0).toUpperCase() + type.slice(1)}</Button>
              ))}
            </Box>
          </Grid>

          {/* BTNo Input */}
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField sx={{ ...fieldStyles, backgroundColor: "white" }} label="BTNo" name="btNo" value={billingData.btNo} onChange={handleInputChange} placeholder="Enter BT Number (e.g 12345)" fullWidth />
          </Grid>

          {/* Project Dropdown */}
          <Grid item xs={12} sx={{ mb: 3 }}>
            <FormControl fullWidth sx={{ ...fieldStyles, backgroundColor: "white" }}>
              <InputLabel>Project</InputLabel>
              <Select name="project" value={billingData.project} onChange={handleProjectChange} label="Project">
                {projects.map((project) => <MenuItem key={project.value} value={project.value}>{project.label}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>

          {/* Action Buttons */}
          <Grid item xs={12}>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 2 }}>
              <Button variant="contained" onClick={handleGenerate} size="large" disabled={loading} sx={{ backgroundColor: "#002e5b", px: 4, height: "50px", "&:hover": { backgroundColor: "#00498a" } }}>{loading ? <CircularProgress size={24} color="inherit" /> : "Generate Bill"}</Button>
              <Button variant="outlined" onClick={resetForm} size="large" sx={{ borderColor: "#002e5b", color: "#002e5b", height: "50px", backgroundColor: "white" }}>Reset</Button>
            </Box>
          </Grid>

        </Paper>
      </Container>
    </Box>

  );
};

export default Billing;
