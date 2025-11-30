# 🚀 DevControl - Personal Developer Control Center

<div align="center">
  <img src="public/favicon.svg" alt="DevControl Logo" width="64" height="64">
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

## ✨ Overview

DevControl is a modern, sleek landing page for a developer control center platform. Built with cutting-edge web technologies, it provides an elegant showcase for developer tools and workflow management solutions.

### 🌟 Features

- **Modern Design**: Beautiful dark theme with glassmorphism effects
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for speed with code splitting and lazy loading
- **Accessibility**: WCAG compliant with keyboard navigation support
- **SEO Ready**: Meta tags, Open Graph, and structured data
- **Cookie Consent**: GDPR-compliant cookie management
- **Error Handling**: Comprehensive error boundaries and fallbacks
- **Type Safety**: Full TypeScript support for reliable development

## 🛠️ Tech Stack

### Core Technologies
- **[React 19](https://reactjs.org/)** - Frontend framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[React Router](https://reactrouter.com/)** - Client-side routing

### Styling & UI
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[Lucide React](https://lucide.dev/)** - Beautiful icons

### 3D & Effects
- **[Three.js](https://threejs.org/)** - 3D graphics
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** - React Three.js integration
- **[React Three Drei](https://github.com/pmndrs/drei)** - Three.js helpers

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/devcontrol-landing-page.git
   cd devcontrol-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
devcontrol-landing-page/
├── components/           # React components
│   ├── pages/           # Page components
│   ├── ui/              # Reusable UI components
│   ├── ErrorBoundary.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ...
├── lib/                 # Utility functions
├── public/             # Static assets
│   ├── favicon.svg
│   └── favicon-16x16.svg
├── App.tsx             # Main app component
├── index.tsx           # App entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Component Architecture

### Core Components
- **`App.tsx`** - Main application wrapper with routing
- **`ErrorBoundary.tsx`** - Error handling component
- **`ScrollToTop.tsx`** - Auto-scroll on route changes
- **`CookieConsent.tsx`** - GDPR cookie consent

### Page Components
- **`LandingPage.tsx`** - Main landing page
- **`Privacy.tsx`** - Privacy policy
- **`Terms.tsx`** - Terms of service
- **`Documentation.tsx`** - API documentation
- **`Community.tsx`** - Community links

### UI Components
- **`ProfessionalBackground.tsx`** - Animated background
- **`BorderBeam.tsx`** - Animated border effects
- **`ShootingStars.tsx`** - Star animation effects

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run type-check` | Run TypeScript checks |
| `npm run clean` | Clean build artifacts |

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy Options

#### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

#### Netlify
1. Run `npm run build`
2. Deploy `dist/` folder to Netlify
3. Set up continuous deployment

#### Static Hosting
1. Run `npm run build`
2. Upload `dist/` folder contents to any static host

## ⚡ Performance Optimizations

- **Code Splitting**: Automatic chunk splitting by route and vendor
- **Tree Shaking**: Removes unused code from bundles
- **Image Optimization**: Lazy loading and modern formats
- **Bundle Analysis**: Optimized chunk sizes
- **Caching**: Proper cache headers for static assets

## 🔒 Security Features

- **Content Security Policy**: Prevents XSS attacks
- **Environment Variables**: Secure API key management
- **Input Sanitization**: Safe user input handling
- **HTTPS Only**: Production deploys require HTTPS

## 🌍 Browser Support

- **Chrome** (last 2 versions)
- **Firefox** (last 2 versions)
- **Safari** (last 2 versions)
- **Edge** (last 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Team](https://reactjs.org/) - For the amazing framework
- [Vite Team](https://vitejs.dev/) - For the blazing fast build tool
- [TailwindCSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Framer](https://www.framer.com/) - For the smooth animation library

## 📞 Support

For support, please open an issue on GitHub or contact us at [support@devcontrol.com](mailto:support@devcontrol.com).

---

<div align="center">
  <p>Built with ❤️ by the DevControl Team</p>
</div>
