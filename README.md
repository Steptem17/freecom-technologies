# Freecom Technologies

Web application for Freecom Technologies — smartphone hardware repair workshop and mobile accessories retailer based in Lagos, Nigeria.

## Store Locations & Contact

- **Main Headquarters Workshop**: 26, Showemimo Street, Adura Bus Stop, Alagbado, Lagos State, Nigeria
- **Branch Outlet**: 4, Babayemi Street via Adegolu (Power Line), Adura Bus Stop, Alagbado, Lagos State, Nigeria
- **Direct Phone / WhatsApp**: +234 803 058 2883
- **Email**: freecomtech.1455@gmail.com
- **Operating Hours**: Monday – Saturday: 8:00 AM – 9:00 PM

---

## Features

### Initial Splash Loader & Scroll Management
- Locked document overflow (`overflow: hidden`) during initial splash screen loading.
- Layout mounting is deferred until initial load sequence completes to ensure correct scroll positioning.

### Teardown Showcase
- High-definition smartphone hardware teardown video player with edge-to-edge `object-cover` layout.
- Configured for silent, continuous background playback (`muted`, `autoPlay`, `loop`, `playsInline`).

### Hardware Repair Diagnostics Intake
- Multi-step diagnostic intake workflow supporting smartphones, tablets, software recovery, and accessories.
- Form input sanitizer enforcing single plus sign (+) prefix, 10 to 14 digit length boundaries, and field-level inline error styling.
- Automatic payload compilation routing ticket details directly to WhatsApp.

### Interactive Accessories Catalog
- Categorized accessory catalog featuring stock availability tracking.
- Client-side inquiry bag for bulk stock availability checks via WhatsApp.

### Google Maps Integration
- Embedded interactive Google Maps location cards for both physical store addresses.
- Direct navigation links pointing to exact street coordinates.

### Smooth Motion Viewports
- Viewport animations configured with `once: true` to prevent section flickering or bouncing during scroll pauses.

---

## Tech Stack

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Router**: React Router DOM (v7)
- **Deployment Configuration**: `vercel.json` SPA rewrite rules

---

## Project Structure

```
freecom-technology/
├── public/                 # Static assets (HD video, SVG, images)
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page views (Home, About, Contact, Repair, Shop, Cart, Book)
│   ├── utils/              # Data models and helper functions
│   ├── App.jsx             # Application root and router definitions
│   └── main.jsx            # React root entry point
├── vercel.json             # Vercel SPA rewrite rules
├── package.json            # Scripts and dependencies
└── README.md               # Documentation
```

---

## Local Development

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

---

## Deployment

Configured for deployment on Vercel. SPA client-side routing rewrites are configured in `vercel.json`.
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
