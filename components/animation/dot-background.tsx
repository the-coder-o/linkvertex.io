import React from 'react'

export function DotBackgroundDemo() {
  return (
    <div className="fixed bottom-0 top-0 z-[-9999999] flex h-screen w-full items-center justify-center bg-dot-white/[0.8]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  )
}
