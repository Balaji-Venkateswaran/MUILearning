'use client';

import * as React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
  ImageList,
  ImageListItem,
  Button,
  Divider,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';

export default function DataDisplayPage() {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'age', headerName: 'Age', width: 90 },
    { field: 'country', headerName: 'Country', width: 120 },
  ];

  const rows = [
    { id: 1, name: 'John', age: 25, country: 'USA' },
    { id: 2, name: 'Ava', age: 30, country: 'India' },
    { id: 3, name: 'Tom', age: 28, country: 'UK' },
    { id: 4, name: 'Sara', age: 32, country: 'Canada' },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: 'primary.main', fontWeight: 700, mb: 4 }}
      >
        MUI Data Display Components
      </Typography>


      <Box maxWidth="md" mx="auto" display="flex" flexDirection="column" gap={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            Typography
          </Typography>
          <Typography variant="h3">Heading h3</Typography>
          <Typography variant="subtitle1">Subtitle 1</Typography>
          <Typography variant="body1">This is body text using default styling.</Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            Avatar + Badge
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Avatar alt="User" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-I11ivoTAmpseOnK4IRIm1sEa0t2WhScQAA&s" />
            <Badge badgeContent={4} color="error">
              <MailIcon color="action" />
            </Badge>
            <Badge color="secondary" variant="dot">
              <NotificationsIcon />
            </Badge>
          </Box>
        </Paper>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="180"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="Card Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Card Example
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cards are great for showing grouped information with image, title, and actions.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            Chip
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Chip label="React" color="primary" />
            <Chip label="Next.js" color="secondary" />
            <Chip label="MUI" color="success" />
            <Chip label="TypeScript" variant="outlined" />
          </Box>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            List
          </Typography>
          <List>
            {['Inbox', 'Sent Mail', 'Drafts'].map((text, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar>{text[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={text} secondary="List item example" />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            Table
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.country}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            Accordion
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Expand to view details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Accordion lets you hide and show detailed information interactively.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            Tooltip
          </Typography>
          <Tooltip title="I am a tooltip!" arrow>
            <Button variant="contained">Hover Me</Button>
          </Tooltip>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            ImageList
          </Typography>
          <ImageList cols={3} rowHeight={120}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <ImageListItem key={num}>
                <img
                  src={`https://picsum.photos/200/200?random=${num}`}
                  alt={`img-${num}`}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Paper>

        <Paper sx={{ p: 6}}>
          <Typography variant="h5" color="secondary" gutterBottom>
            DataGrid
          </Typography>
          <DataGrid rows={rows} columns={columns} pageSizeOptions={[5]} />
        </Paper>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={Link}
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
