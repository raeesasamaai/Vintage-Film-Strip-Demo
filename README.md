# Ancestors & Anecdotes — Right-Side Vertical Film Strip Navigation

This is a ready-to-run **React + Tailwind CSS + Framer Motion** project for the updated Ancestors & Anecdotes website concept.

The key update in this version is that the **film strip navigation is fixed vertically on the right side of the page**.

## Features

- Full-screen scroll sections
- Fixed right-side vintage film strip navigation
- Film frames with section images and overlay navigation text
- Active film frame highlight based on scroll position
- Smooth click-to-scroll navigation
- Large full-screen section background image for each navigation item
- Section text animates in as each section becomes active
- Mobile-friendly fallback navigation at the bottom
- Vintage film grain, sepia overlays, dark cinematic styling

## Navigation Structure

- Home
- What We Do
- Services
- Process
- About Us
- FAQ
- Contact

## How to Run

1. Unzip the project.
2. Open the folder in VS Code.
3. Open a terminal inside the project folder.
4. Install packages:

```bash
npm install
```

5. Start the dev server:

```bash
npm run dev
```

6. Open the local URL shown in your terminal. Usually:

```bash
http://localhost:5173
```

## Main Files to Edit

```txt
src/App.jsx
src/sectionData.js
src/components/RightFilmStripNav.jsx
src/components/MobileNav.jsx
src/index.css
```

## Where to Change the Right-Side Film Strip

Edit:

```txt
src/components/RightFilmStripNav.jsx
```

## Where to Change Section Text and Images

Edit:

```txt
src/sectionData.js
```

Each section has:

```js
id
navLabel
eyebrow
title
body
cta
image
```

## Where to Change Colors and Vintage Styling

Edit:

```txt
src/index.css
tailwind.config.js
```

The right-side film strip background styling is inside `.vintage-film-nav` in `src/index.css`.

## Image Assets

All section images are stored here:

```txt
public/images/sections
```

You can replace the images with your own. Keep the same filenames if you do not want to update the code.

## Note

The project uses Google Fonts through `src/index.css`. Internet access is required for those fonts to load during development. If they do not load, fallback serif fonts will still display.
