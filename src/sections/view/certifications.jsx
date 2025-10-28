import { Grid, useMediaQuery, useTheme } from "@mui/material";
import WidgetSummary from "../widget-summary";

export default function CertificationGrid({ certifications = [] }) {
  const theme = useTheme();
  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg")); // true for md and above

  return (
    <>
      {certifications.map((cert, index) => {
        const hasTitle = Boolean(cert.title);

        if (!hasTitle) {
          // Small screen: render nothing
          if (!isLargeUp) return null;
          // Medium or large screen: render empty div
          return <Grid item key={index} xs={12} md={6} lg={3}><div /></Grid>;
        }

        return (
          <Grid item key={index} xs={12} md={6} lg={3}>
            <WidgetSummary
              title={cert.title}
              name={cert.name}
              linkURL={cert.linkURL}
              color={cert.color || "success"}
              icon={<img alt={cert.alt || "icon"} src={cert.icon} />}
            />
          </Grid>
        );
      })}
    </>
  );
}
