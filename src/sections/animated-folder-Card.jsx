import React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";

const ImageBox = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  "&:hover img": {
    transform: "scale(1.1)",
  },
}));

const Image = styled("img")(() => ({
  width: 150,
  height: "auto",
  transition: "transform 0.3s ease-in-out",
  cursor: "pointer",
}));

export default function FolderCard({ title, subheader }) {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={4}>
            <ImageBox onClick={() => handleClick("https://se.chaudharyanshul.com/")}>
              <Image
                src="assets/folders/web-dev-folder.png"
                alt="Software Engineering"
              />
            </ImageBox>
          </Grid>

          <Grid item xs={4}>
            <ImageBox onClick={() => handleClick("https://de.chaudharyanshul.com/")}>
              <Image
                src="assets/folders/data-pipeline-folder.png"
                alt="Data Engineering"
              />
            </ImageBox>
          </Grid>

          <Grid item xs={4}>
            <ImageBox onClick={() => handleClick("https://ds.chaudharyanshul.com/")}>
              <Image
                src="assets/folders/analysis-folder.png"
                alt="Data Science"
              />
            </ImageBox>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

FolderCard.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string,
};
