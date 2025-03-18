import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Stack,
  Chip,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const rawData = {
  "How many products are there in every product subcategory?": [
    { id: 1, name: "Smartphones", count: 4051 },
    { id: 2, name: "Laptops", count: 2275 },
    { id: 3, name: "Tablets", count: 3129 },
    { id: 4, name: "Headphones", count: 4693 },
    { id: 5, name: "Smartwatches", count: 3904 },
    { id: 6, name: "Cameras", count: 2038 },
    { id: 7, name: "Speakers", count: 2275 },
  ],
  "How many reviews for every product subcategory?": [
    { id: 1, name: "Smartphones", count: 5200 },
    { id: 2, name: "Laptops", count: 3100 },
    { id: 3, name: "Tablets", count: 4100 },
    { id: 4, name: "Headphones", count: 5700 },
    { id: 5, name: "Smartwatches", count: 4500 },
    { id: 6, name: "Cameras", count: 2800 },
    { id: 7, name: "Speakers", count: 3100 },
  ],
  "What is the average size (characters/words) of the review text/body?": [
    { id: 1, name: "Average", count: 101 },
  ],
  "How many reviews submitted every January for years: 2011, 2012, 2013, 2014?": [
    { id: 1, name: "2011", count: 501 },
    { id: 2, name: "2012", count: 201 },
    { id: 3, name: "2013", count: 301 },
    { id: 4, name: "2014", count: 601 },
  ],
};


function QuantitativeQueries() {
  const [selectedQuery, setSelectedQuery] = useState(
    Object.keys(rawData)[0]
  );
  const data = rawData[selectedQuery];
  const totalSum = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, padding: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        🔍 Choose a Query
      </Typography>
      <FormControl variant="filled" sx={{ minWidth: 300, maxWidth: 1000 }}>
        <InputLabel id="query-label">Select a Query</InputLabel>
        <Select
          labelId="query-label"
          value={selectedQuery}
          onChange={(e) => setSelectedQuery(e.target.value)}
        >
          {Object.keys(rawData).map((query) => (
            <MenuItem key={query} value={query}>
              {query}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Card with Chart */}
      <Card variant="outlined" sx={{ width: "100%" }}>
        <CardContent>
          <Typography component="h2" variant="subtitle2" gutterBottom>
            {selectedQuery}
          </Typography>
          <Stack sx={{ justifyContent: "space-between" }}>
            <Stack
              direction="row"
              sx={{
                alignContent: { xs: "center", sm: "flex-start" },
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography variant="h4" component="p">
                Total {totalSum}
              </Typography>
              {/* <Chip size="small" color="error" label="-8%" /> */}
            </Stack>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {selectedQuery}
            </Typography>
          </Stack>

          {/* Bar Chart */}
          <BarChart
            borderRadius={8}
            xAxis={[
              {
                scaleType: "band",
                categoryGapRatio: 0.5,
                data: data.map((item) => item.name), // X-axis categories
              },
            ]}
            series={[
              {
                id: "count",
                label: "Count",
                data: data.map((item) => item.count), // Y-axis data
                stack: "A",
              },
            ]}
            height={250}
            margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
            grid={{ horizontal: true }}
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
          />
        </CardContent>
      </Card>
    </Box>

  );
}

export default QuantitativeQueries;
