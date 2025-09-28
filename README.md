# Registration Form with Backend

A beautiful responsive registration form with a Node.js/Express backend that stores user data in a JSON file.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/charveemasand108/Event-Registeration-ACM)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![HTML5](https://img.shields.io/badge/HTML5-CSS3-orange?style=for-the-badge&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=netlify)](https://netlify.com)

## 🚀 Quick Deploy

**Deploy this project in 2 minutes:**

1. **Go to**: [netlify.com](https://netlify.com)
2. **Drag** your project folder onto the page
3. **Get** your live URL instantly!

**Or use Vercel:**
1. **Go to**: [vercel.com](https://vercel.com)
2. **Connect** your GitHub account
3. **Deploy** with one click!

## Features

- ✅ **Responsive Design**: Beautiful pink-themed glassmorphism login box
- ✅ **Backend Validation**: Name and email validation
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

After starting the server, you can access the application:

**On your computer:**
- Open browser and go to: `http://localhost:3000`

**From other devices on the same network:**
- Find your IP address first (see instructions below)
- Use: `http://[YOUR_IP_ADDRESS]:3000`

**To find your IP address:**
```bash
# On Mac/Linux
ifconfig | grep "inet " | grep -v 127.0.0.1

# On Windows
ipconfig
```

**Example**: If your IP is `192.168.1.100`, use `http://192.168.1.100:3000`

**Note**: Replace `[YOUR_IP_ADDRESS]` with your actual local IP address

## 🌐 Making It Publicly Accessible

To make your registration form accessible from anywhere on the internet, you can deploy it to a free hosting service:

### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get a public URL instantly

### Option 3: Heroku
```bash
# Install Heroku CLI, then:
heroku create your-app-name
git push heroku main
```

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
  "name": "John Doe",
  "email": "john@example.com"
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
├── background.jpg      # Background image
├── netlify.toml        # Netlify deployment configuration
└── DEPLOY.md           # Detailed deployment guide
```

## 📦 Deployment Files Included
- **netlify.toml**: Ready-to-deploy configuration for Netlify
- **DEPLOY.md**: Step-by-step deployment instructions
- **package.json**: All dependencies and scripts configured

## Validation Rules
- **Name**: Must be at least 2 characters long
- **Email**: Must be a valid email format
- **Duplicate Emails**: Prevented on backend
- **Required Fields**: Both name and email are required

## Security Notes
- Data is stored in JSON file (for demo purposes)
- In production, use a proper database (MongoDB, PostgreSQL, etc.)
- Consider adding rate limiting and CSRF protection
- Email addresses are validated and duplicates are prevented

## Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Validation**: express-validator
- **Icons**: Ionicons
- **Data Storage**: JSON file system
