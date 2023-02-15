import { Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";
import Start from "./categories/start/Start";
import Calendar from "./categories/calendar/Calendar";
import Members from "./categories/members/Members";
import Statistics from "./categories/statistics/Statistics";
import BreadCrumbs from "./BreadCrumbs";

const PreviewArea = () => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        width: 1,
        padding: 3,
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
    </Container>
  );
};
export default PreviewArea;
