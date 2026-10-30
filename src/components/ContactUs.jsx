import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    orderNumber: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ fullName: '', email: '', orderNumber: '', subject: '', message: '' });
  };

  return (
    <section className="min-h-screen bg-[#FDFBF7] text-[#2C2C24] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6B705C] mb-3">Get In Touch</p>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#3F4228] tracking-wide mb-4">
            We'd Love to Hear From You
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed font-light">
            Have a question about a dress, sizing, delivery, or your order? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Customer Support Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F8F5EE] border border-[#E9E4D9] p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-serif text-[#3F4228] mb-6">Customer Support</h2>
              
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#EAE5D9] flex items-center justify-center text-[#3F4228] shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 font-medium">Email</span>
                    <a href="mailto:support@gayara.com" className="text-[#3F4228] font-medium hover:underline">
                      support@gayara.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#EAE5D9] flex items-center justify-center text-[#3F4228] shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 font-medium">WhatsApp</span>
                    <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="text-[#3F4228] font-medium hover:underline">
                      +91 00000 00000
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#EAE5D9] flex items-center justify-center text-[#3F4228] shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 font-medium">Instagram</span>
                    <a href="https://instagram.com/gayara.official" target="_blank" rel="noreferrer" className="text-[#3F4228] font-medium hover:underline">
                      @gayara.official
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#EAE5D9] flex items-center justify-center text-[#3F4228] shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 font-medium">Support Hours</span>
                    <p className="text-gray-700">Mon – Sat: 9:30 AM – 6:30 PM IST</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-[#E3DDD1]">
                <p className="text-xs text-gray-600 leading-normal">
                  <strong className="text-[#3F4228]">Order related question?</strong> Please include your order number so we can assist you faster.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#EBE7DE] p-8 sm:p-10 rounded-2xl shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#EBF2EA] text-[#3F4228] flex items-center justify-center text-xl">✓</div>
                <h3 className="text-xl font-serif text-[#3F4228]">Thank You for Reaching Out</h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  We aim to respond within 24 hours. Thank you for being part of GAYARA.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs uppercase tracking-widest text-[#4A4A22] underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-600 mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full bg-[#FAF9F5] border border-[#DDD7C9] rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4A4A22] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-600 mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full bg-[#FAF9F5] border border-[#DDD7C9] rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4A4A22] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-600 mb-2 font-medium">
                      Order Number <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="orderNumber"
                      value={formData.orderNumber}
                      onChange={handleChange}
                      placeholder="#GY-1024"
                      className="w-full bg-[#FAF9F5] border border-[#DDD7C9] rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4A4A22] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-600 mb-2 font-medium">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Size inquiry / Order issue"
                      className="w-full bg-[#FAF9F5] border border-[#DDD7C9] rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4A4A22] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-600 mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full bg-[#FAF9F5] border border-[#DDD7C9] rounded-lg p-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4A4A22] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#4A4A22] hover:bg-[#3B3B1B] text-[#F9F7F1] rounded-lg text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-sm cursor-pointer"
                >
                  Send Message
                </button>

                <p className="text-[11px] text-gray-500 pt-2">
                  We aim to respond within 24 hours. Thank you for being part of GAYARA.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;