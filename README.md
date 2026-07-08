# Freecom Technology

A premium, highly interactive frontend web application designed for a gadget repair workshop and retail accessories store based in Lagos, Nigeria. The project features a custom-designed diagnosis booking intake system and a reactive inquiry bag, both integrating seamlessly with WhatsApp API templates for direct customer-to-technician communications.

## Live Demo
The production build is deployed and accessible online:  
[https://freecom-technology.surge.sh](https://freecom-technology.surge.sh)

---

## Key Features & Functional Flow

### Gadget Repair Diagnostics Intake
* **Dynamic Diagnosis Wizard:** A multi-step flow where users select their device types (Smartphones, Tablets, Audio Systems, or Software Services) and check off specific hardware/software faults (broken displays, battery drain, phone flashing, boot loops).
* **WhatsApp Payload Compilation:** Automatically generates a comprehensive diagnostic summary (including a unique ticket ID and scheduled drop-off slots) and routes it directly to the store technician's WhatsApp.

### Accessories Inquiry Catalog
* **Reactive Inquiry Bag:** An interactive shopping bag experience where customers browse product categories (Powerbanks, Fast Cables, Chargers, Screen Guards, Button Phones) and add desired classes to their cart.
* **Instant Stock Consultation:** Packages selected categories into a readable list, redirecting to WhatsApp so the shop owner can quickly respond with live photos, prices, and specific in-store models.

### Cyber Grid & Glow Design Aesthetics
* **Subtle Animated Background:** Features a highly transparent grid overlay (rgba(0,0,0,0.04)) with smooth drifting animations that slide slowly diagonally.
* **Flowing Laser Glows:** Soft teal and neon green glow segments flow along the grid lines, providing a highly visual, modern engineering layout.
* **Polished Transitions:** Smooth scroll-reveals and card-zoom interactions designed using Tailwind and responsive layout containers.

---

## Technology Stack

* **Frontend Framework:** React 19 (via Vite)
* **CSS & Utility Engine:** Tailwind CSS
* **Icons Library:** Lucide React
* **Aesthetics:** Custom HSL color variables, CSS Drift Grids, and responsive grid structures
* **Routing:** React Router DOM (v7)

---

## Project Structure

```
freecom-technology/
├── public/                 # Static assets (Favicons, vector maps)
├── src/
│   ├── components/         # Reusable layouts, Logo, and ScrollReveal wrappers
│   ├── context/            # CartContext and BookingContext for local state
│   ├── pages/              # Main pages (Home, About, Contact, Repair, Shop, Book, Privacy, Terms)
│   ├── utils/              # Mock product databases, FAQ data, and reviews
│   ├── App.jsx             # App layout & routing structure
│   ├── index.css           # Global typography, cyber-grids, and glow keyframes
│   └── main.jsx            # React root injection point
├── package.json            # Scripts & project dependencies
└── README.md               # Documentation
```

---

## Getting Started Locally

Follow these commands to clone, install, and run the project locally on your machine:

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open the local server in your browser to view the development environment.

### 3. Build for production
```bash
npm run build
```
This optimizes and compiles your site into a production-ready build folder.

---

## Direct Share (Tunneling & Cloud Hosting)

The project includes pre-configured settings for fast, free deployments:

* **Surge.sh (Cloud):** Deployed to freecom-technology.surge.sh using simple CLI deployments.
* **Localtunnel (Temporary sharing):** Share your local dev server instantly using:
  ```bash
  npx localtunnel --port 5173 --subdomain freecom-technology
  ```
