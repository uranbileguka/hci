import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Navbar />
        <h2>Dashboard</h2>
        <p>Welcome to the dashboard application.</p>
      </div>
    </div>
  );
}

export default Dashboard;
