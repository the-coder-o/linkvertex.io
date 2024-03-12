import React from 'react'

export function DotBackgroundDemo() {
  return (
    <div className="h-screen z-[-9999999] max-sm:opacity-25 w-full bg-dot-white/[0.8] fixed top-0 bottom-0 flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  )
}
