
import { useState, useEffect } from "react";

import {
  Paper,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";

function TripForm({ onGenerate }) {
  const [form, setForm] = useState({
    place: "",
    start: "",
    end: "",
    stay: "Hotel",
    budget: "",
    travel: "Car",
    activities: "",
  });

  const [places, setPlaces] = useState([]);

  useEffect(() => {

   fetch("https://iterinary.onrender.com/api/places")

        .then((response) => response.json())

        .then((data) => {

            setPlaces(data);

        })

        .catch((error) => {

            console.log(error);

        });

}, []);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  
async function handleSubmit(e) {

    e.preventDefault();   //"Browser, don't perform your default form submission. I'll handle it with JavaScript."

   const response = await fetch(
    "https://iterinary.onrender.com/api/generate-trip",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(form)
        }
    );

   const trip = await response.json();

console.log(trip);

onGenerate(trip);

}

  return (
    <Paper
      elevation={4}
      sx={{
        p: { xs: 3, md: 4 },
        mt: 4,
        borderRadius: 3,
        background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(245,249,255,0.98) 100%)",
        boxShadow: "0 12px 40px rgba(16,24,40,0.08)"
      }}
    >
      <Typography
        variant="h5"
        color="primary"
        gutterBottom
      >
        Plan Your Trip
      </Typography>

      <Stack
        component="form"
        spacing={3}
        onSubmit={handleSubmit}
      >
      
<FormControl fullWidth>

  <InputLabel>
    Destination
  </InputLabel>

  <Select
    name="place"
    value={form.place}
    label="Destination"
    onChange={handleChange}
  >

    {places.map((place) => (

      <MenuItem key={place.id} value={place.name}>
        {place.name}
      </MenuItem>

    ))}

  </Select>

</FormControl>

<TextField
  label="Start Date"
  type="date"
  name="start"
  value={form.start}
  onChange={handleChange}
  fullWidth
  variant="outlined"
  slotProps={{
    inputLabel: {
      shrink: true,
    },
  }}
/>

<TextField
  label="End Date"
  type="date"
  name="end"
  value={form.end}
  onChange={handleChange}
  fullWidth
  variant="outlined"
  slotProps={{
    inputLabel: {
      shrink: true,
    },
  }}
/>

        <FormControl fullWidth>
          <InputLabel>
            Stay Type
          </InputLabel>

          <Select
            name="stay"
            value={form.stay}
            label="Stay Type"
            onChange={handleChange}
          >
            <MenuItem value="Hotel">
              Hotel
            </MenuItem>

            <MenuItem value="Homestay">
              Homestay
            </MenuItem>

            <MenuItem value="Resort">
              Resort
            </MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Budget"
          name="budget"
          type="number"
          value={form.budget}
          onChange={handleChange}
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel>
            Travel Mode
          </InputLabel>

          <Select
            name="travel"
            value={form.travel}
            label="Travel Mode"
            onChange={handleChange}
          >
            <MenuItem value="Car">
              Car
            </MenuItem>

            <MenuItem value="Bike">
              Bike
            </MenuItem>

            <MenuItem value="Flight">
              Flight
            </MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Activities"
          name="activities"
          value={form.activities}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Generate Trip
        </Button>
      </Stack>
    </Paper>
  );
}

export default TripForm;


 
// material ui  
// css tokens , using material ui luman
// why shld we replace material ui than scratch css


// +
// PaginationComponent ge use memoo
// use state, use effect, use memo and advantage and why its used
// node js api create and add get calculateNewValue using front end
// axios for api calls

// port shld be changed to 3001
// api :--
// this shld be in repository pattern 

// flow of that api, triggering point

// tests
// breadcrumbs about us 

//theory
// https usage, methods, why what how
// https status code, why what how
// why json is preferred for api response


// html components shld be replaced by material ui components ---  by tuesday
// testing the components ask gpt why(zest) which one is better and which is suitable and why to use unit test frameworks


// thursday friday
// apis in http get call 

// by 22 routing
