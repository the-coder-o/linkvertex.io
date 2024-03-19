import React from "react";
import { DotBackgroundDemo } from "@/components/animation/dot-background";

const Loader = () => {
  return (
    <div className={"fixed bottom-0 left-0 right-0 top-0 z-[9999999999] flex items-center justify-center bg-black"}>
      <div className="loader">
        <div className="loader-circle"></div>
        <div className="loading loading03 !flex !items-center !gap-2">
          <span className={"!font-[900]"}>L</span>
          <span className={"!font-[900]"}>O</span>
          <span className={"!font-[900]"}>A</span>
          <span className={"!font-[900]"}>D</span>
          <span className={"!font-[900]"}>I</span>
          <span className={"!font-[900]"}>N</span>
          <span className={"!font-[900]"}>G</span>
        </div>
      </div>
      <div className={"fixed bottom-0 left-0 right-0 top-0 opacity-25"}>
        <DotBackgroundDemo />
      </div>
    </div>
  );
};

export default Loader;
