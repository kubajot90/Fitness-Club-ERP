import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const loaderStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  backgroundColor: "white",
  opacity: ".65",
  zIndex: "99",
};

interface ModalProps {
  onToggleModal: () => void;
}

export default function Loader({ onToggleModal }: ModalProps) {
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  useEffect(() => {
    setIsLoaderVisible(true);
    const timer = setTimeout(() => {
      setIsLoaderVisible(false);
      onToggleModal();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoaderVisible && (
        <Box sx={loaderStyle}>
          <CircularProgress />
          <Typography variant="subtitle2" gutterBottom sx={{ m: 1 }}>
            Process...
          </Typography>
        </Box>
      )}
    </>
  );
}
