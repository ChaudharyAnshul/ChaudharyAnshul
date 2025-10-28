import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled, useTheme } from '@mui/material/styles';

import Chart, { useChart } from '../components/chart';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 350;

const LEGEND_HEIGHT = 72;

const StyledChart = styled(Chart)(({ theme }) => ({
  height: CHART_HEIGHT,
  '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
    height: `100% !important`,
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------

export default function RadarGraph({ title, subheader, chart, ...other }) {
  const theme = useTheme();

  const { series, colors, categories, options } = chart;

  const chartOptions = useChart({
    colors,
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.48,
    },
    legend: {
      show: true, // Ensure the legend is shown
      floating: true,
      position: 'bottom',
      horizontalAlign: 'center',
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0, // Ensure no border around markers
        radius: 12,
      },
      labels: {
        useSeriesColors: true,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      containerMargin: {
        left: 0,
        top: 0,
      },
      borderColor: 'transparent', // Ensure no border
      borderWidth: 0, // Ensure no border
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: [...Array(categories.length)].map(() => theme.palette.text.secondary),
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader}/>
      <StyledChart
        dir="ltr"
        type="radar"
        series={series}
        options={chartOptions}
        width="100%"
        height={350}
        sx={{ mt: -10 }}
      />
    </Card>
  );
}

RadarGraph.propTypes = {
  chart: PropTypes.object.isRequired,
  subheader: PropTypes.string,
  title: PropTypes.string,
};