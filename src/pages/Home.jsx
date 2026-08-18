import { useState } from "react";
import { Box } from "@mui/material";
import Layout from "../components/Layout";

import TripForm from "../components/TripForm";
import BlogCard from "../components/BlogCard";
import Itinerary from "../components/Itinerary";
import CostAccordion from "../components/CostAccordion";
import PaginationComponent from "../components/PaginationComponent";

// Utility function to calculate days between two dates (inclusive)
const calculateDays = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = end - start;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  return diffDays > 0 ? diffDays : 1;
};

function Home({ trip, setTrip }) {

  // Current selected page (Day 1 by default)
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate number of days when trip is set
  const numDays = trip ? calculateDays(trip.start, trip.end) : 3;


  // maxWidth="md" , mt = margintop, mb = margin bottom
  


  return (
    <Layout sx={{ mt: 4, mb: 4 }}>
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
              totalDays={numDays}
            />
          </Box>
        </>
      )}
    </Layout>
  );
}

export default Home;