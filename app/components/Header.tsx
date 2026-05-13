import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="drawer drawer-end">
      <input id="main-menu-drawer" type="checkbox" className="drawer-toggle" />
      
      {/* 
          IMPORTANT: Ensure 'overflow-y-auto' is on the drawer-content 
          so the page actually scrolls.
      */}
      <div className="drawer-content flex flex-col overflow-y-auto">
        <header className="relative min-h-screen overflow-hidden bg-background">
          
          {/* 
              FIX: Changed from 'fixed' to 'absolute'. 
              'fixed' was pinning the video to the screen, covering your Page content.
          */}
          <div className="absolute inset-0 w-full h-[100vh] z-0 pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover saturate-150 contrast-125"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div 
              className="absolute inset-0 z-20"
              style={{
                background: `
                  linear-gradient(to bottom, var(--color-background) 0%, transparent 25%, transparent 75%, var(--color-background) 100%),
                  radial-gradient(circle, transparent 20%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.9) 100%)
                `
              }}
            ></div>
          </div>

          <nav className="relative z-50 w-full">
            <div className="navbar bg-transparent px-6 lg:px-10 py-6">
              <div className="flex-1">
                <Link href="/" className="cursor-pointer uppercase font-logo font-black text-xl text-foreground group">
                  Local <span className="text-brand-red ml-1 font-tagline text-2xl group-hover:text-foreground transition-colors">Bar and Grill</span>
                </Link>
              </div>
              
              <div className="flex-none">
                <label 
                  htmlFor="main-menu-drawer" 
                  className="btn btn-square btn-ghost text-foreground drawer-button hover:bg-brand-red/10 transition-all cursor-pointer"
                  aria-label="Open Menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-10 w-10 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 9h16M4 15h16"></path>
                  </svg>
                </label>
              </div>
            </div>
          </nav>

          <div className="relative z-30 flex items-center justify-center min-h-[calc(100vh-120px)] text-center text-foreground px-4">
            <div className="max-w-3xl">
              <Image
                src="/local.svg"
                width={320}
                height={320}
                alt="Local Bar and Grill"
                className="m-auto mb-12 drop-shadow-[0_0_30px_rgba(204,0,0,0.3)] opacity-90"
                priority
              />  
              
              <h1 className="mb-4 font-tagline text-4xl md:text-3xl text-brand-red font-bold tracking-[0.3em] uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
                Bar and Grill
              </h1>
              
              <p className="font-sans text-sm md:text-base font-light tracking-[0.4em] uppercase opacity-70 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] mt-10">
                Where good decisions are made
              </p>
            </div>
          </div>

          <a 
            href="#main-content" 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-6 group cursor-pointer transition-transform hover:scale-110"
            aria-label="Enter the Grill"
          >
            <span className="text-[9px] font-tagline text-foreground uppercase tracking-[0.5em] opacity-40 group-hover:opacity-100 transition-opacity">
              Explore
            </span>
            <div className="flex flex-col items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-foreground opacity-30 group-hover:text-brand-red group-hover:opacity-100 transition-all animate-slow-pulse" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </header>

        {/* This is the ID your anchor links to */}
        <div id="main-content"></div>
      </div> 

      <div className="drawer-side z-[100]">
        <label htmlFor="main-menu-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu p-10 py-7 w-80 md:w-[450px] min-h-full bg-base-200 text-foreground shadow-2xl flex flex-col">
          <div className="flex justify-between items-center mb-10">
             <span className="font-logo font-black text-2xl uppercase tracking-tighter">The Local</span>
             <label htmlFor="main-menu-drawer" className="btn btn-sm btn-circle btn-ghost cursor-pointer">✕</label>
          </div>
          <ul className="space-y-5 text-xl uppercase font-tagline tracking-[0.2em] flex-1">
            <li><Link href="/menu">The Food</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/bookings">Reservations</Link></li>
            <li><Link href="/functions">Functions</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}