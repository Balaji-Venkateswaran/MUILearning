'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Tabs,
  Tab,
  Breadcrumbs,
  Link as MLink,
  BottomNavigation,
  BottomNavigationAction,
  Menu,
  MenuItem,
  Pagination,
  Stepper,
  Step,
  StepLabel,
  Box,
  Paper,
  Button,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import NextLink from 'next/link';

export default function NavigationPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [bottomValue, setBottomValue] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const steps = ['Login', 'Select Plan', 'Checkout'];

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) =>
    setMenuAnchor(event.currentTarget);
  const closeMenu = () => setMenuAnchor(null);

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MUI Navigation Components
          </Typography>
          <Button color="inherit" onClick={openMenu}>
            Menu
          </Button>
          <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={closeMenu}>
            <MenuItem onClick={closeMenu}>Profile</MenuItem>
            <MenuItem onClick={closeMenu}>Settings</MenuItem>
            <MenuItem onClick={closeMenu}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ '& .MuiDrawer-paper': { width: 240, p: 2 } }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Sidebar Menu
        </Typography>
        <List>
          {['Home', 'Dashboard', 'Settings', 'About'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box sx={{ p: 3 }}>
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            Tabs
          </Typography>
          <Tabs
            value={tabValue}
            onChange={(_, newVal) => setTabValue(newVal)}
            textColor="primary"
            indicatorColor="primary"
            centered
          >
            <Tab label="Home" />
            <Tab label="Profile" />
            <Tab label="Settings" />
          </Tabs>
        </Paper>

        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            Breadcrumbs
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <MLink underline="hover" color="inherit" href="#">
              Home
            </MLink>
            <MLink underline="hover" color="inherit" href="#">
              Dashboard
            </MLink>
            <Typography color="text.primary">Reports</Typography>
          </Breadcrumbs>
        </Paper>

        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            Bottom Navigation
          </Typography>
          <BottomNavigation
            showLabels
            value={bottomValue}
            onChange={(_, newVal) => setBottomValue(newVal)}
          >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
            <BottomNavigationAction label="About" icon={<InfoIcon />} />
          </BottomNavigation>
        </Paper>

        <Paper sx={{ p: 3, mb: 4, textAlign: 'center' }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            Pagination
          </Typography>
          <Pagination count={10} color="primary" />
        </Paper>

        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            Stepper
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={() => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))}
            >
              Next
            </Button>
          </Box>
        </Paper>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            component={NextLink}
            href="/"
            variant="contained"
            sx={{
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              borderRadius: 2,
              px: 3,
            }}
          >
            Back to Home
          </Button>
        </Box>

      
      </Box>
    </Box>
  );
}
