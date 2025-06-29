"use client"

import Image from "next/image"
import { useState } from "react"
import { GlowCard } from "./glow-card"

export function ScreenshotGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const screenshots = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=200&width=200&text=Screenshot${i + 1}`,
    alt: `App Screenshot ${i + 1}`,
  }))

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            See DOTpomodoro in{" "}
            <span className="bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent">action</span>
          </h2>
          <p className="text-xl text-gray-300">Beautiful, intuitive interface designed for productivity</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <GlowCard
              key={screenshot.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                hoveredIndex === index ? "scale-105 z-10" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500 border border-gray-700/50">
                <Image
                  src={screenshot.src || "/placeholder.svg"}
                  alt={screenshot.alt}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
