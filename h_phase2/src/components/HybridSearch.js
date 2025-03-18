import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";

const electronicProducts = [
  "MacBook Pro",
  "Dell XPS 15",
  "Lenovo ThinkPad X1 Carbon",
  "HP Spectre x360",
  "ASUS ROG Zephyrus G14",
  "Microsoft Surface Laptop 5",
  "iPhone 15 Pro",
  "Samsung Galaxy S24 Ultra",
  "Google Pixel 8 Pro",
  "OnePlus 12",
  "iPad Pro (M2)",
  "Samsung Galaxy Tab S9",
  "Sony WH-1000XM5",
  "Bose QuietComfort Ultra",
  "Apple AirPods Pro 2",
  "JBL Flip 6",
  "Sonos One",
  "Apple Watch Ultra 2",
  "Samsung Galaxy Watch 6",
  "Garmin Fenix 7",
  "Fitbit Charge 6",
  "Google Pixel Watch",
  "Sony Alpha A7 IV",
  "Canon EOS R5",
  "DJI Mini 3 Pro",
  "GoPro Hero 12 Black",
  "Fujifilm X-T5",
  "PlayStation 5",
  "Xbox Series X",
  "Nintendo Switch OLED",
  "Logitech G Pro X",
  "Razer Huntsman Mini",
];

function HybridSearch() {
  const [query, setQuery] = useState("");

  const filteredResults = electronicProducts.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2 }}>
          🔍 Search for Electronics
        </Typography>
        <TextField
          label="Type to search..."
          variant="outlined"
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ mb: 2 }}
        />

        {filteredResults.length > 0 ? (
          <List>
            {filteredResults.map((result, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText primary={result} />
                </ListItem>
                {index < filteredResults.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        ) : (
          <Typography color="textSecondary" sx={{ mt: 2 }}>
            No results found.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default HybridSearch;
