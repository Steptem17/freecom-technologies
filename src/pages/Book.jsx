import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useBookings, FAULT_LABELS } from '../context/BookingContext';
import ScrollReveal from '../components/ScrollReveal';
import { Calendar, ShieldAlert, CheckCircle2, MessageSquare, ArrowRight, Printer } from 'lucide-react';

const Book = () => {
  const [searchParams] = useSearchParams();
  const { addBooking } = useBookings();

  // URL parameters pre-fills
  const deviceTypeParam = searchParams.get('deviceType') || '';
  const faultsParam = searchParams.get('faults') || '';
  const descParam = searchParams.get('desc') || '';

  // Form States
  const [deviceType, setDeviceType] = useState(deviceTypeParam);
  const [deviceBrand, setDeviceBrand] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [selectedFaults, setSelectedFaults] = useState([]);
  const [problemDescription, setProblemDescription] = useState(descParam);
  const [otherFaultDetail, setOtherFaultDetail] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [storeLocation, setStoreLocation] = useState('Adura Alagbado');

  // Success state after booking
  const [createdBooking, setCreatedBooking] = useState(null);

  // Load URL faults param if present
  useEffect(() => {
    if (faultsParam) {
      setSelectedFaults(faultsParam.split(','));
    }
  }, [faultsParam]);

  // Set min appointment date to tomorrow
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const handleFaultChange = (faultKey) => {
    setSelectedFaults((prev) =>
      prev.includes(faultKey) ? prev.filter((f) => f !== faultKey) : [...prev, faultKey]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedFaults.length === 0) {
      alert('Please check at least one device fault.');
      return;
    }

    const bookingPayload = {
      deviceType,
      brand: deviceBrand,
      model: deviceModel,
      services: selectedFaults,
      problemDescription,
      otherDetail: otherFaultDetail,
      customer: {
        firstName,
        lastName,
        email,
        phone
      },
      date: appointmentDate,
      time: appointmentTime,
      location: storeLocation
    };

    const newBooking = addBooking(bookingPayload);
    setCreatedBooking(newBooking);

    // Construct prefilled WhatsApp message
    const ownerWhatsAppNumber = '2348030582883'; // Nigerian format, no leading + or 00
    const faultsListText = selectedFaults.map(f => `• ${FAULT_LABELS[f] || f}`).join('\n');
    
    const messageText = `Hello Freecom Technologies,

I would like to get a repair quote for my device:

- Device: ${deviceBrand} ${deviceModel} (${deviceType})
- Faults Selected:
${faultsListText}
- Description: ${problemDescription || 'None provided'}
- Ticket ID: ${newBooking.ticketId}
- Scheduled Drop-off: ${appointmentDate} during ${appointmentTime}
- Customer Name: ${firstName} ${lastName}

Please let me know the estimated cost of repairs. Thank you!`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${ownerWhatsAppNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  // --- RENDERS ---

  // RENDER 1: Booking Success Screen
  if (createdBooking) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-left print:p-0">
        <ScrollReveal className="bg-white border border-zinc-150 rounded-2xl shadow-md overflow-hidden print:border-0">
          <div className="bg-zinc-950 p-6 text-white flex justify-between items-center print:bg-white print:text-zinc-950 print:border-b">
            <div>
              <span className="text-[10px] uppercase text-zinc-400 block tracking-widest">Intake Slip</span>
              {/* Strategic color on Success Ticket ID */}
              <span className="text-sm font-display font-extrabold tracking-wide text-primary">{createdBooking.ticketId}</span>
            </div>
            <span className="text-[10px] uppercase font-bold bg-primary border border-primary/20 text-white px-2 py-0.5 rounded print:text-zinc-800 print:border-zinc-300">Registered</span>
          </div>

          <div className="p-8 space-y-6">
            <div className="flex gap-3 items-start border-b border-zinc-100 pb-4">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-sm text-zinc-950">Intake Saved Successfully</h3>
                <p className="text-[11px] text-zinc-500 mt-1 leading-normal font-light">We have launched a WhatsApp tab prefilled with your symptoms. Please send the message to get your price quote from the technician.</p>
              </div>
            </div>

            {/* Ticket Specs */}
            <div className="grid grid-cols-2 gap-4 text-xs font-light text-zinc-650 border-b border-zinc-100 pb-6">
              <div>
                <span className="text-zinc-400 block uppercase text-[9px] font-semibold tracking-wider">Device:</span>
                <span className="font-semibold text-zinc-800 capitalize">{createdBooking.brand} {createdBooking.model}</span>
              </div>
              <div>
                <span className="text-zinc-400 block uppercase text-[9px] font-semibold tracking-wider">Scheduled Drop-off:</span>
                <span className="font-semibold text-zinc-800">{createdBooking.date} at {createdBooking.time}</span>
              </div>
              <div>
                <span className="text-zinc-400 block uppercase text-[9px] font-semibold tracking-wider">Customer Name:</span>
                <span className="font-semibold text-zinc-800">{createdBooking.customer.firstName} {createdBooking.customer.lastName}</span>
              </div>
              <div>
                <span className="text-zinc-400 block uppercase text-[9px] font-semibold tracking-wider">Store Location:</span>
                <span className="font-semibold text-primary">{createdBooking.location}</span>
              </div>
            </div>

            {/* Faults checked */}
            <div className="space-y-3">
              <h4 className="font-display font-semibold text-[10px] text-zinc-400 uppercase tracking-widest">Registered Faults</h4>
              <div className="space-y-1.5">
                {createdBooking.services.map((key) => (
                  <div key={key} className="text-xs text-zinc-700 flex justify-between items-center py-1 border-b border-zinc-50 last:border-0">
                    <span>{FAULT_LABELS[key]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 px-6 py-4 flex gap-4 no-print border-t border-zinc-150">
            <button
              onClick={handlePrint}
              className="w-1/2 border border-zinc-250 text-zinc-700 font-semibold py-3 rounded text-xs hover:bg-zinc-100 transition-colors flex items-center justify-center gap-1.5"
            >
              <Printer className="h-4 w-4" />
              Print Intake Slip
            </button>
            <Link
              to="/"
              className="w-1/2 bg-primary text-white text-center font-semibold py-3 rounded text-xs hover:bg-primary-dark transition-colors flex items-center justify-center gap-1 shadow-md shadow-primary/10"
            >
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    );
  }

  // RENDER 2: Booking Form Screen
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 text-zinc-850">
      {/* Header */}
      <section className="text-left max-w-2xl mb-12">
        <ScrollReveal className="space-y-2">
          <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded px-2.5 py-0.5 uppercase tracking-[0.25em] block w-fit">
            Intake Registration
          </span>
          <h1 className="text-3xl font-extrabold font-display tracking-tight text-zinc-950 sm:text-4xl">
            Book Repair Appointment
          </h1>
          <p className="text-xs text-zinc-550 font-light leading-relaxed">
            Fill out your details to schedule a diagnostics drop-off at our Adura Alagbado store. The system will generate a ticket and open WhatsApp with your faults.
          </p>
        </ScrollReveal>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Column */}
        <ScrollReveal className="lg:col-span-8 bg-white border border-zinc-150 rounded-2xl p-6 sm:p-8 text-left shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 1. Device Info */}
            <div className="space-y-4">
              {/* Colorful numbers in section headers */}
              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-800 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold">1</span>
                Hardware Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[9px] font-bold text-zinc-450 uppercase mb-2">Device Type</label>
                  <select
                    value={deviceType}
                    onChange={(e) => setDeviceType(e.target.value)}
                    required
                    className="block w-full border border-zinc-200 rounded p-3 text-xs bg-white focus:outline-none focus:border-primary"
                  >
                    <option value="">Select type</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="tablet">iPad / Tablet</option>
                    <option value="software">Software Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-zinc-450 uppercase mb-2">Manufacturer Brand</label>
                  <input
                    type="text"
                    placeholder="e.g. Apple, Samsung, Lenovo"
                    value={deviceBrand}
                    onChange={(e) => setDeviceBrand(e.target.value)}
                    required
                    className="block w-full border border-zinc-200 rounded p-3 text-xs focus:outline-none focus:border-primary placeholder-zinc-300"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-zinc-450 uppercase mb-2">Device Model</label>
                  <input
                    type="text"
                    placeholder="e.g. iPhone 13 Pro"
                    value={deviceModel}
                    onChange={(e) => setDeviceModel(e.target.value)}
                    required
                    className="block w-full border border-zinc-200 rounded p-3 text-xs focus:outline-none focus:border-primary placeholder-zinc-300"
                  />
                </div>
              </div>

              {/* Fault checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="block text-[9px] font-bold text-zinc-450 uppercase">Check Faults</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(FAULT_LABELS).map(([key, label]) => {
                    const isChecked = selectedFaults.includes(key);
                    return (
                      <label
                        key={key}
                        className={`flex items-center gap-3 p-3 border rounded cursor-pointer transition-all duration-300 ${
                          isChecked
                            ? 'border-primary bg-primary/5 text-primary font-semibold'
                            : 'border-zinc-200 hover:bg-zinc-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleFaultChange(key)}
                          className="h-4 w-4 rounded border-zinc-300 text-primary focus:ring-primary accent-primary"
                        />
                        <span className="text-xs text-zinc-700">{label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
                {selectedFaults.includes('other') && (
                  <div className="pt-2">
                    <label className="block text-[9px] font-bold text-zinc-450 uppercase mb-2">Other Issue Details</label>
                    <input
                      type="text"
                      placeholder="Describe other issue"
                      value={otherFaultDetail}
                      onChange={e => setOtherFaultDetail(e.target.value)}
                      className="block w-full border border-zinc-200 rounded p-3 text-xs focus:outline-none focus:border-primary"
                    />
                  </div>
                )}

              {/* Problem Description */}
              <div className="pt-2">
                <label className="block text-[9px] font-bold text-zinc-450 uppercase mb-2">Description & Notes</label>
                <textarea
                  rows="3"
                  placeholder="Describe details (e.g. dropped in water, screen flickering, power cuts)..."
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  required
                  className="block w-full border border-zinc-200 rounded p-3 text-xs focus:outline-none focus:border-primary placeholder-zinc-300"
                />
              </div>
            </div>

            {/* 2. Customer details */}
            <div className="space-y-4 pt-4 border-t border-zinc-100">
              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-800 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold">2</span>
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] font-bold text-zinc-450 uppercase mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full border border-zinc-200 rounded p-3 text-xs focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-zinc-450 uppercase mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full border border-zinc-200 rounded p-3 text-xs focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-zinc-450 uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full border border-zinc-200 rounded p-3 text-xs focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-zinc-450 uppercase mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="block w-full border border-zinc-200 rounded p-3 text-xs focus:outline-none focus:border-primary placeholder-zinc-300"
                  />
                </div>
              </div>
            </div>

            {/* 3. Appointment Slot */}
            <div className="space-y-4 pt-4 border-t border-zinc-100">
              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-800 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold">3</span>
                Intake Appointment
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[9px] font-bold text-zinc-450 uppercase mb-2">Drop-Off Date</label>
                  <input
                    type="date"
                    min={getMinDate()}
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="block w-full border border-zinc-200 rounded p-3 text-xs focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-zinc-450 uppercase mb-2">Time Slot</label>
                  <select
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    required
                    className="block w-full border border-zinc-200 rounded p-3 text-xs bg-white focus:outline-none focus:border-primary"
                  >
                    <option value="">Select slot</option>
                    <option value="09:00-11:00">09:00 AM - 11:00 AM</option>
                    <option value="11:00-13:00">11:00 AM - 01:00 PM</option>
                    <option value="13:00-15:00">01:00 PM - 03:00 PM</option>
                    <option value="15:00-17:00">03:00 PM - 05:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-zinc-450 uppercase mb-2">Drop-Off Location</label>
                  <select
                    value={storeLocation}
                    onChange={(e) => setStoreLocation(e.target.value)}
                    required
                    className="block w-full border border-zinc-200 rounded p-3 text-xs bg-white focus:outline-none focus:border-primary"
                  >
                    <option value="Adura Alagbado">Adura Alagbado, Lagos</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3.5 rounded text-xs uppercase tracking-widest hover:bg-primary-dark transition-colors shadow-md shadow-primary/10 flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              Register & Consult on WhatsApp
            </button>
          </form>
        </ScrollReveal>

        {/* Sidebar Summary Column */}
        <ScrollReveal className="lg:col-span-4 space-y-6" delay={150}>
          {/* Accent border on Sidebar header card */}
          <div className="bg-zinc-900 text-white rounded-2xl p-6 shadow-md space-y-4 text-left border-t-4 border-t-primary">
            <h3 className="font-display font-bold text-xs border-b border-zinc-800 pb-3 text-white uppercase tracking-widest">
              Selected Faults
            </h3>
            <div className="space-y-3 text-xs text-white">
              <div className="flex justify-between text-white">
                <span className="text-white font-semibold">Device:</span>
                <span className="font-bold text-white capitalize">{deviceBrand || '-'} {deviceModel || '-'}</span>
              </div>
              <div className="border-t border-zinc-800 pt-3 space-y-1.5 font-bold text-white">
                {selectedFaults.length > 0 ? (
                  selectedFaults.map((key) => (
                    <div key={key} className="flex justify-between text-white">
                      <span className="text-white">{FAULT_LABELS[key]}</span>
                    </div>
                  ))
                ) : (
                  <span className="text-zinc-400 italic font-light">No faults checked</span>
                )}
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 border border-zinc-150 rounded-2xl p-6 shadow-sm space-y-4 text-left">
            <h4 className="font-display font-bold text-[10px] text-zinc-800 uppercase tracking-wider">
              Intake Notice
            </h4>
            <div className="space-y-3.5 text-xs text-zinc-650 leading-relaxed font-light">
              <div className="flex gap-2">
                <ShieldAlert className="h-5 w-5 text-primary flex-shrink-0 animate-pulse" />
                <p>No repair prices are hardcoded. We review your faults and message you directly on WhatsApp with current screen/parts quotes.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Book;
