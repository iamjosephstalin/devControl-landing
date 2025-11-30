import React from 'react';

const Privacy = () => {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-6 min-h-screen text-zinc-300">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter text-white">Privacy Policy</h1>
      <p className="text-zinc-500 mb-8">Last updated: November 30, 2025</p>

      <div className="space-y-8 text-sm md:text-base leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
          <p>DevControl ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our application.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">2. Data We Collect</h2>
          <p>We collect information that you voluntarily provide to us when you register on the application, express an interest in obtaining information about us or our products and services, when you participate in activities on the application or otherwise when you contact us.</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-400">
             <li>Personal Data (Name, Email address)</li>
             <li>Derivative Data (IP address, Browser type)</li>
             <li>Financial Data (Data related to your payment method)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">3. Use of Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the application to:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-400">
             <li>Create and manage your account.</li>
             <li>Process your payments and refunds.</li>
             <li>Email you regarding your account or order.</li>
             <li>Fulfill and manage purchases, orders, payments, and other transactions related to the application.</li>
          </ul>
        </section>
        
        <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;