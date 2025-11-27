import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  X, 
  TrendingUp, 
  Microscope, 
  Layers, 
  Coins,
  Briefcase,
  Github,
  Globe,
  Database,
  BarChart3,
  Terminal,
  Users,
  MessageSquare,
  Shuffle,
  ArrowUp // Added for the Back to Top button
} from 'lucide-react';

// --- TRANSLATIONS CONFIGURATION ---
const translations = {
  en: {
    location: "Barcelona (Hybrid) • Remote • Open to Relocation",
    contactBtn: "Contact Me",
    heroBadge: "Operational Strategy",
    heroTitle1: "I turn ambiguity into",
    heroTitle2: "recurring revenue.",
    heroDesc1: "I was a pivotal part of Exoticca's scale-up success. Now, I combine that",
    heroDescBold1: "Operational Strategy",
    heroDesc2: "with",
    heroDescBold2: "Financial Rigour",
    heroDesc3: "(ex-PwC) to build",
    heroDescBold3: "scalable engines",
    heroDesc4: "that transform chaos into predictable growth.",
    portfolioBtn: "Project Portfolio",
    metricsTitle: "Revenue & Efficiency Impact",
    metricsBadge: "CONFIRMED METRICS",
    m1Title: "Revenue Impact",
    m1Desc: "Linked NPS directly to revenue, proving that well-connected flows drive ~€8M per 10pts. Operations is more than reducing costs; it's a revenue driver.",
    m2Title: "Opex Savings",
    m2Desc: "Revamped payment infrastructure and flight purchasing, directly impacting the bottom-line margin.",
    m3Title: "CSAT Uplift",
    m3Desc: "Deployed a predictive model to preemptively solve friction points before users complained.",
    m4Title: "Partners Scaled",
    m4Desc: "Strategic owner of the global provider platform, enabling booking management at massive scale.",
    m5Title: "Forecast Precision",
    m5Desc: "Built the staffing model for 25+ Ops members. I model the future so we don't hire blindly.",
    m6Title: "Sustained NPS",
    m6Desc: "Maintained high satisfaction across 45k+ annual trips through continuous feedback loops.",
    specialtyBadge: "MY SPECIALTY",
    ambiguityTitle: "I Thrive in Ambiguity",
    storyTime: "Story time:",
    storyText: "I recently watched a support team struggle with disjointed tools, copying data back and forth just to answer a simple query. It wasn't a people problem; it was a design failure. It made me realize: I don’t want to just manage processes; I want to engineer the systems that make work effortless.",
    spaceNerdStart: "I’m a",
    spaceNerdBold: "Space Nerd",
    spaceNerdEnd: "at heart—I love things that launch. I specialize in projects that start with \"we have no idea how to solve this\" and end with a concrete, automated workflow.",
    diagramInput: "Input",
    diagramVague: "Vague Problem",
    diagramProcess: "PROCESS",
    diagramOutput: "Output",
    diagramSystem: "Profitable System",
    pipelineTitle: "The Abstract-to-Concrete Pipeline",
    step1Title: "1. Operational Diagnosis",
    step1Desc: "I dive into the messy data. I don't wait for reports; I audit the operational reality vs the process map to identify where value is actually leaking.",
    step2Title: "2. Strategic Architecture",
    step2Desc: "I design the solution. Whether it's a new operational workflow, a policy change, or a tech integration.",
    step3Title: "3. Revenue Realization",
    step3Desc: "I link it to P&L. If the process improvement doesn't save money or make money, I iterate until it does.",
    toolkitTitle: "Strategic & Technical Toolkit",
    skillAudit: "Financial Audit (PwC)",
    skillProcess: "Process Design",
    skillSQL: "SQL & Data Analysis",
    skillBI: "Looker / BI Dashboards",
    skillPython: "Python (Tech Enabled)",
    skillTeam: "Team Leadership",
    skillStakeholder: "Stakeholder Mgmt",
    skillChange: "Change Management",
    skillAI: "Gemini / AI Agents",
    modalTitle: "Initialize Contact",
    modalSubtitle: "Select communication protocol.",
    modalEmail: "Send Email",
    modalCall: "Call / Text",
    modalLinkedinSub: "Connect directly"
  },
  es: {
    location: "Barcelona (Híbrido) • Remoto • Disponibilidad para viajar",
    contactBtn: "Contáctame",
    heroBadge: "Estrategia Operativa",
    heroTitle1: "Convierto la ambigüedad en",
    heroTitle2: "ingresos recurrentes.",
    heroDesc1: "Fui pieza clave en el éxito de escalado de Exoticca. Ahora, combino esa",
    heroDescBold1: "Visión Operativa",
    heroDesc2: "con",
    heroDescBold2: "Rigor Financiero",
    heroDesc3: "(ex-PwC) para construir",
    heroDescBold3: "motores escalables",
    heroDesc4: "que transforman el caos en crecimiento predecible.",
    portfolioBtn: "Ver Proyectos",
    metricsTitle: "Impacto en Ingresos y Eficiencia",
    metricsBadge: "MÉTRICAS CONTRASTADAS",
    m1Title: "Impacto en Ingresos",
    m1Desc: "Vinculé el NPS a ingresos, demostrando que procesos fluidos generan ~8M€ por cada 10 pts. Operaciones no es solo reducir costes; es un motor de facturación.",
    m2Title: "Ahorro Opex",
    m2Desc: "Reestructuré la infraestructura de pagos y compra de vuelos, impactando directamente en el margen neto.",
    m3Title: "Mejora de CSAT",
    m3Desc: "Implementé modelos predictivos para resolver puntos de fricción antes de que el usuario llegara a quejarse.",
    m4Title: "Escalado de Partners",
    m4Desc: "Lideré la plataforma global de proveedores, permitiendo gestionar reservas a escala masiva sin aumentar headcount.",
    m5Title: "Precisión de Previsión",
    m5Desc: "Creé el modelo de dimensionamiento para más de 25 personas en Ops. Modelo el futuro para no contratar a ciegas.",
    m6Title: "NPS Sostenido",
    m6Desc: "Mantuve altos índices de satisfacción en más de 45k viajes anuales mediante ciclos de feedback continuo.",
    specialtyBadge: "MI ESPECIALIDAD",
    ambiguityTitle: "Me Crezco ante la Ambigüedad",
    storyTime: "Anécdota rápida:",
    storyText: "Hace poco vi a un equipo de soporte sufrir con herramientas desconectadas, copiando datos manualmente para responder una duda simple. No era un problema del equipo, era un fallo de diseño. Ahí lo vi claro: No quiero solo gestionar procesos; quiero diseñar los sistemas que hacen que el trabajo fluya sin esfuerzo.",
    spaceNerdStart: "Soy un",
    spaceNerdBold: "Fanático del Espacio",
    spaceNerdEnd: "—me apasiona todo lo que despega. Me especializo en proyectos que empiezan con un \"no tenemos ni idea de cómo arreglar esto\" y terminan con un flujo de trabajo automatizado y sólido.",
    diagramInput: "Entrada",
    diagramVague: "Problema Vago",
    diagramProcess: "PROCESO",
    diagramOutput: "Salida",
    diagramSystem: "Sistema Rentable",
    pipelineTitle: "De lo Abstracto a lo Concreto",
    step1Title: "1. Diagnóstico Operativo",
    step1Desc: "Me meto de lleno en el caos de los datos. No espero informes; audito la realidad operativa vs. el mapa de procesos para ver dónde se pierde valor realmente.",
    step2Title: "2. Arquitectura Estratégica",
    step2Desc: "Diseño la solución. Ya sea un nuevo flujo de trabajo, un cambio de política interna o una integración tecnológica.",
    step3Title: "3. Realización de Ingresos",
    step3Desc: "Lo vinculo a la cuenta de resultados (P&L). Si la mejora del proceso no ahorra dinero o genera ingresos, itero hasta que lo haga.",
    toolkitTitle: "Toolkit Estratégico y Técnico",
    skillAudit: "Auditoría Financiera (PwC)",
    skillProcess: "Diseño de Procesos",
    skillSQL: "SQL y Análisis de Datos",
    skillBI: "Looker / Dashboards BI",
    skillPython: "Python (Tech Enabled)",
    skillTeam: "Liderazgo de Equipos",
    skillStakeholder: "Gestión de Stakeholders",
    skillChange: "Gestión del Cambio",
    skillAI: "Gemini / Agentes IA",
    modalTitle: "Iniciar Contacto",
    modalSubtitle: "Elige tu canal preferido.",
    modalEmail: "Enviar Email",
    modalCall: "Llamar / WhatsApp",
    modalLinkedinSub: "Conectar en LinkedIn"
  }
};

// --- REUSABLE COMPONENTS ---

const GlassPanel = ({ children, className = "", onClick, href, target }) => {
  const baseClasses = `
    backdrop-blur-xl bg-white/65 
    border border-white/40 
    shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03),inset_0_0_0_1px_rgba(255,255,255,0.5)]
    transition-all duration-300
  `;
  
  if (href) {
    return (
      <a href={href} target={target} className={`${baseClasses} ${className}`} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <div className={`${baseClasses} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

const MetricCard = ({ value, label, desc }) => (
  <div className="group relative p-6 rounded-2xl bg-white/50 border border-white/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/85 hover:shadow-lg hover:border-white/90 overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-zinc-200"></div>
    <div className="relative">
      <div className="text-4xl font-bold text-zinc-900 mb-1">{value}</div>
      <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-3">{label}</div>
      <p className="text-sm text-zinc-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const TechBadge = ({ icon: Icon, label }) => (
  <GlassPanel className="px-5 py-3 rounded-full flex items-center gap-3">
    <Icon className="w-4 h-4 text-zinc-700" strokeWidth={2} />
    <span className="text-sm font-medium text-zinc-700">{label}</span>
  </GlassPanel>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  const [lang, setLang] = useState('en');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const t = translations[lang];

  // Update Tab Title & Icon dynamically on load
  useEffect(() => {
    // 1. Set Impactful Title
    document.title = "Edu Casanova | Revenue Architect"; 
    
    // 2. Set Favicon to Planet Emoji (Matches "Space Nerd" in bio)
    const setFavicon = () => {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/svg+xml';
      link.rel = 'icon';
      // This SVG renders the planet emoji as an icon
      link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪐</text></svg>`;
      document.getElementsByTagName('head')[0].appendChild(link);
    };
    setFavicon();
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  // Handle Scroll Effects (Background & Progress Bar)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Calculate progress percentage
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scrolled));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white relative">
      
      {/* Scroll Progress Bar - NEW FEATURE */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-zinc-900 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Global Background Styling with Dynamic Scroll Reactivity - NEW FEATURE */}
      <div className="fixed inset-0 -z-10 bg-zinc-100/50 transition-all duration-700 ease-out"
           style={{
             backgroundImage: `
               radial-gradient(at ${50 + scrollY * 0.02}% ${0 + scrollY * 0.05}%, rgba(255,255,255,0.8) 0px, transparent 50%),
               radial-gradient(at ${100 - scrollY * 0.02}% ${0 + scrollY * 0.03}%, rgba(228, 228, 231, 0.5) 0px, transparent 50%)
             `
           }}
      />

      {/* Navigation */}
      <nav className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="text-lg font-bold tracking-tight text-zinc-900">
          EDU <span className="text-zinc-400">CASANOVA</span>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Status Indicator (Desktop) */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/50 border border-zinc-200 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-wider text-zinc-600 uppercase">
              {t.location}
            </span>
          </div>

          {/* Language Toggle */}
          <button 
            onClick={() => setLang(prev => prev === 'en' ? 'es' : 'en')}
            className="bg-white hover:bg-zinc-50 text-zinc-800 px-3 py-1.5 rounded-lg text-lg border border-zinc-200 transition-all shadow-sm hover:shadow flex gap-2 items-center cursor-pointer"
          >
            <span className={`transition-all duration-300 ${lang === 'en' ? 'opacity-100 grayscale-0 scale-110' : 'opacity-40 grayscale scale-90'}`}>🇬🇧</span>
            <span className="text-zinc-300 text-xs select-none">|</span>
            <span className={`transition-all duration-300 ${lang === 'es' ? 'opacity-100 grayscale-0 scale-110' : 'opacity-40 grayscale scale-90'}`}>🇪🇸</span>
          </button>

          {/* Contact Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            {t.contactBtn}
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 relative z-0">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24 mt-12 animate-[fadeIn_0.6s_ease-out]">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase bg-white/50 rounded-full border border-zinc-200 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{t.heroBadge}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight text-zinc-900">
            {t.heroTitle1} <br />
            <span className="bg-gradient-to-br from-zinc-900 to-zinc-500 bg-clip-text text-transparent">
              {t.heroTitle2}
            </span>
          </h1>
          
          <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            {t.heroDesc1} <strong className="font-semibold text-zinc-900">{t.heroDescBold1}</strong> {t.heroDesc2} <strong className="font-semibold text-zinc-900">{t.heroDescBold2}</strong> {t.heroDesc3} <strong className="font-semibold text-zinc-900">{t.heroDescBold3}</strong> {t.heroDesc4}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <GlassPanel 
              href="https://github.com/casanovaedu" 
              target="_blank"
              className="px-6 py-3 rounded-xl font-medium text-zinc-800 hover:bg-white flex items-center gap-2 group cursor-pointer"
            >
              <Github className="w-5 h-5 text-zinc-500 group-hover:text-black transition-colors" />
              <span>{t.portfolioBtn}</span>
            </GlassPanel>
            
            <GlassPanel 
              href="https://linkedin.com/in/edcasanova" 
              target="_blank"
              className="px-6 py-3 rounded-xl font-medium text-zinc-800 hover:bg-white flex items-center gap-2 group cursor-pointer"
            >
              <Linkedin className="w-5 h-5 text-zinc-500 group-hover:text-blue-600 transition-colors" />
              <span>LinkedIn</span>
            </GlassPanel>
          </div>
        </div>

        {/* ROI Dashboard */}
        <div className="mb-24">
          <div className="flex justify-between items-end mb-8 border-b border-zinc-200 pb-4">
            <h2 className="text-xl font-semibold text-zinc-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-zinc-500" />
              <span>{t.metricsTitle}</span>
            </h2>
            <span className="text-xs text-zinc-400 font-mono">{t.metricsBadge}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard value="€8M" label={t.m1Title} desc={t.m1Desc} />
            <MetricCard value="€2.5M" label={t.m2Title} desc={t.m2Desc} />
            <MetricCard value="25%" label={t.m3Title} desc={t.m3Desc} />
            <MetricCard value="100+" label={t.m4Title} desc={t.m4Desc} />
            <MetricCard value="95%" label={t.m5Title} desc={t.m5Desc} />
            <MetricCard value="40%" label={t.m6Title} desc={t.m6Desc} />
          </div>
        </div>

        {/* Ambiguity Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
          <GlassPanel className="p-8 rounded-3xl relative">
            <div className="absolute -top-4 -left-4 bg-zinc-900 text-white font-bold px-4 py-2 rounded-lg text-xs tracking-wider shadow-lg transform -rotate-2">
              {t.specialtyBadge}
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">{t.ambiguityTitle}</h3>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              <strong>{t.storyTime}</strong> 🏃‍♂️ {t.storyText}
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              {t.spaceNerdStart} <strong>{t.spaceNerdBold}</strong> 🪐 {t.spaceNerdEnd}
            </p>
            
            {/* Visual Process Transformation */}
            <div className="mt-8 flex items-center justify-between bg-white/50 p-4 rounded-xl border border-zinc-200">
              <div className="text-center">
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">{t.diagramInput}</div>
                <div className="text-sm font-semibold text-zinc-700">{t.diagramVague}</div>
              </div>
              <div className="flex-1 border-t-2 border-dashed border-zinc-300 mx-4 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] text-zinc-400 font-mono">
                  {t.diagramProcess}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">{t.diagramOutput}</div>
                <div className="text-sm font-bold text-zinc-900">{t.diagramSystem}</div>
              </div>
            </div>
          </GlassPanel>

          <div>
            <h3 className="text-xl font-bold text-zinc-900 mb-6">{t.pipelineTitle}</h3>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="mt-1 bg-white border border-zinc-200 p-2 rounded-lg h-fit shadow-sm group-hover:border-zinc-400 transition-colors">
                  <Microscope className="w-5 h-5 text-zinc-600" />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-semibold">{t.step1Title}</h4>
                  <p className="text-sm text-zinc-500 mt-1 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.step1Desc.replace('operational reality', '<strong>operational reality</strong>') }} />
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="mt-1 bg-white border border-zinc-200 p-2 rounded-lg h-fit shadow-sm group-hover:border-zinc-400 transition-colors">
                  <Layers className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-semibold">{t.step2Title}</h4>
                  <p className="text-sm text-zinc-500 mt-1 leading-relaxed">{t.step2Desc}</p>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="mt-1 bg-white border border-zinc-200 p-2 rounded-lg h-fit shadow-sm group-hover:border-zinc-400 transition-colors">
                  <Coins className="w-5 h-5 text-zinc-600" />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-semibold">{t.step3Title}</h4>
                  <p className="text-sm text-zinc-500 mt-1 leading-relaxed">{t.step3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Automation Stack */}
        <div className="border-t border-zinc-200 pt-12">
          <h3 className="text-center text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-10">
            {t.toolkitTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <TechBadge icon={Briefcase} label={t.skillAudit} />
            <TechBadge icon={Shuffle} label={t.skillProcess} />
            <TechBadge icon={Database} label={t.skillSQL} />
            <TechBadge icon={BarChart3} label={t.skillBI} />
            <TechBadge icon={Terminal} label={t.skillPython} />
            <TechBadge icon={Users} label={t.skillTeam} />
            <TechBadge icon={MessageSquare} label={t.skillStakeholder} />
            <TechBadge icon={Globe} label={t.skillChange} />
            {/* Custom SVG for Figma */}
            <GlassPanel className="px-5 py-3 rounded-full flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700">
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
              </svg>
              <span className="text-sm font-medium text-zinc-700">Figma</span>
            </GlassPanel>
            {/* Custom SVG for Jira */}
            <GlassPanel className="px-5 py-3 rounded-full flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-700">
                <path d="M11.53 2c0 2.4 1.97 4.35 4.35 4.35h1.78v-1.7c0-2.4-1.94-4.35-4.35-4.35h-1.78v1.7zm-2.69 2.35c0-2.4 1.94-4.35 4.35-4.35h1.78v1.7c0 2.4-1.97 4.35-4.35 4.35h-1.78v-1.7zm-2.61 4.73c0-2.4 1.94-4.35 4.35-4.35h1.78v1.7c0 2.4-1.97 4.35-4.35 4.35h-1.78v-1.7zm-2.61 4.73c0-2.4 1.94-4.35 4.35-4.35h1.78v1.7c0 2.4-1.97 4.35-4.35 4.35h-1.78v-1.7z"/>
              </svg>
              <span className="text-sm font-medium text-zinc-700">Jira</span>
            </GlassPanel>
            <TechBadge icon={(props) => (
              <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 5H5"/><path d="M19 19v2"/><path d="M17 21h2"/></svg>
            )} label={t.skillAI} />
          </div>
        </div>

      </main>

      <footer className="text-center py-12 text-zinc-400 text-xs font-mono">
        <p>ARCHITECTED BY EDU CASANOVA © 2025</p>
      </footer>
      
      {/* Back to Top Button - NEW FEATURE */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-zinc-900 text-white p-3 rounded-full shadow-xl transition-all duration-300 z-40 hover:bg-zinc-700 hover:scale-110 ${scrollY > 200 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Contact Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="w-full max-w-md bg-white border border-zinc-200 rounded-3xl p-8 shadow-2xl relative animate-[scaleIn_0.2s_ease-out]"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{t.modalTitle}</h3>
              <p className="text-zinc-500 text-sm">{t.modalSubtitle}</p>
            </div>

            <div className="space-y-3">
              <a href="mailto:casanovaeduard@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-100 hover:border-zinc-300 transition-all group cursor-pointer">
                <div className="bg-white border border-zinc-200 p-2.5 rounded-xl text-zinc-900 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-zinc-900 font-medium text-sm">{t.modalEmail}</div>
                  <div className="text-zinc-500 text-xs">casanovaeduard@gmail.com</div>
                </div>
              </a>

              <a href="tel:+34663365367" className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-100 hover:border-zinc-300 transition-all group cursor-pointer">
                <div className="bg-white border border-zinc-200 p-2.5 rounded-xl text-zinc-900 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-zinc-900 font-medium text-sm">{t.modalCall}</div>
                  <div className="text-zinc-500 text-xs">+34 663 365 367</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/edcasanova" target="_blank" className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-100 hover:border-zinc-300 transition-all group cursor-pointer">
                <div className="bg-white border border-zinc-200 p-2.5 rounded-xl text-zinc-900 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-zinc-900 font-medium text-sm">LinkedIn</div>
                  <div className="text-zinc-500 text-xs">{t.modalLinkedinSub}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Global Style overrides for specific animations not in Tailwind default */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.95); opacity: 1; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
}