import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios"
import { useToken, useToast } from "./index";
import { useNavigate, useLocation } from "react-router-dom";
import { authReducer } from "../Reducer/auth-reducer"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const { setToken } = useToken();
  const navigate = useNavigate();
  const { setShowToast, setToastTitle } = useToast()
  let location = useLocation();
  let from = location.state?.from?.pathname || '/'

  const [state, dispatch] = useReducer(authReducer, {
    email: "",
    password: "",
    fname: "",
    lname: ""
  })

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorInLogin, setErrorInLogin] = useState({});
  const [errorInSignup, setErrorInSignup] = useState({})

  const logInHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: state.email,
        password: state.password,
      });

      if (response.status === 200) {

        localStorage.setItem("token", response.data.encodedToken);
        setToken(response.data.encodedToken);
        setIsLoggedIn(true);
        navigate(from, { replace: true })
        setToastTitle("Logged In successfully")
        setShowToast(true)
      }

    } catch (error) {
      console.log(error);

      if (error.response.status === 404) {
        setErrorInLogin({
          status: true,
          message: "Email not found"
        })
        console.log("email not found")
      }
      if (error.response.status === 401) {
        setErrorInLogin({
          status: true,
          message: "Invalid Email/Password"
        })
        console.log("Invalid Cred")
      }
    }
  };

  const guestCred = (e) => {
    e.preventDefault();
  }

  const logOutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    window.location.reload();
  }

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        email: state.email,
        password: state.password,
        fname: state.fname,
        lname: state.lname
      });

      if (response.status === 201) {

        localStorage.setItem("token", response.data.encodedToken)
        navigate("/login");
        setToastTitle("Account created successfully, login to continue")
        setShowToast(true)
      }


    } catch (error) {
      console.log(error);

      if (error.response.status === 422) {
        setErrorInSignup({
          status: true,
          message: "Email alredy exists"
        })
        console.log("Email alredy exists")
      }
    }
  };

  return <AuthContext.Provider value={{ isLoggedIn, logInHandler, dispatch, state, guestCred, setIsLoggedIn, logOutHandler, signupHandler, errorInLogin, errorInSignup, setErrorInSignup }}>
    {children}
  </AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }