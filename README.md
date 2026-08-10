# Freecom Technologies

Freecom Technologies is a web application for an enterprise mobile service and retail center based in Lagos, Nigeria. The platform facilitates online phone repair bookings, authentic smartphone stock inquiries, accessory commerce, and physical store navigation.

## Features

### Phone Repair Intake System
- Online repair scheduling for smartphones, tablets, iPads, and software flashing.
- Direct telephonic integration with store workshop representatives.
- Store intake location selection for walk-in repair dropped items.

### Smartphone Catalog & Inventory Queries
- Catalog showcasing brand new and certified pre-owned smartphones across major OEMs (Apple, Samsung, Tecno, Infinix, Redmi/Xiaomi, Oppo, Vivo, Itel).
- Automated inventory query system routing customer specifications directly to store inventory managers.

### Mobile Accessories Store
- Product listing for mobile charging hardware, protective accessories, audio devices, and storage peripherals.
- Client-side shopping bag session management.

### Store Locations
- Head Office: 26, Showemimo Street, Adura Bus Stop, Alagbado, Lagos State, Nigeria.
- Branch Outlet: 4, Babayemi Street via Adegolu (Power Line), Adura Bus Stop, Alagbado, Lagos State, Nigeria.

## Technology Stack

- Core Library: React 18
- Build System: Vite
- Utility Styling: Tailwind CSS
- Interface Animations: Framer Motion
- Iconography: Lucide React
- Hosting Infrastructure: Vercel Edge Network

## Project Architecture

```
src/
├── components/       # Global UI components (Navbar, Footer, CartDrawer, PageLoader)
├── context/          # React Context providers (CartContext)
├── pages/            # Application routes (Home, About, Repair, Gadgets, Shop, Contact)
├── App.jsx           # Client-side router configuration
└── main.jsx          # Application entry point
```

## Local Development

### Requirements
- Node.js version 18.0.0 or higher
- npm package manager

### Setup Instructions

1. Clone repository:
   ```bash
   git clone https://github.com/Steptem17/freecom-technology.git
   ```

2. Change working directory:
   ```bash
   cd freecom-technology
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

4. Launch local development server:
   ```bash
   npm run dev
   ```

5. Generate production build:
   ```bash
   npm run build
   ```

## License

Copyright (c) 2026 Freecom Technologies. All rights reserved.
