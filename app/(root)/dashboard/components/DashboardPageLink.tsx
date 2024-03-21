import { FC } from "react";

import Link from "next/link";
import { DashboardLinkProps } from "@/types/dashboard.type";

const DashboardLink: FC<DashboardLinkProps> = ({ href, label, icon, buttonContent }) => (
  <div className="ease rounded-[24px] border border-[#fff]/50 p-[20px] duration-200 hover:scale-105 max-[450px]:p-[15px]">
    <Link href={href} className="flex h-full w-full items-center justify-between">
      <div className="flex flex-col gap-[35px] max-sm:w-full max-sm:flex-row max-sm:justify-between">
        <h2 className="ml-2 text-xl font-bold text-[#fff] max-[450px]:text-[20px]">{label}</h2>
        {icon}
        {buttonContent}
      </div>
    </Link>
  </div>
);

export default DashboardLink;
