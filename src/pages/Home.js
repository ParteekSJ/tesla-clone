import React, { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import HeaderBlock from "../components/HeaderBlock";
import { useSelector } from "react-redux";

function Home() {
  const { isMenuOpen } = useSelector((state) => ({ ...state.menu }));

  return (
    <div className="h-screen relative">
      <Header />
      {isMenuOpen && <Menu />}
      <HeaderBlock />
    </div>
  );
}

export default Home;
