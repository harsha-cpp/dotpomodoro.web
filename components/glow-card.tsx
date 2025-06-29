"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface GlowCardProps {
  children: ReactNode
  className?: string
}

export function GlowCard({ children, className = "" }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      card.style.setProperty("--mouse-x", `${x}px`)
      card.style.setProperty("--mouse-y", `${y}px`)
    }

    card.addEventListener("mousemove", handleMouseMove)
    return () => card.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 ${className}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className="absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-900/40 to-blue-400/40 blur-2xl"
          style={{
            left: "var(--mouse-x)",
            top: "var(--mouse-y)",
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
