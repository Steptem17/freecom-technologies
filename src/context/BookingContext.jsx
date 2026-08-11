import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

export const useBookings = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookings must be used within a BookingProvider');
  }
  return context;
};

// Available fault selections
export const FAULT_LABELS = {
  screen: 'Broken Screen / Bleeding LCD',
  battery: 'Battery Drains Fast / Bulging Battery',
  charging: 'Loose Charging Port / No Connection',
  camera: 'Camera Lens Cracked / Blurry Focus',
  buttons: 'Power or Volume Buttons Unresponsive',
  software: 'Boot Loop / Frozen Operating System',
  liquid: 'Liquid Damage / Exposure to Water',
  other: 'Other (Hardware Diagnosis Needed)'
};

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('freecom_local_bookings');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('freecom_local_bookings', JSON.stringify(bookings));
  }, [bookings]);

  // Create new local booking
  const addBooking = (bookingData) => {
    // Generate Ticket ID e.g. FL-2895K
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const ticketId = `FL-${randomNum}${randomChar}`;

    const newBooking = {
      ...bookingData,
      ticketId,
      status: 'Received',
      createdAt: new Date().toISOString()
    };

    setBookings(prev => [newBooking, ...prev]);
    return newBooking;
  };

  const getBooking = (ticketId) => {
    return bookings.find(
      b => b.ticketId.toUpperCase() === ticketId.trim().toUpperCase()
    );
  };

  const cancelBooking = (ticketId) => {
    setBookings(prev => prev.filter(b => b.ticketId !== ticketId));
  };

  return (
    <BookingContext.Provider
      value={{ bookings, addBooking, getBooking, cancelBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
};
