"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CheckCircle, ArrowLeft, Download, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function ThanksPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black animate-fadeIn">
      {/* Header */}
      <header className="relative z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/AppLogo.png" alt="DOTpomodoro" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold text-white">DOTpomodoro</span>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Thanks for downloading{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                DOTpomodoro!
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your download should start automatically. Follow the installation steps below to get started.
            </p>
          </div>

          {/* Installation Steps */}
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold text-white">Installation Guide</h2>
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border-0 text-white hover:text-white transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
                    }}
                  >
                    {/* Liquid animation background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    
                    {/* Moving gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center">
                      <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium">Watch Video</span>
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/50 to-purple-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full bg-gray-900 border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-white text-xl">DOTpomodoro Installation Video</DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                    {/* YouTube Video Player */}
                    <iframe
                      src="https://www.youtube.com/embed/RD9SSWP2XH0"
                      title="DOTpomodoro Installation Guide"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="text-center pt-4">
                    <p className="text-gray-400 text-sm">
                      Having trouble? You can also follow the step-by-step guide below.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white text-sm font-bold rounded-full">1</span>
                  <h3 className="text-xl font-semibold text-white">Open the DMG file</h3>
                </div>
                <p className="text-gray-300 ml-11">
                  Locate the downloaded DOTpomodoro_v1.0.dmg file in your Downloads folder and double-click to open it.
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex flex-col items-center justify-center border border-gray-600">
                  {/* Mock Finder Window */}
                  <div className="w-full max-w-sm">
                    <div className="bg-gray-700 rounded-t-lg p-2 flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-300 ml-2">Downloads</span>
                    </div>
                    <div className="bg-gray-800 rounded-b-lg p-4">
                      <div className="flex items-center space-x-3 p-2 bg-blue-600/20 rounded">
                        <Download className="w-8 h-8 text-blue-400" />
                        <span className="text-sm text-white">DOTpomodoro_v1.0.dmg</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white text-sm font-bold rounded-full">2</span>
                  <h3 className="text-xl font-semibold text-white">Drag to Applications</h3>
                </div>
                <p className="text-gray-300 ml-11">
                  Drag the DOTpomodoro app icon to your Applications folder to install it.
                </p>
              </div>
              <div className="md:order-1 bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-600">
                  {/* Mock DMG Window */}
                  <div className="w-full max-w-sm">
                    <div className="bg-gray-700 rounded-t-lg p-2 flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-300 ml-2">DOTpomodoro</span>
                    </div>
                    <div className="bg-gray-800 rounded-b-lg p-6 flex justify-between items-center">
                      <div className="text-center">
                        <img src="/AppLogo.png" alt="App Icon" className="w-12 h-12 mx-auto mb-1 rounded-lg shadow-lg" />
                        <span className="text-xs text-gray-300">DOTpomodoro</span>
                      </div>
                      <div className="text-blue-400 text-2xl">→</div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-1 rounded-lg bg-blue-600/20 flex items-center justify-center">
                          <span className="text-blue-400 text-lg">📁</span>
                        </div>
                        <span className="text-xs text-gray-300">Applications</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white text-sm font-bold rounded-full">3</span>
                  <h3 className="text-xl font-semibold text-white">Launch the app</h3>
                </div>
                <p className="text-gray-300 ml-11">
                  Open DOTpomodoro from your Applications folder or Launchpad. Click on the app icon to launch your focus timer.
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex flex-col items-center justify-center border border-gray-600">
                  {/* Mock Launchpad */}
                  <div className="w-full max-w-sm p-4">
                    <div className="text-center mb-4">
                      <div className="text-xs text-gray-400">Launchpad</div>
                    </div>
                    {/* App Icons Grid */}
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      {/* Row 1 */}
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-xl"></div>
                      </div>
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-xl"></div>
                      </div>
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-xl"></div>
                      </div>
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-xl"></div>
                      </div>
                      
                      {/* Row 2 - DOTpomodoro among other apps */}
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-xl"></div>
                      </div>
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-12 h-12 rounded-xl overflow-hidden">
                          <img src="/AppLogo.png" alt="DOTpomodoro" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-xl"></div>
                      </div>
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-xl"></div>
                      </div>
                    </div>
                    
                    {/* Page Dots */}
                    <div className="flex justify-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white text-sm font-bold rounded-full">4</span>
                <h3 className="text-xl font-semibold text-white">Open at Login</h3>
              </div>
              <p className="text-gray-300 ml-11">
                Go to System Preferences → Login Items & Extensions → Open at Login, then click the + button and add DOTpomodoro to start automatically.
              </p>
            </div>
            <div className="md:order-1 bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-600">
                {/* Mock System Preferences Window */}
                <div className="w-full max-w-sm">
                  <div className="bg-gray-700 rounded-t-lg p-2 flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-300 ml-2">Login Items & Extensions</span>
                  </div>
                  <div className="bg-gray-800 rounded-b-lg p-4">
                    <div className="mb-3">
                      <div className="text-xs text-gray-400 mb-2">Open at Login</div>
                      <div className="text-xs text-gray-500 mb-3">These items will open automatically when you log in.</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Item</span>
                        <span className="text-gray-400">Kind</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-600/20 rounded">
                        <div className="flex items-center space-x-2">
                          <img src="/AppLogo.png" alt="DOTpomodoro" className="w-4 h-4 rounded" />
                          <span className="text-white text-xs">DOTpomodoro</span>
                        </div>
                        <span className="text-gray-300 text-xs">Application</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="w-4 h-4 bg-gray-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs">+</span>
                        </div>
                        <div className="w-4 h-4 bg-gray-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs">−</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                     </div>

          {/* Security Note */}
          <div className="mt-12 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Security Note</h3>
            <p className="text-gray-300">
              If macOS prevents the app from opening, go to System Preferences → Security & Privacy → General, 
              and click "Open Anyway" next to the DOTpomodoro message.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">Need help? Join our community or check the documentation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:text-white"
                asChild
              >
                <a href="https://www.notion.so/DOTpomodoro-v1-1-Complete-Documentation-and-User-Guide-22161596d68a8001bf9eede52342fc2d?source=copy_link" target="_blank" rel="noopener noreferrer">
                  View Documentation
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:text-white"
                asChild
              >
                <Link href="/">
                  Join Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 