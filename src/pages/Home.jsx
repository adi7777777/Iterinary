import { useState } from "react";
import { Container, Box } from "@mui/material";

import TripForm from "../components/TripForm";
import BlogCard from "../components/BlogCard";
import Itinerary from "../components/Itinerary";
import CostAccordion from "../components/CostAccordion";
import PaginationComponent from "../components/PaginationComponent";

function Home({ trip, setTrip }) {

  // Current selected page (Day 1 by default)
  const [currentPage, setCurrentPage] = useState(1);


  // maxWidth="md" , mt = margintop, mb = margin bottom
  


  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        mb: 4,
      }}
    >
      {/* Trip Form */}
      <Box id="tripForm">
        <TripForm onGenerate={setTrip} />
      </Box>

      {trip && (
        <>
          {/* Blog */}
          <Box id="blog" mt={4}>
            <BlogCard place={trip.place} />
          </Box>

          {/* Itinerary */}
          <Box id="itinerary" mt={4}>
            <Itinerary
              trip={trip}
              currentPage={currentPage}
            />
          </Box>

          {/* Cost */}
          <Box id="cost" mt={4}>
            <CostAccordion />
          </Box>

          {/* Pagination */}
          <Box id="pagination" mt={4}>
            <PaginationComponent
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Box>
        </>
      )}
    </Container>
  );
}

export default Home;