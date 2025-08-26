# WearWell - Full Stack E-Commerce Platform

A modern, full-stack e-commerce application built with React, Node.js, Express, and MongoDB. The platform includes a customer-facing frontend, an admin panel for management, and a robust backend API.

## 🏗️ Architecture Overview

```
ShopEase/
├── frontend/          # Customer-facing React application
├── admin/            # Admin panel React application  
├── backend/          # Node.js/Express API server
└── README.md         # Project documentation
```

## 🚀 Technology Stack

### Frontend (Customer App)
- **Framework**: React 19.1.0 with Vite
- **Styling**: TailwindCSS 4.1.8
- **Routing**: React Router DOM 7.6.2
- **State Management**: React Context API
- **Authentication**: Firebase Auth + Google OAuth
- **HTTP Client**: Axios 1.9.0
- **UI Components**: React Icons, React Toastify
- **Build Tool**: Vite 6.3.5

### Admin Panel
- **Framework**: React 19.1.0 with Vite
- **Styling**: TailwindCSS 4.1.8
- **Routing**: React Router DOM 7.6.2
- **State Management**: React Context API
- **HTTP Client**: Axios 1.9.0
- **UI Components**: React Icons, React Toastify
- **Build Tool**: Vite 6.3.5

### Backend (API Server)
- **Runtime**: Node.js with Express 5.1.0
- **Database**: MongoDB with Mongoose 8.15.1
- **Authentication**: JWT + bcryptjs
- **File Upload**: Multer 2.0.1 + Cloudinary 2.6.1
- **Payment**: Razorpay 2.9.6
- **Security**: CORS, Cookie Parser
- **Development**: Nodemon 3.1.10
- **Validation**: Validator 13.15.15

## 📁 Project Structure

### Frontend Application (`/frontend`)
```
frontend/
├── public/
│   └── logo.png
├── src/
│   ├── assets/           # Images, icons, media files
│   ├── component/        # Reusable UI components
│   │   ├── Ai.jsx           # AI chat component
│   │   ├── Backgound.jsx    # Background component
│   │   ├── BestSeller.jsx   # Best seller products
│   │   ├── Card.jsx         # Product card component
│   │   ├── CartTotal.jsx    # Cart total calculator
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Hero.jsx         # Hero section
│   │   ├── LatestCollection.jsx # Latest products
│   │   ├── Loading.jsx      # Loading spinner
│   │   ├── Nav.jsx          # Navigation bar
│   │   ├── NewLetterBox.jsx # Newsletter subscription
│   │   ├── OurPolicy.jsx    # Policy section
│   │   ├── RelatedProduct.jsx # Related products
│   │   └── Title.jsx        # Section titles
│   ├── context/          # React Context providers
│   │   ├── AuthContext.jsx  # Authentication context
│   │   ├── ShopContext.jsx  # Shopping context
│   │   └── UserContext.jsx  # User data context
│   ├── pages/            # Page components
│   │   ├── About.jsx        # About page
│   │   ├── Cart.jsx         # Shopping cart
│   │   ├── Collections.jsx  # Product collections
│   │   ├── Contact.jsx      # Contact page
│   │   ├── Home.jsx         # Homepage
│   │   ├── Login.jsx        # Login page
│   │   ├── NotFound.jsx     # 404 page
│   │   ├── Order.jsx        # Order history
│   │   ├── PlaceOrder.jsx   # Checkout page
│   │   ├── Product.jsx      # Product listing
│   │   ├── ProductDetail.jsx # Product details
│   │   └── Registration.jsx # User registration
│   ├── utils/            # Utility functions
│   │   └── Firebase.js      # Firebase configuration
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

### Admin Panel (`/admin`)
```
admin/
├── public/
│   ├── logo.png
│   └── vite.svg
├── src/
│   ├── assets/           # Admin panel assets
│   │   ├── logo.png
│   │   ├── upload image.jpeg
│   │   └── upload image.jpg
│   ├── component/        # Admin UI components
│   │   ├── Loading.jsx      # Loading component
│   │   ├── Nav.jsx          # Admin navigation
│   │   └── Sidebar.jsx      # Admin sidebar
│   ├── context/          # Admin contexts
│   │   ├── AdminContext.jsx # Admin authentication
│   │   └── AuthContext.jsx  # Auth context
│   ├── pages/            # Admin pages
│   │   ├── Add.jsx          # Add new product
│   │   ├── Home.jsx         # Admin dashboard
│   │   ├── Lists.jsx        # Product management
│   │   ├── Login.jsx        # Admin login
│   │   └── Orders.jsx       # Order management
│   ├── App.jsx           # Admin app component
│   ├── main.jsx          # Admin entry point
│   └── index.css         # Admin styles
├── package.json          # Admin dependencies
└── vite.config.js        # Admin Vite config
```

### Backend API (`/backend`)
```
backend/
├── config/               # Configuration files
│   ├── cloudinary.js        # Cloudinary setup
│   ├── db.js               # MongoDB connection
│   └── token.js            # JWT token utilities
├── controller/           # Route controllers
│   ├── authController.js    # Authentication logic
│   ├── cartController.js    # Cart operations
│   ├── orderController.js   # Order management
│   ├── productController.js # Product CRUD
│   └── userController.js    # User management
├── middleware/           # Custom middleware
│   ├── adminAuth.js        # Admin authorization
│   ├── isAuth.js           # User authentication
│   └── multer.js           # File upload handling
├── model/                # Database models
│   ├── orderModel.js       # Order schema
│   ├── productModel.js     # Product schema
│   └── userModel.js        # User schema
├── routes/               # API routes
│   ├── authRoutes.js       # Authentication routes
│   ├── cartRoutes.js       # Cart routes
│   ├── orderRoutes.js      # Order routes
│   ├── productRoutes.js    # Product routes
│   └── userRoutes.js       # User routes
├── public/               # Static files
├── index.js              # Server entry point
└── package.json          # Backend dependencies
```

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String,
  cartData: Object (default: {}),
  timestamps: true
}
```

### Product Model
```javascript
{
  name: String (required),
  image1: String (required),
  image2: String (required),
  image3: String (required),
  image4: String (required),
  description: String (required),
  price: Number (required),
  category: String (required),
  subCategory: String (required),
  sizes: Array (required),
  date: Number (required),
  bestseller: Boolean,
  timestamps: true
}
```

### Order Model
```javascript
{
  userId: String (required),
  items: Array (required),
  amount: Number (required),
  address: Object (required),
  status: String (default: 'Order Placed'),
  paymentMethod: String (required),
  payment: Boolean (default: false),
  date: Number (required),
  timestamps: true
}
```

## 🔐 Authentication & Authorization

### Frontend Authentication
- **Firebase Authentication** with Google OAuth integration
- **JWT tokens** for API communication
- **Protected routes** with React Router guards
- **Context-based** state management for user data

### Backend Security
- **JWT token** validation middleware
- **Admin authorization** middleware
- **bcryptjs** for password hashing
- **CORS** configuration for cross-origin requests
- **Cookie-based** authentication

## 🛣️ API Routes

### Authentication Routes (`/api/auth`)
- User registration and login
- Admin authentication
- Token validation

### User Routes (`/api/user`)
- User profile management
- User data operations

### Product Routes (`/api/product`)
- Product CRUD operations
- Product filtering and search
- Image upload handling

### Cart Routes (`/api/cart`)
- Add/remove items from cart
- Update cart quantities
- Cart data management

### Order Routes (`/api/order`)
- Place new orders
- Order history
- Order status updates
- Payment processing

## 🎨 Frontend Features

### Customer Application
- **Homepage** with hero section, latest collections, and best sellers
- **Product catalog** with filtering and search
- **Product details** with image gallery and size selection
- **Shopping cart** with quantity management
- **Checkout process** with address and payment options
- **Order tracking** and history
- **User authentication** with Google OAuth
- **AI chat component** for customer support
- **Responsive design** with TailwindCSS
- **Newsletter subscription**
- **Company policies** and about page

### Admin Panel
- **Dashboard** with overview statistics
- **Product management** (add, edit, delete products)
- **Order management** with status updates
- **Image upload** functionality
- **Admin authentication**
- **Responsive admin interface**

## 🔧 Development Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Cloudinary account (for image storage)
- Firebase project (for authentication)
- Razorpay account (for payments)

### Environment Variables

#### Frontend (`.env`)
```
VITE_FIREBASE_APIKEY=your_firebase_api_key
```

#### Backend (`.env`)
```
PORT=6000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### Installation & Running

1. **Backend Setup**
```bash
cd backend
npm install
npm run dev
```

2. **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

3. **Admin Panel Setup**
```bash
cd admin
npm install
npm run dev
```

### Default Ports
- Backend API: `http://localhost:6000`
- Frontend App: `http://localhost:5173`
- Admin Panel: `http://localhost:5174`

## 🌟 Key Features

### E-Commerce Functionality
- Product catalog with categories and subcategories
- Shopping cart with persistent storage
- Secure checkout process
- Order management system
- Payment integration with Razorpay
- User authentication and profiles

### Admin Features
- Product inventory management
- Order processing and tracking
- Image upload and management
- Admin dashboard with analytics

### Technical Features
- Responsive design for all devices
- Real-time notifications with React Toastify
- Image optimization with Cloudinary
- Secure API with JWT authentication
- MongoDB for scalable data storage
- Modern React with hooks and context

## 🔄 Data Flow

1. **User Authentication**: Firebase handles OAuth, backend validates with JWT
2. **Product Display**: Frontend fetches products from backend API
3. **Cart Management**: Cart data stored in user context and database
4. **Order Processing**: Orders created through backend, payment via Razorpay
5. **Admin Operations**: Admin panel communicates with backend for management tasks
6. **File Uploads**: Images uploaded via Multer and stored in Cloudinary

## 🚀 Deployment Considerations

- **Frontend & Admin**: Can be deployed on Vercel, Netlify, or similar platforms
- **Backend**: Suitable for deployment on Heroku, Railway, or cloud providers
- **Database**: MongoDB Atlas for cloud database hosting
- **Images**: Cloudinary for CDN and image optimization
- **Environment**: Separate environment configurations for development and production

This architecture provides a scalable, maintainable, and feature-rich e-commerce platform with modern web technologies and best practices.
