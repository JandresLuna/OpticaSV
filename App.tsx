
import React, { useEffect } from 'react';
import { AIStylist } from './components/AIStylist';
import { ServiceItem, Testimonial } from './types';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services: ServiceItem[] = [
    {
      id: '01',
      title: 'Examen Visual Digital',
      description: 'Tecnología computarizada de última generación para una fórmula exacta de alta resolución.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    },
    {
      id: '02',
      title: 'Asesoría de Imagen',
      description: 'Analizamos tus rasgos faciales para encontrar la montura que potencie tu identidad personal.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    },
    {
      id: '03',
      title: 'Monturas Exclusivas',
      description: 'Curaduría de marcas premium y diseños independientes que no encontrarás en grandes cadenas.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    },
    {
      id: '04',
      title: 'Lentes de Contacto',
      description: 'Adaptación profesional y seguimiento para una comodidad visual absoluta en tu día a día.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Carlos Ramírez",
      role: "Diseñador Gráfico",
      text: "Buscaba algo diferente a las ópticas de cadena. Aquí entendieron que mis gafas son parte de mi identidad profesional.",
      color: "border-brand-blue"
    },
    {
      name: "Elena Velásquez",
      role: "Empresaria",
      text: "Llevo 10 años viniendo por la confianza. La precisión en mi fórmula siempre es impecable y el trato es humano.",
      color: "border-teal-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#121212] flex items-center justify-center rounded-xl shadow-lg">
              <span className="text-white text-sm font-bold tracking-tighter">S&V</span>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight uppercase block leading-none">Óptica S&V</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-medium">Suba, Bogotá</span>
            </div>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <a href="#metodo" className="hover:text-black transition-colors">Método</a>
            <a href="#servicios" className="hover:text-black transition-colors">Servicios</a>
            <a href="#estilo" className="hover:text-black transition-colors">Estilo IA</a>
            <a href="#contacto" className="hover:text-black transition-colors">Contacto</a>
          </div>
          <div className="flex items-center gap-6">
            <button className="hidden sm:block text-gray-400 hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <a
              href="https://wa.me/573000000000"
              className="bg-[#121212] text-white px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl hover:shadow-black/20"
            >
              Agendar Cita
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - REDESIGNED PER REFERENCE */}
      <header className="relative pt-32 lg:pt-0 lg:min-h-screen flex items-center bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div className="reveal">
            <h1 className="font-serif text-8xl lg:text-[10rem] leading-[0.85] mb-6 tracking-tight text-[#121212]">
              Óptica <br /> <span className="italic">S&V</span>
            </h1>
            <p className="text-2xl text-gray-500 font-light mb-12 tracking-wide">
              Tu visión, nuestra pasión
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.scrollTo({ top: document.getElementById('estilo')?.offsetTop, behavior: 'smooth' })}
                className="btn-brand-blue px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-2xl shadow-blue-900/20"
              >
                Cita Online
              </button>
              <a
                href="#servicios"
                className="bg-white border border-gray-100 px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:border-gray-300 transition-all text-center shadow-lg shadow-black/[0.03]"
              >
                Hasta Pronto
              </a>
            </div>
            <div className="mt-16 flex items-center gap-8 reveal [transition-delay:0.3s]">
              <div className="text-left">
                <p className="font-mono text-[9px] uppercase tracking-widest text-gray-400 mb-1">Tradición</p>
                <p className="text-xl font-bold italic">20 Años</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-left">
                <p className="font-mono text-[9px] uppercase tracking-widest text-gray-400 mb-1">Ubicación</p>
                <p className="text-xl font-bold italic">Suba Centro</p>
              </div>
            </div>
          </div>

          <div className="relative reveal [transition-delay:0.5s]">
            <div className="hero-blue-card aspect-[1.1/1] w-full flex items-center justify-center p-12 lg:p-20 shadow-2xl shadow-blue-900/30">
              <img
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop"
                alt="Monturas de Diseño"
                className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] transform -rotate-12 scale-110"
              />
              <div className="absolute top-8 right-8 flex gap-3">
                <div className="w-10 h-10 rounded-full border border-white/20 backdrop-blur flex items-center justify-center text-white/60">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 backdrop-blur flex items-center justify-center text-white font-bold text-[10px] uppercase">
                  SV
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* METHODOLOGY */}
      <section id="metodo" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 reveal">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-6 font-bold">Nuestra Esencia</h2>
            <h3 className="text-6xl font-serif tracking-tight text-[#121212]">Gafas a tu medida, <br /><span className="text-gray-300 italic font-light">no a la del catálogo.</span></h3>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                n: '01',
                t: 'Escucha Activa',
                d: 'Analizamos tu rutina y rasgos para entender qué buscas proyectar.',
                icon: <svg className="w-8 h-8 text-brand-blue mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              },
              {
                n: '02',
                t: 'Examen Digital',
                d: 'Precisión computarizada de vanguardia para una salud ocular óptima.',
                icon: <svg className="w-8 h-8 text-brand-blue mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              },
              {
                n: '03',
                t: 'Asesoría de Imagen',
                d: 'Curaduría experta de monturas basada en visagismo y tendencias.',
                icon: <svg className="w-8 h-8 text-brand-blue mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              },
              {
                n: '04',
                t: 'Ajuste & Entrega',
                d: 'Personalización técnica milimétrica para un confort total.',
                icon: <svg className="w-8 h-8 text-brand-blue mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.033A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              }
            ].map((step, i) => (
              <div key={i} className="reveal group p-12 border border-transparent hover:bg-gray-50 transition-all rounded-[3rem]">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xl font-light text-gray-300 group-hover:text-brand-blue transition-colors block mb-10">{step.n}</span>
                  {step.icon}
                </div>
                <h4 className="text-lg font-bold mb-4 uppercase tracking-tighter text-[#121212]">{step.t}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-40 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10 reveal">
            <div className="max-w-xl text-left">
              <h2 className="text-6xl font-serif mb-8 tracking-tight text-[#121212]">Precisión clínica,<br /><span className="italic font-light text-gray-300">diseño personal.</span></h2>
              <p className="text-gray-500 text-lg leading-relaxed font-light">Fusionamos la rigurosidad médica con el criterio estético de vanguardia.</p>
            </div>
            <div className="flex items-center gap-10">
              <div className="h-20 w-px bg-gray-200"></div>
              <div>
                <p className="text-5xl font-bold tracking-tighter text-brand-blue">20+</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold">Años de Trayectoria</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={s.id} className="reveal bg-white p-12 rounded-[3rem] border border-gray-100 group hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-2xl hover:shadow-brand-blue/10">
                <div className="w-16 h-16 mb-10 bg-brand-blue text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-blue/20 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter text-[#121212]">{s.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-10 font-light">{s.description}</p>
                <a href="https://wa.me/573000000000" className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-brand-blue pb-1 hover:text-gray-400 hover:border-gray-400 transition-all text-brand-blue">Saber más</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI STYLIST PROMO */}
      <section id="estilo" className="py-40 bg-[#121212] text-white relative overflow-hidden">
        <div className="absolute inset-0 prism-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="reveal">
              <h2 className="text-[10px] uppercase tracking-[0.6em] text-gray-500 mb-10 font-bold">Tecnología S&V</h2>
              <h3 className="text-7xl font-serif leading-none mb-10 tracking-tighter">Tu estilo, <br /><span className="italic font-light text-gray-500">potenciado por IA.</span></h3>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light">
                Utiliza nuestro Asesor de Estilo inteligente para descubrir qué monturas armonizan mejor con tus facciones únicas.
              </p>
              <button
                onClick={() => {
                  const chatBtn = document.querySelector('button.fixed.bottom-6.right-6') as HTMLButtonElement;
                  chatBtn?.click();
                }}
                className="btn-brand-blue px-12 py-6 rounded-full text-[11px] font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Abrir Asesor de Estilo
              </button>
            </div>
            <div className="reveal [transition-delay:0.3s]">
              <div className="aspect-square bg-gradient-to-br from-brand-blue/20 to-transparent rounded-[4rem] p-8 border border-white/10 relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                {/* Scanner Interface */}
                <div className="absolute inset-x-0 top-0 h-1 bg-brand-blue shadow-[0_0_15px_#1e56a0] z-20 animate-[scan_3s_ease-in-out_infinite]"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-center z-30">
                  <div className="w-24 h-24 bg-brand-blue/90 text-white rounded-3xl flex items-center justify-center mb-10 shadow-3xl backdrop-blur-sm">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </div>
                  <p className="text-2xl font-serif italic text-white leading-snug drop-shadow-md">"Diseñamos una mirada que hable de ti."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="reveal">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-10 font-bold">Confianza Local</h2>
              <div className="space-y-20">
                {testimonials.map((t, i) => (
                  <blockquote key={i} className={`border-l-4 ${t.color} pl-12 reveal [transition-delay:calc(0.2s*var(--i))]`}>
                    <p className="text-4xl font-serif italic mb-8 leading-snug text-[#121212]">"{t.text}"</p>
                    <footer className="font-mono text-[10px] uppercase tracking-widest text-gray-400">— {t.name}, <span className="text-brand-blue">{t.role}</span></footer>
                  </blockquote>
                ))}
              </div>
            </div>
            <div className="reveal [transition-delay:0.5s] hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[4/5] bg-gray-100 rounded-[4rem] overflow-hidden shadow-2xl relative">
                  <img
                    src="/lentes.jpg"
                    alt="Salud Visual S&V"
                    className="w-full h-full object-cover grayscale-0 opacity-100 block"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-brand-blue rounded-full flex items-center justify-center border-[12px] border-white shadow-3xl z-10 transition-transform hover:scale-105 duration-500">
                  <p className="text-white text-[11px] font-bold uppercase tracking-[0.2em] text-center leading-tight">Expertos<br />en Salud<br />Visual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & MAP */}
      <section id="contacto" className="py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="reveal">
              <h2 className="text-7xl font-serif mb-16 tracking-tight text-[#121212]">Visítanos en <br /><span className="italic font-light text-gray-300">Suba Centro.</span></h2>
              <div className="space-y-12">
                <div className="p-10 bg-white rounded-[3rem] titanium-border shadow-sm">
                  <h4 className="font-mono text-[10px] uppercase text-brand-blue mb-4 tracking-widest font-bold">Nuestra Casa</h4>
                  <p className="text-3xl leading-snug font-serif italic text-[#121212]">Calle 145 # 92 - 30 <br />Suba Centro, Bogotá</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-12">
                  <div>
                    <h4 className="font-mono text-[10px] uppercase text-gray-400 mb-4 tracking-widest">Horarios</h4>
                    <p className="text-lg font-medium text-[#121212]">Lun - Vie: 9AM — 7PM</p>
                    <p className="text-lg font-medium text-[#121212]">Sáb: 10AM — 4PM</p>
                  </div>
                  <div className="pt-6 sm:pt-0">
                    <a href="https://wa.me/573000000000" className="btn-brand-blue inline-block px-12 py-6 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-2xl shadow-blue-900/20">
                      Agendar WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal [transition-delay:0.3s]">
              <div className="w-full aspect-square rounded-[4rem] overflow-hidden border-[20px] border-white shadow-2xl relative bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2435728864787!2d-74.09017668581729!3d4.72765879656641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f84f0e635741f%3A0x6b07c29352697b0a!2sCl.%20145%20%2392-30%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1715264321000!5m2!1ses!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#121212] flex items-center justify-center rounded-xl">
              <span className="text-white text-xs font-bold">S&V</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300">© 2026 Óptica S&V — Salud y Estilo</p>
              <p className="text-[9px] font-mono text-gray-300 uppercase mt-1">Bogotá, Colombia</p>
            </div>
          </div>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-brand-blue transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Facebook</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Legal</a>
          </div>
        </div>
      </footer>

      <AIStylist />
    </div>
  );
};

export default App;
