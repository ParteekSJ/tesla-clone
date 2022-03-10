import React from "react";

function Car({ imgSrc, model, testDrive }) {
  return (
    <div className="grid place-items-center border-t-[1px] border-t-[#d0d1d2]">
      <div>
        <img className="object-contain w-[1000px]" src={imgSrc} alt={model} />
      </div>
      <h2 className="font-[600] text-3xl capitalize mt-[-180px]">{model}</h2>
      <div className="flex items-center gap-5 mt-[-40px]">
        <button className="buttonPrimary w-[230px] mb-[30px]">Order</button>
        {testDrive && (
          <button className="buttonSecondary  w-[230px] mb-[30px]">
            Test Drive
          </button>
        )}
      </div>
      <p className="max-w-[350px] text-center text-base leading-6 font-semibold text-[#393c41]">
        <span className="text-[#3e6be2] cursor-pointer">Request a Call</span> to
        speak with a product specialist, value your trade-in or apply for
        leasing
      </p>
    </div>
  );
}

export default Car;
