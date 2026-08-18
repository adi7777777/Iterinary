import {
  Container,
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
  Stack
} from "@mui/material";

import { useParams, useLocation } from "react-router-dom";

function DayDetails() {

  const { id } = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const place = search.get("place") || "Unknown";
  const numDays = parseInt(search.get("numDays"), 10) || 1;

  const generateDayPlan = (placeName, dayNum, totalDays) => {
    const templates = {
      goa: {
        label: "Goa",
        morning: "Beach time or a relaxed breakfast at a seaside cafe.",
        mid: "Visit local attractions and markets; try regional snacks.",
        afternoon: "Water sports or island boat trips depending on schedule.",
        evening: "Sunset viewpoints and a seafood dinner at a popular restaurant.",
        tips: ["Carry sunscreen", "Stay hydrated", "Book water sports early"],
        baseBudget: 3500
      },
      ooty: {
        label: "Ooty",
        morning: "Tea estate visit and a gentle nature walk.",
        mid: "Botanical garden or heritage train ride.",
        afternoon: "Lake boating and viewpoint visits.",
        evening: "Local market stroll and warm dinner.",
        tips: ["Carry a light jacket", "Wear comfortable shoes"],
        baseBudget: 2500
      },
      mysore: {
        label: "Mysore",
        morning: "Palace visit and city orientation.",
        mid: "Temple visits and heritage sites.",
        afternoon: "Garden visits and local cuisine sampling.",
        evening: "Market shopping and cultural performances.",
        tips: ["Start early to avoid crowds", "Carry water"],
        baseBudget: 2000
      }
    };

    const key = placeName.toLowerCase();
    const t = templates[key] || {
      label: placeName,
      morning: "Local exploration or a relaxed breakfast.",
      mid: "Visit nearby landmarks and hidden gems.",
      afternoon: "Try recommended local experiences.",
      evening: "Enjoy local food and an evening walk.",
      tips: ["Check opening hours", "Carry local currency"],
      baseBudget: 3000
    };

    const activities = [
      `08:00 AM - ${t.morning}`,
      `11:00 AM - ${t.mid}`,
      `01:00 PM - Lunch at a recommended spot`,
      `03:00 PM - ${t.afternoon}`,
      `06:00 PM - ${t.evening}`,
      `08:00 PM - Dinner and relaxation`
    ];

    const budget = `₹${Math.round(t.baseBudget + (dayNum - 1) * 300)}`;

    return {
      title: `Day ${dayNum} - ${t.label}`,
      overview: `Suggested plan for day ${dayNum} of ${totalDays} days in ${t.label}. ${t.morning} ${t.mid}`,
      activities,
      tips: t.tips,
      budget
    };
  };

  const plan = generateDayPlan(place, Number(id) || 1, numDays);

  return (

    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        mb: 4
      }}
    >

      <Card sx={{ borderRadius: 3, boxShadow: '0 12px 36px rgba(16,24,40,0.08)' }}>

        <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>

          <Typography
            variant="h4"
            color="primary"
            gutterBottom
          >
            {plan.title}
          </Typography>

          <Typography paragraph>

            {plan.overview}

          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography
            variant="h5"
            gutterBottom
          >
            Complete Schedule
          </Typography>

          <List>

            {plan.activities.map((activity, index) => (

              <ListItem key={index}>

                <ListItemText
                  primary={activity}
                />

              </ListItem>

            ))}

          </List>

          <Divider sx={{ my: 2 }} />

          <Typography
            variant="h5"
            gutterBottom
          >
            Travel Tips
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            {plan.tips.map((tip, index) => (
              <Chip key={index} label={tip} color="primary" variant="outlined" />
            ))}
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Typography
            variant="h5"
            color="success.main"
          >
            Estimated Budget
          </Typography>

          <Typography>

            {plan.budget}

          </Typography>

        </CardContent>

      </Card>

    </Container>

  );

}

export default DayDetails;