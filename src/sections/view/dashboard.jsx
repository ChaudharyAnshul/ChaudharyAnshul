import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

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


export default function AppView() {
  return (
    <Container maxWidth="xl">
      <br />
      <br />
      <Grid container spacing={3}>

        {/* Personal Info */}
        <Grid md={12} lg={12}>
          <ProfileCard /> 
        </Grid>

        {/* What do I do? */}
        <Grid sm={12} md={12} lg={4}>
          <ImageCard title='What Do I Do?' subheader="Feel Free to Checkout Individual Work"/>
        </Grid>

        {/* Top Skills */}
        <Grid xs={12} md={6} lg={8}>
          <BarChartHorizontal
            title="Top Skills"
            subheader="Featured Skills to Visualize"
            chart={{ series: skills}}
          />
        </Grid>

        {/* Communication ans people Skills */}
        <Grid xs={12} md={6} lg={4}>
          <RadarGraph
            title="Interpersonal Competencies"
            subheader="Compared with Average"
            chart={InterPersonalData}
          />
        </Grid>

        {/* Experience and timeline */}
        <Grid xs={12} md={6} lg={4}>
          <TimeLineVisual
            title="Career Timeline"
            list={engineeringJourney}
          />
        </Grid>

        {/* Featured Projects */}
        <Grid xs={12} md={6} lg={8}>
          <ProjectTable title="Featured Projects" subheader="Feel Free To Explore More On My" linkURL="https://github.com/ChaudharyAnshul" linkText="GitHub" dataTable={projectList}  />
        </Grid>

        {/* Certification */}
        <Grid xs={12} sm={6} md={3}>
          <WidgetSummary
            title="Microsoft Certified"
            name="Azure AI Fundamentals"
            linkURL="https://www.credly.com/badges/b099ff11-31c8-41d9-bc06-7057272a1dc4/public_url"
            color="success"
            icon={<img alt="icon" src="assets/folders/azure-ai.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <WidgetSummary
            title="AWS Certified"
            name="Cloud Practitioner"
            linkURL="https://www.credly.com/badges/a966a313-fb89-4a54-85a7-d807f442e355/public_url"
            color="success"
            icon={<img alt="icon" src="assets/folders/aws-certified-cloud-practitioner.png" />}
          />
        </Grid>
        
        <Grid xs={12} sm={6} md={3}>
          <WidgetSummary
            title="Microsoft Certified"
            name="Azure Data Fundamentals"
            linkURL="https://www.credly.com/badges/6a48d1f2-ac6e-4d2a-b965-4c0e7d473420/public_url"
            color="success"
            icon={<img alt="icon" src="assets/folders/azure-data.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <WidgetSummary
            title="Microsoft Certified"
            name="Azure Fundamentals"
            linkURL="https://www.credly.com/badges/3aa7f6c6-15f3-4f28-93e8-b076292cb2f1/public_url"
            color="success"
            icon={<img alt="icon" src="assets/folders/azure.png" />}
          />
        </Grid>

        <Grid xs={12} sm={3} md={3}>
          <div />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <WidgetSummary
            title="Snowflake Hands-On"
            name="Data Lake"
            linkURL="https://www.credential.net/be2f069f-a785-434e-8edc-e2eb2a67df7e"
            color="success"
            icon={<img alt="icon" src="assets/folders/snowflake-datalake.png" />}
          />
        </Grid>


        <Grid xs={12} sm={6} md={3}>
          <WidgetSummary
            title="Snowflake Hands-On"
            name="Data Warehousing"
            linkURL="https://www.credential.net/59e18970-b9d2-445e-a6dd-75dfb9650709"
            color="success"
            icon={<img alt="icon" src="assets/folders/snowflake-datawarehousing.png" />}
          />
        </Grid>

        <Grid xs={12} sm={3} md={3}>
          <div />
        </Grid>

        {/* Project diversity */}
        <Grid xs={12} md={6} lg={4}>
          <PieChart
            title="Project Diversity"
            chart={{series: projectDiversity}}
          />
        </Grid>

        {/* line chart project count vs technology */}
        <Grid xs={12} md={6} lg={8}>
          <BarChartVertical
            title="Technologies Used"
            subheader="Project Count w.r.t Technologies"
            chart={{labels:labelsProjectCount, series:seriesProjectCount}}
          />
        </Grid>

      </Grid>
    </Container>
  );
}
