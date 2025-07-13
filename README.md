# Kasbah Learn Hub - Frontend 🎨

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.ts-15.x-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
<!-- [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT) -->

[![Build Status](https://img.shields.io/github/actions/workflow/status/kasbah-learn-hub/Front-End/ci.yml?branch=main&style=for-the-badge)](https://github.com/kasbah-learn-hub/Front-End/actions)
[![Code Coverage](https://img.shields.io/codecov/c/github/kasbah-learn-hub/Front-End?style=for-the-badge)](https://codecov.io/gh/kasbah-learn-hub/Front-End)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/kasbah-frontend?style=for-the-badge)](https://bundlephobia.com/package/kasbah-frontend)
[![Version](https://img.shields.io/github/package-json/v/kasbah-learn-hub/Front-End?style=for-the-badge)](https://github.com/kasbah-learn-hub/Front-End/releases)

Modern, responsive React-based frontend for the Kasbah Learn Hub LMS platform. Built with cutting-edge web technologies to deliver an intuitive and engaging learning experience.

## 🚀 Tech Stack

- **React 19** with TypeScript
- **Next.js 15** for server-side rendering and routing
- **Tailwind CSS** for modern, responsive styling
- **Zustand/Redux Toolkit** for state management
- **React Query** for API data fetching
- **Framer Motion** for smooth animations
- **Recharts** for data visualization
- **Socket.io Client** for real-time features

## ✨ Features

- 📱 Fully responsive design across all devices
- 🎨 Modern, accessible UI components
- ⚡ Optimized performance with lazy loading
- 🔐 JWT-based authentication integration
- 📊 Interactive dashboards and progress tracking
- 🎬 Video player with custom controls
- 💬 Real-time chat and notifications
- 🌙 Dark/light theme support
- 🔍 Advanced search and filtering
- 📈 Analytics and reporting
- 🎯 Personalized learning paths
- 🏆 Gamification elements

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/kasbah-learn-hub/Front-End.git

# Navigate to project directory
cd kasbah-frontend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run type-check   # Run TypeScript type checking
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME=Kasbah Learn Hub
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Tailwind CSS

Tailwind is configured in `tailwind.config.js` with custom theme extensions for the Kasbah brand.

## 🧪 Testing

- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Cypress
- **Coverage**: 80%+ target

```bash
npm run test              # Run unit tests
npm run test:e2e         # Run e2e tests
npm run test:coverage    # Generate coverage report
```

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run start
```

### Docker

```bash
docker build -t kasbah-frontend .
docker run -p 3000:3000 kasbah-frontend
```

## 🔗 Related Repositories

- [Backend API](https://github.com/kasbah-learn-hub/Back-End) - Node.js/Express REST API
- [Admin Dashboard](https://github.com/kasbah-learn-hub/Admin) - Administrative interface
- [Mobile App](https://github.com/kasbah-learn-hub/Mobile) - React Native mobile app

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.2s
- **Bundle Size**: < 300KB gzipped
- **Time to Interactive**: < 3s

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- ESLint + Prettier for formatting
- Husky for pre-commit hooks
- Conventional commits required

<!-- ## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. -->

## 🎓 About Kasbah Learn Hub

We're a tech-driven team building a modern LMS to make learning more accessible, efficient, and engaging. Our mission is to revolutionize online education through innovative technology and user-centric design.

---

<div align="center">
  <strong>Made with ❤️ by the Kasbah Team</strong>
  <br>
  <em>Making learning accessible for everyone</em> 🚀
</div>