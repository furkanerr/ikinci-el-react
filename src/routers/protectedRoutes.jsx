/** Dependencies */
import { Navigate } from "react-router-dom";

/**Context */
import { useAuth } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  
    
  const { loggedIn } = useAuth();
  return loggedIn ? children : <Navigate to={"/signin"}/>
   
};

export default ProtectedRoute;