import { useDispatch } from "react-redux";
import { membersActions } from "../../../../store/membersSlice";

interface UseMembers {
  addMember: (formData: {}) => void;
  removeMember: () => void;
}

// interface UseMemberProps {
//   formData: {};
// }

const useMembers: () => UseMembers = () => {
  const dispatch = useDispatch();

  const addMember = (formData: {}) => {
    dispatch(membersActions.addMember(formData));
  };

  const removeMember = () => {
    return;
  };

  return { addMember, removeMember };
};
export default useMembers;
