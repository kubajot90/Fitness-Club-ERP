import { useDispatch } from "react-redux";
import { membersActions } from "../../../../store/membersSlice";

interface AddMember {
  addMember: () => void;
  removeMember: () => void;
}

const useMembers: () => AddMember = () => {
  const dispatch = useDispatch();

  const addMember: () => void = () => {
    dispatch(membersActions.addMember());
  };

  const removeMember = () => {
    return;
  };

  return { addMember, removeMember };
};
export default useMembers;
