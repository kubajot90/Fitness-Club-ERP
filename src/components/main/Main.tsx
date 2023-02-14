import PreviewArea from "./PreviewArea";
import SideMenu from "../sideMenu/SideMenu";
import Container from "@mui/material/Container";

const Main = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ display: "flex", width: 1 }}
    >
      <SideMenu />
      <PreviewArea />
    </Container>
  );
};

export default Main;
