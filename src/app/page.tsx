'use client';
import { Box, Typography, Grid, Button } from '@mui/material';
import Link from 'next/link';

const topics = [
  { label: 'MUI Basics', path: '/topics/basics' },
  { label: 'Layout & Structure', path: '/topics/layout' },
  { label: 'Navigation', path: '/topics/navigation' },
    { label: 'Forms', path: '/topics/forms' },


];

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: 'text.primary',
          fontWeight: 700,
          mb: 4,
          textAlign: 'center',
        }}
      >
        MUI Learning Hub 
      </Typography>

      <Grid container spacing={2} justifyContent="center" maxWidth={1000}>
        {topics.map((topic) => (
          <Grid key={topic.path} item xs={12} sm={6} md={4} lg={3}>
            <Button
              component={Link}
              href={topic.path}
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: 2,
                py: 2,
                transition: 'all 0.25s ease',
                '&:hover': {
                  bgcolor: '#004999', // darker hover for button
                  transform: 'translateY(-4px)',
                },
              }}
            >
              {topic.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
