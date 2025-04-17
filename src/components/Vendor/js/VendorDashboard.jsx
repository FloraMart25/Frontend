import React, { useState } from "react";
import { Card, CardContent, Typography, Box, Container, Button, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { styled } from "@mui/system";
import { FaUserCheck, FaUsers, FaClipboardList, FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "./Sidebar"; // Make sure Sidebar is correctly imported
import "../css/dstyle.css"; 

const ScrollContainer = styled(Box)({
  display: "flex",
  overflowX: "auto",
  gap: "16px",
  paddingBottom: "10px",
  scrollbarWidth: "thin",
  scrollbarColor: "#888 #f1f1f1",
  "&::-webkit-scrollbar": {
    height: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
});

const VendorDashboard = () => {
  const [status, setStatus] = useState("Pending");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="app-container flex h-screen">
      <Sidebar />
      <div className="main-content flex-1 p-4">
        <header className="header bg-white shadow p-4 flex justify-between items-center border-b-2 border-black"></header>

        <h2 className="dashboard-title">
          <span className="title-bold">Hi,</span>
          <span className="title-light">Tshering Zangmo</span>
        </h2>

        <div className="stats-container">
          <div className="stats-card">
            <FaUserCheck className="stats-icon" />
            <h4>Total Amount</h4>
            <p>Nu .12400/-</p>
          </div>
          <div className="stats-card">
            <FaUsers className="stats-icon" />
            <h4>Total Pending</h4>
            <p>Nu .2400/-</p>
          </div>
          <div className="stats-card">
            <FaClipboardList className="stats-icon" />
            <h4>Total Product</h4>
            <p>12</p>
          </div>
          <div className="stats-card">
            <FaClipboardList className="stats-icon" />
            <h4>Total Order</h4>
            <p>17</p>
          </div>
        </div>
        <div className="table-container">
        <h2 className="section-title">Recent Orders</h2>
        <Box>
          <ScrollContainer>
            {[1, 2, 3, 4, 5, 6].map((order) => (
              <Card key={order} sx={{ minWidth: 200, padding: 1, boxShadow: 2, textAlign: "left", fontSize:3}}>
               <CardContent className="compact-card-content">
  <Typography><span className="label">User id:</span> <span className="value">{order}</span></Typography>
  <Typography><span className="label">Date:</span> <span className="value">Shipped</span></Typography>
  <Typography><span className="label">Name:</span> <span className="value">{order}</span></Typography>
  <Typography><span className="label">Contact No:</span> <span className="value">{order}</span></Typography>
  <Typography><span className="label">Email:</span> <span className="value">Shipped</span></Typography>
  <Typography><span className="label">Address:</span> <span className="value">Shipped</span></Typography>
  <Typography><span className="label">Total Product:</span> <span className="value">{order}</span></Typography>
  <Typography><span className="label">Total Price:</span> <span className="value">Shipped</span></Typography>
  <Typography><span className="label">Total Payment:</span> <span className="value">Shipped</span></Typography>
  <Typography><span className="label">Payment:</span> <span className="value">Shipped</span></Typography>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Status</InputLabel>
                    <Select value={status} onChange={handleStatusChange} label="Status">
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Complete">Complete</MenuItem>
                    </Select>
                  </FormControl>
                  <div className="action-buttons">
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                    <Button variant="contained" color="secondary">
                      Delete
                    </Button>
                  </div>

                </CardContent>
              </Card>
            ))}
          </ScrollContainer>
        </Box>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
