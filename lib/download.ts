export function downloadDMG() {
  try {
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = '/DOTpomodoro_v1.0.dmg' // DMG file should be placed in public folder
    link.download = 'DOTpomodoro_v1.0.dmg'
    link.style.display = 'none'
    
    // Add to DOM, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Add smooth fade transition before redirect
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.3s ease-out'
      document.body.style.opacity = '0'
      
      setTimeout(() => {
        window.location.href = '/thanks'
      }, 300)
    }, 800)
  } catch (error) {
    console.error('Download failed:', error)
    // Still redirect to thanks page for demo purposes
    window.location.href = '/thanks'
  }
}

export function trackDownload() {
  // Track download event (can be integrated with analytics)
  if (typeof window !== 'undefined') {
    // Example: gtag('event', 'download', { file_name: 'DOTpomodoro_v1.0.dmg' })
    console.log('Download tracked: DOTpomodoro_v1.0.dmg')
  }
} 