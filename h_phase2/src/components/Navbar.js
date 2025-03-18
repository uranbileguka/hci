import React from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, mt: 7 }}>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Dashboard App
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
