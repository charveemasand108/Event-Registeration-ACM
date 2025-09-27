const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Data file path
const DATA_FILE = path.join(__dirname, 'registrations.json');

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

// Validation rules
const registrationValidation = [
    body('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    body('remember')
        .optional()
        .isBoolean()
        .withMessage('Remember me must be a boolean value')
];

// Registration endpoint
app.post('/register', registrationValidation, (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const { email, password, remember } = req.body;

        // Check if email already exists
        const registrations = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        const existingUser = registrations.find(user => user.email === email);
        
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered'
            });
        }

        // Create new registration entry
        const newRegistration = {
            id: Date.now().toString(),
            email: email,
            password: password, // In production, hash this password!
            remember: remember || false,
            timestamp: new Date().toISOString()
        };

        // Add to registrations
        registrations.push(newRegistration);
        fs.writeFileSync(DATA_FILE, JSON.stringify(registrations, null, 2));

        // Log to console
        console.log('New registration:', {
            email: newRegistration.email,
            remember: newRegistration.remember,
            timestamp: newRegistration.timestamp
        });

        res.json({
            success: true,
            message: 'Registration successful!',
            data: {
                id: newRegistration.id,
                email: newRegistration.email,
                timestamp: newRegistration.timestamp
            }
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Get all registrations endpoint
app.get('/registrations', (req, res) => {
    try {
        const registrations = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        
        // Remove passwords from response for security
        const safeRegistrations = registrations.map(reg => ({
            id: reg.id,
            email: reg.email,
            remember: reg.remember,
            timestamp: reg.timestamp
        }));

        res.json({
            success: true,
            data: safeRegistrations,
            count: safeRegistrations.length
        });
    } catch (error) {
        console.error('Error fetching registrations:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching registrations'
        });
    }
});

// Serve the view registrations page
app.get('/view', (req, res) => {
    res.sendFile(path.join(__dirname, 'view.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Registration endpoint: POST http://localhost:${PORT}/register`);
    console.log(`View registrations: http://localhost:${PORT}/view`);
});
