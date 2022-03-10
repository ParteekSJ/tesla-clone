import React from "react";

function AuthInput({ value, setValue, id }) {
  return (
    <input
      className="mb-[20px] mt-[5px] outline-none bg-[#f4f4f4] border-[1px] border-[#f4f4f4] rounded-[50px] py-[12px] px-[20px] text-[#393c41] font-[600] focus:border-[1px] focus:border-[#d6d6d6] transition-all duration-100 ease-out"
      type={id}
      id={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default AuthInput;
