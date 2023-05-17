import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Firebase/FirebaseConfig";

export const AuthContextProvider = createContext();
const auth = getAuth(app);

const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const AuthProvider = ({ children }) => {
  const authInfo = {
    register,
    logIn,
  };
  return (
    <AuthContextProvider.Provider value={authInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthProvider;
