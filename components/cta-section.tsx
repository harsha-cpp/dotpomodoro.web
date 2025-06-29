"use client"

import { Button } from "@/components/ui/button"
import { Download, Github } from "lucide-react"
import { useEffect, useRef } from "react"
import { downloadDMG, trackDownload } from "@/lib/download"

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      section.style.setProperty("--mouse-x", `${x * 100}%`)
      section.style.setProperty("--mouse-y", `${y * 100}%`)
    }

    section.addEventListener("mousemove", handleMouseMove)
    return () => section.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={sectionRef} id="download" className="relative py-20 bg-black overflow-hidden">
      {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-blue-950/10" />

      {/* Cursor tracking glow */}
      <div
                  className="absolute w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-900/20 to-blue-400/20 blur-3xl opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
        style={{
          left: "var(--mouse-x, 50%)",
          top: "var(--mouse-y, 50%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
            <img src="/AppLogo.png" alt="DOTpomodoro" className="w-full h-full object-contain rounded-3xl" />
          </div>
        </div>

        <h2 className="text-4xl font-bold text-white mb-4">
          Download DOTpomodoro for{" "}
                      <span className="bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent">macOS</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Start your journey to better focus and productivity. Free download, no account required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-900 to-blue-400 hover:from-blue-800 hover:to-blue-500 text-white px-8 py-4 text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            onClick={() => {
              trackDownload()
              downloadDMG()
            }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download for macOS
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/10 text-gray-300 hover:text-white bg-transparent"
            asChild
          >
            <a href="https://github.com/harsha-cpp/dotpomodoro" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </Button>
        </div>

        <div className="text-sm text-gray-400 space-y-1">
          <p>Compatible with macOS 11.0 or later</p>
          <p>Universal app for Intel and Apple Silicon Macs</p>
        </div>
      </div>
    </section>
  )
}
