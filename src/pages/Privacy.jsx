import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Privacy = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-left bg-white">
      <ScrollReveal className="space-y-6">
        <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest block">Legal Documentation</span>
        <h1 className="text-3xl font-extrabold font-display tracking-tight text-zinc-950">
          Privacy Policy
        </h1>
        <p className="text-xs text-zinc-450 font-light mt-1 border-b border-zinc-100 pb-4">
          Last updated: July 1, 2026
        </p>

        <div className="space-y-6 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
          <section className="space-y-2">
            <p>
              Freecom Technology ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit our website, use our services, or communicate with us. By using our website or services, you consent to the practices described in this policy.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-sm text-zinc-900">1. Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Personal Information:</strong> Your name, phone number, email address, and any other details you provide when filling out our contact or repair intake forms.</li>
              <li><strong>Device &amp; Repair Information:</strong> Details about your device (make, model, condition) and the nature of the repair or service you are requesting, including fault descriptions and diagnostic notes.</li>
              <li><strong>Communication Records:</strong> Messages, images, and other information exchanged during WhatsApp consultations or other direct communication with our team.</li>
              <li><strong>Browsing Information:</strong> Non-personal data such as browser type, pages visited, and time spent on our website, collected automatically to help us improve the user experience.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-sm text-zinc-900">2. How We Use Your Information</h3>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To process and manage your repair requests, bookings, and service orders.</li>
              <li>To communicate with you regarding your repairs, orders, quotes, and service updates.</li>
              <li>To respond to your enquiries, feedback, and support requests.</li>
              <li>To process transactions for accessories purchases and related services.</li>
              <li>To improve our website, services, and overall customer experience.</li>
              <li>To comply with applicable legal and regulatory obligations.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-sm text-zinc-900">3. Information Sharing</h3>
            <p>
              We respect your privacy and do not sell, rent, or trade your personal information to third parties for marketing purposes. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>WhatsApp (Meta Platforms):</strong> When you initiate or respond to a consultation via WhatsApp, your messages are processed through WhatsApp's platform in accordance with their own privacy policy.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law, regulation, or valid legal process.</li>
              <li><strong>Service Providers:</strong> We may share limited information with trusted service providers who assist us in operating our business, provided they agree to keep your information confidential.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-sm text-zinc-900">4. Data Security</h3>
            <p>
              We take reasonable administrative, technical, and physical measures to protect your personal information from unauthorised access, loss, misuse, or alteration. While we strive to safeguard your data, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security. We encourage you to take precautions when sharing sensitive information online.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-sm text-zinc-900">5. Cookies &amp; Local Storage</h3>
            <p>
              Our website uses minimal browser storage to enhance your experience. Specifically, we use your browser's local storage to temporarily save items in your inquiry bag or accessory cart so that your selections are preserved as you browse. We do not use tracking cookies for advertising or behavioural profiling. No personal data is stored in cookies or local storage.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-sm text-zinc-900">6. Third-Party Services</h3>
            <p>Our website may integrate with or link to the following third-party services:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>WhatsApp (Meta Platforms):</strong> Used for customer consultations, repair quotes, and order communications. Your interactions on WhatsApp are subject to WhatsApp's privacy policy and end-to-end encryption.</li>
              <li><strong>Google Maps:</strong> Embedded on our website to help you locate our shop. Google may collect certain usage data in accordance with Google's privacy policy.</li>
            </ul>
            <p>
              We are not responsible for the privacy practices of these third-party services. We encourage you to review their respective privacy policies.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-sm text-zinc-900">7. Your Rights</h3>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request that we correct any inaccurate or incomplete personal information.</li>
              <li><strong>Deletion:</strong> Request the deletion of your personal information, subject to any legal obligations we may have to retain certain records.</li>
              <li><strong>Opt Out:</strong> Opt out of receiving promotional messages or communications from us at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details provided below. We will respond to your request within a reasonable timeframe.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-sm text-zinc-900">8. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, services, or applicable laws. Any updates will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically. Your continued use of our website or services after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-sm text-zinc-900">9. Contact Us</h3>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-none pl-0 space-y-1">
              <li><strong>Business Name:</strong> Freecom Technology</li>
              <li><strong>Address:</strong> Oluwole Showemimo St, Adura Road, Alagbado, Lagos, Nigeria</li>
              <li><strong>Contact:</strong> Reach us via WhatsApp or through the contact form on our website.</li>
            </ul>
          </section>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Privacy;
