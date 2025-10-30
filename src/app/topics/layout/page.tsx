'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Divider,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Link from 'next/link';

export default function LayoutPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: 'primary.main', fontWeight: 700, mb: 4 }}
      >
         MUI Layout & Structure Examples
      </Typography>

      

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Grid System (rows, columns, breakpoints)
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: '#fff',
                p: 2,
                textAlign: 'center',
                borderRadius: 2,
              }}
            >
              xs=12 sm=6 md=4
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                bgcolor: 'secondary.main',
                color: '#fff',
                p: 2,
                textAlign: 'center',
                borderRadius: 2,
              }}
            >
              xs=12 sm=6 md=4
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                bgcolor: 'success.main',
                color: '#fff',
                p: 2,
                textAlign: 'center',
                borderRadius: 2,
              }}
            >
              xs=12 sm=6 md=4
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Divider sx={{ my: 4 }} />

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Stack (Vertical / Horizontal Spacing)
        </Typography>
        <Stack
          direction={isSmallScreen ? 'column' : 'row'}
          spacing={2}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              bgcolor: 'primary.main',
              color: '#fff',
              p: 2,
              borderRadius: 2,
              width: 150,
              textAlign: 'center',
            }}
          >
            Box 1
          </Box>
          <Box
            sx={{
              bgcolor: 'secondary.main',
              color: '#fff',
              p: 2,
              borderRadius: 2,
              width: 150,
              textAlign: 'center',
            }}
          >
            Box 2
          </Box>
          <Box
            sx={{
              bgcolor: 'success.main',
              color: '#fff',
              p: 2,
              borderRadius: 2,
              width: 150,
              textAlign: 'center',
            }}
          >
            Box 3
          </Box>
        </Stack>
      </Paper>

      <Divider sx={{ my: 4 }} />

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Paper and Divider
        </Typography>
        <Paper
          elevation={4}
          sx={{
            p: 3,
            bgcolor: 'background.paper',
            borderRadius: 2,
            mb: 2,
          }}
        >
          <Typography variant="body1" color="text.primary">
            This section is wrapped inside a Paper component with shadow (elevation 4).
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="text.secondary">
            Divider helps separate content visually between sections.
          </Typography>
        </Paper>
      </Paper>

      <Divider sx={{ my: 4 }} />

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Container (Responsive Centered Layout)
        </Typography>
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            p: 3,
            textAlign: 'center',
          }}
        >
          This Container centers and limits content width for better readability.
        </Container>
      </Paper>

      <Divider sx={{ my: 4 }} />

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Responsive Utilities (useMediaQuery, theme.breakpoints)
        </Typography>
        <Box
          sx={{
            bgcolor: isSmallScreen ? 'error.main' : 'success.main',
            color: '#fff',
            p: 3,
            textAlign: 'center',
            borderRadius: 2,
          }}
        >
          {isSmallScreen
            ? 'Small Screen Detected (Mobile View)'
            : 'Large Screen Detected (Desktop View)'}
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
