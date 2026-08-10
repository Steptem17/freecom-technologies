# Freecom Technologies — Official Web Application

A world-class, high-performance web application designed and built for **Freecom Technologies**, a premier smartphone repair workshop and mobile accessories retailer based in Lagos, Nigeria.

The platform provides customers with an interactive hardware repair intake system, a real-time accessories inquiry bag, an HD smartphone teardown showcase, verified Google Maps store locations, and seamless WhatsApp engineering consultations.

---

## 📍 Store Locations & Contact Information

* **Main Headquarters Workshop:**  
  `26, Showemimo Street, Adura Bus Stop, Alagbado, Lagos State, Nigeria.`
* **Branch Outlet:**  
  `4, Babayemi Street via Adegolu (Power Line), Adura Bus Stop, Alagbado, Lagos State, Nigeria.`
* **Chief Repair Engineer:** Engr. Kehinde Adeosun
* **Direct Phone & WhatsApp:** `+234 803 058 2883`
* **Official Email:** `freecomtech.1455@gmail.com`
* **Workshop Hours:** Monday – Saturday: 8:00 AM – 9:00 PM *(Sunday: Closed)*

---

## ✨ Key Features & User Experience

### 1. 🛡️ Zero-Scroll Splash Loader Screen
* **Locked Overflow During Load:** Document overflow (`overflow: hidden`) and scroll positions are strictly locked while the splash screen runs.
* **Deferred Mounting:** Page components only mount after the splash screen finishes, preventing accidental scrolling to lower page sections before load completion.

### 2. 📹 HD Flagship Smartphone Teardown Showcase
* **Continuous Auto-Looping Video:** High-definition video showcasing internal smartphone architecture and micro-soldering precision.
* **Edge-to-Edge Framing:** Styled with `object-cover` without dark side letterboxing, optimized for desktop, tablet, and mobile viewports.

### 3. 🛠️ Hardware Repair Diagnostics Intake
* **Custom Intake Wizard:** Choose device types (iPhone, Samsung, Tecno, Infinix, iPad, Laptops) and specific hardware faults (cracked screen, battery drain, charging port, motherboard, software flashing).
* **Smart Phone Sanitizer & Inline Validation:** Accepts numbers starting with `080` or international format (10 to 14 digits max with at most one `+` sign). Displays soft, thin inline red field alerts directly below invalid inputs.
* **Instant WhatsApp Payload Generator:** Packages diagnostic data, device specifications, and ticket IDs into formatted WhatsApp messages sent directly to the chief repair engineer.

### 4. 🛍️ Accessories Inquiry Catalog & Reactive Bag
* **Product Catalog:** Chargers, Power Banks, Screen Protectors, Fast Type-C Cables, Earbuds, Smartwatches, and Audio Systems.
* **Reactive Inquiry Bag:** Add products to an inquiry bag and initiate instant stock availability checks with the shop manager.

### 5. 🗺️ Verified Google Maps & 1-Click Directions
* **Exact Address Mapping:** Live interactive Google Maps embeds for both the Main Workshop (`26 Showemimo Street`) and Branch Outlet (`4 Babayemi Street`).
* **Direct Navigation:** 1-click directions open Google Maps pre-routed to exact store coordinates.

### 6. 🎬 Smooth Non-Bouncing Motion Animations
* **Framer Motion Integration:** Smooth scroll-reveal transitions configured with `once: true` to guarantee silky smooth scrolling without flickering or rapid bouncing when pausing mid-scroll.

---

## 🛠️ Technology Stack

* **Frontend Engine:** React 19 (via Vite 8)
* **Styling Framework:** Tailwind CSS
* **Animation Engine:** Framer Motion
* **Iconography:** Lucide React
* **Routing:** React Router DOM (v7)
* **Cloud Deployment Configuration:** `vercel.json` SPA rewrite rules

---

## 📁 Project Architecture

```
freecom-technology/
├── public/                 # Static assets (HD videos, transparent PNGs, favicons)
│   ├── flagship_phone_teardown.mp4
│   ├── mobile_repair_bench.jpg
│   └── phone_hero.png
├── src/
│   ├── assets/             # Raw media assets
│   ├── components/         # Reusable UI components (Navbar, Footer, Layout, PageLoader)
│   ├── pages/              # Main view pages (Home, About, Contact, Repair, Shop, Cart, Book)
│   ├── utils/              # Product databases, review data, and helper utilities
│   ├── App.jsx             # Root layout & route definitions
│   ├── index.css           # Global typography and custom Tailwind utilities
│   └── main.jsx            # React mounting entry point
├── vercel.json             # Vercel SPA routing configuration
├── package.json            # Dependencies & build scripts
└── README.md               # Official documentation
```

---

## 🚀 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/Steptem17/freecom-technology.git
cd freecom-technology
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 4. Build for production
```bash
npm run build
```

---

## ☁️ Deployment (Vercel)

This project includes a pre-configured `vercel.json` for seamless Single Page Application (SPA) deployment.

1. Connect your GitHub repository (`Steptem17/freecom-technology`) to [Vercel](https://vercel.com).
2. Vercel will automatically build and deploy the production site.
3. Every subsequent `git push` to `main` will automatically trigger a live production update.
