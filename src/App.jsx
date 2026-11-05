import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { MessageCircle, Menu, X, Sparkles, Ruler, Search, SlidersHorizontal, RotateCcw } from 'lucide-react';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

/* Photos live in public/gayara/ */
const img = (name) => `/gayara/${name}.jpg`;

const LogoMark = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 100 110" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <path d="M50 108V52M50 78C36 74 24 62 20 48M50 70C62 66 74 56 78 42M50 52c0-12 5-20 12-26M50 52c0-12-5-20-12-26" />
    <path d="M50 30c-6-5-8-14-4-22 4 3 6 8 4 14 2-7 6-12 10-14 2 7-2 16-10 22z" />
    <path d="M38 28c-8 0-14-6-14-13 6 0 12 5 14 13zM62 30c8-2 13-8 13-15-6 0-12 6-13 15z" />
  </svg>
);

const Sprig = ({ className = '', color = '#4A4A22' }) => (
  <svg className={className} viewBox="0 0 60 120" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <path d="M30 118V10M30 90c-12-4-20-14-22-26 10 2 20 10 22 26zM30 70c12-4 20-14 22-26-10 2-20 10-22 26zM30 50c-10-3-16-12-18-22 8 2 16 8 18 22zM30 32c8-3 14-10 16-18-7 1-13 7-16 18z" fill={color} fillOpacity=".25" />
  </svg>
);

const ALL_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

function App() {
  const [products, setProducts] = useState([]);
  const [crafts, setCrafts] = useState([]);
  const [silhouettes, setSilhouettes] = useState([]);
  
  // UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalSize, setModalSize] = useState('M');

  // Filters State
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCraft, setSelectedCraft] = useState('ALL');
  const [selectedSilhouette, setSelectedSilhouette] = useState('ALL');
  const [selectedColor, setSelectedColor] = useState('ALL');
  const [selectedSize, setSelectedSize] = useState('ALL');
  const [maxPrice, setMaxPrice] = useState(10000);

  const API_BASE = import.meta.env.VITE_API_URL || 'https://gayara-backend.onrender.com/api';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, craftRes, silRes] = await Promise.all([
          axios.get(`${API_BASE}/products/`),
          axios.get(`${API_BASE}/crafts/`),
          axios.get(`${API_BASE}/silhouettes/`).catch(() => ({ data: [] })),
        ]);
        setProducts(prodRes.data);
        setCrafts(craftRes.data);
        setSilhouettes(silRes.data);

        // പരമാവധി പ്രൈസ് തനിയെ കണ്ടുപിടിക്കാൻ
        if (prodRes.data.length > 0) {
          const highest = Math.max(...prodRes.data.map((p) => parseFloat(p.price) || 0));
          setMaxPrice(highest > 0 ? Math.ceil(highest) : 10000);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, [API_BASE]);

  // പ്രോഡക്റ്റുകളിൽ ഉള്ള കളറുകൾ ഓട്ടോമാറ്റിക് ആയി എടുക്കാൻ
  const availableColors = useMemo(() => {
    const set = new Set();
    products.forEach((p) => {
      if (p.color && p.color.trim()) set.add(p.color.trim());
    });
    return Array.from(set);
  }, [products]);

  const signatureStyles = [
    { title: 'Bohemian / Peasant Dress', img: img('style-1') },
    { title: 'Smocked / Cottagecore Dress', img: img('style-2') },
    { title: 'Tiered Maxi Dress', img: img('style-3') },
    { title: 'Embroidered Kaftan Dress', img: img('style-4') },
    { title: 'Pinafore / Overall Dress', img: img('style-5') },
    { title: 'Tunic / Shift Dress', img: img('style-6') },
  ];

  const embroideryCrafts = [
    { name: 'Chikankari', sub: '(Shadow Work)', img: img('craft-1') },
    { name: 'Kantha Stitch', sub: '', img: img('craft-2') },
    { name: 'Kashmiri Aari & Sozni', sub: '', img: img('craft-3') },
    { name: 'Kutch / Mirror Work', sub: '(Abhla Bharat)', img: img('craft-4') },
    { name: 'Botanical / French Knot', sub: 'Thread Work', img: img('craft-5') },
  ];

  const fabricSwatches = [1, 2, 3, 4, 5].map((n) => img(`fabric-${n}`));
  const colorDots = ['#B5532A', '#D9A23A', '#6B7048', '#A9B48F', '#E0AEAC', '#D9C7AE', '#8EA5B7'];

  const details = [
    { label: 'Thoughtful Details', img: img('detail-1') },
    { label: 'Hand-sewn Buttons & Tassels', img: img('detail-2') },
    { label: 'Crochet Lace Edging', img: img('detail-3') },
  ];

  const handleWhatsApp = (title, price, size = '') => {
    const sizeInfo = size ? `\n• Size: ${size}` : '';
    const text = encodeURIComponent(
      `Hello GAYARA Studio! 🌸\n\nI am in love with the handcrafted piece:\n• Dress: "${title}"\n• Price: ₹${price || 'Inquiry'}${sizeInfo}\n\nCan you please share availability and ordering details?`
    );
    window.open(`https://wa.me/917306735100?text=${text}`, '_blank');
  };

  const pill = (active) =>
    `px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
      active ? 'bg-[#4A4A22] text-[#F5EEE1] shadow-sm' : 'bg-[#FAF7F2] border border-[#DCCFB6] text-[#4A4A22] hover:bg-[#EADFCB]'
    }`;

  const getProductSizes = (product) => {
    if (!product || !product.available_sizes) {
      return ['XS', 'S', 'M', 'L', 'XL'];
    }
    return product.available_sizes.split(',').map((s) => s.trim()).filter(Boolean);
  };

  const handleOpenModal = (dress) => {
    setSelectedProduct(dress);
    const available = getProductSizes(dress);
    setModalSize(available[0] || 'M');
  };

  const resetFilters = () => {
    setSelectedCraft('ALL');
    setSelectedSilhouette('ALL');
    setSelectedColor('ALL');
    setSelectedSize('ALL');
    setSearchTerm('');
    if (products.length > 0) {
      const highest = Math.max(...products.map((p) => parseFloat(p.price) || 0));
      setMaxPrice(highest > 0 ? Math.ceil(highest) : 10000);
    }
  };

  // എണ്ണൽ: എത്ര ഫിൽട്ടറുകൾ നിലവിൽ ആക്ടീവ് ആണ്
  const activeFilterCount = [
    selectedCraft !== 'ALL',
    selectedSilhouette !== 'ALL',
    selectedColor !== 'ALL',
    selectedSize !== 'ALL',
    searchTerm !== '',
  ].filter(Boolean).length;

  // ഫിൽട്ടറും സോർട്ടും ചെയ്യുന്ന പ്രധാന ലോജിക്
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // 1. Craft Filter
        const matchesCraft = selectedCraft === 'ALL' || p.craft_name === selectedCraft;

        // 2. Silhouette Filter
        const matchesSilhouette = selectedSilhouette === 'ALL' || p.silhouette_name === selectedSilhouette;

        // 3. Color Filter
        const matchesColor = selectedColor === 'ALL' || (p.color && p.color.toLowerCase() === selectedColor.toLowerCase());

        // 4. Size Filter
        const sizes = getProductSizes(p);
        const matchesSize = selectedSize === 'ALL' || sizes.includes(selectedSize);

        // 5. Price Filter
        const price = parseFloat(p.price) || 0;
        const matchesPrice = price <= maxPrice;

        // 6. Search Term Filter
        const term = searchTerm.toLowerCase();
        const matchesSearch =
          !term ||
          p.name.toLowerCase().includes(term) ||
          (p.fabric && p.fabric.toLowerCase().includes(term)) ||
          (p.craft_name && p.craft_name.toLowerCase().includes(term)) ||
          (p.silhouette_name && p.silhouette_name.toLowerCase().includes(term));

        return matchesCraft && matchesSilhouette && matchesColor && matchesSize && matchesPrice && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return parseFloat(a.price) - parseFloat(b.price);
        if (sortBy === 'price-high') return parseFloat(b.price) - parseFloat(a.price);
        return 0;
      });
  }, [products, selectedCraft, selectedSilhouette, selectedColor, selectedSize, maxPrice, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-[#EFE6D5] text-[#3F4020] scroll-smooth">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#F5EEE1]/95 backdrop-blur-md border-b border-[#DCCFB6] shadow-sm">
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 text-[#4A4A22] group">
            <LogoMark className="w-7 h-7 transition-transform group-hover:scale-105" />
            <span className="brand-wordmark text-2xl tracking-wider font-serif">GAYARA</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 caption !text-[0.95rem]">
            <a href="#styles" className="hover:text-[#B5532A] transition-colors">Styles</a>
            <a href="#crafts" className="hover:text-[#B5532A] transition-colors">Crafts</a>
            <a href="#fabrics" className="hover:text-[#B5532A] transition-colors">Fabrics</a>
            <a href="#collection" className="font-semibold text-[#4A4A22] hover:text-[#B5532A] transition-colors">Products</a>
            <a href="#faq" className="hover:text-[#B5532A] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#B5532A] transition-colors">Contact</a>
            <a href="#collection" className="btn-gayara !py-2 !px-5 !text-xs uppercase tracking-widest ml-2">Shop Now</a>
          </nav>

          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-[#4A4A22] p-1.5 rounded-lg hover:bg-[#EAE1D0] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F5EEE1] border-b border-[#DCCFB6] px-6 py-4 space-y-3 font-serif text-sm">
            <a href="#styles" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#4A4A22]">Styles</a>
            <a href="#crafts" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#4A4A22]">Crafts</a>
            <a href="#fabrics" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#4A4A22]">Fabrics</a>
            <a href="#collection" onClick={() => setMobileMenuOpen(false)} className="block py-1 font-semibold text-[#4A4A22]">Products</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#4A4A22]">FAQ</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#4A4A22]">Contact Us</a>
          </div>
        )}
      </header>

      <main id="top" className="max-w-6xl mx-auto p-1 md:p-1.5 space-y-1 md:space-y-1.5">
        
        {/* ROW 1: Hero */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-1.5">
          <div className="tile aspect-[413/373]">
            <img src={img('hero')} alt="Artisanal fashion" className="w-full h-full object-cover" />
          </div>

          <div className="panel flex flex-col items-center justify-center text-center aspect-[421/373] py-10 bg-[#F5EEE1]">
            <LogoMark className="w-14 text-[#4A4A22]" />
            <h1 className="brand-wordmark text-5xl md:text-6xl lg:text-7xl mt-4 font-serif text-[#4A4A22]">GAYARA</h1>
            <p className="brand-tagline text-base md:text-lg mt-3 text-[#6E6A4E] italic font-serif">Wear Your Story.</p>
          </div>

          <div className="flex gap-1 md:gap-1.5 aspect-[416/373]">
            <div className="tile flex-[298]">
              <img src={img('rack')} alt="Dresses rack" className="w-full h-full object-cover" />
            </div>
            <div className="panel-warm flex-[112] flex flex-col items-center justify-between py-5 px-1 text-center bg-[#EAE0D0]">
              <p className="script-note !text-[1.15rem] md:!text-[1.3rem] -rotate-6 mt-6">
                Handcrafted<br />Dresses<br />for<br />Modern<br />Souls<br />
                <span className="text-[#9B5B4A]">♡</span>
              </p>
              <Sprig className="w-8 md:w-10" />
            </div>
          </div>
        </section>

        {/* ROW 2: Signature Styles */}
        <section id="styles" className="grid grid-cols-1 lg:grid-cols-[850fr_392fr] gap-1 md:gap-1.5 scroll-mt-20">
          <div className="panel p-5 bg-[#F5EEE1]">
            <h2 className="section-title mb-4 font-serif text-2xl text-[#4A4A22]">Our Signature Styles</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {signatureStyles.map((s) => (
                <figure key={s.title}>
                  <div className="tile aspect-[128/225] overflow-hidden rounded-md">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <figcaption className="caption mt-2 text-xs text-center text-[#6E6A4E]">{s.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="tile min-h-[260px] overflow-hidden rounded-md">
            <img src={img('stitch')} alt="Hand embroidery" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* ROW 3: Crafts, Fabrics & Colors */}
        <section id="crafts" className="grid grid-cols-1 lg:grid-cols-[850fr_404fr] gap-1 md:gap-1.5 scroll-mt-20">
          <div className="panel p-5 bg-[#F5EEE1]">
            <h2 className="section-title mb-4 font-serif text-2xl text-[#4A4A22]">Our Embroidery Crafts</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {embroideryCrafts.map((c) => (
                <figure key={c.name}>
                  <div className="tile aspect-[152/172] overflow-hidden rounded-md">
                    <img src={c.img} alt={c.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <figcaption className="caption mt-2 text-xs text-center text-[#6E6A4E]">
                    {c.name}
                    {c.sub && <><br />{c.sub}</>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div id="fabrics" className="panel p-5 bg-[#F5EEE1] scroll-mt-20">
            <h2 className="section-title mb-4 font-serif text-2xl text-[#4A4A22]">Fabrics &amp; Colors</h2>
            <div className="flex gap-2 justify-between">
              {fabricSwatches.map((src, i) => (
                <img key={i} src={src} alt="Fabric swatch" className="w-1/5 aspect-square rounded-full object-cover border border-[#DCCFB6]" />
              ))}
            </div>
            <p className="caption !text-left mt-4 !leading-relaxed text-xs text-[#6E6A4E]">
              Linen &nbsp;|&nbsp; Khadi &nbsp;|&nbsp; Mulmul<br />
              Organic Cotton &nbsp;|&nbsp; Silk Blend
            </p>
            <div className="flex gap-2 mt-5">
              {colorDots.map((c) => (
                <span key={c} className="swatch-dot !w-7 !h-7 rounded-full shadow-inner" style={{ backgroundColor: c }} title={c} />
              ))}
            </div>
          </div>
        </section>

        {/* ROW 4: Live Django Products Collection with Advanced Multi-Filter */}
        <section id="collection" className="panel p-5 md:p-8 bg-[#F5EEE1] scroll-mt-20">
          
          {/* Header & Quick Craft Buttons */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="section-title font-serif text-3xl text-[#4A4A22]">The Studio Collection</h2>
              <p className="text-xs text-[#6E6A4E] mt-1 font-light">Handcrafted artisanal silhouettes curated for individual style.</p>
            </div>
            
            {/* Quick Craft Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
              <button onClick={() => setSelectedCraft('ALL')} className={pill(selectedCraft === 'ALL')}>
                All Crafts
              </button>
              {crafts.map((c) => (
                <button key={c.id} onClick={() => setSelectedCraft(c.name)} className={pill(selectedCraft === c.name)}>
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Action Row: Search + Filter Drawer Toggle + Sort */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mb-6 pb-4 border-b border-[#DCCFB6]/60">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Search dress, fabric, craft..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#DCCFB6] rounded-full py-2 pl-9 pr-8 text-xs text-[#4A4A22] placeholder-[#8A846B] focus:outline-none focus:border-[#4A4A22]"
              />
              <Search className="w-3.5 h-3.5 text-[#8A846B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#8A846B]">✕</button>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              {/* Filter Button with Count Badge */}
              <button
                onClick={() => setFilterDrawerOpen(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium transition-all ${
                  activeFilterCount > 0
                    ? 'bg-[#4A4A22] text-[#F5EEE1] border-[#4A4A22]'
                    : 'bg-[#FAF7F2] border-[#DCCFB6] text-[#4A4A22] hover:bg-[#EAE0D0]'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-[#B5532A] text-white text-[10px] flex items-center justify-center font-bold">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* Price Sort Dropdown */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#6E6A4E] hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#FAF7F2] border border-[#DCCFB6] rounded-lg py-1.5 px-3 text-xs text-[#4A4A22] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured Pieces</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Filter Tags Strip (Show if any filter is active) */}
          {activeFilterCount > 0 && (
            <div className="flex items-center gap-2 flex-wrap mb-6 text-xs">
              <span className="text-[#6E6A4E]">Active:</span>
              {selectedCraft !== 'ALL' && (
                <span className="bg-[#FAF7F2] border border-[#DCCFB6] text-[#4A4A22] px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  Craft: {selectedCraft}
                  <button onClick={() => setSelectedCraft('ALL')} className="hover:text-[#B5532A]">✕</button>
                </span>
              )}
              {selectedSilhouette !== 'ALL' && (
                <span className="bg-[#FAF7F2] border border-[#DCCFB6] text-[#4A4A22] px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  Silhouette: {selectedSilhouette}
                  <button onClick={() => setSelectedSilhouette('ALL')} className="hover:text-[#B5532A]">✕</button>
                </span>
              )}
              {selectedColor !== 'ALL' && (
                <span className="bg-[#FAF7F2] border border-[#DCCFB6] text-[#4A4A22] px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  Color: {selectedColor}
                  <button onClick={() => setSelectedColor('ALL')} className="hover:text-[#B5532A]">✕</button>
                </span>
              )}
              {selectedSize !== 'ALL' && (
                <span className="bg-[#FAF7F2] border border-[#DCCFB6] text-[#4A4A22] px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  Size: {selectedSize}
                  <button onClick={() => setSelectedSize('ALL')} className="hover:text-[#B5532A]">✕</button>
                </span>
              )}
              <button
                onClick={resetFilters}
                className="text-xs text-[#B5532A] flex items-center gap-1 ml-2 underline hover:opacity-80"
              >
                <RotateCcw className="w-3 h-3" /> Reset all
              </button>
            </div>
          )}

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-[#DCCFB6] rounded-xl">
              <p className="script-note text-lg text-[#6E6A4E]">No dresses match these selected filters.</p>
              <button onClick={resetFilters} className="mt-3 text-xs text-[#B5532A] underline font-medium">
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((dress) => (
                <article 
                  key={dress.id} 
                  className="bg-[#FAF7F2] border border-[#DCCFB6] rounded-lg overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                  onClick={() => handleOpenModal(dress)}
                >
                  <div className="tile aspect-[3/4] relative overflow-hidden">
                    <img 
                      src={dress.image} 
                      alt={dress.name} 
                      className="w-full h-full object-cover !object-top group-hover:scale-105 transition-transform duration-500" 
                    />
                    {dress.silhouette_name && (
                      <span className="absolute top-3 left-3 bg-[#F5EEE1]/95 px-3 py-1 text-[11px] uppercase tracking-widest text-[#4A4A22] rounded shadow-sm">
                        {dress.silhouette_name}
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[#4A4A22] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Quick View
                    </span>
                  </div>

                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between text-xs text-[#6E6A4E] mb-1 font-medium">
                        <span className="text-[#B5532A] uppercase tracking-wider">{dress.craft_name || 'Handmade'}</span>
                        <span>{dress.fabric}</span>
                      </div>
                      <h3 className="text-2xl leading-tight font-serif text-[#4A4A22] mt-1 group-hover:text-[#B5532A] transition-colors">{dress.name}</h3>
                      <p className="text-sm text-[#6E6A4E] mt-2 line-clamp-2 font-light leading-relaxed">{dress.description}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#DCCFB6] flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                      <span className="font-serif-vintage text-2xl text-[#4A4A22] font-semibold">
                        ₹{parseFloat(dress.price).toLocaleString('en-IN')}
                      </span>
                      <button 
                        onClick={() => handleWhatsApp(dress.name, dress.price)} 
                        className="btn-gayara !py-2.5 !px-4 !text-xs inline-flex items-center gap-1.5 uppercase tracking-wider"
                      >
                        <MessageCircle className="w-3.5 h-3.5" /> Inquire / Order
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* ROW 5: Details Strip */}
        <section className="grid grid-cols-2 md:grid-cols-6 gap-1 md:gap-1.5">
          {details.map((d) => (
            <figure key={d.label} className="panel flex flex-col bg-[#F5EEE1]">
              <div className="tile aspect-[200/215] overflow-hidden">
                <img src={d.img} alt={d.label} className="w-full h-full object-cover" />
              </div>
              <figcaption className="caption py-3 px-2 text-center text-xs text-[#6E6A4E]">
                {d.label} <span className="text-[#9B5B4A]">♡</span>
              </figcaption>
            </figure>
          ))}
          <div className="tile overflow-hidden"><img src={img('tag')} alt="Tag" className="w-full h-full object-cover" /></div>
          <div className="tile overflow-hidden"><img src={img('box')} alt="Box" className="w-full h-full object-cover" /></div>
          <div className="flex">
            <div className="tile flex-[121] overflow-hidden"><img src={img('more')} alt="Clothes" className="w-full h-full object-cover" /></div>
            <div className="panel-warm flex-[93] flex flex-col items-center justify-between py-5 text-center bg-[#EAE0D0]">
              <p className="script-note !text-[1.1rem] -rotate-6 mt-8">More<br />than just<br />clothes<br /><span className="text-[#9B5B4A]">♡</span></p>
              <Sprig className="w-5" color="#9B5B4A" />
            </div>
          </div>
        </section>

      </main>

      <div id="faq" className="scroll-mt-16"><FAQ /></div>
      <div id="contact" className="scroll-mt-16"><ContactUs /></div>
      <Footer />

      {/* FILTER DRAWER / MODAL */}
      {filterDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm transition-all animate-fadeIn">
          <div className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between border-l border-[#DCCFB6] overflow-y-auto p-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#DCCFB6]">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#4A4A22]" />
                  <h3 className="font-serif text-xl text-[#4A4A22]">Filter Collection</h3>
                </div>
                <button 
                  onClick={() => setFilterDrawerOpen(false)}
                  className="w-8 h-8 rounded-full bg-white border border-[#DCCFB6] text-[#4A4A22] flex items-center justify-center hover:bg-[#EAE0D0]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* 1. Max Price Filter */}
              <div className="py-5 border-b border-[#DCCFB6]/60">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4A4A22]">Max Price</span>
                  <span className="font-serif-vintage text-base font-semibold text-[#B5532A]">Up to ₹{maxPrice.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="250"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#4A4A22] cursor-pointer"
                />
              </div>

              {/* 2. Silhouette Filter */}
              <div className="py-5 border-b border-[#DCCFB6]/60">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A4A22] mb-2.5">
                  Silhouette / Style
                </label>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setSelectedSilhouette('ALL')} className={pill(selectedSilhouette === 'ALL')}>
                    All
                  </button>
                  {silhouettes.map((s) => (
                    <button key={s.id} onClick={() => setSelectedSilhouette(s.name)} className={pill(selectedSilhouette === s.name)}>
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Craft Filter */}
              <div className="py-5 border-b border-[#DCCFB6]/60">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A4A22] mb-2.5">
                  Embroidery Craft
                </label>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setSelectedCraft('ALL')} className={pill(selectedCraft === 'ALL')}>
                    All
                  </button>
                  {crafts.map((c) => (
                    <button key={c.id} onClick={() => setSelectedCraft(c.name)} className={pill(selectedCraft === c.name)}>
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Size Filter */}
              <div className="py-5 border-b border-[#DCCFB6]/60">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A4A22] mb-2.5">
                  Available Size
                </label>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setSelectedSize('ALL')} className={pill(selectedSize === 'ALL')}>
                    All
                  </button>
                  {ALL_SIZES.map((size) => (
                    <button key={size} onClick={() => setSelectedSize(size)} className={pill(selectedSize === size)}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Color Filter */}
              {availableColors.length > 0 && (
                <div className="py-5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A4A22] mb-2.5">
                    Color
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => setSelectedColor('ALL')} className={pill(selectedColor === 'ALL')}>
                      All
                    </button>
                    {availableColors.map((color) => (
                      <button key={color} onClick={() => setSelectedColor(color)} className={pill(selectedColor === color)}>
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#DCCFB6] flex gap-3">
              <button
                type="button"
                onClick={resetFilters}
                className="flex-1 py-2.5 rounded-full border border-[#DCCFB6] bg-white text-[#4A4A22] text-xs uppercase tracking-wider font-medium hover:bg-[#EAE0D0]"
              >
                Reset All
              </button>
              <button
                type="button"
                onClick={() => setFilterDrawerOpen(false)}
                className="flex-[2] py-2.5 rounded-full bg-[#4A4A22] text-[#F5EEE1] text-xs uppercase tracking-wider font-medium hover:bg-[#3F4020] shadow-md"
              >
                View {filteredProducts.length} Pieces
              </button>
            </div>

          </div>
        </div>
      )}

      {/* PRODUCT QUICK VIEW MODAL */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl border border-[#DCCFB6] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 border border-[#DCCFB6] text-[#4A4A22] flex items-center justify-center hover:bg-white transition-all shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative bg-[#EFE6D5] min-h-[320px] md:min-h-full">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-[#F5EEE1]/95 px-3 py-1 rounded-full text-[11px] font-semibold text-[#4A4A22] border border-[#DCCFB6] tracking-wider uppercase">
                {selectedProduct.craft_name || 'Artisanal'}
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B5532A] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Handcrafted Studio Piece
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-[#4A4A22] leading-tight">{selectedProduct.name}</h3>
                <p className="font-serif-vintage text-2xl font-bold text-[#4A4A22] mt-2">
                  ₹{parseFloat(selectedProduct.price).toLocaleString('en-IN')}
                </p>

                <p className="text-sm text-[#6E6A4E] mt-3 leading-relaxed font-light">
                  {selectedProduct.description || "A delicate vintage-inspired silhouette handcrafted with thoughtful detailing."}
                </p>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#4A4A22] uppercase tracking-wider">Select Size</span>
                    <a href="#faq" onClick={() => setSelectedProduct(null)} className="text-xs text-[#B5532A] flex items-center gap-1 hover:underline">
                      <Ruler className="w-3.5 h-3.5" /> Size Guide
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {getProductSizes(selectedProduct).map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setModalSize(size)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          modalSize === size
                            ? 'bg-[#4A4A22] text-[#F5EEE1] border-[#4A4A22] shadow-sm'
                            : 'bg-white text-[#4A4A22] border-[#DCCFB6] hover:border-[#4A4A22]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#DCCFB6]/60 grid grid-cols-2 gap-2.5 text-xs text-[#6E6A4E]">
                  <div>🌿 {selectedProduct.fabric || '100% Breathable Fabric'}</div>
                  <div>🧵 Hand-stitched Detailing</div>
                  <div>✨ Gentle Hand Wash</div>
                  <div>📦 Pan-India Shipping</div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => handleWhatsApp(selectedProduct.name, selectedProduct.price, modalSize)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#4A4A22] text-[#F5EEE1] font-medium text-xs uppercase tracking-wider hover:bg-[#3F4020] transition-all shadow-md active:scale-[0.99]"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#A9B890]" />
                  Order on WhatsApp (Size: {modalSize})
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;