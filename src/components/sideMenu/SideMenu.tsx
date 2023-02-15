import * as React from "react";
// import { useNavigate } from "react-router-dom";
import useSetPath from "../../hooks/useSetPath";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ArrowIcon from "./ArrowIcon";

const SideMenu = () => {
  const setPath = useSetPath();

  return (
    <Box sx={{ width: "100%", maxWidth: 360 }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setPath("/")}>
              <ListItemIcon>
                <HomeIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Start" />
              <ArrowIcon />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => setPath("members")}>
              <ListItemIcon>
                <PeopleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Members" />
              <ArrowIcon />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => setPath("calendar")}>
              <ListItemIcon>
                <CalendarMonthIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
              <ArrowIcon />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => setPath("statistics")}>
              <ListItemIcon>
                <QueryStatsIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Statistics" />
              <ArrowIcon />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </nav>
    </Box>
  );
};

export default SideMenu;
