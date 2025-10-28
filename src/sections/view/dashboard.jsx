"use client";
import React from "react";
import {
  Container,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import PieChart from "../pie-chart";
import RadarGraph from "../radar-graph";
import ProfileCard from "./profile-card";
import ProjectTable from "./project-view";
import CertificationGrid from "./certifications";
import TimeLineVisual from "../timeline-visual";
import ImageCard from "../animated-folder-Card";
import BarChartVertical from "../bar-chart-vertical";
import BarChartHorizontal from "../bar-chart-horizontal";
import WidgetSummary from '../widget-summary';
import { skills } from "../../config/skills";
import { InterPersonalData } from "../../config/interpersonal";
import { engineeringJourney } from "../../config/engineering-journey";
import { projectList } from "../../config/projects";
import { labelsProjectCount, seriesProjectCount } from "../../config/project-count";
import { projectDiversity } from "../../config/project-diversity";
import { certifications } from "../../config/certification";

export default function AppView() {
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

          {/* Left: Skills + Projects */}
          <Grid item xs={12} lg={8}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <BarChartHorizontal
                title="Core Engineering Stack"
                subheader="Tools and technologies I use to design end-to-end systems, from backend APIs to data processing and deployment automation"
                chart={{ series: skills }}
              />
              <ProjectTable
                title="Highlighted Builds"
                subheader="Each project combines design thinking with system engineering — focusing on scalability, automation, and measurable impact."
                linkURL="https://github.com/ChaudharyAnshul"
                linkText="GitHub"
                dataTable={projectList}
              />
            </Box>
          </Grid>

          {/* Right: What I Do + Journey + Mindset */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <ImageCard
                title="Engineering Focus Areas"
                subheader="My projects span across full-stack, data engineering, and AI"
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

          {/* Certifications Section — moved to bottom */}
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <CertificationGrid certifications={certifications} />
            </Grid>
          </Grid>

          {/* Project diversity */}
          <Grid item xs={12} md={6} lg={4}>
            <PieChart
              title="Project Diversity"
              subheader="Visualizing where my engineering hours go."
              chart={{series: projectDiversity}}
            />
          </Grid>

          {/* line chart project count vs technology */}
          <Grid item xs={12} md={6} lg={8}>
            <BarChartVertical
              title="Codebase Insights"
              chart={{labels:labelsProjectCount, series:seriesProjectCount}}
            />
          </Grid>

        </Grid>
      ) : (
        // 📱 MOBILE / TABLET (unchanged)
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12}>
            <ImageCard
              title="What Do I Do?"
              subheader="Feel Free to Checkout Individual Work"
            />
          </Grid>
          <Grid item xs={12}>
            <BarChartHorizontal
              title="Top Skills"
              subheader="Featured Skills to Visualize"
              chart={{ series: skills }}
            />
          </Grid>
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
