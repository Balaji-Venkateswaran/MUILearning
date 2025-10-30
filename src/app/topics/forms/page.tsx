'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  Autocomplete,
  Rating,
  Button,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
  Paper,
  Divider,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
  DateTimePicker,
} from '@mui/x-date-pickers';
import Link from 'next/link';
import dayjs from 'dayjs';

export default function FormInputsPage() {
  const [selected, setSelected] = useState('');
  const [radioValue, setRadioValue] = useState('option1');
  const [switchOn, setSwitchOn] = useState(true);
  const [sliderValue, setSliderValue] = useState(30);
  const [rating, setRating] = useState<number | null>(4);
  const [toggle, setToggle] = useState('left');
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(dayjs());
  const [dateTime, setDateTime] = useState(dayjs());

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: 'primary.main', fontWeight: 700, mb: 4 }}
      >
    UI Form & Input Components
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          TextField & Select
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" type="email" variant="filled" fullWidth />
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              label="Country"
            >
              <MenuItem value="india">India</MenuItem>
              <MenuItem value="usa">USA</MenuItem>
              <MenuItem value="japan">Japan</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Checkbox, Radio, Switch
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Accept Terms" />

          <RadioGroup
            row
            value={radioValue}
            onChange={(e) => setRadioValue(e.target.value)}
          >
            <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
            <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
          </RadioGroup>

          <FormControlLabel
            control={<Switch checked={switchOn} onChange={(e) => setSwitchOn(e.target.checked)} />}
            label={switchOn ? 'Enabled' : 'Disabled'}
          />
        </Box>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Slider, Autocomplete, Rating
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Slider
            value={sliderValue}
            onChange={(_, v) => setSliderValue(v as number)}
            step={10}
            marks
            min={0}
            max={100}
            valueLabelDisplay="auto"
          />
          <Autocomplete
            options={['React', 'Next.js', 'MUI', 'TypeScript']}
            renderInput={(params) => <TextField {...params} label="Favorite Framework" />}
          />
          <Rating value={rating} onChange={(_, newVal) => setRating(newVal)} />
        </Box>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Date & Time Pickers
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            <DatePicker
              label="Select Date"
              value={date}
              onChange={(newVal) => setDate(newVal!)}
            />
            <TimePicker
              label="Select Time"
              value={time}
              onChange={(newVal) => setTime(newVal!)}
            />
            <DateTimePicker
              label="Select DateTime"
              value={dateTime}
              onChange={(newVal) => setDateTime(newVal!)}
            />
          </Box>
        </LocalizationProvider>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Buttons & ToggleButtons
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button variant="text" color="success">
            Learn More
          </Button>
        </Box>

        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>

        <Box sx={{ mt: 3 }}>
          <ToggleButtonGroup
            value={toggle}
            exclusive
            onChange={(_, newVal) => newVal && setToggle(newVal)}
          >
            <ToggleButton value="left">Left</ToggleButton>
            <ToggleButton value="center">Center</ToggleButton>
            <ToggleButton value="right">Right</ToggleButton>
          </ToggleButtonGroup>
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
            borderRadius: 2,
          }}
        >
          Back to Home
        </Button>
      </Box>
     
    </Container>
  );
}
