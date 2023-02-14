import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Start from "./categories/start/Start";
import Calendar from "./categories/calendar/Calendar";
import Members from "./categories/members/Members";
import Statistics from "./categories/statistics/Statistics";

const PreviewArea = () => {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        backgroundColor: " rgb(241, 241, 241)",
      }}
    >
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
