"use client"

import { useEffect, useRef, useState } from "react"

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInSection, setIsMouseInSection] = useState(false)
  const [revealedFeatures, setRevealedFeatures] = useState<Record<string, boolean>>({})

  const features = [
    {
      id: "smart-pomodoro",
      title: "Intelligent Focus Timer",
      description: "Adaptive Pomodoro sessions that adjust to your workflow and energy levels.",
      image: "/chrome-inspiration-1.png",
      position: "left"
    },
    {
      id: "tasks-focus",
      title: "Task Management", 
      description: "Seamlessly organize tasks with built-in focus tracking and progress visualization.",
      image: "/chrome-inspiration-2.png",
      position: "right"
    },
    {
      id: "streaks-stats",
      title: "Analytics & Insights",
      description: "Track productivity patterns with detailed statistics and streak tracking.",
      image: "/chrome-inspiration-3.png", 
      position: "left"
    },
    {
      id: "light-dark",
      title: "Break reminders",
      description: "Smart break notifications to maintain focus and prevent burnout.",
      image: "/placeholder.svg?height=400&width=600",
      position: "right"
    }
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Check proximity to feature reveal areas
      const revealAreas = section.querySelectorAll('[data-reveal-area]')
      const newRevealed: Record<string, boolean> = {}
      
      revealAreas.forEach((area) => {
        const featureId = area.getAttribute('data-feature-id')
        if (!featureId) return
        
        const areaRect = area.getBoundingClientRect()
        const areaX = areaRect.left + areaRect.width / 2 - rect.left
        const areaY = areaRect.top + areaRect.height / 2 - rect.top
        
        const distance = Math.sqrt(Math.pow(x - areaX, 2) + Math.pow(y - areaY, 2))
        if (distance < 200) {
          newRevealed[featureId] = true // Reveal when cursor is within 200px
        }
      })
      
      // Only update with new reveals, don't remove existing ones
      setRevealedFeatures(prev => ({ ...prev, ...newRevealed }))

      section.style.setProperty("--mouse-x", `${x}px`)
      section.style.setProperty("--mouse-y", `${y}px`)
    }

    const handleMouseEnter = () => {
      setIsMouseInSection(true)
    }

    const handleMouseLeave = () => {
      setIsMouseInSection(false)
      // Don't reset revealed features - keep them visible once revealed
    }

    section.addEventListener("mousemove", handleMouseMove)
    section.addEventListener("mouseenter", handleMouseEnter)
    section.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      section.removeEventListener("mousemove", handleMouseMove)
      section.removeEventListener("mouseenter", handleMouseEnter)
      section.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Single cursor glow for this section */}
      {isMouseInSection && (
        <div
          className="fixed w-96 h-96 rounded-full pointer-events-none z-20 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: 'radial-gradient(circle, hsla(203, 100%, 50%, 0.3) 0%, hsla(203, 100%, 50%, 0.2) 30%, hsla(237, 86%, 16%, 0.1) 60%, transparent 100%)',
            filter: 'blur(40px)',
            mixBlendMode: 'screen'
          }}
        />
      )}

      <section 
        ref={sectionRef} 
        id="features" 
        className="relative py-20 bg-black overflow-hidden min-h-screen"
        style={{ cursor: isMouseInSection ? 'none' : 'default' }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-blue-950/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-100 mb-6 tracking-tight font-sans">
              Discover{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-normal font-sans">
              Move your cursor to reveal the magic behind DOTpomodoro
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full min-h-[600px]">
            {/* Left Column */}
            <div className="space-y-12">
              {features.filter(f => f.position === "left").map((feature) => (
                <div key={feature.id} className="relative">
                  {/* Reveal Text */}
                  <div 
                    className="text-center mb-8"
                    data-reveal-area
                    data-feature-id={feature.id}
                  >
                    <div className="text-xs text-blue-400 uppercase tracking-[0.3em] font-semibold mb-4 font-mono">
                      BRING GLOW TO SEE
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-100 mb-2 font-sans">{feature.title}</h3>
                    <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed font-sans">{feature.description}</p>
                  </div>
                  
                  {/* Revealed Image Container */}
                  <div 
                    className={`relative rounded-xl overflow-hidden transition-all duration-1000 ease-out h-48 ${
                      revealedFeatures[feature.id] 
                        ? 'opacity-100 scale-100 blur-0' 
                        : 'opacity-0 scale-95 blur-sm'
                    }`}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {feature.id === 'smart-pomodoro' ? (
                      <div className="flex items-center justify-between p-6 h-full">
                        {/* Circular Timer */}
                        <div className="flex-shrink-0">
                          <div className="relative w-24 h-24">
                            {/* Background Circle */}
                            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                stroke="rgba(255, 255, 255, 0.1)"
                                strokeWidth="8"
                                fill="none"
                              />
                              {/* Progress Circle */}
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                stroke="rgb(59, 130, 246)"
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray="251.2"
                                strokeDashoffset="62.8"
                                strokeLinecap="round"
                                className="transition-all duration-300"
                              />
                            </svg>
                            {/* Timer Text */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-sm font-bold text-white font-mono">25:00</div>
                                <div className="text-xs text-gray-400 font-mono">FOCUS</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Session Duration Boxes */}
                        <div className="flex flex-col gap-2 ml-4">
                          <div className="px-3 py-1 rounded-md bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold font-mono">
                            25 min
                          </div>
                          <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold font-mono hover:bg-white/10 transition-colors cursor-pointer">
                            45 min
                          </div>
                          <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold font-mono hover:bg-white/10 transition-colors cursor-pointer">
                            60 min
                          </div>
                        </div>
                      </div>
                    ) : feature.id === 'streaks-stats' ? (
                      <div className="p-6 h-full flex flex-col justify-center">
                        {/* Analytics Chart */}
                        <div className="space-y-4">
                          {/* Title */}
                          <div className="text-center mb-4">
                            <div className="text-xs text-blue-400 font-mono tracking-wider">DAILY FOCUS</div>
                          </div>
                          
                          {/* Bar Chart */}
                          <div className="flex items-end justify-between h-16 space-x-2">
                            {/* Monday */}
                            <div className="flex flex-col items-center space-y-1">
                              <div className="w-6 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t" style={{ height: '60%' }}></div>
                              <span className="text-xs text-gray-400 font-mono">M</span>
                            </div>
                            
                            {/* Tuesday */}
                            <div className="flex flex-col items-center space-y-1">
                              <div className="w-6 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t" style={{ height: '40%' }}></div>
                              <span className="text-xs text-gray-400 font-mono">T</span>
                            </div>
                            
                            {/* Wednesday */}
                            <div className="flex flex-col items-center space-y-1">
                              <div className="w-6 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t" style={{ height: '80%' }}></div>
                              <span className="text-xs text-gray-400 font-mono">W</span>
                            </div>
                            
                            {/* Thursday */}
                            <div className="flex flex-col items-center space-y-1">
                              <div className="w-6 bg-gradient-to-t from-green-500 to-green-400 rounded-t" style={{ height: '100%' }}></div>
                              <span className="text-xs text-green-400 font-mono">T</span>
                            </div>
                            
                            {/* Friday */}
                            <div className="flex flex-col items-center space-y-1">
                              <div className="w-6 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t" style={{ height: '70%' }}></div>
                              <span className="text-xs text-gray-400 font-mono">F</span>
                            </div>
                          </div>
                          
                          {/* Stats */}
                          <div className="flex justify-between items-center mt-4">
                            <div className="text-center">
                              <div className="text-sm font-bold text-white font-mono">2.5h</div>
                              <div className="text-xs text-gray-400 font-mono">TODAY</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm font-bold text-green-400 font-mono">7</div>
                              <div className="text-xs text-gray-400 font-mono">STREAK</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm font-bold text-blue-400 font-mono">18h</div>
                              <div className="text-xs text-gray-400 font-mono">WEEK</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : feature.id === 'tasks-focus' ? (
                      <div className="p-6 h-full flex flex-col justify-center">
                        {/* Task List */}
                        <div className="space-y-3">
                          {/* Completed Task */}
                          <div className="flex items-center space-x-3 group">
                            <div className="flex-shrink-0 w-4 h-4 rounded border-2 border-green-500 bg-green-500/20 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-400 line-through font-sans">Complete Math Assignment</span>
                          </div>

                          {/* Active Task */}
                          <div className="flex items-center space-x-3 group">
                            <div className="flex-shrink-0 w-4 h-4 rounded border-2 border-blue-500 bg-blue-500/20 flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            </div>
                            <span className="text-sm text-white font-sans">Study Chemistry Ch. 5</span>
                            <span className="text-xs text-blue-400 font-mono ml-auto">25 min</span>
                          </div>

                          {/* Pending Tasks */}
                          <div className="flex items-center space-x-3 group">
                            <div className="flex-shrink-0 w-4 h-4 rounded border-2 border-white/20 bg-white/5 hover:border-white/40 transition-colors cursor-pointer"></div>
                            <span className="text-sm text-gray-300 font-sans">Write History Essay</span>
                          </div>

                          <div className="flex items-center space-x-3 group">
                            <div className="flex-shrink-0 w-4 h-4 rounded border-2 border-white/20 bg-white/5 hover:border-white/40 transition-colors cursor-pointer"></div>
                            <span className="text-sm text-gray-300 font-sans">Review Physics Notes</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Center Column - Main Interactive Text */}
            <div className="flex items-center justify-center">
              <div className="text-center space-y-8">
                <div className="text-xs text-blue-400 uppercase tracking-[0.3em] font-semibold font-mono">
                  INTERACTIVE EXPERIENCE
                </div>
                <div className="text-6xl font-black text-gray-200 leading-tight opacity-15 select-none font-sans">
                  MOVE
                  <br />
                  YOUR
                  <br />
                  CURSOR
                </div>
                <div className="text-xs text-blue-400 uppercase tracking-[0.3em] font-semibold font-mono">
                  TO DISCOVER MORE
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {features.filter(f => f.position === "right").map((feature) => (
                <div key={feature.id} className="relative">
                  {/* Reveal Text */}
                  <div 
                    className="text-center mb-8"
                    data-reveal-area
                    data-feature-id={feature.id}
                  >
                    <div className="text-xs text-blue-400 uppercase tracking-[0.3em] font-semibold mb-4 font-mono">
                      BRING GLOW TO SEE
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-100 mb-2 font-sans">{feature.title}</h3>
                    <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed font-sans">{feature.description}</p>
                  </div>
                  
                  {/* Revealed Image Container */}
                  <div 
                    className={`relative rounded-xl overflow-hidden transition-all duration-1000 ease-out h-48 ${
                      revealedFeatures[feature.id] 
                        ? 'opacity-100 scale-100 blur-0' 
                        : 'opacity-0 scale-95 blur-sm'
                    }`}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {feature.id === 'tasks-focus' ? (
                      <div className="p-6 h-full flex flex-col justify-center">
                        {/* Task List */}
                        <div className="space-y-3">
                          {/* Completed Task */}
                          <div className="flex items-center space-x-3 group">
                            <div className="flex-shrink-0 w-4 h-4 rounded border-2 border-green-500 bg-green-500/20 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-400 line-through font-sans">Complete Math Assignment</span>
                          </div>

                          {/* Active Task */}
                          <div className="flex items-center space-x-3 group">
                            <div className="flex-shrink-0 w-4 h-4 rounded border-2 border-blue-500 bg-blue-500/20 flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            </div>
                            <span className="text-sm text-white font-sans">Study Chemistry Ch. 5</span>
                            <span className="text-xs text-blue-400 font-mono ml-auto">25 min</span>
                          </div>

                          {/* Pending Tasks */}
                          <div className="flex items-center space-x-3 group">
                            <div className="flex-shrink-0 w-4 h-4 rounded border-2 border-white/20 bg-white/5 hover:border-white/40 transition-colors cursor-pointer"></div>
                            <span className="text-sm text-gray-300 font-sans">Write History Essay</span>
                          </div>

                          <div className="flex items-center space-x-3 group">
                            <div className="flex-shrink-0 w-4 h-4 rounded border-2 border-white/20 bg-white/5 hover:border-white/40 transition-colors cursor-pointer"></div>
                            <span className="text-sm text-gray-300 font-sans">Review Physics Notes</span>
                          </div>
                        </div>
                      </div>
                    ) : feature.id === 'light-dark' ? (
                      <div className="p-4 h-full flex flex-col justify-center">
                        {/* Break Interface */}
                        <div className="space-y-3">
                          {/* Break Button */}
                          <div className="text-center">
                            <button className="px-3 py-1.5 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-semibold font-sans hover:bg-orange-500/30 transition-colors cursor-pointer">
                              Take a Break
                            </button>
                          </div>
                          
                          {/* Break Options */}
                          <div className="flex justify-between items-center space-x-2">
                            {/* Short Break */}
                            <div className="flex-1 text-center p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                              <div className="w-6 h-6 mx-auto mb-1 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                              </div>
                              <div className="text-xs text-blue-400 font-mono mb-0.5">SHORT</div>
                              <div className="text-xs font-bold text-white font-mono">5 min</div>
                            </div>
                            
                            {/* Long Break */}
                            <div className="flex-1 text-center p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                              <div className="w-6 h-6 mx-auto mb-1 rounded-full bg-green-500/20 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                              </div>
                              <div className="text-xs text-green-400 font-mono mb-0.5">LONG</div>
                              <div className="text-xs font-bold text-white font-mono">15 min</div>
                            </div>
                          </div>
                          
                          {/* Status */}
                          <div className="text-center">
                            <div className="text-xs text-gray-400 font-mono">NEXT BREAK IN</div>
                            <div className="text-xs font-bold text-orange-400 font-mono">12:30</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
