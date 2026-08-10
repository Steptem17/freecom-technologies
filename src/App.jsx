import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { BookingProvider } from './context/BookingContext';
import Layout from './components/Layout';
import PageLoader from './components/PageLoader';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Repair from './pages/Repair';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function AppContent() {
  return (
    <>
      <PageLoader />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/book" element={<Repair />} />
          <Route path="/accessories" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/find-store" element={<Contact />} />
          <Route path="/stores" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* Fallback to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <BookingProvider>
          <AppContent />
        </BookingProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
