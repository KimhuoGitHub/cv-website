# 🚀 Firebase Deployment Guide - Step by Step

Follow these steps to deploy your CV website to Firebase Hosting (like the example you shared).

## Prerequisites Checklist

- [ ] Node.js installed (check with `node --version`)
- [ ] Google account for Firebase
- [ ] Your CV website built and ready

---

## Step 1: Install Firebase CLI

Open your terminal and run:

```bash
npm install -g firebase-tools
```

---

## Step 2: Login to Firebase

```bash
firebase login
```

This will open your browser. Log in with your Google account and authorize Firebase CLI.

---

## Step 3: Create a Firebase Project

### Option A: Using Firebase Console (Recommended for beginners)

1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Enter a project name (e.g., "kimhuo-cv")
   - This will determine your URL: `kimhuo-cv.web.app`
4. Disable Google Analytics (optional for a CV site)
5. Click "Create project"

### Option B: Using Firebase CLI

```bash
firebase projects:create your-project-id
```

---

## Step 4: Initialize Firebase in Your Project

Navigate to your CV website folder:

```bash
cd /path/to/cv-website
```

Initialize Firebase Hosting:

```bash
firebase init hosting
```

**Answer the prompts:**

```
? Select a default Firebase project: 
  → Choose the project you just created

? What do you want to use as your public directory? 
  → Type: dist

? Configure as a single-page app (rewrite all urls to /index.html)? 
  → Yes

? Set up automatic builds and deploys with GitHub? 
  → No (unless you want CI/CD)

? File dist/index.html already exists. Overwrite? 
  → No
```

---

## Step 5: Build Your Website

```bash
npm run build
```

This creates optimized production files in the `dist` folder.

---

## Step 6: Deploy to Firebase

```bash
firebase deploy
```

Wait for the deployment to complete (usually 30-60 seconds).

---

## Step 7: Access Your Live Website

After deployment, you'll see:

```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/your-project-id/overview
Hosting URL: https://your-project-id.web.app
```

🎉 **Your CV is now live!** Visit the Hosting URL to see it.

---

## 🔄 Updating Your CV

Whenever you make changes:

```bash
# 1. Edit your data in src/data/resumeData.js
# 2. Build the project
npm run build

# 3. Deploy
firebase deploy
```

**Pro tip:** Add this script to your `package.json`:

```json
"scripts": {
  "deploy": "npm run build && firebase deploy"
}
```

Then you can just run: `npm run deploy`

---

## 🌐 Adding a Custom Domain (Optional)

1. Go to Firebase Console: https://console.firebase.google.com/
2. Select your project
3. Go to **Hosting** in the left sidebar
4. Click **Add custom domain**
5. Follow the instructions:
   - Enter your domain (e.g., `kimhuochhoeurng.com`)
   - Add the DNS records to your domain provider
   - Wait for verification (can take 24-48 hours)

---

## ⚡ Quick Commands Reference

```bash
# Login to Firebase
firebase login

# List your Firebase projects
firebase projects:list

# Check which project you're using
firebase use

# Switch to a different project
firebase use project-id

# Build the website
npm run build

# Deploy to Firebase
firebase deploy

# Deploy only hosting (faster)
firebase deploy --only hosting

# View deployment history
firebase hosting:channel:list
```

---

## 🐛 Troubleshooting

### "Command not found: firebase"

**Solution:** Install Firebase CLI globally:
```bash
npm install -g firebase-tools
```

### "Permission denied" on Mac/Linux

**Solution:** Use sudo:
```bash
sudo npm install -g firebase-tools
```

### Build fails

**Solution:** 
1. Delete `node_modules` and `dist` folders
2. Run `npm install`
3. Run `npm run build` again

### Wrong project selected

**Solution:**
```bash
firebase use --add
# Then select the correct project
```

### Deployment shows old version

**Solution:**
1. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Or try incognito mode
3. Wait 1-2 minutes for CDN to update

---

## 📊 Monitoring Your Site

### View Deployment Stats

Go to Firebase Console → Hosting → Dashboard

You can see:
- Number of visitors
- Data transferred
- Most viewed pages

### Enable Google Analytics (Optional)

1. In Firebase Console, go to Project Settings
2. Integrations tab → Google Analytics → Enable
3. Follow the setup wizard

---

## 💰 Pricing

**Good news:** Firebase Hosting has a generous free tier:

- **Storage:** 10 GB
- **Transfer:** 360 MB/day
- **Custom domain:** Included

For a CV website, you'll stay well within the free tier limits.

---

## ✅ Post-Deployment Checklist

After deployment:

- [ ] Visit your site and check all sections load correctly
- [ ] Test the "Download CV" button
- [ ] Check on mobile devices (use Chrome DevTools)
- [ ] Test all links (email, LinkedIn, etc.)
- [ ] Share the link with a friend to verify
- [ ] Update your LinkedIn with the new website URL
- [ ] Add the URL to your email signature

---

## 🎯 Next Steps

1. **Fix the employment date conflicts** in your resume data
2. **Add a profile photo** to `/public/assets/`
3. **Customize colors** if desired (optional)
4. **Set up Google Analytics** to track visitors (optional)
5. **Consider a custom domain** for more professionalism (optional)

---

**Need help?** Check the Firebase documentation:
- Hosting: https://firebase.google.com/docs/hosting
- CLI Reference: https://firebase.google.com/docs/cli

---

Made with ❤️ using React + Vite + Firebase
