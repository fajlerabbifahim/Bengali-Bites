import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/Authprovider";

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;