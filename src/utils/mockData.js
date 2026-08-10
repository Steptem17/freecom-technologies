export const REVIEWS_DATA = [
  {
    id: 1,
    author: 'Adebayo Ogunlesi',
    location: 'Ikeja, Lagos',
    stars: 5,
    halfStar: false,
    text: 'Freecom repaired my iPhone 13 Pro OLED screen in less than 2 hours. The display quality is pristine and touch response is 100% original.'
  },
  {
    id: 2,
    author: 'Chidinma Eze',
    location: 'Lekki Phase 1',
    stars: 4,
    halfStar: false, // 4 stars exact
    text: 'My iPad Pro charging port was damaged and wouldn\'t accept charge. They diagnosed it, swapped the port unit, and kept me updated throughout.'
  },
  {
    id: 3,
    author: 'Tunde Bakare',
    location: 'Surulere, Lagos',
    stars: 4,
    halfStar: true, // 4.5 stars (4 full + 1 half)
    text: 'Swapped my Samsung S21 battery and fixed the back glass seal. Very honest diagnostic process and prompt turn-around.'
  }
];

export const ACCESSORIES_CATALOG = [
  {
    id: 'acc-1',
    name: '20W USB-C PD Fast Adapter',
    category: 'Chargers',
    price: 8500,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
    desc: 'High-speed PD charging brick compatible with iPhone 12-15 series and Samsung devices.'
  },
  {
    id: 'acc-2',
    name: 'Braided Nylon USB-C Cable (2m)',
    category: 'Cables',
    price: 4500,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    desc: 'Heavy-duty strain relief braided cable supporting 60W power delivery and data sync.'
  },
  {
    id: 'acc-3',
    name: 'MagSafe Magnetic Wireless Bank (10,000mAh)',
    category: 'Power Banks',
    price: 18500,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1609592424074-12ecb72d0d08?auto=format&fit=crop&w=600&q=80',
    desc: 'Snap-on magnetic battery pack with LED indicator and pass-through charging.'
  },
  {
    id: 'acc-4',
    name: 'Tempered Glass Screen Protector (iPhone 15 Pro)',
    category: 'Protection',
    price: 3500,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=600&q=80',
    desc: '9H hardness oleophobic glass guard with dust-free alignment kit.'
  }
];

export const PRODUCTS_DATA = ACCESSORIES_CATALOG;

export const FAQ_DATA = [
  {
    question: 'How long does a typical smartphone repair take?',
    answer: 'Most standard screen and battery replacements take between 1 to 2 hours once the device is checked into our store.'
  },
  {
    question: 'Do you offer a warranty on hardware repairs?',
    answer: 'Yes, all OEM component replacements include a 90-day functional warranty covering parts and workmanship.'
  },
  {
    question: 'How do I check the status of my repair?',
    answer: 'You can contact our workshop team directly via WhatsApp using your repair ticket number for real-time updates.'
  }
];
