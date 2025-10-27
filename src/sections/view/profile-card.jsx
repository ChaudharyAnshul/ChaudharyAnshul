"use client";
import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  CardMedia,
  Button,
  Link,
} from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "framer-motion";
import {
  SiPython,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSnowflake,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiDocker,
  SiTerraform,
  SiGooglecloud,
  SiAmazonwebservices,
  SiGit,
  SiGithub,
  SiJira,
  SiGraphql,
  SiApacheairflow,
  SiNeo4J,
} from "react-icons/si";


// --- Floating Icon Component (defined outside so it never re-creates)
const FloatingIcon = ({
  icon,
  side,
  containerHeight,
  startX,
  angle,
  startPhase,
  delay,
}) => {
  const duration = 10 + Math.random() * 6;
  const drift = Math.tan((angle * Math.PI) / 180) * containerHeight * 0.25;

  return (
    <motion.div
      initial={{ y: 0, opacity: 0.6 }}
      animate={{
        y: [containerHeight, -containerHeight],
        x: [0, side === "left" ? drift : -drift],
        opacity: [0, 0.3, 0.3, 0],
      }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        delay: -Math.random() * duration,
      }}
      style={{
        position: "absolute",
        bottom: 0,
        left: side === "left" ? `${startX}%` : "auto",
        right: side === "right" ? `${startX}%` : "auto",
      }}
    >
      <Box
        sx={{
          fontSize: 36,
          opacity: 0.7, // softer transparency
          rotate: `${angle / 3}deg`,
          filter: "drop-shadow(0 0 4px rgba(88,166,255,0.25))",
        }}
      >
        {icon}
      </Box>
    </motion.div>
  );
};

const FloatingPanel = ({
  side,
  containerHeight,
  techIcons,
  widthPercent = 25,
  lanes = 5,
  iconsPerLane = 5,
}) => {
  // 👇 Create a shuffled copy (no duplicates on-screen)
  const shuffledIcons = React.useMemo(() => {
    const icons = [...techIcons];
    for (let i = icons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [icons[i], icons[j]] = [icons[j], icons[i]];
    }
    return icons;
  }, [techIcons]);

  const startPositions = Array.from({ length: lanes }, (_, i) =>
    ((i + 0.5) * (100 / lanes)).toFixed(1)
  );

  const floatingIcons = [];
  let iconIndex = 0;

  for (let lane = 0; lane < lanes; lane++) {
    for (let i = 0; i < iconsPerLane; i++) {
      if (iconIndex >= shuffledIcons.length) iconIndex = 0; // recycle only after all used once
      const icon = shuffledIcons[iconIndex++];
      const angle = (Math.random() - 0.5) * 20;
      const startPhase = Math.random();
      const delay = Math.random() * 5;

      floatingIcons.push(
        <FloatingIcon
          key={`${side}-${lane}-${i}-${iconIndex}`}
          icon={icon}
          side={side}
          startX={startPositions[lane]}
          containerHeight={containerHeight}
          angle={angle}
          startPhase={startPhase}
          delay={delay}
        />
      );
    }
  }

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: side === "left" ? 0 : "auto",
        right: side === "right" ? 0 : "auto",
        width: `${widthPercent}%`,
        height: "100%",
        overflow: "visible",
        pointerEvents: "none",
      }}
    >
      {floatingIcons}
    </Box>
  );
};


export default function ProfileCard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [showAbout, setShowAbout] = React.useState(false);
  const handleAboutClick = () => setShowAbout(true);

  const techIcons = React.useMemo(
    () => [
      // === Languages ===
      <SiPython color="#3776AB" />,
      <SiTypescript color="#3178C6" />,

      // === Frameworks ===
      <SiFastapi color="#009688" />,
      <SiNextdotjs color="#000000" />,
      <SiReact color="#61DAFB" />,
      <SiFlask color="#E44D26" />,
      <SiDjango color="#092E20" />,

      // === Databases ===
      <SiPostgresql color="#336791" />,
      <SiMysql color="#00758F" />,
      <SiMongodb color="#4DB33D" />,
      <SiSnowflake color="#29B5E8" />,
      <SiNeo4J color="#008CC1" />,

      // === Cloud & DevOps ===
      <SiGooglecloud color="#4285F4" />,
      <SiAmazonwebservices  color="#FF9900" />,
      <SiDocker color="#2496ED" />,
      <SiTerraform color="#7B42BC" />,

      // === Tools ===
      <SiGit color="#F34F29" />,
      <SiGithub color="#ffffff" />,
      <SiJira color="#0052CC" />,

      // === APIs & Concepts ===
      <SiGraphql color="#E535AB" />,
      <SiApacheairflow color="#017CEE" />,
    ],
    []
  );
  const leftIcons = React.useMemo(() => techIcons.filter((_, i) => i % 2 === 0), [techIcons]);
  const rightIcons = React.useMemo(() => techIcons.filter((_, i) => i % 2 !== 0), [techIcons]);

  const containerRef = React.useRef(null);
  const [height, setHeight] = React.useState(600);

  React.useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.offsetHeight);
    }
  }, []);

  // 💡 Memoize the floating panels so they don't remount when `showAbout` changes
  const floatingPanels = React.useMemo(() => {
    if (isSmallScreen) return null;
    return (
      <>
        <FloatingPanel side="left" containerHeight={height} techIcons={leftIcons} />
        <FloatingPanel side="right" containerHeight={height} techIcons={rightIcons} />
      </>
    );
  }, [height, techIcons, isSmallScreen]);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        py: 6,
        px: { xs: 2, md: 6 },
        borderRadius: 3,
        background: "#1b2430",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ✅ Floating panels mounted once, never restart */}
      {floatingPanels}

      <Grid container spacing={2} alignItems="center" sx={{ position: "relative", zIndex: 2 }}>
        {/* LEFT SPACER */}
        <Grid item md={2} lg={2}></Grid>

        {/* CENTER CONTENT */}
        <Grid item md={12} lg={8}>
          <Box
            sx={{
              width: "100%",
              borderRadius: 4,
              p: { xs: 3, md: 5 },
              background: "transparent",
              boxShadow: "none",
              color: "#e6edf3",
            }}
          >
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              {/* LEFT — IMAGE + CONTACT */}
              <Grid
                item
                xs={12}
                md={4}
                component={motion.div}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: 200,
                    height: 200,
                    mb: 2,
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 0 30px rgba(88,166,255,0.25)",
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                >
                  <CardMedia
                    component="img"
                    image="assets/images/anshulchaudhary.jpeg"
                    alt="Anshul Chaudhary"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </Box>

                <Typography
                  variant="body2"
                  sx={{ color: "#8b949e", display: "flex", alignItems: "center", mb: 1 }}
                >
                  <EmailIcon fontSize="small" sx={{ mr: 1 }} />
                  anshulchaudhary.218@gmail.com
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#8b949e", display: "flex", alignItems: "center", mb: 2 }}
                >
                  <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
                  +1 (857) 318-9725
                </Typography>

                <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 1 }}>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Link
                      href="https://www.linkedin.com/in/chaudharyanshul/"
                      target="_blank"
                      sx={{ color: "#58a6ff" }}
                    >
                      <LinkedInIcon fontSize="medium" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Link
                      href="https://github.com/ChaudharyAnshul/"
                      target="_blank"
                      sx={{ color: "#58a6ff" }}
                    >
                      <GitHubIcon fontSize="medium" />
                    </Link>
                  </motion.div>
                </Box>
              </Grid>

              {/* RIGHT — ABOUT SECTION */}
              <Grid
                item
                xs={12}
                md={8}
                component={motion.div}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  Anshul Chaudhary
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#8b949e",
                    mb: showAbout ? 2 : 5,
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    minHeight: "1.5em",
                  }}
                >
                  Software Engineer | Data & AI Systems | Cloud Architecture
                </Typography>

                {!showAbout ? (
                  <>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        maxWidth: 550,
                        color: "#8b949e",
                        fontSize: "1rem",
                        lineHeight: 1.7,
                      }}
                    >
                      I’m passionate about building reliable, data-driven systems that solve real problems — learning fast and improving with every challenge.
                    </Typography>

                    <Button
                      variant="contained"
                      startIcon={<PlayArrowIcon />}
                      onClick={handleAboutClick}
                      component={motion.button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      sx={{
                        backgroundColor: "#238636",
                        textTransform: "none",
                        fontFamily: "'Fira Code', monospace",
                        fontSize: 14,
                        px: 3,
                        py: 1,
                        borderRadius: 2,
                        "&:hover": { backgroundColor: "#2ea043" },
                        boxShadow: "0 4px 14px rgba(35,134,54,0.4)",
                      }}
                    >
                      Anshul.about_me()
                    </Button>
                  </>
                ) : (
                  <Box
                    component={motion.pre}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    sx={{
                      backgroundColor: "#161b22",
                      color: "#c9d1d9",
                      fontFamily: "'Fira Code', monospace",
                      fontSize: 14,
                      p: 3,
                      borderRadius: 2,
                      whiteSpace: "pre-wrap",
                      lineHeight: 1.7,
                      width: "100%",
                      maxWidth: 600,
                      boxShadow: "0 0 18px rgba(0,0,0,0.4)",
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
          </Box>
        </Grid>

        {/* RIGHT SPACER */}
        <Grid item xs={2}></Grid>
      </Grid>
    </Box>
  );
}
