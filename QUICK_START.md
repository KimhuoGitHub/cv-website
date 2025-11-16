# 🏃 Quick Start Guide - Your CV Website

## 📁 Project Structure

```
cv-website/
├── public/              # Static assets
│   └── profile.jpg      # 👈 Add your photo here!
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Profile.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── resumeData.js  # 👈 Edit your CV content here!
│   ├── App.jsx
│   └── main.jsx
├── firebase.json        # Firebase configuration
└── package.json

```

---

## 🎯 Getting Started

### 1. Preview Your Site Locally

```bash
cd cv-website
npm run dev
```

Open your browser to: `http://localhost:5173`

### 2. Edit Your CV Content

All your CV content is in **one file**:  
📄 `/src/data/resumeData.js`

Just edit and save - changes appear instantly!

### 3. Add Your Profile Photo

Place your professional photo at:  
📸 `/public/profile.jpg`

**Recommended specs:**
- Size: 400x400px (square)
- Format: JPG or PNG
- Professional headshot with neutral background

If no photo is provided, it will auto-generate an avatar with your initials.

---

## ✏️ How to Update Your CV

### Update Personal Info

```javascript
// In /src/data/resumeData.js
export const personalInfo = {
  name: "Kimhuo Chhoeurng",
  email: "kimhuo99@gmail.com",
  linkedin: "https://www.linkedin.com/in/kimhuo/",
  github: "https://github.com/yourusername", // Add yours!
  // ... more fields
};
```

### Update Experience

```javascript
export const experience = [
  {
    company: "Your Company",
    position: "Your Title",
    period: "Jan 2024 – Present",
    location: "City, Country",
    achievements: [
      "Achievement with metrics (e.g., improved performance by 40%)",
      "Another quantified achievement",
      // Add more...
    ]
  },
  // Add more jobs...
];
```

### Update Skills

```javascript
export const skills = {
  technical: [
    { name: "React Native", level: 95 }, // 0-100
    { name: "TypeScript", level: 85 },
    // Add more...
  ],
  soft: [
    "Team Leadership",
    "Problem Solving",
    // Add more...
  ]
};
```

---

## 🎨 Customization Tips

### Change Colors

Edit `/src/index.css` or component CSS files:

```css
/* Primary color scheme */
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
}
```

### Add Sections

Want to add Projects or Certifications?

1. Create component in `/src/components/Projects.jsx`
2. Add data to `/src/data/resumeData.js`
3. Import and use in `/src/App.jsx`

Example already prepared in `resumeData.js` (commented out)!

---

## 📤 Deployment Options

### Option 1: Firebase Hosting (Recommended)
See `DEPLOYMENT_GUIDE_FIREBASE.md` for detailed steps.

**Quick deploy:**
```bash
npm run build
firebase deploy
```

### Option 2: Vercel
```bash
npm install -g vercel
vercel
```

### Option 3: Netlify
1. Build: `npm run build`
2. Drag & drop `dist` folder to netlify.com

---

## 🐛 Common Issues

### Port Already in Use
```bash
# Try a different port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Profile Image Not Showing
- Make sure image is at `/public/profile.jpg`
- Check file name is exactly `profile.jpg` (lowercase)
- Refresh browser with Ctrl+Shift+R (hard refresh)

---

## 📝 Daily Workflow

1. **Edit CV data** → `/src/data/resumeData.js`
2. **Save file** → Changes auto-reload in browser
3. **Build** → `npm run build`
4. **Deploy** → `firebase deploy`

That's it! Your CV is updated and live! 🎉

---

## 🔥 Pro Tips

### 1. Use Metrics Everywhere
❌ "Improved app performance"  
✅ "Improved app performance by 40%, reducing load time from 3s to 1.8s"

### 2. Action Verbs
Start achievements with strong verbs:
- Led, Architected, Delivered, Optimized, Reduced, Increased, Implemented

### 3. Keep It Updated
Update your CV every time you:
- Complete a major project
- Learn a new technology
- Get a promotion or new role
- Achieve measurable results

### 4. Download as PDF
Use the "Download CV" button on your site to generate a PDF for applications that require file uploads.

---

## 📞 Need Help?

- **Firebase docs:** https://firebase.google.com/docs/hosting
- **React docs:** https://react.dev
- **Tailwind docs:** https://tailwindcss.com

---

**Your CV website is ready! 🚀**  
Just add your photo, verify the dates, and deploy!
