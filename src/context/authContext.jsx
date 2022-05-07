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
  const[dependency,setDepen] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    // (async () => {
    //   try {
    //     console.log("çalıştı")
    //     const data = await api.FetchMe();
    //     if(!data){
    //       setLoggedIn(false);
    //     }else{
    //       console.log("çalişti")
    //       setLoggedIn(true);
    //       setUser(data);
    //     }
    //     console.log(user);
    //     console.log(data);
    //    console.log(loggedIn);
       
    //   } catch (error) {
    //    // setLoading(false);
    //   }
    // })();
    const fetchData = async () => {
      const response = await api.FetchMe();
      if(!response){
        setLoggedIn(false);
      }else{
        console.log("çalişti")
        setLoggedIn(true);
        setUser(response);
      }
    }
    fetchData();
    console.log(loggedIn);
  }, [dependency]);

  console.log(loggedIn)
  const login = (data) => {
    setLoggedIn(true);
    setUser(data.user);
    setDepen(dependency+1);
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

  
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };