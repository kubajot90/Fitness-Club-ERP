import { useNavigate } from "react-router-dom";

const useSetPath = () => {
  const navigate = useNavigate();

  const setPath = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return setPath;
};
export default useSetPath;
