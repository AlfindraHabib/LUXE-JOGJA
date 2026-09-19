import React from "react";

// Design tokens — Yogyakarta dusk palette, inspired by temple silhouettes
// against an evening sky rather than a generic travel-site look.
const tokens = {
  night: "#161B33",        // deep indigo-navy base
  nightDeep: "#0B0E1F",    // scrim / shadow
  gold: "#C9A227",         // warm brass accent, evokes gamelan & batik gold
  ivory: "#F4EFE3",        // primary text on dark
  stone: "#A9A6C4",        // secondary text
};

const Hero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500&display=swap');

        .hero-wrap {
          position: relative;
          width: 88%;
          max-width: 1200px;
          margin: 40px auto 0;
          height: 64vh;
          min-height: 460px;
          border-radius: 4px;
          overflow: hidden;
          background: linear-gradient(160deg, ${tokens.night} 0%, ${tokens.nightDeep} 100%);
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: url('img/tugu.jpg') center center / cover no-repeat;
          opacity: 0.55;
        }
        .hero-scrim {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(0deg, ${tokens.nightDeep} 0%, rgba(11,14,31,0.35) 46%, rgba(11,14,31,0.55) 100%),
            linear-gradient(100deg, rgba(11,14,31,0.75) 0%, rgba(11,14,31,0.1) 60%);
        }
        .hero-inner {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 6%;
          max-width: 620px;
        }
        .hero-kicker {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: ${tokens.gold};
          letter-spacing: 0.02em;
          margin: 0 0 14px;
          opacity: 0;
          animation: rise 0.7s 0.1s ease-out forwards;
        }
        .hero-title {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(2.3rem, 5vw, 3.8rem);
          line-height: 1.05;
          color: ${tokens.ivory};
          margin: 0 0 18px;
          opacity: 0;
          animation: rise 0.8s 0.28s ease-out forwards;
        }
        .hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          line-height: 1.6;
          color: ${tokens.stone};
          max-width: 460px;
          margin: 0 0 32px;
          opacity: 0;
          animation: rise 0.8s 0.46s ease-out forwards;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 22px;
          opacity: 0;
          animation: rise 0.8s 0.64s ease-out forwards;
        }
        .hero-cta {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: ${tokens.nightDeep};
          background: ${tokens.gold};
          border: none;
          padding: 13px 30px;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .hero-cta:hover {
          background: #DBB544;
          transform: translateY(-2px);
        }
        .hero-cta:focus-visible {
          outline: 2px solid ${tokens.ivory};
          outline-offset: 3px;
        }
        .hero-secondary {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: ${tokens.ivory};
          background: none;
          border: none;
          border-bottom: 1px solid rgba(244,239,227,0.4);
          padding-bottom: 2px;
          cursor: pointer;
        }
        .hero-secondary:hover {
          border-bottom-color: ${tokens.ivory};
        }

        @keyframes rise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-kicker, .hero-title, .hero-desc, .hero-actions {
            animation: none;
            opacity: 1;
          }
        }

        @media (max-width: 640px) {
          .hero-wrap { width: 94%; height: auto; min-height: 520px; }
          .hero-inner { padding: 48px 6%; max-width: 100%; }
        }
      `}</style>

      <section className="hero-wrap" aria-label="Hero">
        <div className="hero-bg" />
        <div className="hero-scrim" />
        <div className="hero-inner">
          <p className="hero-kicker">Yogyakarta, dari senja hingga fajar</p>
          <h1 className="hero-title">Live your adventure</h1>
          <p className="hero-desc">
            Jelajahi Yogyakarta tanpa batas: rekomendasi hotel dan wisata
            terbaik untuk Anda.
          </p>
          <div className="hero-actions">
            <button className="hero-cta">Mulai jelajahi</button>
            <button className="hero-secondary">Lihat hotel pilihan</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;