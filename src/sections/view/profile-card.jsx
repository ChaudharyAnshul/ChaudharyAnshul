import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// ----------------------------------------------------------------------

export default function ProfileCard() {
  return (
    <Card sx={{ width: '100%', display: 'flex' }}>
      <Grid container>
        <Grid item xs={5}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }}
          >
            <CardMedia
              component="img"
              image="assets/images/anshulchaudhary.jpeg"
              alt="Anshul Chaudhary"
              sx={{ height: '200px', width: '200px', borderRadius: '50%' }}
            />
          </Box>
        </Grid>
        <Grid item xs={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Anshul Chaudhary
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Experienced Software Engineer | Skilled in Data-Driven Solutions | Driving Innovation and Efficiency
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary">
              chaudhary.ans@northeastern.edu
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +1 (857) 318-9725
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link href="https://www.linkedin.com/in/chaudharyanshul/" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', margin: 1 }}>
                <LinkedInIcon />
              </Link>
              <Link href="https://github.com/ChaudharyAnshul/" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', margin: 1 }}>
                <GitHubIcon />
              </Link>
              <Link href="https://www.instagram.com/anshul_218/" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', margin: 1 }}>
                <InstagramIcon />
              </Link>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
