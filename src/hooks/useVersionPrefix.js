import { useLocation } from "react-router-dom";

export const useVersionPrefix = () => {
  const { pathname } = useLocation();
  const match = pathname.match(/^\/(v1|v2|v3)/);
  return match ? `/${match[1]}` : "";
};
