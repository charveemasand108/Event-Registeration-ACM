# Registration Form with Backend

A beautiful responsive registration form with a Node.js/Express backend that stores user data in a JSON file.

## Features

- ✅ **Responsive Design**: Beautiful pink-themed glassmorphism login box
- ✅ **Backend Validation**: Email format validation and password length requirements
- ✅ **Data Storage**: Stores registrations in JSON file
- ✅ **Success Messages**: Shows success/error messages after registration
- ✅ **View Registrations**: Separate page to view all registered users
- ✅ **Duplicate Prevention**: Prevents duplicate email registrations
- ✅ **Console Logging**: Logs all registrations to server console

## Setup Instructions

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
- **Registration Form**: http://localhost:3000
- **View Registrations**: http://localhost:3000/view

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
