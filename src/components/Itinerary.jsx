import {
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Chip,
  Stack
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function Itinerary({ trip, currentPage }) {

  const navigate = useNavigate();

  let itineraryData = [];

  switch (trip.place.toLowerCase()) {

    case "goa":
      itineraryData = [
        {
          day: "Day 1",
          plan: "Arrival, Baga Beach & Sunset"
        },
        {
          day: "Day 2",
          plan: "Fort Aguada, Water Sports & Cruise"
        },
        {
          day: "Day 3",
          plan: "Shopping at Mapusa Market & Return"
        }
      ];
      break;

    case "ooty":
      itineraryData = [
        {
          day: "Day 1",
          plan: "Botanical Garden & Lake"
        },
        {
          day: "Day 2",
          plan: "Doddabetta Peak & Tea Museum"
        },
        {
          day: "Day 3",
          plan: "Toy Train Ride & Return"
        }
      ];
      break;

    case "mysore":
      itineraryData = [
        {
          day: "Day 1",
          plan: "Mysore Palace & Zoo"
        },
        {
          day: "Day 2",
          plan: "Chamundi Hills & Brindavan Gardens"
        },
        {
          day: "Day 3",
          plan: "Shopping & Return"
        }
      ];
      break;

    default:
      itineraryData = [
        {
          day: "Day 1",
          plan: "Arrival & Explore"
        },
        {
          day: "Day 2",
          plan: "Local Sightseeing"
        },
        {
          day: "Day 3",
          plan: "Shopping & Return"
        }
      ];
  }

  return (

    <Card
      sx={{
        mt: 4,
        borderRadius: 3
      }}
    >

      <CardContent>

        <Typography
          variant="h5"
          color="primary"
          gutterBottom
        >
          Your Itinerary
        </Typography>

        <Typography variant="h6">
          {trip.place}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          mt={2}
          mb={2}
          sx={{
            flexWrap: "wrap",
            gap: 1,
          }}
        >

          <Chip label={`📅 ${trip.start} - ${trip.end}`} />
          <Chip label={`🏨 ${trip.stay}`} />
          <Chip label={`💰 ₹${trip.budget}`} />
          <Chip label={`🚗 ${trip.travel}`} />
          <Chip label={`🎯 ${trip.activities}`} />

        </Stack>

        <Divider sx={{ mb: 2 }} />

        <Typography
          variant="h6"
          gutterBottom
        >
          Travel Plan
        </Typography>

        <List>

          {itineraryData.map((item, index) => (

            <ListItemButton
              key={index}
              selected={currentPage === index + 1}
              onClick={() => navigate(`/day/${index + 1}`)}
            >

              <ListItemText
                primary={item.day}
                secondary={item.plan}
              />

            </ListItemButton>

          ))}

        </List>

      </CardContent>

    </Card>

  );

}

export default Itinerary;