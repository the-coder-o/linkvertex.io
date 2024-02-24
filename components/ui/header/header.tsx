import React from "react";

import { Sun } from "lucide-react";

import Link from "next/link";

const Header = () => {
  return (
    <header className={"container"}>
      <div className={"pt-5 flex items-center justify-between"}>
        <div>
          <h1 className={"text-white text-[1.25rem] font-bold"}>
            <Link href={"/"}>Linkvertex.io</Link>
          </h1>
        </div>
        <div className={'hover:!bg-[#00000000]'}>
          <Sun className={'text-white w-[1rem] h-[1rem]'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
