import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import AuthButton from "../components/AuthButton";
import AuthInput from "../components/AuthInput";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Storing the fetched user into the `store`
        dispatch(
          // payload
          login({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: userCredential.user.displayName,
          })
        );
        // Redirecting to `teslaAccount`
        navigate("/teslaAccount");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="p-[25px] pt-[15px] h-screen flex flex-col gap-[60px]">
      {/* HEADER STUFF */}
      <div className="flex items-center justify-between sticky top-0">
        <div>
          <Link to="/">
            <img
              className="object-contain w-[90px]"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex gap-[5px] cursor-pointer py-[5px] px-[10px] text-[15px] transition-all hover:bg-[hsla(0,0%,50.2%,0.125)] rounded-[50px]">
          <LanguageIcon />
          <span className="font-medium">en-US</span>
        </div>
      </div>
      {/* LOGIN FORM */}
      <div className="flex flex-col gap-[20px] min-w-[330px] mx-auto">
        <h1 className="font-semibold text-[40px] ml-[-10px]">Sign In</h1>
        <form className="flex flex-col">
          <label
            htmlFor="email"
            className="text-[#5c5e62] font-semibold text-[17px] pl-[20px]"
          >
            Email Address
          </label>
          <AuthInput value={email} setValue={setEmail} id="email" />
          <label
            htmlFor="password"
            className="text-[#5c5e62] font-semibold text-[17px] pl-[20px]"
          >
            Password
          </label>
          <AuthInput value={password} setValue={setPassword} id="password" />
          <AuthButton
            className="buttonPrimary"
            name="Sign In"
            type="submit"
            onClick={signIn}
          />
        </form>
        {/* LOGIN DIVIDER */}
        <div className="flex items-center justify-between ">
          <hr className="w-[40%] h-0" />
          <span className="font-[600] text-[#5c5e62]">OR</span>
          <hr className="w-[40%] h-0" />
        </div>
        <Link to="/signup">
          <AuthButton
            className="buttonSecondary mb-[80px]"
            name="Create Account"
          />
        </Link>
      </div>
    </div>
  );
}

export default Login;
