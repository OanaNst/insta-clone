import { auth } from "../firebase/firebase";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";

const useLogout = () => {
  const [signOut, isLogginOut, error] = useSignOut(auth);
  const showToast = useShowToast();
  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      console.log("Logged out");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { handleLogout, isLogginOut, error };
};

export default useLogout;
