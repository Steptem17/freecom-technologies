import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { BookingProvider } from './context/BookingContext';
import Layout from './components/Layout';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Repair from './pages/Repair';
import Shop from './pages/Shop';
import Book from './pages/Book';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <CartProvider>
        <BookingProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/repair" element={<Repair />} />
              <Route path="/accessories" element={<Shop />} />
              <Route path="/book" element={<Book />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* Fallback to home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Layout>
        </BookingProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
