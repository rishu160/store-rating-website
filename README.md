# Business Rating Platform

A modern, full-stack web application for business rating and review management.

## 🚀 Features

### Multi-Role Authentication System
- **System Administrator**: Complete platform management
- **Business Owner**: Store management and analytics  
- **Customer**: Rating and review submission

### Core Functionality
- Real-time business ratings (1-5 stars)
- Advanced search and filtering
- Role-based dashboard access
- Comprehensive user management
- Business analytics and insights

## 🛠️ Technology Stack

- **Frontend**: React.js, Vite, TailwindCSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Authentication**: JWT with role-based access
- **UI Components**: Custom React components
- **State Management**: Redux Toolkit

## 📦 Installation & Setup

```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to project directory
cd business-rating-platform

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎯 User Roles & Permissions

### System Administrator
- Dashboard with platform statistics
- User management (Create, Read, Update)
- Business management and oversight
- Advanced filtering and reporting

### Business Owner
- Personal business dashboard
- Customer rating analytics
- Review management
- Profile customization

### Customer/User
- Browse business directory
- Submit and modify ratings
- Advanced search functionality
- Account management

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌐 Environment Configuration

Create a `.env` file in the root directory:

```env
VITE_USE_URL=local
VITE_API_BASE_URL=your-backend-url
```

## 📱 Responsive Design

- Mobile-first approach
- Cross-browser compatibility
- Modern UI/UX principles
- Accessibility compliant

## 🔒 Security Features

- Input validation and sanitization
- XSS protection
- CORS configuration
- Secure authentication flow
- Role-based route protection

## 📊 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Route-based page components
├── utils/              # Helper functions and utilities
├── redux-store/        # State management
├── Icons/              # Icon components
└── assets/             # Static assets
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Created with ❤️ by [Your Name]

---

*A professional solution for modern business rating and review management.*