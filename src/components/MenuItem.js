import React from "react";

function MenuItem({ title }) {
  return (
    <div className="border-b-[1px] border-solid border-b-[#d0d1d2] text-left">
      <h4 className="font-semibold uppercase pb-4 text-[15px] pl-[9px] cursor-pointer">
        {title}
      </h4>
    </div>
  );
}

export default MenuItem;
