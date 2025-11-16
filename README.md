# Professional CV Website

A modern, responsive CV website built with React and hosted on Firebase.

## 🚀 Features

- **Responsive Design**: Looks great on all devices
- **Print-Friendly**: Optimized for printing/PDF generation
- **Fast Loading**: Optimized performance with Vite
- **Modern UI**: Clean, professional design with smooth animations
- **Component-Based**: Reusable React components

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account (free tier is sufficient)

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:5173`

## 📝 Customization

### Update Your Information

Edit `/src/data/resumeData.js` to update:
- Personal information
- Work experience
- Skills
- Education
- Languages

### Update Profile Picture

Replace `/public/profile.jpg` with your own photo (recommended size: 400x400px)

### Customize Colors

Main colors are defined in component CSS files:
- Primary: `#4299e1` (blue)
- Dark: `#2d3748`
- Light: `#f7fafc`

## 🚀 Deployment to Firebase

### First-Time Setup

1. **Install Firebase CLI globally:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase in your project:**
   ```bash
   firebase init hosting
   ```
   
   When prompted:
   - Select "Use an existing project" or "Create a new project"
   - Set public directory to: `dist`
   - Configure as single-page app: `Yes`
   - Set up automatic builds with GitHub: `No` (optional)

### Deploy

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Firebase:**
   ```bash
   firebase deploy
   ```

3. **Your site will be live at:**
   `https://your-project-id.web.app`

### Quick Deploy Script

Add this to your package.json scripts:
```json
"deploy": "npm run build && firebase deploy"
```

Then run:
```bash
npm run deploy
```

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Custom Domain

To use a custom domain:
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the instructions to verify and connect your domain

---

Built with ❤️ using React and Firebase
