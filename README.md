# Kasbah Learn Hub - Frontend 🎨

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.ts-15.x-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<!-- [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT) -->

[![Build Status](https://img.shields.io/github/actions/workflow/status/kasbah-learn-hub/Front-End/ci.yml?branch=main&style=for-the-badge)](https://github.com/kasbah-learn-hub/Front-End/actions)
[![Code Coverage](https://img.shields.io/codecov/c/github/kasbah-learn-hub/Front-End?style=for-the-badge)](https://codecov.io/gh/kasbah-learn-hub/Front-End)

<!-- [![Bundle Size](https://img.shields.io/bundlephobia/minzip/Front-End?style=for-the-badge)](https://bundlephobia.com/package/Front-End) -->

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

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run start
```

### Docker

#### Using Docker CLI

```bash
# Build the production image
npm run docker:build

# Run the production container
npm run docker:run

# Build the development image
npm run docker:build:dev

# Run the development container (with hot reload, mapped to port 3001)
npm run docker:run:dev
```

#### Using Docker Compose

```bash
# Start production environment
docker-compose up app

# Start development environment
docker-compose up app-dev

# Start in detached mode (background)
docker-compose up -d app
```

#### Custom Docker Scripts (in package.json)

- `docker:build` – Build production image (`docker build -t il .`)
- `docker:run` – Run production container (`docker run -p 3000:3000 --env-file .env.production.local il`)
- `docker:build:dev` – Build development image (`docker build -t il-dev -f Dockerfile.dev .`)
- `docker:run:dev:win` – Run development container on Windows (`docker run -p 3001:3000 --env-file .env.development.local -v %cd%:/app il-dev`)
- `docker:run:dev:unix` – Run development container on WSL/macOS/Linux (`docker run -p 3001:3000 --env-file .env.development.local -v $(pwd):/app il-dev`)

> Use `docker:run:dev:win` on Windows and `docker:run:dev:unix` on WSL/macOS/Linux for the correct volume mapping.

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
