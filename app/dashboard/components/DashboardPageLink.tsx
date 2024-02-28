import React from 'react'

import Link from 'next/link'

type DashboardLinkProps = {
  href: string
  label: string
  icon?: React.ReactNode
  buttonContent?: React.ReactNode // Optional prop for the button's content
}

const DashboardLink: React.FC<DashboardLinkProps> = ({ href, label, icon, buttonContent }) => (
  <div className="border border-[#ffffff29] rounded-[24px] p-[20px] max-[450px]:p-[15px] ease duration-200 hover:scale-105">
    <Link href={href} className="flex items-center justify-between w-full h-full">
      <div className="flex flex-col gap-[35px]">
        <h2 className="text-[#A9A9A9] text-xl font-bold max-[450px]:text-[20px] ml-2">{label}</h2>
        {icon}
        {buttonContent}
      </div>
    </Link>
  </div>
)

export default DashboardLink
