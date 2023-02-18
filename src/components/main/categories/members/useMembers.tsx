import { useState } from "react";

const useMembers: () => void = () => {
  const [members, setMembers] = useState<string>("cos");
  const addMember = () => {
    console.log("dziala");
    console.log(members);
  };

  const removeMember = () => {
    return;
  };

  return { addMember, removeMember };
};
export default useMembers;
