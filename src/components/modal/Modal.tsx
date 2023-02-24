import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Loader from "./loader/Loader";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "2px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface NestedModalProps {
  isOpen: boolean;
  onToggleModal: () => void;
  children: React.ReactNode;
  showLoader: boolean;
}

export default function NestedModal({
  isOpen,
  onToggleModal,
  children,
  showLoader,
}: NestedModalProps) {
  // const [showLoader, setShowLoader] = useState(false);
  // const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  // const showLoader = () => {
  //   setIsLoaderVisible(true);
  //   const timer = setTimeout(() => {
  //     setIsLoaderVisible(false);
  //     onToggleModal();
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // };

  return (
    <Box>
      <Modal
        open={isOpen}
        onClose={onToggleModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "40%", maxWidth: 600 }}>
          {children}
          {showLoader && <Loader onToggleModal={onToggleModal} />}
        </Box>
      </Modal>
    </Box>
  );
}
