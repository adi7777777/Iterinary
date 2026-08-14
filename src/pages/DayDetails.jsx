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

import { useParams } from "react-router-dom";

function DayDetails() {

  const { id } = useParams();

  const dayPlans = {

    1: {
      title: "Day 1 - Arrival in Goa",

      overview:
        "Welcome to Goa! Today marks the beginning of your exciting journey. After arriving at Goa Airport or Madgaon Railway Station, check into your hotel and relax. Spend the morning settling in before heading out to explore Goa's famous beaches. Enjoy water sports at Baga Beach, witness the breathtaking sunset and experience authentic Goan cuisine.",

      activities: [

        "08:00 AM - Arrive at Goa Airport",

        "09:00 AM - Hotel Check-in",

        "10:30 AM - Visit Baga Beach",

        "01:00 PM - Lunch at Britto's",

        "03:00 PM - Explore Fort Aguada",

        "06:30 PM - Sunset at Sinquerim Beach",

        "08:00 PM - Dinner at Fisherman's Wharf"

      ],

      tips: [

        "Carry sunscreen",

        "Stay hydrated",

        "Wear light cotton clothes",

        "Carry a power bank"

      ],

      budget: "₹3,500"

    },

    2: {

      title: "Day 2 - Adventure & Local Sightseeing",

      overview:
        "Start your day with breakfast and enjoy thrilling water sports before visiting famous churches and markets. End the evening shopping for souvenirs.",

      activities: [

        "08:00 AM - Breakfast",

        "09:30 AM - Parasailing",

        "11:00 AM - Jet Ski",

        "01:00 PM - Lunch",

        "03:00 PM - Basilica of Bom Jesus",

        "05:30 PM - Panjim Market",

        "08:00 PM - Dinner"

      ],

      tips: [

        "Carry extra clothes",

        "Book water sports early",

        "Protect your phone"

      ],

      budget: "₹4,000"

    },

    3: {

      title: "Day 3 - Departure",

      overview:
        "Spend your final day shopping for souvenirs, enjoy local cuisine and head back home with wonderful memories of Goa.",

      activities: [

        "08:00 AM - Breakfast",

        "10:00 AM - Shopping",

        "12:30 PM - Lunch",

        "02:00 PM - Hotel Checkout",

        "04:00 PM - Airport"

      ],

      tips: [

        "Reach airport early",

        "Pack carefully",

        "Keep documents ready"

      ],

      budget: "₹2,000"

    }

  };

  const plan = dayPlans[id];

  return (

    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        mb: 4
      }}
    >

      <Card>

        <CardContent>

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

          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
          >

            {plan.tips.map((tip, index) => (

              <Chip
                key={index}
                label={tip}
              />

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