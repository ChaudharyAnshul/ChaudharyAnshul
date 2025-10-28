import React from "react";
import {
  Container,
  Box,
  Grid,
  useMediaQuery, 
  useTheme
} from "@mui/material";
import PieChart from '../pie-chart';
import RadarGraph from '../radar-graph';
import ProfileCard from "./profile-card"
import ProjectTable from './project-view'
import WidgetSummary from '../widget-summary';
import TimeLineVisual from '../timeline-visual';
import ImageCard from '../animated-folder-Card';
import BarChartVertical from '../bar-chart-vertical';
import BarChartHorizontal from '../bar-chart-horizontal';
import { skills } from '../../config/skills';
import { InterPersonalData } from '../../config/interpersonal';
import { engineeringJourney } from '../../config/engineering-journey';
import { projectList } from '../../config/projects';
import { labelsProjectCount, seriesProjectCount } from '../../config/project-count';
import { projectDiversity } from '../../config/project-diversity'


export default function AppView({}) {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Container maxWidth="xl">
      <br />

      {isLarge ? (
        // 🌐 DESKTOP / LARGE SCREEN LAYOUT
        <Grid container spacing={4}>
          {/* Profile Card */}
          <Grid item xs={12}>
            <ProfileCard />
          </Grid>

          {/* Left: Top Skills + Featured Projects */}
          <Grid item xs={12} lg={8}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <BarChartHorizontal
                title="Top Skills"
                subheader="Featured Skills to Visualize"
                chart={{ series: skills }}
              />
              <ProjectTable title="Highlighted Builds" subheader="Each project combines design thinking with system engineering — focusing on scalability, automation, and measurable impact." linkURL="https://github.com/ChaudharyAnshul" linkText="GitHub" dataTable={projectList}  />
              </Box>
          </Grid>


          {/* Right: What I Do + Engineering Journey +  Interpersonal stacked */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <ImageCard
                title="What Do I Do?"
                subheader="Feel Free to Checkout Individual Work"
              />
              <TimeLineVisual
                title="Engineering Journey"
                subheader="From financial systems to AI-powered platforms, every role has been a step toward building smarter software"
                list={engineeringJourney}
              />
              <RadarGraph
                title="Engineering Mindset"
                subheader="Compared with Average"
                chart={InterPersonalData}
              />
            </Box>
          </Grid>
        </Grid>
      ) : (
        // 📱 MOBILE / TABLET LAYOUT
        <Grid container spacing={4}>
          {/* 1️⃣ Profile */}
          <Grid item xs={12}>
            <ProfileCard />
          </Grid>

          {/* 2️⃣ What Do I Do */}
          <Grid item xs={12}>
            <ImageCard
              title="What Do I Do?"
              subheader="Feel Free to Checkout Individual Work"
            />
          </Grid>

          {/* 3️⃣ Top Skills */}
          <Grid item xs={12}>
            <BarChartHorizontal
              title="Top Skills"
              subheader="Featured Skills to Visualize"
              chart={{ series: skills }}
            />
          </Grid>

          {/* 4️⃣ Interpersonal */}
          <Grid item xs={12}>
            <RadarGraph
              title="Interpersonal Competencies"
              subheader="Compared with Average"
              chart={InterPersonalData}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  );
}