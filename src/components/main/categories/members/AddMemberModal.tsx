import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "../../../modal/Modal";

interface AddMemberModalProps {
  isOpenAddModal: boolean;
}

const AddMemberModal = ({ isOpenAddModal }: AddMemberModalProps) => {
  const [isOpen, setIsOpen] = useState(isOpenAddModal);

  const toggleModal: () => void = () => {
    setIsOpen((prev) => (prev = !prev));
  };

  useEffect(() => {
    toggleModal();
  }, [isOpenAddModal]);

  return (
    <>
      {/* <button onClick={toggleModal}>click</button> */}
      {/* <button onClick={() => showModal()}>clickssssssss</button> */}

      <Modal isOpen={isOpen} onToggleModal={toggleModal}>
        <h1>dziala</h1>
      </Modal>
    </>
  );
};
export default AddMemberModal;
