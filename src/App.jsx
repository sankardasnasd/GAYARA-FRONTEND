import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MessageCircle } from 'lucide-react';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';

/* Photos live in  public/gayara/  (from gayara-images.zip) */
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

function App() {
  const [products, setProducts] = useState([]);
  const [crafts, setCrafts] = useState([]);
  const [selectedCraft, setSelectedCraft] = useState('ALL');

const API_BASE = import.meta.env.VITE_API_URL || 'https://gayara-backend.onrender.com/api';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, craftRes] = await Promise.all([
          axios.get(`${API_BASE}/products/`),
          axios.get(`${API_BASE}/crafts/`),
        ]);
        setProducts(prodRes.data);
        setCrafts(craftRes.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, [API_BASE]);

  /* ---- Moodboard content ---- */
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

  const handleWhatsApp = (title, price) => {
    const text = encodeURIComponent(
      `Hello GAYARA! I am in love with the artisanal dress: "${title}" (₹${price || 'Inquiry'}). Can you share availability?`
    );
    window.open(`https://wa.me/917306735100?text=${text}`, '_blank');
  };

  const pill = (active) =>
    `px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors ${
      active ? 'bg-[#4A4A22] text-[#F5EEE1]' : 'bg-[#FBF7EE] border border-[#DCCFB6] text-[#4A4A22] hover:bg-[#EADFCB]'
    }`;

  return (
    <div className="min-h-screen bg-[#EFE6D5] text-[#3F4020]">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-[#F5EEE1]/95 backdrop-blur border-b border-[#DCCFB6]">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-[#4A4A22]">
            <LogoMark className="w-6 h-6" />
            <span className="brand-wordmark text-xl">GAYARA</span>
          </a>
          <nav className="flex items-center gap-5 caption !text-[0.95rem]">
            <a href="#styles" className="hidden sm:inline hover:text-[#B5532A]">Styles</a>
            <a href="#crafts" className="hidden sm:inline hover:text-[#B5532A]">Crafts</a>
            <a href="#fabrics" className="hidden sm:inline hover:text-[#B5532A]">Fabrics</a>
            <a href="#collection" className="btn-gayara !py-2 !px-5 !text-sm">Shop</a>
          </nav>
        </div>
      </header>

      <main id="top" className="max-w-6xl mx-auto p-1 md:p-1.5 space-y-1 md:space-y-1.5">
        {/* ROW 1: hero · logo · rack + script panel */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-1.5">
          <div className="tile aspect-[413/373]">
            <img src={img('hero')} alt="Woman in an embroidered bohemian dress holding wildflowers" />
          </div>

          <div className="panel flex flex-col items-center justify-center text-center aspect-[421/373] py-10">
            <LogoMark className="w-14 text-[#4A4A22]" />
            <h1 className="brand-wordmark text-5xl md:text-6xl lg:text-7xl mt-4">GAYARA</h1>
            <p className="brand-tagline text-base md:text-lg mt-3">Wear Your Story.</p>
          </div>

          <div className="flex gap-1 md:gap-1.5 aspect-[416/373]">
            <div className="tile flex-[298]">
              <img src={img('rack')} alt="Rack of handcrafted dresses" />
            </div>
            <div className="panel-warm flex-[112] flex flex-col items-center justify-between py-5 px-1 text-center">
              <p className="script-note !text-[1.15rem] md:!text-[1.3rem] -rotate-6 mt-6">
                Handcrafted<br />Dresses<br />for<br />Modern<br />Souls<br />
                <span className="text-[#9B5B4A]">♡</span>
              </p>
              <Sprig className="w-8 md:w-10" />
            </div>
          </div>
        </section>

        {/* ROW 2: signature styles · stitch close-up */}
        <section id="styles" className="grid grid-cols-1 lg:grid-cols-[850fr_392fr] gap-1 md:gap-1.5">
          <div className="panel p-5">
            <h2 className="section-title mb-4">Our Signature Styles</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {signatureStyles.map((s) => (
                <figure key={s.title}>
                  <div className="tile aspect-[128/225]">
                    <img src={s.img} alt={s.title} />
                  </div>
                  <figcaption className="caption mt-2">{s.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="tile min-h-[260px]">
            <img src={img('stitch')} alt="Floral hand embroidery on linen: every stitch tells a story" />
          </div>
        </section>

        {/* ROW 3: embroidery crafts · fabrics & colors */}
        <section id="crafts" className="grid grid-cols-1 lg:grid-cols-[850fr_404fr] gap-1 md:gap-1.5">
          <div className="panel p-5">
            <h2 className="section-title mb-4">Our Embroidery Crafts</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {embroideryCrafts.map((c) => (
                <figure key={c.name}>
                  <div className="tile aspect-[152/172]">
                    <img src={c.img} alt={c.name} />
                  </div>
                  <figcaption className="caption mt-2">
                    {c.name}
                    {c.sub && <><br />{c.sub}</>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div id="fabrics" className="panel p-5">
            <h2 className="section-title mb-4">Fabrics &amp; Colors</h2>
            <div className="flex gap-2 justify-between">
              {fabricSwatches.map((src, i) => (
                <img key={i} src={src} alt="Fabric swatch" className="w-1/5 aspect-square rounded-full object-cover" />
              ))}
            </div>
            <p className="caption !text-left mt-4 !leading-relaxed">
              Linen &nbsp;|&nbsp; Khadi &nbsp;|&nbsp; Mulmul<br />
              Organic Cotton &nbsp;|&nbsp; Silk Blend
            </p>
            <div className="flex gap-2 mt-5">
              {colorDots.map((c) => (
                <span key={c} className="swatch-dot !w-7 !h-7" style={{ backgroundColor: c }} title={c} />
              ))}
            </div>
            <p className="caption !text-left mt-3 !leading-relaxed">
              Earthy Tones &nbsp;|&nbsp; Soft Pastels<br />Natural Shades
            </p>
          </div>
        </section>

        {/* LIVE DJANGO COLLECTION */}
        <section id="collection" className="panel p-5 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <h2 className="section-title">The Studio Collection</h2>
            <div className="flex items-center gap-2 flex-wrap">
              <button onClick={() => setSelectedCraft('ALL')} className={pill(selectedCraft === 'ALL')}>All Pieces</button>
              {crafts.map((c) => (
                <button key={c.id} onClick={() => setSelectedCraft(c.name)} className={pill(selectedCraft === c.name)}>
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-[#DCCFB6]">
<p className="script-note">No beautiful pieces available yet. Stay tuned for our latest collections!</p>            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products
                .filter((p) => selectedCraft === 'ALL' || p.craft_name === selectedCraft)
                .map((dress) => (
                  <article key={dress.id} className="bg-[#F5EEE1] border border-[#DCCFB6] flex flex-col">
                    <div className="tile aspect-[3/4] relative">
                      <img src={dress.image} alt={dress.name} className="!object-top" />
                      {dress.silhouette_name && (
                        <span className="absolute top-3 left-3 bg-[#F5EEE1]/95 px-3 py-1 text-[11px] uppercase tracking-widest text-[#4A4A22]">
                          {dress.silhouette_name}
                        </span>
                      )}
                    </div>
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between text-xs text-[#6E6A4E] mb-1">
                          <span className="text-[#B5532A]">{dress.craft_name || 'Handmade'}</span>
                          <span>{dress.fabric}</span>
                        </div>
                        <h3 className="text-2xl leading-tight">{dress.name}</h3>
                        <p className="text-sm text-[#6E6A4E] mt-2 line-clamp-2">{dress.description}</p>
                      </div>
                      <div className="mt-5 pt-4 border-t border-[#DCCFB6] flex items-center justify-between">
                        <span className="font-serif-vintage text-2xl text-[#4A4A22]">
                          ₹{parseFloat(dress.price).toLocaleString('en-IN')}
                        </span>
                        <button onClick={() => handleWhatsApp(dress.name, dress.price)} className="btn-gayara !py-2.5 !px-4 !text-xs inline-flex items-center gap-1.5">
                          <MessageCircle className="w-3.5 h-3.5" /> Inquire / Order
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          )}
        </section>

        {/* ROW 4: details strip */}
        <section className="grid grid-cols-2 md:grid-cols-6 gap-1 md:gap-1.5">
          {details.map((d) => (
            <figure key={d.label} className="panel flex flex-col">
              <div className="tile aspect-[200/215]">
                <img src={d.img} alt={d.label} />
              </div>
              <figcaption className="caption py-4 px-2">{d.label} <span className="text-[#9B5B4A]">♡</span></figcaption>
            </figure>
          ))}
          <div className="tile">
            <img src={img('tag')} alt="GAYARA hang tag" />
          </div>
          <div className="tile">
            <img src={img('box')} alt="Kraft packaging with a thank-you note" />
          </div>
          <div className="flex">
            <div className="tile flex-[121]">
              <img src={img('more')} alt="Dress hanging near plants" />
            </div>
            <div className="panel-warm flex-[93] flex flex-col items-center justify-between py-5 text-center">
              <p className="script-note !text-[1.1rem] -rotate-6 mt-8">
                More<br />than just<br />clothes<br /><span className="text-[#9B5B4A]">♡</span>
              </p>
              <Sprig className="w-5" color="#9B5B4A" />
            </div>
          </div>
        </section>
      </main>
      <ContactUs />

      <FAQ />

      {/* FOOTER */}
      <footer className="mt-1 bg-[#F5EEE1] border-t border-[#DCCFB6] py-12 text-center">
        <LogoMark className="w-9 mx-auto text-[#4A4A22]" />
        <p className="brand-wordmark text-3xl mt-2">GAYARA</p>
        <p className="brand-tagline text-base mt-2">Wear Your Story.</p>
        <p className="caption mt-6 text-[#6E6A4E]">© 2026 GAYARA Handcrafted Studio. Made with patience and care.</p>
      </footer>
    </div>
  );
}

export default App;