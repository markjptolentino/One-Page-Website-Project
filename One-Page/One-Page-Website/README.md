Mark JP Tolentino's Cosmic Portfolio
Welcome to my One-Page Website Challenge portfolio, showcasing my skills as a Software and Web Development student at AOLCC and a Cybersecurity graduate. This cosmic-themed portfolio highlights my projects, technical expertise, and creative flair through an engaging, interactive single-page website.
Table of Contents

Overview
Features
Project Structure
Technologies Used
Setup Instructions
Running Locally
Deployment
Credits

Overview
This portfolio is a single-page website designed to present my professional journey, projects, and skills in a visually stunning, cosmic-inspired interface. It includes an image gallery with project screenshots, a video gallery featuring my YouTube content (muted by default), and social links to my LinkedIn and YouTube channel. The site is enhanced with a galaxy background animation, interactive lightboxes, confetti effects, and achievement tracking to make it engaging and addictive.
Features

Image Gallery:
Displays three project screenshots (11.png, 22.png, 44.png, 150x150 px) at 33.33% width.
Lightbox with full-size images (11_full.png, 22_full.png, 44_full.png, 800x600 px) and thumbnail previews (50x50 px).
Keyboard navigation (Left, Right, Esc) and thumbnail clicks.


Video Gallery:
Features two YouTube videos (Cybersecurity Tutorial, Web Development Demo) with thumbnails.
Lightbox plays videos muted by default (mute=1), with navigation (arrows, Esc, 'V' key).
Includes a "Subscribe" button linking to my YouTube channel.


Social Links:
LinkedIn: mark-jp-tolentino in profile and contact sections.
YouTube: GatusSecGG in contact and video gallery.


Interactive Elements:
Galaxy Background: 3D stars, nebulae, and comet effects using HTML5 Canvas.
Achievements: Unlocked for 5/10 image views, watching both videos ("Video Explorer"), and timeline access.
Confetti: Triggered on lightbox opens and achievement unlocks.
Keyboard Shortcuts: 'L' for image lightbox, 'V' for video lightbox, 'T' for timeline.


Other Sections:
Profile with photo (img6.png, 150x150 px) and Easter egg (hex code 4D61726B).
Skills with animated progress bars (HTML/CSS, JavaScript, Python, Cybersecurity).
Projects, blog posts, testimonials, education timeline, and contact form (demo-only).


Responsive Design: Smooth scrolling, scroll-to-top button, and section reveal animations.

Project Structure
One-Page Website/
├── CSS/
│   └── one_page_website.css        # Styles for layout, animations, and lightboxes
├── JS/
│   └── one_page_website.js         # Logic for galleries, lightboxes, animations, and interactions
├── images/
│   ├── img6.png                    # Profile photo (150x150 px)
│   ├── 11.png, 22.png, 44.png      # Image gallery thumbnails (150x150 px)
│   ├── 11_full.png, 22_full.png, 44_full.png  # Full-size images (800x600 px)
│   ├── 11_thumb.png, 22_thumb.png, 44_thumb.png  # Lightbox thumbnails (50x50 px)
├── one_page_website.html           # Main HTML file
└── README.md                       # Project documentation

Technologies Used

HTML5: Structure and semantic markup.
CSS3: Styling, animations, and responsive design (Orbitron and Roboto Mono fonts via Google Fonts).
JavaScript: Interactivity, lightbox functionality, and canvas animations.
External Libraries:
Canvas Confetti for confetti effects.


YouTube API: Embeds for video gallery with mute=1 parameter.

Setup Instructions

Clone the Repository:git clone <repository-url>
cd One-Page-Website


Verify Images:
Ensure the images/ folder contains:
img6.png (150x150 px, profile).
Thumbnails: 11.png, 22.png, 44.png (150x150 px).
Full-size: 11_full.png, 22_full.png, 44_full.png (800x600 px).
Lightbox previews: 11_thumb.png, 22_thumb.png, 44_thumb.png (50x50 px).


Resize Images (if needed):
Use Paint (Windows) or Preview (MacOS):
Thumbnails: 150x150 px.
Full-size: 800x600 px.
Previews: 50x50 px.






Check Files:
Confirm presence of one_page_website.html, CSS/one_page_website.css, and JS/one_page_website.js.



Running Locally

Start a Local Server:python -m http.server 8000


Open in Browser:
Navigate to http://localhost:8000/one_page_website.html.


Test Features:
Galaxy Background: Verify 3D stars, nebulae, and comets.
Image Gallery: Click thumbnails (11.png, 22.png, 44.png) to open lightbox; test navigation (arrows, thumbnails, 'L' key, Esc).
Video Gallery: Click YouTube thumbnails to open lightbox; confirm videos are muted by default; test navigation (arrows, 'V' key, Esc).
Social Links: Check LinkedIn and YouTube links in profile, contact, and video gallery.
Interactivity: Verify confetti, achievements (e.g., "Video Explorer" at 2 video views), contact form (demo), and Easter egg.



Deployment

Push to GitHub:git add .
git commit -m "Deploy portfolio with image and video galleries"
git push origin main


Host on GitHub Pages (Optional):
Enable GitHub Pages in repository settings (use main branch, / (root) folder).
Access at https://<username>.github.io/OnePageWebsite/one_page_website.html.


Alternative Hosting:
Deploy to platforms like Netlify or Vercel by uploading the One-Page Website folder.
Ensure images/ and subfolders (CSS/, JS/) are included.



Credits

Developer: Mark JP Tolentino
Email: tolentinomarkjp@gmail.com
GitHub: markjptolentino
LinkedIn: mark-jp-tolentino
YouTube: GatusSecGG


Course: AOLCC Software and Web Development
Assets:
Fonts: Google Fonts (Orbitron, Roboto Mono)
Confetti: Canvas Confetti
Videos: Hosted on YouTube




This portfolio is a testament to my skills in web development and cybersecurity. Explore, interact, and connect with me to collaborate on innovative projects!
