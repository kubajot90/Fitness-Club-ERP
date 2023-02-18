import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Start from "./categories/start/Start";
import Calendar from "./categories/calendar/Calendar";
import Members from "./categories/members/Members";
import Statistics from "./categories/statistics/Statistics";
import BreadCrumbs from "./BreadCrumbs";

const PreviewArea = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: 1,
        padding: 3,
        marginTop: "48px",
        marginLeft: "360px",
        backgroundColor: " rgb(234, 245, 255)",
      }}
    >
      <BreadCrumbs />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/members" element={<Members />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Box>
  );
};
export default PreviewArea;
