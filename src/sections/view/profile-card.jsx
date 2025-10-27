"use client";
import * as React from "react";
import {
  Box,
  Card,
  Link,
  Grid,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function ProfileCard() {
  const [showAbout, setShowAbout] = React.useState(false);
  const handleAboutClick = () => setShowAbout(true);

  return (
    <Card
      sx={{
        width: "100%",
        margin: "0 auto",
        borderRadius: 3,
        p: { xs: 3, md: 5 },
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Column - Image + Contact */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            component="img"
            image="assets/images/anshulchaudhary.jpeg"
            alt="Anshul Chaudhary"
            sx={{
              height: 200,
              width: 200,
              borderRadius: "50%",
              objectFit: "cover",
              mb: 2,
            }}
          />

          {/* Contact Info */}
          <Box sx={{ color: "#8b949e", mb: 1 }}>
            <EmailIcon sx={{ mr: 0.5, verticalAlign: "middle" }} />
            anshulchaudhary.218@gmail.com
          </Box>
          <Box sx={{ color: "#8b949e", mb: 1 }}>
            <PhoneIcon sx={{ mr: 0.5, verticalAlign: "middle" }} />
            +1 (857) 318-9725
          </Box>

          {/* Social Icons */}
          <Box
            sx={{
              mb: 3,
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Link
              href="https://www.linkedin.com/in/chaudharyanshul/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#58a6ff" }}
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://github.com/ChaudharyAnshul/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#58a6ff" }}
            >
              <GitHubIcon />
            </Link>
          </Box>
        </Grid>

        {/* Right Column - Name, Title, About Me */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "100%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#f0f6fc",
              mb: 1,
            }}
          >
            Anshul Chaudhary
          </Typography>

          {/* Animated Role Text */}
          <Typography
            variant="subtitle1"
            sx={{
              color: "#8b949e",
              mb: showAbout ? 1 : 4,
              fontWeight: 500,
              minHeight: "1.5em", // prevents jumping when text changes
            }}
          >
            Software Engineer | Data & AI Systems | Cloud Architecture
          </Typography>

          {/* Button or Code Block */}
          {!showAbout ? (
            <>
              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  maxWidth: 500,
                  color: "#8b949e",
                }}
              >
                I’m passionate about building reliable, data-driven systems that solve real problems; learning fast and improving with every challenge.
              </Typography>

              <Button
                variant="contained"
                startIcon={<PlayArrowIcon />}
                onClick={handleAboutClick}
                sx={{
                  backgroundColor: "#238636",
                  textTransform: "none",
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 14,
                  "&:hover": { backgroundColor: "#2ea043" },
                }}
              >
                Anshul.about_me()
              </Button>
            </>
          ) : (
            <Box
              component="pre"
              sx={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 14,
                p: 3,
                borderRadius: 2,
                whiteSpace: "pre-wrap",
                lineHeight: 1.7,
                width: "100%",
                maxWidth: 600,
                textAlign: "left",
                mt: 3,
              }}
            >
{`>>> Hi, I’m a software engineer who loves solving real problems
>>> I enjoy building systems that process data, automate workflows, and make things simpler for people
>>> Over the years, I’ve worked across software, finance, AI, and data engineering — learning how to make systems both scalable and human-friendly
>>> Currently, I’m at Genassis AI — building research and analytics pipelines powered by AI agents using Python and deployed on GCP
>>> I believe in shipping fast, learning continuously, and building systems that scale`}
            </Box>
          )}
        </Grid>
      </Grid>
    </Card>
  );
}
