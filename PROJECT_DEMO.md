# Store Rating App - Demo Guide

## 🚀 Live Demo
- **Frontend**: [Your Deployed URL]
- **Backend**: https://backend-store-rating-app-1.onrender.com

## 📋 Tech Stack
- **Frontend**: ReactJS + Vite + TailwindCSS
- **Backend**: ExpressJS + MongoDB
- **Authentication**: JWT + Role-based Access

## 👥 Demo Accounts

### System Administrator
```
Email: admin@demo.com
Password: 123456
```
**Features:**
- Dashboard with stats (Users, Stores, Ratings)
- Add new users (Admin, Store Owner, Normal User)
- View all users with filters
- View all stores with ratings
- User management

### Store Owner
```
Email: store@demo.com
Password: 123456
```
**Features:**
- Store dashboard
- View average rating
- See users who rated the store
- Password update

### Normal User
```
Email: user@demo.com
Password: 123456
```
**Features:**
- Browse all stores
- Search stores by name/address
- Submit ratings (1-5 stars)
- Modify existing ratings
- Password update

## 🎯 Key Features Implemented

### ✅ Authentication System
- Single login for all user types
- Role-based dashboard redirect
- JWT token authentication
- Password update functionality

### ✅ System Administrator
- Complete user management
- Store management with ratings
- Real-time statistics dashboard
- Advanced filtering options

### ✅ Rating System
- 1-5 star rating system
- Real-time rating updates
- Average rating calculation
- User-specific rating tracking

### ✅ Form Validations
- All fields required
- Email uniqueness validation
- Password minimum length
- Input sanitization

## 🛠️ Local Setup
```bash
cd store-rating-app-frontend
npm install
npm run dev
```

## 📱 Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Modern UI/UX design

## 🔒 Security Features
- Role-based access control
- Input validation
- XSS protection
- CORS enabled