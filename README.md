# Registration Form with Backend

A beautiful responsive registration form with a Node.js/Express backend that stores user data in a JSON file.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/YOUR_USERNAME/registration-form-backend)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![HTML5](https://img.shields.io/badge/HTML5-CSS3-orange?style=for-the-badge&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)

## Features

- ✅ **Responsive Design**: Beautiful pink-themed glassmorphism login box
- ✅ **Backend Validation**: Email format validation and password length requirements
- ✅ **Data Storage**: Stores registrations in JSON file
- ✅ **Success Messages**: Shows success/error messages after registration
- ✅ **View Registrations**: Separate page to view all registered users
- ✅ **Duplicate Prevention**: Prevents duplicate email registrations
- ✅ **Console Logging**: Logs all registrations to server console

## 🚀 Quick Start

### Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/registration-form-backend.git
cd registration-form-backend
```

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
npm start
```
Or for development with auto-restart:
```bash
npm run dev
```

### 3. Access the Application

**Local Access:**
- **Registration Form**: http://localhost:3000
- **View Registrations**: http://localhost:3000/view

**Network Access (from other devices on same WiFi):**
- **Registration Form**: http://10.3.35.86:3000
- **View Registrations**: http://10.3.35.86:3000/view

**Note**: Replace `10.3.35.86` with your actual local IP address (run `ifconfig` to find it)

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Setup Instructions
1. Clone this repository
2. Navigate to the project directory
3. Install dependencies with `npm install`
4. Start the server with `npm start`
5. Open your browser and go to `http://localhost:3000`

## API Endpoints

### POST /register
Register a new user
```json
{
  "email": "user@example.com",
  "password": "password123",
  "remember": true
}
```

### GET /registrations
Get all registered users (passwords are excluded for security)

## File Structure
```
├── index.html          # Main registration form
├── view.html           # View all registrations page
├── style.css           # Styling for both pages
├── server.js           # Express backend server
├── package.json        # Dependencies and scripts
├── registrations.json  # Data storage (created automatically)
└── background.jpg      # Background image
```

## Validation Rules
- **Email**: Must be a valid email format
- **Password**: Minimum 6 characters
- **Remember Me**: Optional boolean checkbox
- **Duplicate Emails**: Prevented on backend

## Security Notes
- Passwords are stored in plain text (for demo purposes)
- In production, use bcrypt or similar for password hashing
- Consider adding rate limiting and CSRF protection

## Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Validation**: express-validator
- **Icons**: Ionicons
- **Data Storage**: JSON file system
