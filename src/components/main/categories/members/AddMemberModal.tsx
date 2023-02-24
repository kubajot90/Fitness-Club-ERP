import { useEffect, useState } from "react";
import useMembers from "./useMembers";
import Loader from "../../../modal/loader/Loader";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Modal from "../../../modal/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const textFieldStyle = {
  width: "100%",
  margin: "12px 0",
};

interface AddMemberModalProps {
  isOpenAddModal: boolean;
}

interface IFormData {
  name?: string;
  surname?: string;
  email?: string;
  age?: string;
  gender?: string;
}

const AddMemberModal = ({ isOpenAddModal }: AddMemberModalProps) => {
  const [isOpen, setIsOpen] = useState(isOpenAddModal);
  const [formData, setFormData] = useState<IFormData>({});
  const [showLoader, setShowLoader] = useState(false);
  // const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  const addMemberHook = useMembers();

  const formDataHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputName: string = e.target.name;
    const inputValue: string = e.target.value;

    setFormData({ ...formData, [inputName]: inputValue });
  };

  const submitForm = () => {
    addMemberHook.addMember(formData);
    setShowLoader(true);
    // showLoader();
  };

  // const showLoader = () => {
  //   setIsLoaderVisible(true);
  //   const timer = setTimeout(() => {
  //     setIsLoaderVisible(false);
  //     toggleModal();
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // };

  const toggleModal: () => void = () => {
    setIsOpen((prev) => (prev = !prev));
  };

  useEffect(() => {
    toggleModal();
  }, [isOpenAddModal]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onToggleModal={toggleModal}
        showLoader={showLoader}
      >
        <Typography variant="h6" gutterBottom>
          ADD MEMBER
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            position: "relative",
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth id="addMemberForm">
            <TextField
              onChange={(e) => formDataHandler(e)}
              id="name"
              name="name"
              label="Name"
              type="text"
              size="small"
              style={textFieldStyle}
            />
            <TextField
              onChange={(e) => formDataHandler(e)}
              id="surname"
              name="surname"
              label="surname"
              type="text"
              size="small"
              style={textFieldStyle}
            />
            <TextField
              onChange={(e) => formDataHandler(e)}
              id="email"
              name="email"
              label="Email"
              type="text"
              size="small"
              style={textFieldStyle}
            />
            <TextField
              onChange={(e) => formDataHandler(e)}
              id="age"
              name="age"
              label="Age"
              type="number"
              size="small"
              inputProps={{ min: 1, max: 100 }}
              style={textFieldStyle}
            />
            <TextField
              onChange={(e) => formDataHandler(e)}
              id="gender"
              name="gender"
              select
              label="Gender"
              size="small"
              defaultValue="label"
              helperText="select your gender"
              style={textFieldStyle}
            >
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
          {/* {isLoaderVisible && <Loader />} */}
        </Box>
      </Modal>
    </>
  );
};
export default AddMemberModal;
