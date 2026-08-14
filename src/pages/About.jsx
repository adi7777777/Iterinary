import {
  Container,
  Typography,
  Paper
} from "@mui/material";

function About() {

  return (

    <Container
      maxWidth="md"
      sx={{
        mt:4
      }}
    >

      <Paper
        sx={{
          p:4
        }}
      >

        <Typography
          variant="h4"
          gutterBottom
        >
          About Smart Travel Planner
        </Typography>

        <Typography>

          This project is built using React,
          Material UI,
          Node.js,
          Express,
          and MongoDB.

          It helps users generate travel itineraries,
          estimate costs,
          and organize trips efficiently.

        </Typography>

      </Paper>

    </Container>

  );

}

export default About;