import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#0d0d15", // same as footer
        color: "white",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)", // subtle border like footer divider
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Box component="img"
            src="assets/logos/logo.png"
            alt="Logo"
            sx={{
              height: 40,
              cursor: "pointer",
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
