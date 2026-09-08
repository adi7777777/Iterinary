import { useState } from "react";
import { Box } from "@mui/material";
import Layout from "../components/Layout";
import "./Home.css";

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
      <div className="home-root">
        <div className="main-panel">

          <div className="hero">
         
            <div>
              <Box id="tripForm">
                <TripForm onGenerate={setTrip} />
              </Box>

              {trip && (
                <>
                  <Box id="blog" className="section">
                    <BlogCard place={trip.place} />
                  </Box>

                  <Box id="itinerary" className="section">
                    <Itinerary trip={trip} currentPage={currentPage} />
                  </Box>

                  <Box id="cost" className="section">
                    <CostAccordion />
                  </Box>

                  <Box id="pagination" className="section">
                    <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} totalDays={numDays} />
                  </Box>
                </>
              )}
            </div>

          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Home;