import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  List,
  ListItem,
} from "@mui/material";

const products = [
  "After Hours",
  "Beauty Behind the Madness",
  "Kiss Land",
  "Starboy",
  "My Dear Melancholy,",
  "Trilogy",
  "House of Balloons",
  "Thursday",
  "Echoes of Silence",
  "Starboy (Deluxe)",
  "The Highlights",
  "Heartless",
  "Blinding Lights",
  "Save Your Tears",
  "In Your Eyes",
  "Scared to Live",
  "Snowchild",
  "Escape from LA",
  "Faith",
  "Too Late",
  "Hardest to Love",
  "Repeat After Me (Interlude)",
  "After Hours",
  "Until I Bleed Out",
];

function FuzzySearch() {
  const [query, setQuery] = useState("");
  const results = products.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Card>
      <CardContent>
        <TextField
          label="Search for a product"
          variant="outlined"
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Search
        </Button>
        <List>
          {results.map((result, index) => (
            <ListItem key={index}>{result}</ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default FuzzySearch;
