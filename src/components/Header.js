import React from "react";
import { Link } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";

import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu } from "../app/features/menuSlice";

function Header() {
  const { isMenuOpen } = useSelector((state) => ({ ...state.menu }));
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex sticky z-[2] top-0 left-0 right-0 justify-between items-center p-[25px] pt-4">
        {/* HEADER IMAGE 1/3 */}
        <Link to="/">
          <img
            className="object-contain w-[90px] mr-[100px] flex-1"
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
          />
        </Link>
        {/* HEADER LINKS 2/3*/}
        <div className="flex gap-4">
          <Link className="headerLink" to="/">
            Model S
          </Link>
          <Link className="headerLink" to="/">
            Model 3
          </Link>
          <Link className="headerLink" to="/">
            Model X
          </Link>
          <Link className="headerLink" to="/">
            Model Y
          </Link>
          <Link className="headerLink" to="/">
            Solar Roof
          </Link>
          <Link className="headerLink" to="/">
            Solar Panels
          </Link>
        </div>
        {/* HEADER RIGHT 3/3 */}
        <div className="flex items-center gap-4">
          <Link
            className={`headerLink z-0 relative ${isMenuOpen && `invisible`}`}
            to="/"
          >
            Shop
          </Link>
          <Link
            className={`headerLink z-0 relative ${isMenuOpen && `invisible`}`}
            to="/login"
          >
            Tesla Account
          </Link>
          <div
            onClick={() => {
              isMenuOpen ? dispatch(closeMenu()) : dispatch(openMenu());
            }}
          >
            {isMenuOpen ? (
              <CloseRoundedIcon className="relative z-[2] cursor-pointer" />
            ) : (
              <MenuIcon className="relative z-[2] cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
