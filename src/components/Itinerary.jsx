import {
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Chip,
  Stack,
  Avatar
} from "@mui/material";

import SharedCard from "./SharedCard";

import { useNavigate } from "react-router-dom";

// Utility to calculate days between dates
const calculateDays = (startDate, endDate) => {
  // inclusive difference: both start and end days count
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = end - start;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  return diffDays > 0 ? diffDays : 1;
};

// Generate itinerary with detailed activities for each day
const generateItinerary = (place, numDays) => {
  const baseItineraries = {
    goa: [
      { plan: "Arrival & Beach Exploration", emoji: "✈️", overview: "Settle into your accommodation and enjoy nearby beaches. Perfect first day to relax and watch the sunset." },
      { plan: "Water Sports & Adventure", emoji: "🏄", overview: "Try parasailing, jet skis and other water sports. Reserve slots in the morning for calmer seas." },
      { plan: "Cultural Sites & Local Markets", emoji: "🏛️", overview: "Visit historic churches, local markets and sample Goan cuisine at small eateries." },
      { plan: "Island Hopping & Relaxation", emoji: "🏝️", overview: "Take a boat trip to nearby islands and spend the afternoon relaxing on quieter beaches." },
      { plan: "Local Cuisine & Sunset Cruises", emoji: "🚤", overview: "Enjoy local seafood and consider an evening cruise to catch the sunset." },
      { plan: "Wildlife Sanctuary Visit", emoji: "🦅", overview: "Explore a nearby wildlife sanctuary or nature reserve for birdwatching and short treks." },
      { plan: "Shopping & Departure Prep", emoji: "🛍️", overview: "Shop for souvenirs, enjoy a last local meal and prepare for departure." }
    ],
    ooty: [
      { plan: "Arrival & Hill Station Tour", emoji: "🚠️", overview: "Settle in and take a gentle tour around Ooty to acclimatize to the hills." },
      { plan: "Botanical Garden & Tea Estates", emoji: "🌿", overview: "Visit the botanical gardens and nearby tea plantations with scenic walks." },
      { plan: "Mountain Peak Trek", emoji: "⛰️", overview: "A moderate trek with great viewpoints; pack water and light snacks." },
      { plan: "Nilgiri Mountain Railway", emoji: "🚂", overview: "Enjoy the heritage toy train ride through picturesque valleys." },
      { plan: "Lake & Viewpoint Tours", emoji: "🌅", overview: "Boating and sunset viewpoints provide wonderful photo opportunities." },
      { plan: "Local Markets & Handicrafts", emoji: "🛍️", overview: "Explore local markets for handmade items and tea samples." },
      { plan: "Relaxation & Departure", emoji: "🌲", overview: "A relaxed final day to pack and savour the mountain air before leaving." }
    ],
    mysore: [
      { plan: "Arrival & City Orientation", emoji: "🏙️", overview: "Settle in and take a short city orientation to nearby landmarks." },
      { plan: "Mysore Palace & Zoo", emoji: "🏰", overview: "Visit the grand Mysore Palace and the nearby zoo in the morning." },
      { plan: "Chamundi Hills & Temple", emoji: "🕉️", overview: "A visit to Chamundi Hills with panoramic views and temple exploration." },
      { plan: "Brindavan Gardens & Local Cuisine", emoji: "🌺", overview: "Enjoy the evening garden show and sample regional dishes." },
      { plan: "Ranganathittu Bird Sanctuary", emoji: "🦜", overview: "Boat rides and birdwatching at the sanctuary make for a peaceful day." },
      { plan: "Market Shopping & Crafts", emoji: "🎨", overview: "Shop for silk, sandalwood and local crafts in the markets." },
      { plan: "Local Experiences & Departure", emoji: "👋", overview: "Savour last-minute experiences and prepare for departure." }
    ]
  };

  const template = baseItineraries[place.toLowerCase()] || baseItineraries.goa;

  const result = [];
  for (let i = 0; i < numDays; i++) {
    const dayIndex = i;
    const base = template[dayIndex];
    if (base) {
      result.push({
        day: `Day ${i + 1}`,
        plan: base.plan,
        overview: base.overview,
        emoji: base.emoji || "📍"
      });
    } else {
      // generate a sensible fallback day
      result.push({
        day: `Day ${i + 1}`,
        plan: `Explore ${place} — flexible day of sightseeing and local experiences`,
        overview: `A flexible day to discover local hidden gems, try local food, or relax as you prefer. Consider a morning market visit, an afternoon cultural spot, and an evening at a recommended viewpoint.`,
        emoji: "📅"
      });
    }
  }

  return result;
};

function Itinerary({ trip, currentPage }) {

  const navigate = useNavigate();
  const numDays = calculateDays(trip.start, trip.end);
  const itineraryData = generateItinerary(trip.place, numDays);

  return (
    <SharedCard sx={{ mt: 4 }}>

      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", mb: 1 }}>
        ✈️ Your Itinerary
      </Typography>

      <Typography variant="h6" sx={{ mb: 2, opacity: 0.95, fontWeight: 500 }}>
        {trip.place} • {numDays} Days
      </Typography>

      <Stack direction="row" spacing={1} mt={2} mb={3} sx={{ flexWrap: "wrap", gap: 1 }}>
        <Chip label={`📅 ${trip.start} - ${trip.end}`} sx={{ backgroundColor: "rgba(255,255,255,0.18)", color: "white" }} />
        <Chip label={`🏨 ${trip.stay}`} sx={{ backgroundColor: "rgba(255,255,255,0.12)", color: "white" }} />
        <Chip label={`💰 ₹${trip.budget}`} sx={{ backgroundColor: "rgba(255,255,255,0.12)", color: "white" }} />
        <Chip label={`🚗 ${trip.travel}`} sx={{ backgroundColor: "rgba(255,255,255,0.12)", color: "white" }} />
        <Chip label={`🎯 ${trip.activities}`} sx={{ backgroundColor: "rgba(255,255,255,0.12)", color: "white" }} />
      </Stack>

      <Divider sx={{ mb: 2, backgroundColor: "rgba(255,255,255,0.25)" }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mt: 2 }}>
        📍 Travel Plan
      </Typography>

      <List sx={{ mt: 1 }}>
        {itineraryData.map((item, index) => (
          <ListItemButton
            key={index}
            selected={currentPage === index + 1}
            onClick={() => navigate(`/day/${index + 1}?place=${trip.place}&numDays=${numDays}`)}
            sx={{
              mb: 1,
              minHeight: 72,
              alignItems: "flex-start",
              cursor: "pointer",
              borderRadius: 2,
              backgroundColor: currentPage === index + 1 ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.08)",
              border: currentPage === index + 1 ? "2px solid rgba(255,255,255,0.35)" : "1px solid rgba(255,255,255,0.06)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.18)"
              },
              transition: "all 0.25s ease"
            }}
          >
            <Avatar sx={{ backgroundColor: "rgba(255,255,255,0.12)", color: "white", mr: 2, fontWeight: "bold", width: 48, height: 48, fontSize: 18 }}>
              {item.emoji}
            </Avatar>

            <ListItemText
              primary={<Typography sx={{ fontWeight: "bold", color: "white" }}>{item.day}</Typography>}
              secondary={
                <>
                  <Typography sx={{ color: "rgba(255,255,255,0.95)", fontWeight: 600 }}>{item.plan}</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.78)", mt: 0.5, fontSize: 13 }}>{item.overview}</Typography>
                </>
              }
            />
          </ListItemButton>
        ))}
      </List>

    </SharedCard>
  );

}

export default Itinerary;