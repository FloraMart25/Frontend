import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../css/dstyle.css";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const orders= [
  { id: 158, name: "Semo Yangzom", contact: "975-17658890", email: "karmay@gmail.com", address: "Trashigang, ", product: 3, price: 1500, payment: "Paypal", status: "Pending", date: "15-Jan-2025" },
  { id: 157, name: "Karma Wangmo", contact: "975-17658880", email: "karmawo@gmail.com", address: "Punakha, ", product: 5, price: 1600, payment: "Paypal", status: "Completed", date: "15-Jan-2025" },
  { id: 158, name: "Semo Yangzom ", contact: "975-17658890", email: "kzom@gmail.com", address: "Trashigang, ", product: 3, price: 1500, payment: "Paypal", status: "Pending", date: "15-Jan-2025" },
  { id: 157, name: "Karma Wangmo", contact: "975-17658880", email: "kangmo@gmail.com", address: "Punakha, ", product: 5, price: 1600, payment: "Paypal", status: "Completed", date: "15-Jan-2025" },
  { id: 158, name: "Semo Yangzom", contact: "975-17658890", email: "karngzom@gmail.com", address: "Trashigang, ", product: 3, price: 1500, payment: "Paypal", status: "Pending", date: "15-Jan-2025" },
  { id: 157, name: "Karma Wangmo", contact: "975-17658880", email: "karmo@gmail.com", address: "Punakha, ", product: 5, price: 1600, payment: "Paypal", status: "Completed", date: "15-Jan-2025" },
  { id: 158, name: "Semo Yangzom", contact: "975-17658890", email: "karmom@gmail.com", address: "Trashigang,", product: 3, price: 1500, payment: "Paypal", status: "Pending", date: "15-Jan-2025" },
  { id: 157, name: "Karma Wangmo", contact: "975-17658880", email: "karmao@gmail.com", address: "Punakha, ", product: 5, price: 1600, payment: "Paypal", status: "Completed", date: "15-Jan-2025" },
  { id: 158, name: "Semo Yangzom", contact: "975-17658890", email: "karmazom@gmail.com", address: "Trashigang,", product: 3, price: 1500, payment: "Paypal", status: "Pending", date: "15-Jan-2025" },
  { id: 157, name: "Karma Wangmo", contact: "975-17658880", email: "karmamo@gmail.com", address: "Punakha, ", product: 5, price: 1600, payment: "Paypal", status: "Completed", date: "15-Jan-2025" },
  // Add more orders as needed
];

const OrderPage = () => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrders = orders.filter((order) => {
    const matchStatus =
      statusFilter === "All" || order.status === statusFilter;
    const matchQuery = order.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchStatus && matchQuery;
  });

  return (
    <div className="app-container flex h-screen">
      <Sidebar />

      <div className="main-content flex-1 p-4">
        <header className="header bg-white shadow p-4 flex justify-between items-center border-b-2 border-black">
          {/* Header content can go here */}
        </header>

        <h2 className="dashboard-title mt-4">
          <span className="title-bold">Placed </span>
          <span className="title-light">Orders</span>
        </h2>

        <div className="top-controls my-4 flex gap-4 items-center">
          <div className="tabs flex gap-2">
            {["All", "Pending", "Completed"].map((tab) => (
              <button
                key={tab}
                className={`tab-button px-4 py-2 border ${
                  statusFilter === tab ? "bg-black text-white" : "bg-gray-200"
                } rounded`}
                onClick={() => setStatusFilter(tab)}
              >
                {tab}
              </button>
            ))}
            
          <TextField
            variant="outlined"
            placeholder="Find User"
            size="small"
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          </div>

          
        </div>
        <div className="table-container">
        <Box className="orders-scroll space-y-4">
          {filteredOrders.map((order) => (
            
         <Card key={order} sx={{ minWidth: 150, padding: 1, boxShadow: 2, textAlign: "left", fontSize:3}}>
                 <CardContent className="compact-card-content"sx={{ minWidth: 200, padding: "30px", boxShadow: 2, textAlign: "left", fontSize:3}}>
                <Typography>
                  <span className="label">User ID:</span>{" "}
                  <span className="value">{order.id}</span>
                </Typography>
                <Typography>
                  <span className="label">Placed on:</span>{" "}
                  <span className="value">{order.date}</span>
                </Typography>
                <Typography>
                  <span className="label">Name:</span>{" "}
                  <span className="value">{order.name}</span>
                </Typography>
                <Typography>
                  <span className="label">Contact:</span>{" "}
                  <span className="value">{order.contact}</span>
                </Typography>
                <Typography>
                  <span className="label">Email:</span>{" "}
                  <span className="value">{order.email}</span>
                </Typography>
                <Typography>
                  <span className="label">Address:</span>{" "}
                  <span className="value">{order.address}</span>
                </Typography>
                <Typography>
                  <span className="label">Total Product:</span>{" "}
                  <span className="value">{order.product}</span>
                </Typography>
                <Typography>
                  <span className="label">Total Price:</span>{" "}
                  <span className="value">{order.price}</span>
                </Typography>
                <Typography>
                  <span className="label">Payment Method:</span>{" "}
                  <span className="value">{order.payment}</span>
                </Typography>

                <FormControl fullWidth margin="dense">
                  <InputLabel>Status</InputLabel>
                  <Select value={order.status} label="Status" disabled>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                </FormControl>

                <div className="action-buttons mt-2 flex gap-2">
                  <Button variant="contained" color="primary" size="small">
                    Update
                  </Button>
                  <Button variant="contained" color="secondary" size="small">
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </Box>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;