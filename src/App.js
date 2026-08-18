import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import DayDetails from "./pages/DayDetails";

function App() {

  const [trip, setTrip] = useState(null);

  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={
          <Home
            trip={trip}
            setTrip={setTrip}
          />
        }
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/day/:id"
          element={<DayDetails />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;