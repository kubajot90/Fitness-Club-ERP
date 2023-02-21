import { useEffect, useState } from "react";
import useMembers from "./useMembers";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Modal from "../../../modal/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

interface AddMemberModalProps {
  isOpenAddModal: boolean;
}

const AddMemberModal = ({ isOpenAddModal }: AddMemberModalProps) => {
  const [isOpen, setIsOpen] = useState(isOpenAddModal);
  const addMember = useMembers();

  const submitForm = () => {
    addMember.addMember();
  };

  const toggleModal: () => void = () => {
    setIsOpen((prev) => (prev = !prev));
  };

  useEffect(() => {
    toggleModal();
  }, [isOpenAddModal]);

  const textFieldStyle = {
    width: "100%",
    margin: "12px 0",
  };

  return (
    <>
      <Modal isOpen={isOpen} onToggleModal={toggleModal}>
        <Typography variant="h6" gutterBottom>
          ADD MEMBER
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth>
            <TextField
              id="name"
              label="Name"
              type="text"
              size="small"
              style={textFieldStyle}
            />
            <TextField
              id="surname"
              label="surname"
              type="text"
              size="small"
              style={textFieldStyle}
            />
            <TextField
              id="email"
              label="Email"
              type="text"
              size="small"
              style={textFieldStyle}
            />

            <TextField
              id="age"
              label="Age"
              type="number"
              size="small"
              inputProps={{ min: 1, max: 100 }}
              style={textFieldStyle}
            />
            <TextField
              id="gender"
              select
              label="Gender"
              size="small"
              defaultValue="label"
              helperText="select your gender"
              style={textFieldStyle}
            >
              <MenuItem value="label" disabled>
                {""}
              </MenuItem>
              <MenuItem value="Male">{"Male"}</MenuItem>
              <MenuItem value="Female">{"Female"}</MenuItem>
            </TextField>

            <Button
              onClick={submitForm}
              size="medium"
              variant="contained"
              startIcon={<ArrowUpwardIcon />}
              sx={{ width: "30%", margin: "15px 0px" }}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
};
export default AddMemberModal;
