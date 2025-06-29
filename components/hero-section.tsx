"use client"

import { Button } from "@/components/ui/button"
import { Download, Github } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { downloadDMG, trackDownload } from "@/lib/download"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [time, setTime] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [typewriterText, setTypewriterText] = useState('')

  const fullText = "built to work for you"

  // Typewriter effect
  useEffect(() => {
    let i = 0
    const typewriterInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typewriterInterval)
      }
    }, 100)

    return () => clearInterval(typewriterInterval)
  }, [])

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

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 50)
    }, 5) // Update every 5ms and increment by 50ms for super fast display

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', handleGlobalMouseMove)
    return () => document.removeEventListener('mousemove', handleGlobalMouseMove)
  }, [])

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const ms = Math.floor((milliseconds % 1000) / 10)
    const seconds = totalSeconds % 60
    const minutes = Math.floor(totalSeconds / 60) % 60
    const hours = Math.floor(totalSeconds / 3600)

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`
  }

  return (
    <>
      {/* Ambient Blue Glow Effect */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, hsla(203, 100%, 50%, 0.3) 0%, hsla(203, 100%, 50%, 0.2) 30%, hsla(237, 86%, 16%, 0.1) 60%, transparent 100%)',
          filter: 'blur(40px)',
          mixBlendMode: 'screen'
        }}
      />
      
      <section ref={sectionRef} className="relative bg-black overflow-hidden min-h-screen flex items-center justify-center" style={{ cursor: 'none' }}>
        {/* Logo in top left */}
        <div className="fixed top-8 left-8 z-50">
          <img src="/AppLogo.png" alt="DOTpomodoro" className="w-12 h-12 rounded-xl" />
        </div>

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

      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="lg:text-6xl font-bold text-white leading-tight mb-6 font-mono text-3xl">
              The focus timer{" "}
              <span className="relative inline-block">
                {/* Main text with typewriter effect */}
                <span 
                  className="relative bg-clip-text text-transparent z-10"
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 25%, #1d4ed8 50%, #1e40af 75%, #1e3a8a 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                  }}
                >
                  {typewriterText}
                </span>
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl font-mono">
              Stay productive with deep work, Pomodoro, and task syncing. A beautiful menu bar app designed for macOS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            <p className="text-sm text-gray-400 mt-4">Free download • macOS 11.0 or later</p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div 
              className="text-center relative p-8 rounded-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: `
                  inset 0 1px 0 rgba(255, 255, 255, 0.1),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                `
              }}
            >
              <div 
                className="text-7xl font-bold mb-4 select-none"
                style={{
                  fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Source Code Pro", monospace',
                  background: 'linear-gradient(90deg, hsla(203, 100%, 50%, 1) 0%, hsla(237, 86%, 16%, 1) 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 0 30px hsla(203, 100%, 50%, 0.4)',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                  letterSpacing: '0.05em'
                }}
              >
                {formatTime(time)}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-[0.2em] font-medium">Never Stops</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
