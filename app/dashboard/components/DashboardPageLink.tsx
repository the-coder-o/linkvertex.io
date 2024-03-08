import { FC } from 'react'

import Link from 'next/link'
import { DashboardLinkProps } from '@/types/dashboard.type'

const DashboardLink: FC<DashboardLinkProps> = ({ href, label, icon, buttonContent }) => (
  <div className="border border-[#fff]/50 rounded-[24px] p-[20px] max-[450px]:p-[15px] ease duration-200 hover:scale-105">
    <Link href={href} className="flex items-center justify-between w-full h-full">
      <div className="flex flex-col gap-[35px] max-sm:flex-row max-sm:w-full max-sm:justify-between">
        <h2 className="text-[#fff] text-xl font-bold max-[450px]:text-[20px] ml-2">{label}</h2>
        {icon}
        {buttonContent}
      </div>
    </Link>
  </div>
)

export default DashboardLink
