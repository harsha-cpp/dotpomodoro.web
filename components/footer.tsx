"use client"

import Link from "next/link"

export function Footer() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/AppLogo.png" alt="DOTpomodoro" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">DOTpomodoro</span>
            </div>
            <p className="text-gray-400 max-w-md">
              The focus timer built to work for you. Stay productive with deep work, Pomodoro, and task syncing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 md:justify-end">
            <div className="space-y-2">
              <h3 className="font-semibold mb-3 text-blue-400">Product</h3>
              <div className="space-y-2">
                <button 
                  onClick={scrollToFeatures}
                  className="block text-gray-400 hover:text-blue-400 transition-colors text-left"
                >
                  Features
                </button>
                <button 
                  onClick={scrollToTop}
                  className="block text-gray-400 hover:text-blue-400 transition-colors text-left"
                >
                  Download
                </button>
                <a href="https://github.com/harsha-cpp/dotpomodoro" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  GitHub
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold mb-3 text-blue-400">Support</h3>
              <div className="space-y-2">
                <a href="https://www.notion.so/DOTpomodoro-v1-1-Complete-Documentation-and-User-Guide-22161596d68a8001bf9eede52342fc2d?source=copy_link" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  Docs
                </a>
                <a href="https://www.notion.so/PRIVACY-POLICY-22161596d68a80d0ba30f95f08e2c942?source=copy_link" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
                <Link href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DOTpomodoro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
