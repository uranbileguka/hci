import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import './App.css';

const topics = [
  "Academic Resources",
  "Career Services",
  "Campus",
  "Culture",
  "Local Community Resources",
  "Social",
  "Sports",
  "Health and Wellness",
  "Technology",
  "Travel",
  "Alumni",
];

function Subscribe() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [subscriptions, setSubscriptions] = useState([]);
  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (selectedTopic && !subscriptions.includes(selectedTopic)) {
      setSubscriptions([...subscriptions, selectedTopic]);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Subscribe to a Topic
      </Typography>
      <FormControl fullWidth style={{ marginBottom: "20px" }}>
        <InputLabel>Select a Topic</InputLabel>
        <Select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          {topics.map((topic, index) => (
            <MenuItem key={index} value={topic}>
              {topic}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSubscribe}>
        Subscribe
      </Button>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Your Subscriptions:
      </Typography>
      {subscriptions.length === 0 ? (
        <Typography>No topics subscribed yet.</Typography>
      ) : (
        <ul>
          {subscriptions.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      )}
      <Button
        variant="outlined"
        color="secondary"
        style={{ marginTop: "20px" }}
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Subscribe />} />
      </Routes>
    </Router>
  );
}

export default App;
