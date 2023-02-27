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

import { useForm, SubmitHandler } from "react-hook-form";

const textFieldStyle = {
  width: "100%",
  margin: "12px 0",
};

interface AddMemberModalProps {
  isOpenAddModal: boolean;
}

// interface IFormData {
//   name?: string;
//   surname?: string;
//   email?: string;
//   age?: string;
//   gender?: string;
// }

type useFormData = {
  name: string;
  surname: string;
  email: string;
  age: number;
  gender: string;
};

const AddMemberModal = ({ isOpenAddModal }: AddMemberModalProps) => {
  const [isOpen, setIsOpen] = useState(isOpenAddModal);
  const [showLoader, setShowLoader] = useState(false);

  const addMemberHook = useMembers();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<useFormData>();

  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onSubmit: SubmitHandler<useFormData> = (formData) => {
    addMemberHook.addMember(formData);
    setShowLoader(true);
    console.log("form data:", formData);
  };

  const toggleModal: () => void = () => {
    setIsOpen((prev) => (prev = !prev));
  };

  useEffect(() => {
    toggleModal();
    setShowLoader(false);
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
              id="name"
              label="Name"
              type="text"
              size="small"
              style={textFieldStyle}
              {...register("name", {
                required: { value: true, message: "Enter your name" },
              })}
              error={errors.name ? true : false}
              helperText={errors.name?.message}
            />
            <TextField
              id="surname"
              label="surname"
              type="text"
              size="small"
              style={textFieldStyle}
              {...register("surname", {
                required: { value: true, message: "Enter your surname" },
              })}
              error={errors.surname ? true : false}
              helperText={errors.surname?.message}
            />
            <TextField
              id="email"
              label="Email"
              type="text"
              size="small"
              style={textFieldStyle}
              {...register("email", {
                required: { value: true, message: "Enter your email" },
                pattern: {
                  value: emailRegEx,
                  message: "Invalid email address",
                },
              })}
              error={errors.email ? true : false}
              helperText={errors.email?.message}
            />
            <TextField
              id="age"
              label="Age"
              type="number"
              size="small"
              inputProps={{ min: 1, max: 100 }}
              style={textFieldStyle}
              {...register("age", {
                required: {
                  value: true,
                  message: "Enter your age",
                },
                valueAsNumber: true,
              })}
              error={errors.age ? true : false}
              helperText={errors.age?.message}
            />
            <TextField
              id="gender"
              select
              label="Gender"
              size="small"
              defaultValue=""
              style={textFieldStyle}
              {...register("gender", {
                required: {
                  value: true,
                  message: "Select your gender",
                },
              })}
              error={errors.gender ? true : false}
              helperText={errors.gender?.message}
            >
              <MenuItem value="Male">{"Male"}</MenuItem>
              <MenuItem value="Female">{"Female"}</MenuItem>
            </TextField>

            <Button
              type="submit"
              onClick={handleSubmit(onSubmit)}
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
