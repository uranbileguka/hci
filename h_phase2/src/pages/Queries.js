import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import QuantitativeQuery from "../components/QuantitativeQuery";
import FuzzySearch from "../components/FuzzySearch";
import HybridSearch from "../components/HybridSearch";

function Queries() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        {/* Handle Subqueries Inside Queries */}
        <Routes>
          <Route path="quantitative" element={<QuantitativeQuery />} />
          <Route path="fuzzy" element={<FuzzySearch />} />
          <Route path="hybrid" element={<HybridSearch />} />
        </Routes>
      </div>
    </div>
  );
}

export default Queries;
