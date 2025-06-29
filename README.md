# DOTpomodoro Landing Page

A beautiful, modern landing page for DOTpomodoro - the focus timer built to work for you.

## 🚀 Features

- **Modern Design** - Dark theme with blue accent colors and smooth animations
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile
- **Download Integration** - Direct DMG download with smooth page transitions
- **Installation Guide** - Step-by-step visual guide for macOS installation
- **Real Links** - Connected to actual GitHub repository and documentation

## 🛠️ Tech Stack

- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── thanks/            # Download thank you page
├── components/            # Reusable React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── hero-section.tsx  # Landing page hero
│   ├── features-section.tsx
│   ├── cta-section.tsx
│   └── footer.tsx
├── lib/                  # Utility functions
│   └── download.ts       # DMG download logic
└── public/               # Static assets
    ├── AppLogo.png       # DOTpomodoro app icon
    └── DOTpomodoro_v1.0.dmg # Actual app DMG file
```

## 🔗 Links

- **App Repository**: [harsha-cpp/dotpomodoro](https://github.com/harsha-cpp/dotpomodoro)
- **Documentation**: [DOTpomodoro User Guide](https://www.notion.so/DOTpomodoro-v1-1-Complete-Documentation-and-User-Guide-22161596d68a8001bf9eede52342fc2d)
- **Privacy Policy**: [Privacy Policy](https://www.notion.so/PRIVACY-POLICY-22161596d68a80d0ba30f95f08e2c942)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/harsha-cpp/dotpomodoro.web.git
cd dotpomodoro.web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is using the Vercel platform:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

## 🎨 Customization

### Colors
The design uses a blue gradient theme defined in `tailwind.config.js` and `globals.css`.

### Content
- Update hero text in `components/hero-section.tsx`
- Modify features in `components/features-section.tsx`
- Change installation steps in `app/thanks/page.tsx`

### Download
- Replace `public/DOTpomodoro_v1.0.dmg` with your app's DMG file
- Update filename in `lib/download.ts`

## 📱 Pages

- **/** - Main landing page with hero, features, and download CTA
- **/thanks** - Download confirmation with installation guide

## 🔧 Development

Built with modern web technologies and best practices:

- **TypeScript** for type safety
- **ESLint** for code quality
- **Tailwind CSS** for styling
- **Next.js** for SSR and optimization

## 📄 License

This project is for DOTpomodoro, a macOS productivity application.

## 👤 Author

**Sriharsha Tummalapalli**
- Email: sriharshatummalapalli@gmail.com
- GitHub: [harsha-cpp](https://github.com/harsha-cpp) 