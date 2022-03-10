import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { useSelector, useDispatch } from "react-redux";
import Account from "./pages/Account";
import SignUp from "./pages/SignUp";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "./app/features/userSlice";

export default function App() {
  const { user } = useSelector((state) => ({ ...state.user }));
  const { isMenuOpen } = useSelector((state) => ({ ...state.menu }));
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      userAuth
        ? dispatch(
            login({
              email: userAuth.email,
              displayName: userAuth.displayName,
              uid: userAuth.uid,
            })
          )
        : dispatch(logout());
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/teslaAccount" /> : <Login />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/teslaAccount"
          element={user ? <Account /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
