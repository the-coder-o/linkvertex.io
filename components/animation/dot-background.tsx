import React from 'react'

export function DotBackgroundDemo({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen z-[-999] w-full bg-dot-white/[0.6] fixed top-0 bottom-0 flex items-center justify-center">
      <div className="absolute z-[-888] pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  )
}
