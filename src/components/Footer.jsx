import React, { useState } from 'react';

const LogoMark = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 100 110" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <path d="M50 108V52M50 78C36 74 24 62 20 48M50 70C62 66 74 56 78 42M50 52c0-12 5-20 12-26M50 52c0-12-5-20-12-26" />
    <path d="M50 30c-6-5-8-14-4-22 4 3 6 8 4 14 2-7 6-12 10-14 2 7-2 16-10 22z" />
    <path d="M38 28c-8 0-14-6-14-13 6 0 12 5 14 13zM62 30c8-2 13-8 13-15-6 0-12 6-13 15z" />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="mt-1 bg-[#F5EEE1] border-t border-[#DCCFB6] pt-14 pb-8 px-4 sm:px-6 lg:px-12 text-[#2C2C24]">
      <div className="max-w-7xl mx-auto">
        
        {/* Brand Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 pb-10 border-b border-[#DCCFB6]/70">
          <LogoMark className="w-10 mx-auto text-[#4A4A22]" />
          <p className="brand-wordmark text-3xl mt-2 tracking-wider text-[#4A4A22] font-serif font-medium">GAYARA</p>
          <p className="brand-tagline text-base mt-1 text-[#6E6A4E] italic font-serif">Wear Your Story.</p>
          
          <p className="text-xs sm:text-sm text-[#5C573E] mt-4 leading-relaxed font-light">
            A little romance, a little vintage, and a whole lot of individuality. Discover aesthetic women's dresses inspired by dreamy silhouettes, delicate florals, vintage charm, and timeless beauty. At GAYARA, we believe every dress tells a story, and every woman deserves to express her own style.
          </p>
        </div>

        {/* Links & Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14 text-left">
          
          {/* Column 1: Explore */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-serif font-bold text-[#4A4A22] mb-4 pb-1 border-b border-[#DCCFB6] inline-block">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5C573E]">
              <li><a href="/" className="hover:text-[#4A4A22] transition-colors">Home</a></li>
              <li><a href="/shop" className="hover:text-[#4A4A22] transition-colors">Shop All</a></li>
              <li><a href="/new-arrivals" className="hover:text-[#4A4A22] transition-colors">New Arrivals</a></li>
              <li><a href="/best-sellers" className="hover:text-[#4A4A22] transition-colors">Best Sellers</a></li>
              <li><a href="/collections" className="hover:text-[#4A4A22] transition-colors">Our Collections</a></li>
              <li><a href="/wishlist" className="hover:text-[#4A4A22] transition-colors">Wishlist</a></li>
            </ul>
          </div>

          {/* Column 2: Customer Care */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-serif font-bold text-[#4A4A22] mb-4 pb-1 border-b border-[#DCCFB6] inline-block">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5C573E]">
              <li><a href="/contact" className="hover:text-[#4A4A22] transition-colors">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-[#4A4A22] transition-colors">Frequently Asked Questions</a></li>
              <li><a href="/size-guide" className="hover:text-[#4A4A22] transition-colors">Size Guide</a></li>
              <li><a href="/shipping" className="hover:text-[#4A4A22] transition-colors">Shipping & Delivery</a></li>
              <li><a href="/returns" className="hover:text-[#4A4A22] transition-colors">Returns & Exchanges</a></li>
              <li><a href="/order-tracking" className="hover:text-[#4A4A22] transition-colors">Order Tracking</a></li>
            </ul>
          </div>

          {/* Column 3: About GAYARA */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-serif font-bold text-[#4A4A22] mb-4 pb-1 border-b border-[#DCCFB6] inline-block">
              About GAYARA
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5C573E]">
              <li><a href="/about" className="hover:text-[#4A4A22] transition-colors">Our Story</a></li>
              <li><a href="/philosophy" className="hover:text-[#4A4A22] transition-colors">Our Philosophy</a></li>
              <li><a href="/style" className="hover:text-[#4A4A22] transition-colors">Our Style</a></li>
              <li><a href="/privacy-policy" className="hover:text-[#4A4A22] transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[#4A4A22] transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 4 & 5: Stay In Touch & Need Help */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Newsletter Box */}
            <div className="bg-[#EFE5D5] p-5 rounded-xl border border-[#D5C6AA]">
              <h4 className="text-xs uppercase tracking-[0.18em] font-serif font-bold text-[#4A4A22] mb-1">
                Stay In Touch
              </h4>
              <p className="text-xs italic text-[#6E6A4E] mb-2 font-serif">A little note from GAYARA!</p>
              <p className="text-xs text-[#5C573E] mb-3 leading-relaxed">
                Subscribe to our newsletter and be the first to discover new collections, exclusive offers, styling inspiration, and special updates.
              </p>

              {subscribed ? (
                <div className="bg-[#FAF7F2] text-[#4A4A22] p-2.5 rounded text-xs text-center border border-[#D5C6AA] font-medium">
                  ✓ Thank you for subscribing to GAYARA stories!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-[#FAF7F2] border border-[#CFC0A4] rounded px-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4A4A22]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#4A4A22] hover:bg-[#383818] text-[#FAF7F2] rounded text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Need Help & Socials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <h5 className="font-semibold text-[#4A4A22] uppercase tracking-wider mb-2">Need Help?</h5>
                <p className="text-[#5C573E] mb-2">Have a question about your favourite dress or order?</p>
                <div className="space-y-1 text-[#4A4A22]">
                  <p><span className="text-[#6E6A4E]">Email:</span> <a href="mailto:support@gayara.com" className="hover:underline">support@gayara.com</a></p>
                  <p><span className="text-[#6E6A4E]">WhatsApp:</span> <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="hover:underline">+91 00000 00000</a></p>
                  <p><span className="text-[#6E6A4E]">Hours:</span> Mon – Sat: 9:30 AM – 6:30 PM IST</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-[#4A4A22] uppercase tracking-wider mb-2">Follow Our Journey</h5>
                <p className="text-[#5C573E] mb-2">Dreamy outfit inspirations & styling ideas:</p>
                <div className="flex gap-2">
                  <a href="https://instagram.com/gayara.official" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-7 h-7 rounded-full bg-[#E5DAC6] hover:bg-[#4A4A22] hover:text-white flex items-center justify-center text-[#4A4A22] transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://pinterest.com/gayara" target="_blank" rel="noreferrer" aria-label="Pinterest" className="w-7 h-7 rounded-full bg-[#E5DAC6] hover:bg-[#4A4A22] hover:text-white flex items-center justify-center text-[#4A4A22] transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.211-.174.256-.402.151-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="https://facebook.com/gayara" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-7 h-7 rounded-full bg-[#E5DAC6] hover:bg-[#4A4A22] hover:text-white flex items-center justify-center text-[#4A4A22] transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Payment Badges */}
        <div className="pt-8 border-t border-[#DCCFB6]/70 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          
          <div className="space-y-1">
            <p className="caption text-[#6E6A4E] text-xs">
              © 2026 <strong className="text-[#4A4A22]">GAYARA</strong> Handcrafted Studio. Made with patience and care.
            </p>
            <p className="text-[11px] text-[#868160] italic">
              Made with Love for Women Who Love Their Style. Wear Your Story.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-[#6E6A4E]">
            <a href="/privacy-policy" className="hover:text-[#4A4A22] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-[#4A4A22] transition-colors">Terms & Conditions</a>
            <span>•</span>
            <a href="/shipping" className="hover:text-[#4A4A22] transition-colors">Shipping Policy</a>
            <span>•</span>
            <a href="/returns" className="hover:text-[#4A4A22] transition-colors">Return & Refund Policy</a>
          </div>

          {/* Supported Payments */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider text-[#6E6A4E] font-medium">Secured by</span>
            <div className="flex gap-1.5 opacity-80">
              <span className="px-2 py-0.5 bg-[#FAF7F2] border border-[#D5C6AA] rounded text-[10px] font-semibold text-[#4A4A22]">UPI</span>
              <span className="px-2 py-0.5 bg-[#FAF7F2] border border-[#D5C6AA] rounded text-[10px] font-semibold text-[#4A4A22]">VISA</span>
              <span className="px-2 py-0.5 bg-[#FAF7F2] border border-[#D5C6AA] rounded text-[10px] font-semibold text-[#4A4A22]">MasterCard</span>
              <span className="px-2 py-0.5 bg-[#FAF7F2] border border-[#D5C6AA] rounded text-[10px] font-semibold text-[#4A4A22]">RuPay</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;