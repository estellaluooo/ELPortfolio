# EL Portfolio Website

A stunning, modern portfolio website showcasing your work across film, events, brand campaigns, and writing.

## 🎨 Design Features

- **Clean, Modern Design** - Inspired by contemporary wellness landing pages
- **Smooth Animations** - Scroll-triggered animations and transitions
- **Fully Responsive** - Looks perfect on desktop, tablet, and mobile
- **Interactive Elements** - Hover effects, click interactions, and form validation
- **Professional Layout** - Section-based design for easy navigation

## 📂 Project Structure

```
EL_Website/
├── index.html           # Main HTML file
├── style.css            # All styling and animations
├── script.js            # Interactive JavaScript features
├── assets/              # Media files folder
│   ├── videos/          # Film reels and video content
│   ├── images/          # Photos and graphics
│   ├── documents/       # PDFs and writing samples
│   └── README.md        # Assets organization guide
└── README.md            # This file
```

## 🚀 Getting Started

### Option 1: Using Live Server (Recommended)

1. **Install Live Server extension in VS Code**
   - Open VS Code
   - Go to Extensions (Cmd+Shift+X)
   - Search for "Live Server"
   - Install it

2. **Open your project**
   - File → Open Folder → Select "EL_Website"

3. **Launch Live Server**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your website will open in your browser with auto-reload!

### Option 2: Simple Browser Open

1. Navigate to the `EL_Website` folder on your Desktop
2. Double-click `index.html`
3. It will open in your default browser

## 📋 Portfolio Sections

Your website includes the following sections:

### 1. **Hero Section**
- Eye-catching introduction
- Call-to-action buttons
- Scroll indicator

### 2. **Film & Video**
- Documentary Reel
- Pitch Deck Reel
- Remake Reel
- Experimental Sound Piece
- Scripts & Screenwriting samples

### 3. **Event Planning - Accent Sisters**
- Exhibitions showcase
- Workshops overview
- Event highlights

### 4. **Brand Campaigns**
- Ugreen × NYC Marathon 2025 (Completed)
- Vevor × Times Square Christmas (Completed)
- Boston Marathon 2026 (Upcoming)
- Campaign statistics and metrics

### 5. **Writing Samples**
- Legal Writing
- Academic Papers & Posters
- Journals & Essays
- Creative Stories

### 6. **Contact Section**
- Contact form
- Email and LinkedIn links
- Professional inquiry form

## ✏️ Customization Guide

### Update Your Information

1. **Personal Details** (in `index.html`):
   ```html
   Line 33: Update subtitle "Creative Director & Storyteller"
   Line 34: Update hero title
   Line 303: Update email address
   Line 310: Update LinkedIn URL
   ```

2. **Colors** (in `style.css`):
   ```css
   Lines 6-15: Update CSS variables for your preferred color scheme
   --primary-color: #6C63FF;
   --secondary-color: #FF6584;
   --accent-color: #4ECDC4;
   ```

3. **Content**:
   - Edit section descriptions
   - Add your actual statistics and metrics
   - Update project descriptions

### Adding Your Media

See `assets/README.md` for detailed instructions on:
- Adding film reels and videos
- Uploading event photos
- Linking to writing samples
- Organizing your media files

### Linking to Your Content

**For Videos** (in `script.js`, line 100-113):
```javascript
// Replace alert with actual video links
// Example: window.open('https://vimeo.com/your-video-id');
```

**For Documents** (in `index.html`):
```html
<!-- Update href to point to actual files -->
<a href="assets/documents/your-file.pdf" target="_blank">View Sample</a>
```

## 🎨 Interactive Features

- **Mobile Menu** - Hamburger navigation for mobile devices
- **Smooth Scrolling** - Elegant navigation between sections
- **Scroll Animations** - Elements fade in as you scroll
- **Parallax Effect** - Subtle hero section parallax
- **Form Validation** - Contact form with email validation
- **Hover Effects** - Interactive cards and buttons

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Advanced Customization

### Add Google Fonts

Add to `<head>` in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Video Embedding

Replace placeholder video areas with YouTube/Vimeo embeds:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        frameborder="0" allowfullscreen></iframe>
```

### Connect Contact Form

To make the contact form functional:

1. **Using Formspree** (easiest):
   - Sign up at formspree.io
   - Get your form endpoint
   - Update form in `index.html`:
     ```html
     <form action="https://formspree.io/f/YOUR_ID" method="POST">
     ```

2. **Using EmailJS**:
   - Sign up at emailjs.com
   - Follow their integration guide
   - Update `script.js` contact form handler

## 📤 Deployment

### Deploy to GitHub Pages

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select source: main branch
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Deploy to Netlify

1. Go to netlify.com
2. Drag and drop your `EL_Website` folder
3. Your site is live instantly!
4. Free custom domain and HTTPS included

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder
3. Follow the prompts
4. Your site is deployed!

## 🎯 Next Steps

1. **Add Your Content**
   - [ ] Upload your video reels to assets/videos/
   - [ ] Add event and campaign photos
   - [ ] Upload writing sample PDFs
   - [ ] Update all placeholder text

2. **Customize Design**
   - [ ] Update color scheme to match your brand
   - [ ] Add your profile photo
   - [ ] Customize hero section background

3. **Set Up Functionality**
   - [ ] Connect contact form to email service
   - [ ] Link social media profiles
   - [ ] Add analytics (Google Analytics)

4. **Deploy**
   - [ ] Choose a hosting platform
   - [ ] Deploy your website
   - [ ] Get a custom domain (optional)

## 💡 Tips

- **Performance**: Compress all images before uploading
- **SEO**: Update `<title>` and add meta descriptions
- **Accessibility**: Add alt text to all images
- **Testing**: Test on multiple devices and browsers
- **Updates**: Keep your portfolio current with latest work

## 🆘 Troubleshooting

**Live Server shows "Cannot GET /"?**
- Make sure you opened the `EL_Website` folder (not the parent folder)
- Or navigate to `http://127.0.0.1:5500/EL_Website/` in your browser

**Styles not loading?**
- Check that `style.css` is in the same folder as `index.html`
- Clear your browser cache (Cmd+Shift+R)

**JavaScript not working?**
- Check browser console for errors (F12 or Cmd+Option+I)
- Make sure `script.js` is in the same folder as `index.html`

## 📧 Need Help?

If you need assistance customizing your portfolio:
- Check the comments in each file
- Review the code structure
- Test changes incrementally

---

**Built with HTML, CSS, and JavaScript**
Ready to showcase your amazing work to the world!
