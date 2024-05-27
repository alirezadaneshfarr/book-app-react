import React from "react";

function Header() {
  return (
    <div
      className="container mx-auto flex justify-between items-center 
        p-6 text-center bg-[#303030] rounded-xl">
      <h1 className="text-[2rem] font-semibold">Book App</h1>
      <p className="font-medium">
        <a
          href="https://github.com/alirezadaneshfarr"
          className="text-[#6552f4]">
          A.Daneshfar{" "}
        </a>
        | React.js Course
      </p>
    </div>
  );
}

export default Header;
