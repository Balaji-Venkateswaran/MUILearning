'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Divider,
} from '@mui/material';
import Link from 'next/link';

export default function BasicsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: 'primary.main', fontWeight: 700, mb: 4 }}
      >
        🟢 MUI Fundamentals Examples
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Typography
        </Typography>
        <Typography variant="h1">h1 Heading</Typography>
        <Typography variant="h2">h2 Heading</Typography>

        <Typography variant="body1">
          Body1 - Default text for paragraphs and content.
        </Typography>
        <Typography variant="body2">
          Body2 - Slightly smaller paragraph text.
        </Typography>
      </Paper>

      <Divider sx={{ my: 4 }} />

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Buttons
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button variant="contained" color="primary">
            Contained
          </Button>
          <Button variant="outlined" color="secondary">
            Outlined
          </Button>
          <Button variant="text" color="inherit">
            Text
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
        </Box>
      </Paper>

      <Divider sx={{ my: 4 }} />

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Box (Layout Wrapper)
        </Typography>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: '#fff',
            p: 2,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          This Box uses sx for background, padding, and border radius.
        </Box>
      </Paper>

      <Divider sx={{ my: 4 }} />

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Container (Centered Content)
        </Typography>
        <Container
          sx={{
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            p: 3,
            textAlign: 'center',
          }}
        >
          This content is centered and responsive inside a Container.
        </Container>
      </Paper>

      <Divider sx={{ my: 4 }} />

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Grid (Responsive Layout)
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: '#fff',
                p: 2,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              Grid 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                bgcolor: 'secondary.main',
                color: '#fff',
                p: 2,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              Grid 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                bgcolor: 'success.main',
                color: '#fff',
                p: 2,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              Grid 3
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Divider sx={{ my: 4 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Theme Colors
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              bgcolor: 'primary.main',
              color: '#fff',
              p: 2,
              borderRadius: 1,
              flex: 1,
              textAlign: 'center',
            }}
          >
            Primary
          </Box>
          <Box
            sx={{
              bgcolor: 'secondary.main',
              color: '#fff',
              p: 2,
              borderRadius: 1,
              flex: 1,
              textAlign: 'center',
            }}
          >
            Secondary
          </Box>
          <Box
            sx={{
              bgcolor: 'success.main',
              color: '#fff',
              p: 2,
              borderRadius: 1,
              flex: 1,
              textAlign: 'center',
            }}
          >
            Success
          </Box>
          <Box
            sx={{
              bgcolor: 'error.main',
              color: '#fff',
              p: 2,
              borderRadius: 1,
              flex: 1,
              textAlign: 'center',
            }}
          >
            Error
          </Box>
        </Box>
      </Paper>
      <Divider sx={{ my: 4 }} />

      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Button
          component={Link}
          href="/"
          variant="contained"
          sx={{
            bgcolor: 'primary.main',
            '&:hover': { bgcolor: 'primary.dark' },
            px: 3,
            py: 1,
            borderRadius: 2,
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
    
  );
  
}
