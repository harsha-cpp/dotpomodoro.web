"use client"

import { Download } from "lucide-react"
import { useState, useEffect } from "react"

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if features section is in view
      const featuresSection = document.querySelector('h2')
      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect()
        // When features title reaches the top of the viewport
        setIsVisible(rect.top <= 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed right-6 z-50 transition-all duration-[10000ms] ease-out ${
        isVisible 
          ? 'top-6 opacity-100 translate-y-0' 
          : 'top-0 opacity-0 -translate-y-full'
      }`}
    >
      <div 
        className="flex items-center px-4 py-2 rounded-full backdrop-blur-xl border"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.05)
          `,
          backdropFilter: 'blur(20px) saturate(180%)'
        }}
      >
        {/* Download Button - Functional */}
        <a
          href="#download"
          className="text-white px-6 py-2 rounded-full font-medium text-sm border-0 h-9 backdrop-blur-md flex items-center hover:scale-105 transition-transform duration-200"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(29, 78, 216, 0.6) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.4)',
            boxShadow: `
              0 4px 16px rgba(59, 130, 246, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.3),
              0 0 0 1px rgba(59, 130, 246, 0.2)
            `,
            backdropFilter: 'blur(20px) saturate(180%)'
          }}
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </a>
      </div>
    </nav>
  )
}
