import { SetStateAction, Dispatch } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import AddMemberModal from "./AddMemberModal";
import MemberButtons from "./buttons/MemberButtons";

const Members = () => {
  const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false);

  const toggleModal = (setState: Dispatch<SetStateAction<boolean>>) => {
    setState((prev) => (prev = !prev));
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
      }}
    >
      <MemberButtons onToggleAddModal={() => toggleModal(setIsOpenAddModal)} />
      <AddMemberModal isOpenAddModal={isOpenAddModal} />
    </Box>
  );
};
export default Members;
