import React from "react";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="fixed overflow-y-scroll top-0 bottom-0 right-0 pl-[20px] pt-[70px] pb-[20px] pr-[20px] bg-white z-[1] flex flex-col gap-6 min-w-[280px] scrollbar-hide">
      <MenuItem title="existing inventory" />
      <MenuItem title="used inventory" />
      <MenuItem title="trade-in" />
      <MenuItem title="cybertruck" />
      <MenuItem title="roadster" />
      <MenuItem title="semi" />
      <MenuItem title="charging" />
      <MenuItem title="powerwall" />
      <MenuItem title="commercial solar" />
      <MenuItem title="test drive" />
      <MenuItem title="find us" />
      <MenuItem title="support" />
      <MenuItem title="united states" />
    </div>
  );
}

export default Menu;
