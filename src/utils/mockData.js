export const PRODUCTS_DATA = [
  {
    id: 'cat-powerbank',
    name: 'Powerbanks',
    description: 'High-capacity backup power solutions from 10,000mAh upward. Supports Power Delivery (PD) and Quick Charge (QC) for smartphones.',
    category: 'Power',
    image: "https://i.pinimg.com/736x/3d/b9/ec/3db9ecdf3e514e0016fb4c8e0a65b3ec.jpg",
    specs: ['10,000mAh upward capacities', 'PD Fast Charging support', 'LED power indicator screens']
  },
  {
    id: 'cat-headset',
    name: 'Headsets',
    description: 'Wireless and wired headsets featuring deep bass, active noise-canceling, and comfortable memory foam earmuffs for work or gaming.',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
    specs: ['Bluetooth 5.3 wireless', '24 hours playback time', 'Omnidirectional voice mic']
  },
  {
    id: 'cat-earbuds',
    name: 'Wireless Earbuds',
    description: 'Wireless earbuds with touch controls, low-latency audio, and compact charging cases.',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80',
    specs: ['Low-latency connection', 'IPX4 sweat resistance', 'Fast Type-C charging case']
  },
  {
    id: 'cat-speaker',
    name: 'Bluetooth Speakers',
    description: 'Portable wireless speakers with powerful stereo sound, rugged water-resistant cases, and long battery life.',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80',
    specs: ['Dual-speaker pairing', 'IPX6 water-resistant', '12 hours active playtime']
  },
  {
    id: 'cat-charger',
    name: 'Chargers & Adapters',
    description: 'High-speed USB-C GaN wall chargers ranging from 20W single-port blocks to 65W multi-port adapters.',
    category: 'Power',
    image: "https://i.pinimg.com/736x/18/c8/bf/18c8bfc216d0d6ee5fef9fe490a3cb52.jpg",
    specs: ['GaN tech for cooler charging', 'PD 20W - 65W outputs', 'Multi-device charge safety']
  },
  {
    id: 'cat-cable-usb',
    name: 'USB-C Fast Cables',
    description: 'Heavy-duty braided USB-C charging and data cables supporting high wattage Power Delivery.',
    category: 'Cables',
    image: 'https://i.pinimg.com/736x/94/a4/35/94a435ca5c402b23e42c89e76bff23f9.jpg',
    specs: ['Braided nylon armor', 'Up to 100W PD charging', 'High-speed data transfer']
  },
  {
    id: 'cat-cable-lightning',
    name: 'Lightning Cables',
    description: 'Apple-certified Lightning charging and data sync cables for iPhones and iPads, built with reinforced joints.',
    category: 'Cables',
    image: 'https://i.pinimg.com/1200x/ae/86/da/ae86dae7d00360d9979b8581a4ab60db.jpg',
    specs: ['iPhone & iPad compatible', 'Reinforced rubber joints', 'Fast charge compatible']
  },
  {
    id: 'cat-cable-typeb',
    name: 'Type B Cables',
    description: 'Durable Micro-USB (Type B) charging cables for Android devices, power banks, and legacy gadgets.',
    category: 'Cables',
    image: 'https://i.pinimg.com/1200x/1c/02/63/1c026352119debbe25e549c423fa3306.jpg',
    specs: ['Reinforced connector neck', 'Fast charging support', 'Data sync transfer']
  },
  {
    id: 'cat-cable-hdmi',
    name: 'HDMI & Display Cables',
    description: 'Ultra HD 4K and 8K HDMI cables for connecting laptops, game consoles, and players to TVs and monitors.',
    category: 'Cables',
    image: 'https://i.pinimg.com/1200x/c9/41/b6/c941b6a01f0ee107ba43d78c8ca19d0e.jpg',
    specs: ['HDMI 2.1 8K/4K resolution', 'Gold-plated connectors', 'Nylon braided durability']
  },
  {
    id: 'cat-gaming',
    name: 'Gaming Pads',
    description: 'Wireless and wired gaming controllers with tactile triggers and analog sticks, compatible with PC and consoles.',
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=400&q=80',
    specs: ['Bluetooth dual pairing', 'Tactile analog triggers', 'Rechargeable internal cell']
  },
  {
    id: 'cat-phone',
    name: 'Button Phones',
    description: 'Reliable and durable feature phones (like classic Nokia button phones) with long-lasting battery life and physical keypads.',
    category: 'Devices',
    image: 'https://i.pinimg.com/736x/c7/0a/00/c70a00726bf1d5c2a991ccb508c89b8b.jpg',
    specs: ['Up to 2-week standby battery', 'FM Radio & Torchlight built-in', 'Rugged, drop-resistant build']
  },
  {
    id: 'cat-keyboards',
    name: 'Keyboards',
    description: 'Wired and wireless keyboards with responsive keys and comfortable layouts for typing or office work.',
    category: 'Peripherals',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80',
    specs: ['Wired USB / 2.4G Wireless', 'Ergonomic key layouts', 'Durable, long-lasting switches']
  },
  {
    id: 'cat-mice',
    name: 'Wired & Wireless Mice',
    description: 'Silent-click ergonomic wired and wireless mice with adjustable DPI settings, suitable for office work or desktop gaming.',
    category: 'Peripherals',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80',
    specs: ['Adjustable 800 - 2400 DPI', 'Silent click buttons', 'Wired USB / Wireless options']
  },
  {
    id: 'cat-storage-flash',
    name: 'USB Flash Drives',
    description: 'Compact high-speed USB 3.0 and USB-C dual flash drives from 4GB to 128GB for data backups.',
    category: 'Storage',
    image: 'https://i.pinimg.com/736x/96/05/aa/9605aa5d53d0170c65e85585ab9027ba.jpg',
    specs: ['USB 3.0 speed transfers', '4GB to 128GB capacity options', 'Rugged metal casings']
  },
  {
    id: 'cat-storage-sd',
    name: 'Memory MicroSD Cards',
    description: 'High-speed Class 10 MicroSD cards for security cameras, Android phones, and dash cams.',
    category: 'Storage',
    image: 'https://i.pinimg.com/736x/19/f4/51/19f4512d08b83d18a8665789939879ca.jpg',
    specs: ['Class 10 UHS-I speeds', 'Up to 256GB storage options', 'Water and shock-proof']
  },
  {
    id: 'cat-screen-guard',
    name: 'Screen Guards',
    description: 'Premium quality tempered glass screen protectors including normal glass, privacy glass, and flexible ceramic glass for all iPhone and Android models.',
    category: 'Protection',
    image: 'https://i.pinimg.com/1200x/29/69/c8/2969c849cea984962eaf9798af22d6f5.jpg',
    specs: ['Normal, Privacy & Ceramic glass', 'High impact shatter protection', 'For iPhone & Android screens']
  },
  {
    id: 'cat-clipper',
    name: 'Hair Clippers & Trimmers',
    description: 'Rechargeable wireless hair clippers with carbon steel blades and adjustability attachments.',
    category: 'Grooming',
    image: 'https://i.pinimg.com/736x/cf/80/fd/cf80fd04e4c53fc19f6ab214617d6bab.jpg',
    specs: ['Carbon steel T-blades', 'Up to 180 min wireless runtime', 'LED charge display screen']
  },
  {
    id: 'cat-carholder',
    name: 'Car Holder Mounts',
    description: 'Magnetic and suction-based dashboard phone mounts with 360-degree rotation for safe GPS driving.',
    category: 'Protection',
    image: 'https://i.pinimg.com/736x/42/a5/62/42a56270a91df5183e30dccf73bf9fec.jpg',
    specs: ['Strong suction base mount', '360 degree rotation', 'Universal side clamps']
  }
];

export const REVIEWS_DATA = [
  {
    id: 1,
    author: 'Chinedu Okonkwo',
    location: 'Oluwole Showemimo St, Lagos',
    stars: 5,
    text: 'I brought my cracked iPhone here. They cataloged the issues and directed me to WhatsApp, where we negotiated the screen parts cost quickly based on the current FX rate. The service was completed in under two hours. Very transparent!'
  },
  {
    id: 2,
    author: 'Amina Mohammed',
    location: 'Adura Road, Alagbado, Lagos',
    stars: 5,
    text: 'Best shop for accessories! I selected the powerbanks and cables category on their website, clicked to inquire on WhatsApp, and the owner instantly sent me photos and prices of the specific models they had in stock. Picked them up at their Adura Alagbado shop.'
  },
  {
    id: 3,
    author: 'Oluwaseun Adebayo',
    location: 'Surulere, Lagos',
    stars: 4,
    text: 'A clean, simple experience. No complicated online payments—just select the accessories categories you want to buy, text them directly on WhatsApp, choose your models, and pay at store pickup. Very practical and reliable.'
  }
];

export const FAQ_DATA = [
  {
    id: 'faq-1',
    question: 'Why are there no repair prices listed on the website?',
    answer: 'The cost of device repair parts (especially screens and motherboard chips) fluctuates daily due to exchange rates. To give you the fairest and most accurate price, we let you register your faults online and then consult our technician directly on WhatsApp for a live quote.'
  },
  {
    id: 'faq-2',
    question: 'How does the WhatsApp accessory inquiry work?',
    answer: 'Instead of forcing you to buy specific stock models that might sell out, our site displays the accessory categories we keep (e.g. Powerbanks, Chargers). You add the categories you need to your Inquiry Bag and message us on WhatsApp. We then send you photos, capacities, and prices of the exact stock items currently in our shop.'
  },
  {
    id: 'faq-3',
    question: 'Where is your physical shop located?',
    answer: 'Our main office is located at Oluwole Showemimo St, Adura Road, Alagbado, Lagos, Nigeria. You can drop off your gadgets for repair or pick up accessories during our working hours.'
  },
  {
    id: 'faq-4',
    question: 'Do you offer a warranty on gadget repairs?',
    answer: 'Yes! All hardware repairs (such as screen replacements and charging port fixes) are backed by our warranty against any component defects. Physical or water damage after pickup is excluded.'
  }
];
