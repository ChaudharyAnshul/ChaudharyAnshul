import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0d0d15",
        color: "white",
        py: 4,
        px: { xs: 3, md: 6 },
        mt: 6,
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          {/* Left Section - Profile Info */}
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" gap={2}>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  Anshul Chaudhary
                </Typography>
                <Typography variant="body2" color="gray.400">
                  <Link
                    href="mailto:anshulchaudhary.218@gmail.com"
                    color="inherit"
                    underline="hover"
                  >
                    anshulchaudhary.218@gmail.com
                  </Link>
                </Typography>
                <Typography variant="body2" color="gray.400">
                  +1 (857) 318-9725
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Section - Social Icons */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
              gap: 1,
              mt: { xs: 2, md: 0 },
            }}
          >
            <IconButton
              href="https://github.com/chaudharyanshul"
              target="_blank"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/chaudharyanshul"
              target="_blank"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton href="mailto:anshulchaudhary.218@gmail.com" color="inherit">
              <EmailIcon />
            </IconButton>
          </Grid>
        </Grid>

        {/* Divider and Copyright */}
        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.1)" }} />
        <Typography
          variant="body2"
          color="gray.400"
          align="center"
          sx={{ mb: 0.5 }}
        >
          © {new Date().getFullYear()} Anshul Chaudhary. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
