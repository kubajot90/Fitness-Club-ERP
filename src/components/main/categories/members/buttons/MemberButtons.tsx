import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

interface MemberButtonsProps {
  onToggleAddModal: () => void;
}

const MembersButtons = ({ onToggleAddModal }: MemberButtonsProps) => {
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
