import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Queries from "./pages/Queries";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/queries" element={<Queries />} />
    </Routes>
  );
}

export default App;
