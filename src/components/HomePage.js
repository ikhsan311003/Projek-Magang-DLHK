import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import logo from '../assets/logo dlhk.png';
import cardImage1 from '../assets/cardImage1.jpeg';
import cardImage2 from '../assets/cardImage2.jpeg';
import cardImage3 from '../assets/cardImage3.jpeg';
import cardImage4 from '../assets/cardImage4.jpg';
import cardImage5 from '../assets/cardImage5.jpeg';
import cardImage7 from '../assets/cardImage7.jpeg';
import headerBackground from '../assets/mainbg.png';
import { FaInstagram, FaYoutube, FaHeadset, FaTwitter } from 'react-icons/fa';

function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cards = [
    { img: cardImage1, url: 'https://sipd-ri.kemendagri.go.id/auth/login' },
    { img: cardImage2, url: 'https://ppkl.menlhk.go.id/iklh/login' },
    { img: cardImage3, url: 'https://sengguh.jogjaprov.go.id/intro/' },
    { img: cardImage4, url: 'https://kenes.jogjaprov.go.id/' },
    { img: cardImage5, url: 'https://peladen.jogjaprov.go.id/' },
    { img: cardImage7, url: 'https://bapperida.jogjaprov.go.id/dataku/data_dasar/beranda' },
  ];

  const palette = {
    green: '#2e7d32',
    darkGreen: '#1b5e20',
    yellow: '#fbc02d',
    white: '#ffffff',
    lightBg: '#fefefe'
  };

  const smooth = 'all 0.3s ease';

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: palette.lightBg, color: palette.darkGreen }}>
      <style>{`
        /* =============================
           FLUID / RESPONSIVE TYPOGRAPHY
           ============================= */
        :root { 
          --fs-hero: clamp(1.8rem, 6vw + 0.5rem, 5rem);
          --fs-brand: clamp(0.95rem, 2.2vw + 0.2rem, 1.2rem);
          --fs-nav: clamp(0.9rem, 1.8vw + 0.2rem, 1rem);
          --fs-h2: clamp(1.1rem, 1.9vw + 0.2rem, 1.8rem);
          --fs-h3: clamp(1rem, 1.6vw + 0.2rem, 1.2rem);
          --fs-body: clamp(0.9rem, 1.3vw + 0.2rem, 1rem);
          --fs-small: clamp(0.8rem, 1.2vw, 0.95rem);
        }
        .txt-hero { font-size: var(--fs-hero); line-height: 1.1; }
        .txt-brand { font-size: var(--fs-brand); }
        .txt-nav { font-size: var(--fs-nav); }
        .txt-h2 { font-size: var(--fs-h2); }
        .txt-h3 { font-size: var(--fs-h3); }
        .txt-body { font-size: var(--fs-body); }
        .txt-small { font-size: var(--fs-small); }

        /* Animations & hovers */
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }
        .fade-in { animation: fadeInUp 0.6s ease forwards; }
        .card:hover, .linkBtn:hover, .yearBtn:hover { transform: scale(1.05); box-shadow: 0 6px 20px rgba(0,0,0,0.15); }

        /* Footer links & socials */
        .footer-link { color: #fff; text-decoration: none; position: relative; transition: color 0.3s ease; }
        .footer-link::after { content: ''; position: absolute; left: 0; bottom: -2px; width: 0%; height: 2px; background-color: #fbc02d; transition: width 0.3s ease; }
        .footer-link:hover { color: #fbc02d; }
        .footer-link:hover::after { width: 100%; }
        .social-icon { color: #fff; transition: transform 0.3s ease, color 0.3s ease; }
        .social-icon:hover { transform: scale(1.3); color: #fbc02d; }

        /* Contact button */
        .contact-btn { display: inline-flex; align-items: center; background-color: #fbc02d; color: #000; padding: 0.65rem 0.8rem; border-radius: 11px; text-decoration: none; gap: 0.5rem; font-weight: 500; transition: all 0.3s ease; }
        .contact-btn:hover { transform: scale(1.05); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); background-color: #ffe066; }

        /* =============================
           Cards (default desktop/tablet: flex)
           ============================= */
        .card {
          width: clamp(240px, 46vw, 300px);
          height: clamp(150px, 28vw, 180px);
          border-radius: 10px;
          overflow: hidden;
          background-color: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          padding: 1rem;
          transition: all 0.3s ease;
        }
        .card img { width: 100%; height: 100%; object-fit: contain; }

        /* Containers */
        .section-container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }

        /* =============================
           MOBILE OVERRIDE: 2 kolom (≤600px)
           ============================= */
        @media (max-width: 600px) {
          .cards {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem !important;
            justify-items: center;
          }
          .card {
            width: 100% !important;
            max-width: 220px;
            height: 150px !important;
            padding: 0.75rem;
          }
        }
        @media (max-width: 360px) {
          .card { max-width: 190px; height: 140px !important; }
        }

        /* Hilangkan efek hover di perangkat sentuh */
        @media (hover: none) {
          .card:hover { transform: none; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        }

        /* iOS safe area untuk navbar sticky */
        @supports (padding-top: env(safe-area-inset-top)) {
          .nav-pad { padding-top: calc(0.5rem + env(safe-area-inset-top)); }
        }
      `}</style>

      {/* Navigation (tidak diubah) */}
      <nav
        className="nav-pad"
        style={{
          backgroundColor: scrolled ? palette.white : 'transparent',
          color: palette.darkGreen,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '0.5rem 2rem', position: 'sticky', top: 0, zIndex: 100,
          transition: smooth, boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="DLHK Logo" style={{ height: '45px' }} />
          <span className="txt-brand" style={{ marginLeft: '12px', fontWeight: 600 }}>Dinas Lingkungan Hidup & Kehutanan</span>
        </div>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, position: 'relative' }}>
          <li
            className="txt-nav"
            style={{
              cursor: 'pointer', fontWeight: 700, borderBottom: `3px solid ${palette.yellow}`,
              paddingBottom: '4px', transition: smooth
            }}
          >
            Home
          </li>
          <li
            className="txt-nav"
            style={{ cursor: 'pointer', position: 'relative' }}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Database ▾
            {showDropdown && (
              <ul style={{
                position: 'absolute', top: '100%', right: 0, backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '6px', overflowY: 'auto',
                maxHeight: '200px', zIndex: 999, padding: '0.5rem', listStyle: 'none', width: '180px'
              }}>
                {[
                  { label: 'Lingkungan Hidup', path: '/lingkungan-hidup' },
                  { label: 'Kehutanan', path: '/kehutanan' }
                ].map(({ label, path }) => (
                  <li
                    key={label}
                    onClick={() => { navigate(path); setShowDropdown(false); }}
                    className="txt-body"
                    style={{ padding: '0.45rem 0.6rem', cursor: 'pointer', borderBottom: '1px solid #eee', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f0f0f0'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <header
        className="hero"
        style={{ background: `url(${headerBackground}) center/cover`, minHeight: '80vh', position: 'relative', color: '#fff', textAlign: 'center' }}
      >
        <div className="pad-header" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
          <h1 className="txt-hero" style={{ marginBottom: '1rem' }}>DATABASE LINGKUNGAN HIDUP & KEHUTANAN</h1>
          <p className="txt-small" style={{ marginBottom: '1rem' }}>
            (email: <a href="mailto:dlhk@jogjaprov.go.id" style={{ color: palette.yellow }}>dlhk@jogjaprov.go.id</a> / <a href="mailto:dlhk.diy@gmail.com" style={{ color: palette.yellow }}>dlhk.diy@gmail.com</a>)
          </p>
        </div>
      </header>

      {/* Judul Section */}
      <div className="section-container" style={{ padding: '2rem 1rem 0', textAlign: 'center' }}>
        <h2 className="txt-h2" style={{ fontWeight: 600, color: palette.darkGreen }}>
          Link Terkait:
        </h2>
      </div>

      {/* Cards */}
      <section
        className="fade-in cards section-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center',
          padding: '0.5rem 1rem'
        }}
      >
        {cards.map(({ img, url }, index) => (
          <div
            key={index}
            className="card"
            onClick={() => window.open(url, '_blank')}
          >
            <img src={img} alt={`Card ${index + 1}`} />
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: palette.green, color: '#fff', padding: '3rem 2rem', marginTop: '4rem', transition: smooth }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', gap: '1rem' }}>
          <div style={{ flex: '15 1 250px' }}>
            <h2 className="txt-h3">Tentang</h2>
            <p className="txt-body">Website ini merupakan sistem informasi internal yang dikelola oleh Dinas Lingkungan Hidup dan Kehutanan (DLHK) DIY. 
               Tujuannya adalah untuk memudahkan akses terhadap dokumen, data kegiatan, dan perencanaan di bidang lingkungan hidup dan kehutanan. 
               Platform ini mendukung transparansi, koordinasi, dan efisiensi antarbidang dalam pengelolaan program kerja.</p>
          </div>
          <div style={{ flex: '0 1 150px' }}>
            <h3 className="txt-h3">Peta Situs</h3>
            <ul className="txt-body" style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li>Home</li>
              <li>Lingkungan Hidup</li>
              <li>Kehutanan</li>
            </ul>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h3 className="txt-h3">Link Terkait</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li>
                <a
                  href="https://bapperida.jogjaprov.go.id/dataku/data_dasar/beranda"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link txt-body"
                >
                  BAPERRIDA
                </a>
              </li>
              <li>
                <a
                  href="https://dlhk.jogjaprov.go.id/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link txt-body"
                >
                  DLHK DIY - PEMDA DIY
                </a>
              </li>
            </ul>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h3 className="txt-h3">Ikuti Kami</h3>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <a href="https://www.instagram.com/dlhkdiy?igsh=b202NjY1eDVtY25r" target="_blank" rel="noreferrer">
                <FaInstagram className="social-icon" style={{ fontSize: '22px' }} />
              </a>
              <a href="https://x.com/dlhkdiy?t=0zrGWRow-ucAuI5ElOzhNw&s=09" target="_blank" rel="noreferrer">
                <FaTwitter className="social-icon" style={{ fontSize: '22px' }} />
              </a>
              <a href="https://youtube.com/@dlhkdiy?si=KZpqEG9p_iD_sU87" target="_blank" rel="noreferrer">
                <FaYoutube className="social-icon" style={{ fontSize: '22px' }} />
              </a>
            </div>
            <h4 className="txt-h3">Bantuan Pelanggan</h4>
            <a
              href="https://wa.me/6281329089589"
              target="_blank"
              rel="noreferrer"
              className="contact-btn txt-body"
            >
              <FaHeadset /> Hubungi Kami
            </a>
          </div>
        </div>
        <hr />
        <div className="txt-body" style={{ textAlign: 'center', color: '#fff', marginTop: '2rem'}}>
          © {new Date().getFullYear()} DLHK DIY. Semua Hak Cipta Dilindungi.
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
