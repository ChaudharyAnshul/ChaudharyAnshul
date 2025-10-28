import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  '&:hover img': {
    transform: 'scale(1.1)',
  },
}));

const Image = styled('img')(({ theme }) => ({
  width: 150,
  height: 'auto',
  transition: 'transform 0.3s ease-in-out',
}));

export default function FolderCard({ title, subheader }) {
  const [open, setOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');

  const handleClick = (url) => {
    setSelectedUrl(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUrl('');
  };

  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Link href="#" onClick={(e) => { e.preventDefault(); handleClick("https://se.chaudharyanshul.com/"); }}>
              <ImageBox>
                <Image src="assets/folders/web-dev-folder.png" alt="Software Engineering" />
              </ImageBox>
            </Link>
          </Grid>

          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Link href="#" onClick={(e) => { e.preventDefault(); handleClick("https://de.chaudharyanshul.com/"); }}>
              <ImageBox>
                <Image src="assets/folders/data-pipeline-folder.png" alt="Data Engineering" />
              </ImageBox>
            </Link>
          </Grid>

          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Link href="#" onClick={(e) => { e.preventDefault(); handleClick("https://ds.chaudharyanshul.com/"); }}>
              <ImageBox>
                <Image src="assets/folders/analysis-folder.png" alt="Data Science" />
              </ImageBox>
            </Link>
          </Grid>
        </Grid>
      </CardContent>

      {/* Popup Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            overflow: 'hidden',
            bgcolor: 'black',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={handleClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        {selectedUrl && (
          <Box
            component="iframe"
            src={selectedUrl}
            sx={{
              width: '100%',
              height: '85vh',
              border: 'none',
              backgroundColor: 'white',
            }}
          />
        )}
      </Dialog>
    </Card>
  );
}

FolderCard.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string,
};
