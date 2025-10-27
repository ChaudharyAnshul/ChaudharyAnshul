import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';



// ----------------------------------------------------------------------

export default function TimeLineVisual({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Timeline
        sx={{
          m: 0,
          p: 3,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {list.map((item, index) => (
          <TimeItem key={item.id} item={item} lastTimeline={index === list.length - 1} />
        ))}
      </Timeline>
    </Card>
  );
}

TimeLineVisual.propTypes = {
  list: PropTypes.array,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function TimeItem({ item, lastTimeline }) {
  const { type, title, time, subtitle } = item;

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (type === 'order1' && 'primary') ||
            (type === 'order2' && 'success') ||
            (type === 'order3' && 'info') ||
            (type === 'order4' && 'warning') ||
            'error'
          }
        />
        {lastTimeline ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {time}
        </Typography>
        <Typography variant="subtitle2">{title}</Typography>

        <Typography variant="caption">
          { typeof subtitle === 'string' ? (
              subtitle
            ) : (
              <Link href={subtitle.link} target="_blank">
                {subtitle.text}
              </Link>
            )}
        </Typography>
        
      </TimelineContent>
    </TimelineItem>
  );
}

TimeItem.propTypes = {
  item: PropTypes.object,
  lastTimeline: PropTypes.bool,
};
