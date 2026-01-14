# Assets Folder Structure

This folder contains all media files for your portfolio website.

## Folder Organization

```
assets/
├── videos/          # Your film reels and video content
├── images/          # Screenshots, event photos, brand campaign images
├── documents/       # PDFs of scripts, writing samples, etc.
└── README.md        # This file
```

## Recommended File Naming Convention

### Videos (`videos/`)
- `documentary-reel.mp4` - Your documentary compilation
- `pitch-deck-reel.mp4` - Commercial/pitch deck work
- `remake-reel.mp4` - Narrative remake projects
- `experimental-sound.mp4` - Experimental audio/visual piece
- `thumbnail-documentary.jpg` - Video thumbnails
- `thumbnail-pitch.jpg`
- etc.

### Images (`images/`)
- `accent-sisters-exhibition-1.jpg`
- `accent-sisters-exhibition-2.jpg`
- `accent-sisters-workshop-1.jpg`
- `ugreen-marathon-1.jpg`
- `ugreen-marathon-2.jpg`
- `vevor-timesquare-1.jpg`
- `vevor-timesquare-2.jpg`
- `hero-background.jpg` - Optional background for hero section
- `profile-photo.jpg` - Your headshot/profile picture

### Documents (`documents/`)
- `legal-writing-sample.pdf`
- `academic-paper-1.pdf`
- `academic-poster.pdf`
- `journal-entry-sample.pdf`
- `creative-story-sample.pdf`
- `script-sample-1.pdf`
- etc.

## How to Add Your Media

1. **Videos**:
   - Place your video files in the `videos/` folder
   - Update the JavaScript in `script.js` to link to your videos
   - Consider using a video hosting service (YouTube, Vimeo) and embed links instead

2. **Images**:
   - Add your images to the `images/` folder
   - Update the HTML in `index.html` to reference your images:
     ```html
     <img src="assets/images/your-image.jpg" alt="Description">
     ```

3. **Documents**:
   - Upload PDFs and documents to the `documents/` folder
   - Link to them in your HTML:
     ```html
     <a href="assets/documents/your-document.pdf" target="_blank">View Document</a>
     ```

## Optimization Tips

- **Compress images** before uploading (use tools like TinyPNG, ImageOptim)
- **Recommended image formats**:
  - JPG for photos (80-90% quality)
  - PNG for graphics with transparency
  - WebP for modern browsers (best compression)

- **Recommended image sizes**:
  - Hero images: 1920x1080px
  - Project thumbnails: 800x600px
  - Event photos: 1200x800px

- **For videos**:
  - Consider hosting on YouTube/Vimeo for better performance
  - If self-hosting, compress to H.264 format
  - Provide multiple resolutions for different devices

## Next Steps

After adding your media files:

1. Update `index.html` with actual image paths
2. Update `script.js` to link film cards to actual videos
3. Add your real email, LinkedIn, and social media links
4. Replace placeholder text with your actual content
5. Test all links and media files

Need help? Check the main README.md file in the project root!
