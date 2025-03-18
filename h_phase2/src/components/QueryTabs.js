import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import QuantitativeQuery from "./QuantitativeQuery";
import FuzzySearch from "./FuzzySearch";
import HybridSearch from "./HybridSearch";

function QueryTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box>
      <Tabs value={tabIndex} onChange={(e, newIndex) => setTabIndex(newIndex)}>
        <Tab label="Quantitative Queries" />
        <Tab label="Fuzzy/Exact Search" />
        <Tab label="Hybrid Search" />
      </Tabs>

      <Box p={2}>
        {tabIndex === 0 && <QuantitativeQuery />}
        {tabIndex === 1 && <FuzzySearch />}
        {tabIndex === 2 && <HybridSearch />}
      </Box>
    </Box>
  );
}

export default QueryTabs;
