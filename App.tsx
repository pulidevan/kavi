
import React, { useState, useEffect, useRef } from 'react';
import { Download, Menu, ArrowRight, Instagram, Linkedin, Mail, Aperture, MonitorPlay, Layers, PenTool, Image, Layout, Volume2, VolumeX, MessageCircle } from 'lucide-react';

// --- Assets & Data ---

const PROFILE_IMG = "https://i.ibb.co/27RZBfVv/1714494254485.jpg"; 
const RESUME_PATH = "https://drive.google.com/file/d/1mMM-x6SXN1r_k-8AVCNdgJlwlS-h4TBr/view?usp=sharing";
const EMAIL = "kavirajpetar1213@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/kavi-raj-003a7b368/";
const WHATSAPP_DIRECT_URL = "https://api.whatsapp.com/send/?phone=919361545080&text=Hello";

const TOOLS = [
  { id: 1, name: "PREMIERE PRO", category: "EDITING", icon: <MonitorPlay size={40} /> },
  { id: 2, name: "AFTER EFFECTS", category: "MOTION", icon: <Layers size={40} /> },
  { id: 3, name: "DAVINCI RESOLVE", category: "COLOR", icon: <Aperture size={40} /> },
  { id: 4, name: "PHOTOSHOP", category: "DESIGN", icon: <Image size={40} /> },
  { id: 5, name: "ILLUSTRATOR", category: "VECTOR", icon: <PenTool size={40} /> },
  { id: 6, name: "FIGMA", category: "UI/UX", icon: <Layout size={40} /> },
];

// --- Utility Components ---

const TopographicLines = ({ className = "", stroke = "white" }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
     <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <path d="M-100 200 Q 300 50, 600 300 T 1540 200" fill="none" stroke={stroke} strokeWidth="0.5" strokeOpacity="0.2" />
      <path d="M-100 400 Q 400 300, 800 500 T 1540 400" fill="none" stroke={stroke} strokeWidth="0.5" strokeOpacity="0.2" />
      <path d="M-100 600 Q 300 700, 700 600 T 1540 800" fill="none" stroke={stroke} strokeWidth="0.5" strokeOpacity="0.2" />
      <path d="M-100 800 Q 500 600, 900 900 T 1540 700" fill="none" stroke={stroke} strokeWidth="0.5" strokeOpacity="0.2" />
    </svg>
  </div>
);

const NoiseOverlay = () => (
  <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-50 mix-blend-overlay"></div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-300 ${isScrolled ? 'py-4 bg-ln-dark/80 backdrop-blur-md' : ''}`}>
        <div className="flex flex-col relative group cursor-pointer">
          <h1 className="font-display text-4xl font-bold tracking-tighter leading-none group-hover:text-ln-neon transition-colors">KAVI</h1>
          <h1 className="font-display text-4xl font-bold tracking-tighter leading-none group-hover:text-ln-neon transition-colors">RAJ</h1>
          <div className="absolute -right-4 top-0 text-xs font-sans font-bold text-ln-neon">KR</div>
        </div>

        <div className="flex items-center gap-6">
          <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-ln-neon text-black px-8 py-3 rounded-full font-bold font-display text-xl hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(204,255,0,0.4)]">
            <Download size={20} strokeWidth={2.5} />
            RESUME
          </a>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:scale-110"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div className={`fixed inset-0 bg-ln-neon z-[200] transition-transform duration-700 cubic-bezier(0.7, 0, 0.3, 1) ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center">
          <div className="flex flex-col">
             <span className="font-display text-4xl font-bold text-black leading-none">KAVI</span>
             <span className="font-display text-4xl font-bold text-black leading-none">RAJ</span>
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-ln-neon transition-all">
             <div className="relative w-6 h-6">
               <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current rotate-45 transform -translate-y-1/2"></span>
               <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current -rotate-45 transform -translate-y-1/2"></span>
             </div>
          </button>
        </div>
        
        <div className="h-full flex flex-col justify-center items-center gap-4">
          {['HOME', 'PORTFOLIO', 'SKILLS', 'CONTACT'].map((item, idx) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="font-display text-7xl md:text-9xl font-bold text-black hover:text-white transition-colors relative group leading-none" onClick={() => setIsMenuOpen(false)}>
              {item}
              <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-xl font-sans opacity-0 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
            </a>
          ))}
        </div>
        
        <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between text-black font-bold uppercase tracking-widest text-sm">
           <span>© 2024 KR</span>
           <div className="flex gap-4 md:gap-8 flex-wrap">
             <a href="https://www.instagram.com/_kavi_0212?igsh=MTVoYnF2NzI3bXF6aA==" target="_blank" rel="noopener noreferrer">Instagram</a>
             <a href="https://www.behance.net/kaviraj21" target="_blank" rel="noopener noreferrer">Behance</a>
             <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
             <a href={`mailto:${EMAIL}`}>Email</a>
           </div>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDistance = height - windowHeight;
      const progress = Math.min(Math.max(-top / scrollableDistance, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const animationThreshold = 0.7; 
  const visualProgress = Math.min(scrollProgress / animationThreshold, 1);
  const reverseVisualProgress = 1 - visualProgress;

  const startOffset = 600;
  const topY = -startOffset * reverseVisualProgress; 
  const leftX = -startOffset * reverseVisualProgress;
  const scale = 0.8 + (visualProgress * 0.2);
  const elementOpacity = visualProgress;

  return (
    <section id="home" ref={sectionRef} className="relative h-[300vh] bg-ln-dark">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        <TopographicLines className="opacity-30 animate-pulse" stroke="#ccff00" />
        <NoiseOverlay />
        
        <div className="absolute pointer-events-none z-0 select-none transition-opacity duration-300" style={{ opacity: 1 - visualProgress * 1.5 }}>
           <h1 className="font-display text-[25vw] leading-none text-stroke font-bold opacity-10 text-center">EDIT<br/>MODE</h1>
        </div>

        <div className="absolute left-8 bottom-12 z-20 hidden md:block transition-all duration-500" style={{ opacity: visualProgress, transform: `translateX(${reverseVisualProgress * -50}px)` }}>
           <div className="border-l-2 border-ln-neon pl-4 mb-8">
             <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Role</p>
             <span className="font-bold text-lg md:text-xl">EDITOR & ANIMATOR</span>
           </div>
           <div className="border-l-2 border-white/20 pl-4">
             <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Specialty</p>
             <span className="font-display text-4xl font-bold">STORY SELLING</span>
           </div>
        </div>

        <div className="relative w-[90vw] h-[50vh] md:w-[600px] md:h-[600px] flex items-center justify-center z-10">
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-100 ease-out z-10" style={{ transform: `scale(${scale})` }}>
             <div className="relative w-64 md:w-80 h-80 md:h-96 overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
               <img src={PROFILE_IMG} alt="Kavi Raj" className="w-full h-full object-cover" />
               <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold tracking-widest text-white/80">REC</span>
               </div>
             </div>
          </div>

          <div className="absolute top-0 md:-top-16 z-30 w-72 md:w-96 h-16 bg-black/90 backdrop-blur-xl border border-white/10 rounded-md flex items-center px-4 gap-2 shadow-2xl transition-all duration-100 ease-out" style={{ transform: `translateY(${topY}px)`, opacity: elementOpacity }}>
             <div className="flex-1 flex flex-col gap-1">
                <div className="w-full h-2 bg-ln-neon rounded-sm"></div>
                <div className="w-[70%] h-2 bg-blue-500 rounded-sm"></div>
             </div>
             <span className="font-mono text-xs text-ln-neon">00:00:12:04</span>
          </div>

          <div className="absolute left-0 md:-left-16 z-20 w-16 md:w-20 h-48 md:h-64 bg-[#111] border border-white/10 rounded-md flex flex-col items-center justify-center gap-6 py-4 transition-all duration-100 ease-out" style={{ transform: `translateX(${leftX}px)`, opacity: elementOpacity }}>
             <Aperture className="text-gray-500" />
             <PenTool className="text-gray-500" />
             <Layers className="text-gray-500" />
          </div>

          <div className="absolute right-0 md:-right-16 z-20 w-16 md:w-20 h-48 md:h-64 bg-[#111] border border-white/10 rounded-md flex flex-col items-center justify-center gap-2 py-4 overflow-hidden transition-all duration-100 ease-out" style={{ transform: `translateX(${-leftX}px)`, opacity: elementOpacity }}>
             <div className="flex items-end gap-1 h-full pb-2">
                {[...Array(5)].map((_,i) => <div key={i} className="w-2 bg-ln-neon animate-pulse" style={{ height: `${Math.random() * 100}%` }}></div>)}
             </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300" style={{ opacity: 1 - scrollProgress * 3 }}>
          <span className="text-[10px] uppercase tracking-widest text-ln-neon animate-pulse">Start Sequence</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-ln-neon to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

const Manifesto = () => (
  <section className="relative bg-ln-neon text-black py-32 px-6 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
       <h1 className="font-display text-[40vw] leading-none font-bold text-black -rotate-12 translate-x-20">KR</h1>
    </div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex items-center gap-6 mb-12">
         <div className="w-24 h-[2px] bg-black"></div>
         <span className="font-bold uppercase tracking-widest text-sm">The Philosophy</span>
      </div>
      <div className="relative">
        <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] font-bold uppercase tracking-tight">
          VISUALS THAT <span className="ml-12 md:ml-32">SPEAK.</span><br/>
          STORIES THAT <span className="bg-black text-ln-neon px-4 md:px-8 inline-block transform -rotate-2">SELL.</span><br/>
          <span className="ml-8 md:ml-24">DEFINING THE</span><br/> NARRATIVE.
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              I create cinematic edits, dynamic motion design, and narrative-driven visuals tailored to brand tone and performance goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Works = () => {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleAudio = () => {
    if (!iframeRef.current) return;
    const newMutedState = !isMuted;
    const message = JSON.stringify({
      method: 'setVolume',
      value: newMutedState ? 0 : 1,
    });
    iframeRef.current.contentWindow?.postMessage(message, '*');
    setIsMuted(newMutedState);
  };

  const scrollVideos = [
    {
      id: "1141444861",
      title: "26 October 2025",
      src: "https://player.vimeo.com/video/1141444861?badge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
      id: "1141444934",
      title: "Motion Graphics Explainer",
      src: "https://player.vimeo.com/video/1141444934?badge=0&autopause=0&player_id=0&app_id=58479"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-white text-black overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
           <h2 className="font-display text-8xl md:text-9xl font-bold leading-none">
             WORKS
           </h2>
           <div className="hidden md:flex items-center gap-4">
              <span className="font-bold uppercase tracking-widest">Selected Projects</span>
              <div className="w-24 h-1 bg-black"></div>
           </div>
        </div>

        {/* Vimeo Hero */}
        <div className="w-full aspect-video bg-black border-2 border-black relative shadow-2xl group overflow-hidden mb-12">
            <iframe 
              ref={iframeRef}
              title="vimeo-player" 
              src="https://player.vimeo.com/video/1139786140?h=fbfaea48bd&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&api=1"
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
            ></iframe>

             <button 
               onClick={toggleAudio}
               className="absolute bottom-6 right-6 z-20 bg-ln-neon text-black w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform border-2 border-black"
             >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
             </button>
        </div>

        {/* Horizontal Project Scroller */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar -mx-6 px-6">
          {scrollVideos.map((video, idx) => (
            <div key={idx} className="min-w-[90vw] md:min-w-[800px] aspect-video bg-black border-2 border-black relative shadow-xl overflow-hidden snap-center shrink-0">
              <iframe 
                src={video.src}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                title={video.title}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Toolbox = () => (
    <section id="skills" className="py-32 bg-[#050505] relative overflow-hidden">
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
       <div className="max-w-[1800px] mx-auto px-6 relative z-10">
         <h2 className="font-display text-7xl md:text-9xl text-white font-bold leading-none mb-20">THE ARSENAL</h2>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {TOOLS.map((tool) => (
              <div key={tool.id} className="group relative aspect-square bg-[#0f0f0f] border border-white/5 overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white/20 group-hover:text-ln-neon group-hover:scale-105 transition-transform duration-500">{tool.icon}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                   <h3 className="font-display text-2xl md:text-4xl uppercase leading-none text-white">{tool.name}</h3>
                </div>
              </div>
            ))}
         </div>
       </div>
    </section>
);

const ContactCTA = () => {
  const [name, setName] = useState('');
  const [projectType, setProjectType] = useState('');
  const [details, setDetails] = useState('');

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919361545080"; 
    
    const message = `Hello, I'm ${name}.\n\nI have a project inquiry regarding: *${projectType}*.\n\nHere are the details:\n${details}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="relative py-32 bg-ln-light text-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap bg-ln-neon py-4 -rotate-1 scale-105 z-20 border-y-4 border-black">
        <div className="animate-marquee inline-block">
          {[...Array(5)].map((_, i) => <span key={i} className="font-display text-6xl font-bold mx-8">OPEN FOR COLLABORATION —</span>)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
         <div>
            <h2 className="font-display text-8xl md:text-9xl font-bold leading-[0.85] mb-8">READY TO EDIT?</h2>
            <p className="text-xl mb-12 max-w-md">
              Have a project in mind? Fill out the form, and let's start the conversation directly on WhatsApp.
            </p>
         </div>
         <div className="relative bg-white border-2 border-black p-8 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] rotate-1">
             <h3 className="font-display text-4xl mb-6 uppercase">Project Inquiry</h3>
             <form className="flex flex-col gap-6" onSubmit={handleWhatsAppRedirect}>
                <input type="text" placeholder="YOUR NAME" value={name} onChange={(e) => setName(e.target.value)} required className="w-full border-b-2 bg-transparent py-2 text-xl font-display focus:outline-none focus:border-ln-neon" />
                <input type="text" placeholder="PROJECT TYPE (E.G., REEL, AD)" value={projectType} onChange={(e) => setProjectType(e.target.value)} required className="w-full border-b-2 bg-transparent py-2 text-xl font-display focus:outline-none focus:border-ln-neon" />
                <textarea placeholder="TELL ME ABOUT THE VISION..." value={details} onChange={(e) => setDetails(e.target.value)} required className="w-full border-b-2 bg-transparent py-2 text-xl font-display focus:outline-none focus:border-ln-neon h-24 resize-none"></textarea>
                <button type="submit" className="mt-4 bg-ln-neon text-black font-bold py-3 px-6 self-start hover:bg-black hover:text-white transition-colors uppercase tracking-widest text-sm">
                   Send Inquiry
                </button>
             </form>
         </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-ln-neon text-black pt-32 pb-12 px-6">
     <div className="max-w-7xl mx-auto text-center">
       <h2 className="font-display text-[12vw] leading-[0.8] font-bold uppercase mb-20">ALWAYS IN MOTION.</h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start border-t border-black/10 pt-12">
          <div className="text-left">
             <h3 className="font-bold uppercase tracking-widest mb-6">Navigation</h3>
             <ul className="space-y-2 font-display text-2xl uppercase">
               {['home', 'portfolio', 'skills', 'contact'].map(item => <li key={item}><a href={`#${item}`} className="hover:underline">{item}</a></li>)}
             </ul>
          </div>
          <div className="flex flex-col items-center gap-4">
             <a href={`mailto:${EMAIL}`} className="bg-black text-white px-8 py-3 rounded-full uppercase font-bold text-sm hover:bg-white hover:text-black transition-colors">
               {EMAIL}
             </a>
             <a href={WHATSAPP_DIRECT_URL} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-3 rounded-full uppercase font-bold text-sm hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <MessageCircle size={16} /> Chat on WhatsApp
             </a>
          </div>
          <div className="text-right">
             <h3 className="font-bold uppercase tracking-widest mb-6">Socials</h3>
             <div className="flex flex-col items-end gap-2 font-display text-2xl uppercase">
                <a href="https://www.instagram.com/_kavi_0212?igsh=MTVoYnF2NzI3bXF6aA==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">Instagram <ArrowRight size={16}/></a>
                <a href="https://www.behance.net/kaviraj21" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">Behance <ArrowRight size={16}/></a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">LinkedIn <ArrowRight size={16}/></a>
             </div>
          </div>
       </div>
       <div className="flex justify-between items-end mt-20 text-xs font-bold uppercase tracking-widest opacity-50">
          <span>© 2024 Kavi Raj</span>
          <span>Video Editing & Motion Design</span>
       </div>
     </div>
  </footer>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`fixed inset-0 bg-ln-dark z-[999] flex flex-col items-center justify-center gap-4 transition-opacity duration-500 ${!isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="relative font-display text-6xl font-bold text-ln-neon animate-pulse">
          KR
        </div>
        <p className="text-white/50 text-sm uppercase tracking-widest">Initializing Sequence...</p>
      </div>
      <main className={`bg-ln-dark min-h-screen text-white transition-opacity duration-1000 delay-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <Manifesto />
        <Works />
        <Toolbox />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}
