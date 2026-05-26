# 🚀 TaskMaster - Modern Task Management Platform

![TaskMaster Banner](https://via.placeholder.com/1200x400/8b5cf6/ffffff?text=TaskMaster)

TaskMaster is a premium, production-ready task management web application built with modern technologies. It features a stunning SaaS dashboard with glassmorphism effects, dark/light mode, drag-and-drop functionality, and comprehensive task management capabilities.

## ✨ Features

### 🎨 UI/UX
- **Premium Design** - Modern SaaS dashboard with glassmorphism effects
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Responsive Layout** - Fully responsive on mobile, tablet, laptop, and desktop
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Beautiful Charts** - Recharts integration for analytics

### 🔐 Authentication
- Login / Signup with validation
- Forgot password flow with OTP verification
- Password reset functionality
- Social login options (GitHub, Twitter)
- JWT token management

### 📋 Task Management
- Create, Read, Update, Delete tasks
- Task priorities (Low, Medium, High)
- Task categories and tags
- Due dates and reminders
- Subtasks support
- Comments and attachments
- Task filtering and search
- Sort and pagination

### 🎯 Kanban Board
- Drag & drop functionality with DnD Kit
- Multiple columns (Todo, In Progress, Review, Completed)
- Animated drag effects
- Responsive board layout

### 📅 Calendar Integration
- Monthly and weekly calendar views
- Task scheduling
- Deadline highlights
- Upcoming events section

### 👥 Team Collaboration
- Team members directory
- User profiles with avatars
- Activity feed
- Task assignments
- Real-time updates

### 📊 Analytics Dashboard
- Task completion statistics
- Productivity charts
- Performance metrics
- Team activity tracking
- Weekly progress reports

### 🔧 Admin Panel
- User management
- System analytics
- Reports generation
- Activity logs
- Settings management

### ⚙️ Settings & Profile
- User profile management
- Account security settings
- Notification preferences
- Theme customization
- Language selection

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Routing
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### UI Components & Icons
- **Lucide React** - Beautiful icons
- **Recharts** - Charts and graphs
- **FullCalendar** - Calendar integration
- **React Hot Toast** - Toast notifications

### Drag & Drop
- **DnD Kit** - Drag and drop functionality

### HTTP Client
- **Axios** - API requests with interceptors

## 📁 Project Structure


# 🚀 TaskMaster - Modern Task Management Platform

![TaskMaster Banner](https://via.placeholder.com/1200x400/8b5cf6/ffffff?text=TaskMaster)

TaskMaster is a premium, production-ready task management web application built with modern technologies. It features a stunning SaaS dashboard with glassmorphism effects, dark/light mode, drag-and-drop functionality, and comprehensive task management capabilities.

## ✨ Features

### 🎨 UI/UX
- **Premium Design** - Modern SaaS dashboard with glassmorphism effects
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Responsive Layout** - Fully responsive on mobile, tablet, laptop, and desktop
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Beautiful Charts** - Recharts integration for analytics

### 🔐 Authentication
- Login / Signup with validation
- Forgot password flow with OTP verification
- Password reset functionality
- Social login options (GitHub, Twitter)
- JWT token management

### 📋 Task Management
- Create, Read, Update, Delete tasks
- Task priorities (Low, Medium, High)
- Task categories and tags
- Due dates and reminders
- Subtasks support
- Comments and attachments
- Task filtering and search
- Sort and pagination

### 🎯 Kanban Board
- Drag & drop functionality with DnD Kit
- Multiple columns (Todo, In Progress, Review, Completed)
- Animated drag effects
- Responsive board layout

### 📅 Calendar Integration
- Monthly and weekly calendar views
- Task scheduling
- Deadline highlights
- Upcoming events section

### 👥 Team Collaboration
- Team members directory
- User profiles with avatars
- Activity feed
- Task assignments
- Real-time updates

### 📊 Analytics Dashboard
- Task completion statistics
- Productivity charts
- Performance metrics
- Team activity tracking
- Weekly progress reports

### 🔧 Admin Panel
- User management
- System analytics
- Reports generation
- Activity logs
- Settings management

### ⚙️ Settings & Profile
- User profile management
- Account security settings
- Notification preferences
- Theme customization
- Language selection

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Routing
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### UI Components & Icons
- **Lucide React** - Beautiful icons
- **Recharts** - Charts and graphs
- **FullCalendar** - Calendar integration
- **React Hot Toast** - Toast notifications

### Drag & Drop
- **DnD Kit** - Drag and drop functionality

### HTTP Client
- **Axios** - API requests with interceptors

## 📁 Project Structure
taskmaster/
├── src/
│ ├── assets/ # Static assets
│ ├── components/ # Reusable components
│ │ ├── common/ # Common components
│ │ ├── dashboard/ # Dashboard components
│ │ ├── layout/ # Layout components
│ │ ├── tasks/ # Task components
│ │ ├── forms/ # Form components
│ │ ├── charts/ # Chart components
│ │ └── ui/ # UI components
│ ├── pages/ # Page components
│ │ ├── auth/ # Authentication pages
│ │ ├── dashboard/ # Dashboard pages
│ │ ├── admin/ # Admin pages
│ │ ├── tasks/ # Task pages
│ │ ├── settings/ # Settings pages
│ │ └── profile/ # Profile pages
│ ├── layouts/ # Layout wrappers
│ ├── routes/ # Route configuration
│ ├── hooks/ # Custom hooks
│ ├── store/ # Zustand stores
│ ├── services/ # API services
│ ├── utils/ # Utility functions
│ ├── constants/ # Constants
│ ├── mock/ # Mock data
│ ├── data/ # Static data
│ ├── styles/ # Global styles
│ ├── App.jsx # Main app component
│ └── main.jsx # Entry point
├── public/ # Public assets
├── index.html # HTML template
├── package.json # Dependencies
├── vite.config.js # Vite configuration
├── tailwind.config.js # Tailwind CSS config
├── postcss.config.js # PostCSS config
└── README.md # Documentation


## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/taskmaster.git
cd taskmaster

Install dependencies
npm install
# or
yarn install

npm install
# or
yarn install
cp .env.example .env

Start development server

npm run dev
# or
yarn dev

Build for production
npm run build
# or
yarn build

Preview production build
npm run preview
# or
yarn preview

🔧 Configuration
Environment Variables
Create a .env file in the root directory:
# App Configuration
VITE_APP_NAME=TaskMaster
VITE_APP_VERSION=1.0.0

# API Configuration
VITE_API_URL=http://localhost:3000/api
VITE_USE_MOCK=true
VITE_USE_API=false

# Feature Flags
VITE_ENABLE_NOTIFICATIONS=true
VITE_ENABLE_ANALYTICS=true

Path Aliases
The project uses path aliases for cleaner imports:

import Button from '@components/ui/Button'
import { useAuthStore } from '@store/useAuthStore'
import { formatDate } from '@utils/formatDate'

Available aliases:

@/* - src folder

@components/* - components folder

@pages/* - pages folder

@utils/* - utils folder

@hooks/* - hooks folder

@store/* - store folder

@services/* - services folder

@constants/* - constants folder

@styles/* - styles folder

@assets/* - assets folder

@data/* - data folder

@mock/* - mock folder

@layouts/* - layouts folder

@routes/* - routes folder

📱 Responsive Design
The application is fully responsive across all devices:

Device	Breakpoint	Features
Mobile	< 768px	Collapsible sidebar, optimized cards
Tablet	768px - 1024px	Adjusted layout, touch-friendly
Desktop	> 1024px	Full layout, sidebars visible
Large	> 1536px	Enhanced spacing, larger containers
🎨 Customization
Theme Colors
Modify colors in tailwind.config.js:

javascript
colors: {
  primary: {
    500: '#8b5cf6',
    600: '#7c3aed',
    // ...
  }
}
Adding New Pages
Create page component in src/pages/

Add route in src/routes/AppRoutes.jsx

Add navigation item in sidebar (if needed)

Adding New API Endpoints
Add endpoint in src/constants/apiEndpoints.js

Create service method in appropriate service file

Use in components with React Query or useEffect

🧪 Testing
bash
# Run tests (when implemented)
npm run test

# Run linting
npm run lint

# Format code
npm run format
📦 Building for Production
bash
# Create production build
npm run build

# The build will be in the 'dist' folder
# Optimized with:
# - Code splitting
# - Tree shaking
# - Minification
# - Compression
🚢 Deployment
Deploy to Vercel
bash
npm install -g vercel
vercel
Deploy to Netlify
bash
npm install -g netlify-cli
netlify deploy
Deploy to GitHub Pages
bash
npm run build
npm run deploy
🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

Commit Convention
feat: New feature

fix: Bug fix

docs: Documentation

style: Code style

refactor: Code refactor

perf: Performance improvement

test: Testing

chore: Maintenance

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
React

Vite

Tailwind CSS

Framer Motion

Lucide Icons

Recharts

📞 Support
For support, email support@taskmaster.app or open an issue in the GitHub repository.

🌟 Show your support
Give a ⭐️ if this project helped you!

Built with ❤️ by the TaskMaster Team

text

## Alternative Simple Version

If you prefer a shorter, more concise README:

```markdown
# TaskMaster - Modern Task Management Platform

A premium, production-ready task management web application with modern SaaS dashboard design.

## Features

- ✅ Modern SaaS Dashboard with Glassmorphism
- ✅ Dark/Light Mode Support
- ✅ Complete Task Management (CRUD)
- ✅ Drag & Drop Kanban Board
- ✅ Calendar Integration
- ✅ Team Collaboration
- ✅ Analytics & Charts
- ✅ Admin Panel
- ✅ User Profiles & Settings
- ✅ Fully Responsive Design
- ✅ JWT Authentication
- ✅ Real-time Notifications

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Zustand
- React Router DOM
- Axios
- Recharts
- DnD Kit
- FullCalendar

## Quick Start

```bash
# Clone repository
git clone https://github.com/rim_sha47/taskmaster.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
Environment Variables
Create .env file:

env
VITE_API_URL=http://localhost:3000/api
VITE_USE_MOCK=true
Project Structure
text
src/
├── components/     # Reusable components
├── pages/         # Page components
├── layouts/       # Layout wrappers
├── hooks/         # Custom hooks
├── store/         # Zustand stores
├── services/      # API services
├── utils/         # Utilities
├── constants/     # Constants
├── styles/        # Global styles
└── routes/        # Route config
Available Scripts
npm run dev - Start development server

npm run build - Build for production

npm run preview - Preview production build

npm run lint - Run ESLint

npm run format - Format code with Prettier

License
MIT

Made with ❤️ by TaskMaster Team

text

This README provides comprehensive documentation for your TaskMaster application, including setup instructions, features, tech stack, project structure, and deployment guides. It's designed to be both developer-friendly and professional for potential users or contributors.


