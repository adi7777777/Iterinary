import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

import { useNavigate } from "react-router-dom";

function Header() {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

 const menuItems = [
  {
    text: "🏠 Home",
    path: "/"
  },
  {
    text: "📝 Trip Planner",
    section: "tripForm"
  },
  {
    text: "📖 About Destination",
    section: "blog"
  },
  {
    text: "🗓 Itinerary",
    section: "itinerary"
  },
  {
    text: "💰 Cost Breakdown",
    section: "cost"
  },
  {
    text: "📄 Travel Plan",
    section: "pagination"
  },
  {
    text: "ℹ About Us",
    path: "/about"
  }
];

const scrollToSection = (id) => {

  navigate("/");

  setTimeout(() => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

  }, 150);

};

  return (
    <>

      <AppBar position="static">

        <Toolbar>

          <IconButton
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <FlightTakeoffIcon
            sx={{ mr: 2 }}
          />

          <Typography
            variant="h5"
            sx={{ flexGrow: 1 }}
          >
            Smart Travel Planner
          </Typography>

        </Toolbar>

      </AppBar>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
      >

        <Box
          sx={{
            width: 250
          }}
        >

          <List>

            {menuItems.map((item) => (

              <ListItemButton
                key={item.text}
            onClick={() => {

    if (item.path) {

        navigate(item.path);

    } else if (item.section) {
        scrollToSection(item.section);
    }

    setOpen(false);

}}
              >

                <ListItemText
                  primary={item.text}
                />

              </ListItemButton>

            ))}

          </List>

        </Box>

      </Drawer>

    </>
  );

}

export default Header;