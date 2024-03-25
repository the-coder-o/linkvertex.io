import React from "react";

const LifetimeAnalytics = () => {
  return (
    <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-2"}>
        <span className={"h-3 w-3 rounded-full !bg-green-600"}></span>
        <p className={"text-white"}>
          Views: <span className={"text-xl"}>25</span>
        </p>
      </div>
      <div className={"flex items-center gap-2"}>
        <span className={"h-3 w-3 rounded-full !bg-purple-600"}></span>
        <p className={"text-white"}>
          Clicks: <span className={"text-xl"}>25</span>
        </p>
      </div>
      <div className={"flex items-center gap-2"}>
        <span className={"h-3 w-3 rounded-full !bg-blue-600"}></span>
        <p className={"text-white"}>
          CTR: <span className={"text-xl"}>25%</span>
        </p>
      </div>
      <div className={"flex items-center gap-2"}>
        <span className={"h-3 w-3 rounded-full !bg-yellow-600"}></span>
        <p className={"text-white"}>
          Revenue: <span className={"text-xl"}>47</span>
        </p>
      </div>
      <div className={"flex items-center gap-2"}>
        <span className={"h-3 w-3 rounded-full !bg-pink-600"}></span>
        <p className={"text-white"}>
          Subscribers: <span className={"text-xl"}>0</span>
        </p>
      </div>
    </div>
  );
};

export default LifetimeAnalytics;
