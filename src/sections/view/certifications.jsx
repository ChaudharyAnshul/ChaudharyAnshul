import { Grid } from "@mui/material";
import WidgetSummary from '../widget-summary';

export default function CertificationGrid({ certifications = [] }) {
  return (
    <>
      {certifications.map((cert, index) => (
        <Grid item key={index} xs={6} md={3}>
          {cert.title ? (
            <WidgetSummary
              title={cert.title}
              name={cert.name}
              linkURL={cert.linkURL}
              color={cert.color || "success"}
              icon={<img alt={cert.alt || "icon"} src={cert.icon} />}
            />
          ) : (
            <div /> // for blank spacing if needed
          )}
        </Grid>
      ))}
    </>
  );
}
