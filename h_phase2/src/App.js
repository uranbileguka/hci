import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Queries from "./pages/Queries";
import QuantitativeQuery from "./components/QuantitativeQuery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/queries" element={<Queries />} />
      <Route path="/queries/*" element={<Queries />} /> {/* Handles all subqueries */}
    </Routes>
  );
}

export default App;
