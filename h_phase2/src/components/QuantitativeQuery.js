import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const quantitativeQueries = {
  "Products per Subcategory": [
    { id: 1, name: "Electronics", count: 120 },
    { id: 2, name: "Books", count: 80 },
  ],
  "Reviews per Subcategory": [
    { id: 1, name: "Electronics", count: 300 },
    { id: 2, name: "Books", count: 150 },
  ],
  "Average Review Length": [
    { id: 1, name: "Electronics", count: 200 },
    { id: 2, name: "Books", count: 180 },
  ],
  "Reviews per January (2011-2014)": [
    { id: 1, year: "2011", count: 40 },
    { id: 2, year: "2012", count: 50 },
    { id: 3, year: "2013", count: 60 },
    { id: 4, year: "2014", count: 70 },
  ],
};

function QuantitativeQueries() {
  const [selectedQuery, setSelectedQuery] = useState(
    Object.keys(quantitativeQueries)[0]
  );
  const data = quantitativeQueries[selectedQuery];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, padding: 2 }}>
      <FormControl sx={{ width: 300 }}>
        <InputLabel>Select a Query</InputLabel>
        <Select
          value={selectedQuery}
          onChange={(e) => setSelectedQuery(e.target.value)}
          label="Select a Query"
        >
          {Object.keys(quantitativeQueries).map((query) => (
            <MenuItem key={query} value={query}>
              {query}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Paper sx={{ padding: 2, borderRadius: 2 }}>
        <Typography variant="h6">{selectedQuery}</Typography>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>{data[0].name ? "Category" : "Year"}</TableCell>
                <TableCell>Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name || row.year}</TableCell>
                  <TableCell>{row.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default QuantitativeQueries;
