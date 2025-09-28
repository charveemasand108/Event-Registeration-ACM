# 🚀 Deployment Guide

## Quick Deploy to Netlify (Recommended)

### Method 1: Drag & Drop (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag your entire project folder onto the Netlify page
3. Wait for deployment (2-3 minutes)
4. Get your live URL instantly!

### Method 2: GitHub Integration
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your repository: `charveemasand108/Event-Registeration-ACM`
5. Deploy settings:
   - Build command: `npm install && npm start`
   - Publish directory: `.`
6. Click "Deploy site"

## Alternative: Vercel

### Method 1: Website
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Deploy!

### Method 2: CLI
```bash
npx vercel login
npx vercel --prod
```

## Your Live URLs Will Be:
- **Netlify**: `https://your-app-name.netlify.app`
- **Vercel**: `https://your-app-name.vercel.app`

## After Deployment:
1. Test your registration form
2. Share the live URL with others
3. Update your GitHub README with the live link
