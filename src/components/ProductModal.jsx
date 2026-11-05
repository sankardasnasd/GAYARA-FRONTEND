import React, { useState } from 'react';
import { X, MessageCircle, Ruler, Sparkles, Check } from 'lucide-react';

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'Custom'];

export default function ProductModal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) return null;

  const handleWhatsAppOrder = () => {
    const phoneNumber = '917306735100';
    const message = `Hello GAYARA Studio! 🌸\n\nI would like to order/inquire about this handcrafted piece:\n• Dress: ${product.name}\n• Price: ₹${product.price}\n• Size Selected: ${selectedSize}\n\nPlease share availability and delivery details!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl border border-[#DCCFB6] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 border border-[#DCCFB6] text-[#4A4A22] flex items-center justify-center hover:bg-white transition-all shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Section */}
        <div className="relative bg-[#EFE6D5] min-h-[300px] md:min-h-full">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-[#4A4A22] border border-[#DCCFB6] tracking-wider uppercase">
            {product.craft || 'Artisanal'}
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B5532A] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Handcrafted Studio Piece
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-[#4A4A22] leading-tight">
              {product.name}
            </h3>

            <p className="text-xl font-medium text-[#4A4A22] mt-2">
              ₹{Number(product.price).toLocaleString('en-IN')}
            </p>

            <p className="text-sm text-[#6A6658] mt-3 leading-relaxed">
              {product.description || "A delicate vintage-inspired silhouette handcrafted with thoughtful detailing and timeless charm."}
            </p>

            {/* Size Selector */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#4A4A22] uppercase tracking-wider">Select Size</span>
                <span className="text-xs text-[#B5532A] flex items-center gap-1 cursor-pointer hover:underline">
                  <Ruler className="w-3.5 h-3.5" /> Size Guide
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      selectedSize === size
                        ? 'bg-[#4A4A22] text-[#F5EEE1] border-[#4A4A22] shadow-sm'
                        : 'bg-white text-[#4A4A22] border-[#DCCFB6] hover:border-[#4A4A22]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Artisan Highlights */}
            <div className="mt-6 pt-5 border-t border-[#DCCFB6]/60 grid grid-cols-2 gap-3 text-xs text-[#6A6658]">
              <div>🌿 100% Breathable Fabric</div>
              <div>🧵 Hand-stitched Detailing</div>
              <div>✨ Gentle Hand Wash</div>
              <div>📦 Pan-India Shipping</div>
            </div>
          </div>

          {/* WhatsApp Order Action */}
          <div className="mt-8 pt-4">
            <button
              onClick={handleWhatsAppOrder}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#4A4A22] text-[#F5EEE1] font-medium text-sm hover:bg-[#3F4020] transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#A9B890]" />
              Order on WhatsApp (Size: {selectedSize})
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}