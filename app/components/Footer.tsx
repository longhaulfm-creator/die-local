export default function Footer() {
  const phoneNumber = "+27613684724"; // Replace with Lee's actual business number
  const waLink = `https://wa.me/${phoneNumber.replace('+', '')}`;

  return (
    <footer 
      className="relative footer sm:footer-horizontal justify-start lg:justify-between items-center sm:items-start sm:justify-between text-white p-10 py-24 overflow-hidden bg-center"
      style={{ 
        backgroundImage: "url('/wood-texture.jpg')",
      }}
    >
      {/* 1. Seamless Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.6) 80%, #000000 100%)`
        }}
      ></div>

      {/* 2. Brand & Copyright */}
      <aside className="relative z-10">
        <h2 className="font-logo text-xl uppercase font-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Local <span className="text-brand-red font-tagline text-[1.4rem] ml-1">Bar and Grill</span>
        </h2>
        <p className="font-sans text-xs uppercase tracking-widest opacity-80 mt-2">
          Where good decisions are made
        </p>
        <div className="mt-6 font-sans text-sm opacity-60">
          <p>© {new Date().getFullYear()} Anvil Development</p>
          <p>Southport, KwaZulu-Natal</p>
        </div>
      </aside>

      {/* 3. Venue Links */}
      <nav className="relative z-10">
        <h6 className="footer-title text-lg font-tagline text-brand-red opacity-100 border-brand-red drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
          The Bar and Restaurant
        </h6>
        <a className="font-sans link link-hover opacity-80 hover:opacity-100 hover:text-brand-red transition-all uppercase">Our menu</a>
        <a className="font-sans link link-hover opacity-80 hover:opacity-100 hover:text-brand-red transition-all uppercase">Our activities</a>
        <a className="font-sans link link-hover opacity-80 hover:opacity-100 hover:text-brand-red transition-all uppercase">Events</a>
        <a className="font-sans link link-hover opacity-80 hover:opacity-100 hover:text-brand-red transition-all uppercase">Reservations</a>
      </nav>

      {/* 4. Social Media with Logos */}
      <nav className="relative z-10">
        <h6 className="footer-title text-lg font-tagline text-brand-red opacity-100 border-brand-red drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
          Social Media
        </h6>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          <a href="#" className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-brand-red transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            <span className="uppercase">Facebook</span>
          </a>
          <a href="#" className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-brand-red transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            <span className="uppercase">Instagram</span>
          </a>
          <a href="#" className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-brand-red transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" x2="12" y1="8" y2="8"></line><line x1="3.95" x2="8.54" y1="6.06" y2="14"></line><line x1="10.88" x2="15.46" y1="21.94" y2="14"></line></svg>
            <span className="uppercase">Google</span>
          </a>
          <a href="#" className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-brand-red transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            <span className="uppercase">TikTok</span>
          </a>
        </div>
      </nav>

      {/* 5. WhatsApp Business Direct Link */}
      <nav className="relative z-10">
        <h6 className="footer-title text-lg font-tagline text-brand-red opacity-100 border-brand-red drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
          Direct Chat
        </h6>
        <a 
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-1 p-3 rounded-lg border border-white/10 bg-black/20 hover:bg-brand-red/10 hover:border-brand-red transition-all"
        >
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 group-hover:text-brand-red"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span className="font-bold text-sm tracking-tight">WhatsApp Business</span>
          </div>
          <span className="text-xs opacity-60 font-mono pl-7">{phoneNumber}</span>
        </a>
      </nav>
    </footer>
  );
}