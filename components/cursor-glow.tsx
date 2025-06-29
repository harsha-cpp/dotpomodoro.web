"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
              className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-0 h-64 w-64 rounded-full bg-gradient-to-r from-blue-900/20 to-blue-400/20 blur-3xl transition-opacity duration-300 opacity-0 hover:opacity-100"
      style={{ mixBlendMode: "multiply" }}
    />
  )
}
