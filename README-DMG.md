# DMG Download Setup

## Overview
This landing page includes download functionality for a macOS DMG file. When users click the "Download for macOS" button, it will trigger a download and redirect them to a "Thanks for downloading" page with installation instructions.

## Setup Instructions

### 1. Add the DMG File
Place your actual `DOTpomodoro_v1.0.dmg` file in the `/public` folder of this project. The file should be named exactly `DOTpomodoro_v1.0.dmg`.

```
public/
  - DOTpomodoro_v1.0.dmg  <-- Place your DMG file here
  - AppLogo.png
  - ...other files
```

### 2. Download Functionality
The download is handled by the `downloadDMG()` function in `/lib/download.ts` which:
- Creates a download link for `/DOTpomodoro_v1.0.dmg`
- Triggers the download automatically
- Redirects to `/thanks` page after 500ms
- Tracks the download event (ready for analytics integration)

### 3. Thanks Page
The `/thanks` page includes:
- Success message and download confirmation
- Step-by-step installation guide with visual mockups
- Security note about macOS Gatekeeper
- Links back to the main site

## Files Modified
- `components/hero-section.tsx` - Added download functionality to hero button
- `components/cta-section.tsx` - Added download functionality to CTA button  
- `app/thanks/page.tsx` - Created thanks page with installation guide
- `lib/download.ts` - Created download utility functions

## Testing
To test without a real DMG file:
1. The download will still trigger (but may show a 404 for the DMG)
2. The redirect to `/thanks` will still work
3. The thanks page will display properly

## Production Notes
- Ensure the DMG file is properly signed for macOS distribution
- Consider adding file size information to the download buttons
- Test download functionality across different browsers
- Monitor download analytics if tracking is implemented