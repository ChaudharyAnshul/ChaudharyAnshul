import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

const ImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  '&:hover img': {
    transform: 'scale(1.3)',
  },
}));

const Image = styled('img')(({ theme }) => ({
  width: 150,
  height: 'auto',
  transition: 'transform 0.3s ease-in-out',
}));

export default function FolderCard({ title, subheader }) {

  const handleClick = (url) => {
    alert('You Found the Hidden Link! \n You are being redirected!');
    window.open(url, '_blank');
  };

  return (
    <Card sx={{ width:"100%"}}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Link href="#" onClick={() => handleClick("https://se.chaudharyanshul.com/")}>
            <div onClick={() => handleClick("https://se.chaudharyanshul.com/")}>
              <ImageBox>
                <Image src="assets/folders/web-dev-folder.png" alt="Image 1"/>
              </ImageBox>
            </div>
            </Link>
          </Grid>
          
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Link  href="#" onClick={() => handleClick("https://de.chaudharyanshul.com/")}>
              <ImageBox>
                <Image src="assets/folders/data-pipeline-folder.png" alt="Image 2"/>
              </ImageBox>
            </Link>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Link  href="#" onClick={() => handleClick("https://ds.chaudharyanshul.com/")}>
              <ImageBox>
                <Image src="assets/folders/analysis-folder.png" alt="Image 3"/>
              </ImageBox>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

FolderCard.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string,
};