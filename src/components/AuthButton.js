import React from "react";

function AuthButton({ name, type, onClick, className }) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {name}
    </button>
  );
}

export default AuthButton;
