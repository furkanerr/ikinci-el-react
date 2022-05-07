/**Dependencies */
import React, { createContext, useContext, useEffect, useState } from "react";
import createCookie from '../constants/CookieFunctions/createCookie';
import eraseCookie from "../constants/CookieFunctions/eraseCookie";
import { useNavigate } from "react-router-dom";

/**services */
import api from '.././services/api';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        
        const data = await api.FetchMe();
        if(!data){
          setLoggedIn(false);
        }else{
          console.log("çalişti")
          setLoggedIn(true);
          setUser(data);
        }
        console.log(user);
        console.log(data);
       console.log(loggedIn);
       
      } catch (error) {
       // setLoading(false);
      }
    })();
    console.log(loggedIn);
  }, []);

  console.log(loggedIn)
  const login = (data) => {
    setLoggedIn(true);
    setUser(data.user);

    createCookie("access-token", data.jwt, 1);
  };

  const logOut = async () => {
    setLoggedIn(false);
    setUser(null);
    eraseCookie('access-token');
    navigate('/');
  };
  

  const values = {
    login,
    setUser,
    setLoggedIn,
    logOut,
    user,
    loggedIn,
  };
//   if (loading) {
//     return (
//       <Flex justifyContent="center" alignItems="center" height="100vh">
//         <Spinner
//           thickness="4px"
//           speed="0.65s"
//           emptyColor="gray.200"
//           size="xl"
//           color="red.500"
//         />
//       </Flex>
//     );
//   }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };