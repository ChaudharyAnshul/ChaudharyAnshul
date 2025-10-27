import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

// ----------------------------------------------------------------------

export default function Navbar () {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <img src="assets/logos/logo.png" alt="Logo" style={{ height: '40px' }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};