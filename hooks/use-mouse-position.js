import { useEffect, useState } from 'react'

const useMousePosition = (ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev) => setMousePosition({ x: ev.clientX - ref.current.getBoundingClientRect().left, y: ev.clientY - ref.current.getBoundingClientRect().top })
    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [ref])

  return mousePosition
}

export default useMousePosition
