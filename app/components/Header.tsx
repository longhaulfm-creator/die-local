import Image from 'next/image';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <header className="min-h-screen relative overflow-hidden bg-black">
      {/* 1. The Video Backdrop - Added Saturation and Contrast filters */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 saturate-150 contrast-125"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Base Dimmer */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* 3. The Seamless Vignette & Edge Blending */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, #000000 0%, transparent 15%, transparent 85%, #000000 100%),
            radial-gradient(circle, transparent 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)
          `
        }}
      ></div>

      {/* 4. Navigation */}
      <nav className="relative z-30">
        <div className="navbar bg-transparent px-10">
          <div className="flex-1">
            <Link href="/" className="cursor-pointer uppercase font-logo font-black text-xl text-white">
              Local <span className="text-brand-red ml-1 font-tagline text-2xl">Bar and Grill</span>
            </Link>
          </div>
          <div className="flex flex-row items-center px-2">
		<ul className="menu hidden md:flex menu-vertical lg:menu-horizontal bg-none rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
            <button className="btn btn-square btn-ghost text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* 5. Centered Tagline */}
      <div className="relative z-30 flex items-center justify-center min-h-[calc(100vh-64px)] text-center text-white px-4">
        <div className="max-w-2xl">
	<Image
	  src="/local.svg"
	  width={384}
	  height={384}
	  alt="Local Bar and Grill"
 	  className="m-auto mb-8"
        />	
          <p className="mb-8 font-tagline text-3xl text-brand-red font-bold tracking-[0.2em] uppercase opacity-100 border-brand-red drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Bar and Grill
          </p>
 <p className="mb-8 font-sans text-lg text-white font-light font-bold tracking-[0.2em] opacity-100 border-brand-red drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Where good decisions are made
          </p>
        </div>
      </div>

      {/* 6. Skip to Content Arrow - Pulses by default, Grows on Hover */}
      <a 
        href="#main-content" 
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 group cursor-pointer transition-all duration-500 ease-out hover:scale-125"
        aria-label="Scroll to main content"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-tagline uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
            More
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-white group-hover:text-brand-red transition-all animate-slow-pulse" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </a>
    </header>
  );
}