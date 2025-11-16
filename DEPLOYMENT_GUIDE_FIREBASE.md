# 🚀 Firebase Hosting Deployment Guide

## Step 1: Install Firebase Tools

```bash
npm install -g firebase-tools
```

## Step 2: Login to Firebase

```bash
firebase login
```

This will open your browser. Sign in with your Google account.

## Step 3: Initialize Firebase in Your Project

```bash
cd cv-website
firebase init hosting
```

### Configuration Answers:
- **"What do you want to use as your public directory?"** → Type: `dist`
- **"Configure as a single-page app (rewrite all urls to /index.html)?"** → Type: `y` (Yes)
- **"Set up automatic builds and deploys with GitHub?"** → Type: `n` (No, for now)
- **"File dist/index.html already exists. Overwrite?"** → Type: `n` (No)

## Step 4: Deploy to Firebase

```bash
npm run build  # Build your app first
firebase deploy
```

🎉 Your site will be live at: `https://your-project-id.web.app`

## Step 5: Add Custom Domain (Optional)

1. Go to Firebase Console: https://console.firebase.google.com
2. Select your project
3. Go to **Hosting** → **Add custom domain**
4. Follow the instructions to add your domain (e.g., `kimhuo.dev`)

---

## Quick Commands Reference

```bash
# Build the site
npm run build

# Preview locally before deploying
npm run dev

# Deploy to Firebase
firebase deploy

# Deploy only hosting (faster)
firebase deploy --only hosting
```

---

## Updating Your CV Website

Whenever you make changes:

1. Edit `/src/data/resumeData.js`
2. Run `npm run build`
3. Run `firebase deploy`

That's it! Your changes will be live in seconds.

---

## Free Firebase Hosting Limits

✅ **10 GB** of storage  
✅ **360 MB/day** of download bandwidth  
✅ **Free SSL certificate**  
✅ **Custom domain support**  
✅ **Global CDN**

Perfect for a CV website!

---

## Troubleshooting

### Issue: "Firebase command not found"
```bash
npm install -g firebase-tools
```

### Issue: Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Can't login to Firebase
```bash
firebase logout
firebase login --reauth
```

---

## 🎯 Next Steps

1. ✅ Add a professional profile photo to `/public/profile.jpg`
2. ✅ Update your LinkedIn URL
3. ✅ Add GitHub URL (if you have one)
4. ✅ Consider adding a portfolio section with project screenshots
5. ✅ Add Google Analytics (optional)

---

**Need Help?** Check Firebase docs: https://firebase.google.com/docs/hosting
