import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import useSetPath from "../../../../hooks/useSetPath";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function StartCard({
  avatar,
  title,
  path,
}: {
  avatar: React.ReactNode;
  title: string;
  path: string;
}) {
  const setPath = useSetPath();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={avatar}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        titleTypographyProps={{ fontSize: "1.1rem" }}
        title={title}
        // subheader="September 14, 2016"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
          facilis?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          onClick={() => setPath(path)}
          variant="contained"
          endIcon={<ReadMoreIcon />}
        >
          View more
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ fontWeight: 700 }} paragraph>
            Lorem ipsum:
          </Typography>
          <Typography paragraph>Lorem ipsum dolor sit amet.</Typography>
          <Typography paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
            praesentium?
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
