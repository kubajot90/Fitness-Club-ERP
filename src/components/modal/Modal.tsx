import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

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
}

export default function NestedModal({
  isOpen,
  onToggleModal,
  children,
}: NestedModalProps) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onToggleModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "40%", maxWidth: 600 }}>
          {/* <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p> */}
          {children}
        </Box>
      </Modal>
    </div>
  );
}
