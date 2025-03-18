import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  Button,
  List,
  ListItem,
} from "@mui/material";

function HybridSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const results = [
    { name: "After Hours", category: "Album" },
    { name: "Beauty Behind the Madness", category: "Album" },
    { name: "Kiss Land", category: "Album" },
    { name: "Starboy", category: "Album" },
    { name: "My Dear Melancholy,", category: "Album" },
    { name: "Trilogy", category: "Album" },
    { name: "House of Balloons", category: "Album" },
    { name: "Thursday", category: "Album" },
    { name: "Echoes of Silence", category: "Album" },
    { name: "Starboy (Deluxe)", category: "Album" },
    { name: "The Highlights", category: "Album" },
    { name: "Heartless", category: "Single" },
    { name: "Blinding Lights", category: "Single" },
    { name: "Save Your Tears", category: "Single" },
    { name: "In Your Eyes", category: "Single" },
    { name: "Scared to Live", category: "Single" },
    { name: "Snowchild", category: "Single" },
    { name: "Escape from LA", category: "Single" },
    { name: "Faith", category: "Single" },
    { name: "Too Late", category: "Single" },
    { name: "Hardest to Love", category: "Single" },
    { name: "Repeat After Me (Interlude)", category: "Single" },
    { name: "After Hours", category: "Single" },
    { name: "Until I Bleed Out", category: "Single" },
    { name: "Pray for Me", category: "Single" },
    { name: "I Feel It Coming", category: "Single" },
    { name: "Secrets", category: "Single" },
    { name: "Six Feet Under", category: "Single" },
    { name: "Love in the Dark", category: "Single" },
    { name: "Party Monster", category: "Single" },
    { name: "False Alarm", category: "Single" },
    { name: "Stargirl Interlude", category: "Single" },
    { name: "Acquainted", category: "Single" },
    { name: "Dark Times", category: "Single" },
    { name: "Some Way", category: "Single" },
    { name: "Ordinary Life", category: "Single" },
    { name: "Rockin' ", category: "Single" },
    { name: "Six Feet Under", category: "Single" },
    { name: "Die For You", category: "Single" },
    { name: "Nothing Without You", category: "Single" },
    { name: "All I Know", category: "Single" },
  ].filter(
    (item) =>
      (category === "All" || item.category === category) &&
      item.name.toLowerCase().includes(query.toLowerCase())
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
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          style={{ marginTop: "10px" }}
        >
          <MenuItem value="All">All Categories</MenuItem>
          <MenuItem value="Single">Single</MenuItem>
          <MenuItem value="Album">Album</MenuItem>
        </Select>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Search
        </Button>
        <List>
          {results.map((result, index) => (
            <ListItem key={index}>
              {result.name} ({result.category})
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default HybridSearch;
