import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import useMembers from "../useMembers";

interface MemberButtonsProps {
  onToggleAddModal: () => void;
}

const MembersButtons = ({ onToggleAddModal }: MemberButtonsProps) => {
  // const { addMember } = useMembers();

  const clickHandler = () => {
    onToggleAddModal();
  };

  return (
    <Box>
      <Button
        onClick={clickHandler}
        size="medium"
        variant="contained"
        startIcon={<AddIcon />}
      >
        Add member
      </Button>
    </Box>
  );
};
export default MembersButtons;
