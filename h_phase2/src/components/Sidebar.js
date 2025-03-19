import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar() {
  const [openQueries, setOpenQueries] = useState(false);

  return (
    <Drawer variant="permanent" sx={{ width: 240 }}>
      <List>
        {/* Dashboard Link */}
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>

        {/* Queries - Expandable */}
        <ListItem button onClick={() => setOpenQueries(!openQueries)}>
          <ListItemText primary="Queries" />
          {openQueries ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openQueries} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 3 }}>
            <ListItem button component={Link} to="/queries/quantitative">
              <ListItemText primary="Quantitative Queries" />
            </ListItem>
            <ListItem button component={Link} to="/queries/fuzzy">
              <ListItemText primary="Fuzzy Search" />
            </ListItem>
            <ListItem button component={Link} to="/queries/hybrid">
              <ListItemText primary="Hybrid Search" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}

export default Sidebar;
