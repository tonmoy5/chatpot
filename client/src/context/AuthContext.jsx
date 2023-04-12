import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const currentUser = JSON.stringify(localStorage.getItem("user"));
  const [user, setUser] = useState(currentUser || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      setLoading(true);
      const response = await axios.post(
        "https://chai-chat-backend.onrender.com/api/auth/google",
        {
          code: codeResponse.code,
        }
      );
      console.log(response);
      setUser(response.data.data.user);
      localStorage.setItem("accessToken", response.data.data.token);
      setLoading(false);
    },
    onError: (errorResponse) => {
      console.log(errorResponse);
      setLoading(false);
    },
  });

  window.fbAsyncInit = function () {
    window.FB.init({
      appId: process.env.REACT_APP_FACEBOOK_APP_ID,
      cookie: true,
      xfbml: true,
      version: "v9.0",
    });
  };

  const facebookLogin = () => {
    setError("");
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          // The user is logged in and has authorized your app
          // You can now use the access token to authenticate the user on your server
          const postUser = async () => {
            setLoading(true);
            const res = await axios.post(
              "https://chai-chat-backend.onrender.com/api/auth/facebook",
              {
                access_token: response.authResponse.accessToken,
              }
            );
            console.log(res);
            setUser(res.data.data.user);
            localStorage.setItem("accessToken", res.data.data.token);
            setLoading(false);
          };

          postUser();

          console.log(response.authResponse.accessToken);
        } else {
          // The user cancelled the login
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "public_profile,email" }
    );
  };

  const signUpWithEmail = async ({ name, email, password, phone, avatar }) => {
    setError("");
    try {
      const info = { name, email, password, phone, avatar };
      setLoading(true);
      const res = await axios.post(
        `https://chai-chat-backend.onrender.com/api/auth/signup`,
        info
      );
      console.log(res);
      setUser(res.data.data.user);
      setLoading(false);
      localStorage.setItem("accessToken", res.data.data.token);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    setError("");
    try {
      const info = { email, password };
      const res = await axios.post(
        `https://chai-chat-backend.onrender.com/api/auth/login`,
        info
      );
      console.log(res);
      setUser(res.data.data.user);
      localStorage.setItem("accessToken", res.data.data.token);
      setLoading(false);
    } catch (error) {
      console.log("error=>", error);
      setError(error.response.data.error);
      setLoading(false);
    }
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };

  const authInfo = {
    signUpWithEmail,
    googleLogin,
    facebookLogin,
    signIn,
    logOut,
    user,
    loading,
    error,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
