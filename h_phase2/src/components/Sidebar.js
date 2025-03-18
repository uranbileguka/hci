import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Drawer variant="permanent" sx={{ width: 240 }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/queries">
          <ListItemText primary="Queries" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
