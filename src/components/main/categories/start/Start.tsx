import StartCard from "./StartCard";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

const Start = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <StartCard
          avatar={<PeopleIcon />}
          title={"Members"}
          path={"/members"}
        />
      </Grid>
      <Grid item xs={3}>
        <StartCard
          avatar={<CalendarMonthIcon />}
          title={"Calendar"}
          path={"/calendar"}
        />
      </Grid>
      <Grid item xs={3}>
        <StartCard
          avatar={<QueryStatsIcon />}
          title={"Statistics"}
          path={"/statistics"}
        />
      </Grid>
    </Grid>
  );
};
export default Start;
