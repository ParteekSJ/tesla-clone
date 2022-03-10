import React from "react";

/* grid -> flex flex-col
 * place-items-center -> items-center justify-center
 */

function HeaderBlock() {
  return (
    <div className="bg-[url('https://tesla.com/ns_videos/model-3-social.jpg')] bg-no-repeat bg-center bg-cover absolute top-0 right-0 left-0 bottom-0 grid place-items-center">
      <div className="flex flex-col h-[360px]">
        <div className="text-center flex-1">
          <h1 className="text-[#393c41] font-[600] text-[38px]">Model 3</h1>
          <h4 className="font-[400] text-[16px] text-[#5c5e62]">
            Order online for{" "}
            <span className="border-b-[1px] cursor-pointer text-[#393c41] border-b-black hover:border-b-[2px] hover:text-black transition ease-in-out">
              Touchless Delivery
            </span>
          </h4>
        </div>
        <div className="mt-[330px] flex gap-5 ">
          <button className="headerBlockButton opacity-80 bg-black text-white">
            Custom Order
          </button>
          <button className="headerBlockButton opacity-90 bg-white">
            Existing Inventory
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderBlock;
