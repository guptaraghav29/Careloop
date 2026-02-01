# Deployment Guide for CareLoop on Vercel

This guide will help you deploy the `index.html` frontend to Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account (sign up at [vercel.com](https://vercel.com) - it's free)
3. Your project code pushed to a GitHub repository

## Step 1: Prepare Your Repository

Make sure your `index.html` file and `vercel.json` configuration are in your repository root.

## Step 2: Push to GitHub

If you haven't already, push your code to GitHub:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 3: Deploy on Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com) and sign in (or create an account)

2. **Import Project**: 
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Select the repository containing your project

3. **Configure Project** (IMPORTANT - This prevents Vercel from building Next.js):
   - **Framework Preset**: Select "Other" (NOT Next.js - this is critical!)
   - **Root Directory**: Leave as `.` (root)
   - **Build Command**: Leave completely empty or set to `echo "No build needed"`
   - **Output Directory**: Leave empty or set to `.` (serving from root)
   - **Install Command**: Leave empty (no dependencies to install)
   
   **⚠️ CRITICAL**: Even if Vercel auto-detects Next.js, you MUST change the Framework Preset to "Other" manually. The `vercel.json` file helps, but you need to verify this setting in the dashboard.

4. **Deploy**: Click "Deploy"

5. **Wait for Deployment**: Vercel will deploy your project. This usually takes 1-2 minutes.

6. **Access Your Site**: Once deployed, Vercel will provide you with a URL like `https://your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No**
   - Project name? Enter a name (or press Enter for default)
   - Directory? **./** (current directory)
   - Override settings? **No**

4. **Production Deployment**:
   ```bash
   vercel --prod
   ```

## Step 4: Verify Deployment

1. Visit the URL provided by Vercel
2. You should see your CareLoop application
3. Test the "Talk to Agent" button to ensure the chat interface works

## Configuration Details

The `vercel.json` file configures:
- **Rewrites**: All routes redirect to `index.html` (for client-side routing if needed)
- **Headers**: Security headers for X-Content-Type-Options, X-Frame-Options, and Referrer-Policy

## Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Troubleshooting

### Issue: Only seeing ChatInterface.tsx (Next.js app) instead of index.html
- **Solution**: This happens when Vercel detects Next.js. Fix it by:
  1. Go to your project settings in Vercel dashboard
  2. Go to "Settings" → "General"
  3. Scroll to "Framework Preset"
  4. Change it from "Next.js" to "Other"
  5. Set Build Command to empty or `echo "No build needed"`
  6. Set Output Directory to `.` (empty or dot)
  7. Save and redeploy

### Issue: 404 Error
- **Solution**: Make sure `vercel.json` is in the root directory and the rewrite rule is correct

### Issue: Blank Page
- **Solution**: Check browser console for errors. Ensure all CDN resources (React, Tailwind, etc.) are loading correctly

### Issue: Chat Interface Not Showing
- **Solution**: Hard refresh the page (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows) to clear cache

## Updating Your Deployment

Every time you push to your main branch, Vercel will automatically redeploy your site. You can also manually trigger deployments from the Vercel dashboard.

## Environment Variables (If Needed)

If you need to add environment variables later:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy the project

---

**Note**: Since `index.html` uses CDN resources (React, Tailwind, Lucide icons), no build process is required. The file is served directly as a static asset.
