import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Car from "../components/Car";
import Menu from "../components/Menu";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";

import { openMenu, closeMenu } from "../app/features/menuSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { logout } from "../app/features/userSlice";

function Account() {
  const { isMenuOpen } = useSelector((state) => ({ ...state.menu }));
  const { user } = useSelector((state) => ({ ...state.user }));
  const dispatch = useDispatch();

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(logout());
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      {isMenuOpen && <Menu />}
      {/* APP BAR */}
      <div className="py-[7px] px-[20px] pt-[15px] flex justify-between items-center bg-[#222] text-white">
        {/* LEFT SIDE OF THE APP BAR */}
        <div>
          <Link to="/">
            <img
              className="object-contain w-[80px] brightness-0 invert"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        {/* RIGHT SIDE OF THE APPBAR */}
        <div className="flex gap-5 items-center">
          <Link className="headerLinkInverted" to="/teslaAccount">
            Model S
          </Link>
          <Link className="headerLinkInverted" to="/teslaAccount">
            Model 3
          </Link>
          <Link className="headerLinkInverted" to="/teslaAccount">
            Model X
          </Link>
          <Link className="headerLinkInverted" to="/teslaAccount">
            Model Y
          </Link>
          <Link className="headerLinkInverted" to="/teslaAccount">
            Solar Roof
          </Link>
          <Link className="headerLinkInverted" to="/teslaAccount">
            Solar Panels
          </Link>
          <Link className="headerLinkInverted" to="/teslaAccount">
            Shop
          </Link>
          <Link className="headerLinkInverted" to="/teslaAccount">
            Tesla Account
          </Link>
          <Link
            onClick={logoutHandler}
            className="headerLinkInverted"
            to="/teslaAccount"
          >
            Logout
          </Link>
          <div
            className=""
            onClick={() => {
              isMenuOpen ? dispatch(closeMenu()) : dispatch(openMenu());
            }}
          >
            {isMenuOpen ? (
              <CloseRoundedIcon className="text-black relative z-[2] cursor-pointer" />
            ) : (
              <MenuIcon className="relative z-[2] cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      {/* USER INFO HEADER */}
      <div className="flex justify-between items-center py-[60px] px-[140px] pb-[30px]">
        {/* USER INFO HEADER LEFT */}
        <div>
          <h4 className="font-semibold capitalize text-xl">
            {user.displayName + "'s Tesla"}
          </h4>
        </div>
        {/* USER INFO HEADER RIGHT */}
        <div className="flex gap-5">
          <a className="accountLink">Home</a>
          <a className="accountLink">History</a>
          <a className="accountLink">Account</a>
          <a className="accountLink" onClick={logoutHandler}>
            Sign Out
          </a>
        </div>
      </div>

      {/* CAR IMAGE AND PROPERTIES */}
      <div className="grid place-items-center gap-[30px] pb-[40px]">
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model s"
          testDrive
        />
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model x"
        />
      </div>
    </div>
  );
}

export default Account;
