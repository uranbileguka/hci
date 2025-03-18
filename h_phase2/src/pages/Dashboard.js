import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <Sidebar />
      <Box component="main" sx={{ flex: 1, p: 3, display: "flex", flexDirection: "column", gap: 1 }}>
        <Navbar />
        <Container maxWidth="lg">
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            borderRadius: 2, 
            bgcolor: "primary.main", // You can change this to other colors
            color: "white",
            // Ensures text is visible if background is dark
          }}
        >
          <Typography variant="h4" component="h2">
            Dashboard
          </Typography>
          <Typography variant="body1">
            Welcome to the dashboard.
          </Typography>
        </Paper>

        </Container>
      </Box>
    </Box>
  );
}

export default Dashboard;
