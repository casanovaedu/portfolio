import React, { useState, useEffect, useRef } from 'react';
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
  Rocket,
  BrainCircuit,
  Bot,
  CreditCard,
  LineChart,
  Heart,
  Network,
  GraduationCap,
  Building2,
  Calendar,
  Plane,
  FileText,
  ArrowUp
} from 'lucide-react';

// --- TRANSLATIONS CONFIGURATION ---
const translations = {
  en: {
    location: "Barcelona (Hybrid) • Remote • Open to Relocation",
    contactBtn: "Contact Me",
    heroBadge: "Operational Strategy",
    heroTitle1: "I turn ambiguity into",
    heroTitle2: "scalable operations and recurring revenue.",
    heroDesc1: "I was a pivotal part of Exoticca's evolution into a global Travel-Tech leader. Now, I combine that",
    heroDescBold1: "Operational Strategy",
    heroDesc2: "with",
    heroDescBold2: "Financial Rigour",
    heroDesc3: "(ex-PwC) to build",
    heroDescBold3: "scalable engines",
    heroDesc4: "that transform chaos into predictable growth.",
    cvBtn: "Interactive CV",
    githubBtn: "Code Portfolio",
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
    storyTime: "Real-world Context:",
    storyText: "I watched our Operations team struggle to manage bookings with 100+ global partners using scattered emails and spreadsheets. It wasn't a people problem; it was a system failure. I took ownership of this ambiguity and led the Provider Platform product, turning operational chaos into a streamlined, digital ecosystem.",
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
    projectsTitle: "Operational Leadership Projects",
    projectsBadge: "SELECTED HIGHLIGHTS (6 of 20+)",
    project1Title: "Payment Ecosystem Architecture",
    project1Desc: "Restructured the PSP landscape for e-commerce, diversifying risk from 1 to 5+ providers. Lowered transaction costs and increased collection rates via internal orchestration.",
    project1Tags: ["FinOps", "Risk Mgmt", "Cost Eff."],
    project2Title: "Global Providers Platform",
    project2Desc: "Product Owner for the booking management system used by 100+ global partners. Enabled booking management at a massive scale without linear headcount growth.",
    project2Tags: ["Product Owner", "Scale", "B2B"],
    project3Title: "AI Retention Model",
    project3Desc: "Leveraged AI to create a model for early identification of dissatisfied customers, triggering automated corrective actions to protect Lifetime Value (LTV).",
    project3Tags: ["AI Ops", "Retention", "LTV"],
    project4Title: "Strategic Forecasting & Hiring",
    project4Desc: "Built the forecasting and hiring plan protocols for 30+ employee operative teams, ensuring capacity aligned perfectly with projected demand curves.",
    project4Tags: ["Management", "Planning", "HR Ops"],
    project5Title: "GTM & Advance Sales",
    project5Desc: "Defined protocols for selling trips +1 year in advance and led GTM initiatives like the B2B LATAM launch, bridging the gap between Product and Marketing.",
    project5Tags: ["Strategy", "GTM", "Growth"],
    project6Title: "NPS Ecosystem Revamp",
    project6Desc: "Redefined the customer feedback loop (digital surveys, CRM flows, partner integration), linking satisfaction performance directly to Customer Lifetime Value.",
    project6Tags: ["CX Strategy", "Data", "CRM"],
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
    finalCtaTitle: "Interested in my profile?",
    finalCtaDesc: "Let's connect and discuss how I can contribute to your team.",
    finalCtaBtn: "Let's Connect",
    modalTitle: "Initialize Contact",
    modalSubtitle: "Select communication protocol.",
    modalEmail: "Send Email",
    modalCall: "Call / Text",
    modalLinkedinSub: "Connect directly",
    // Timeline Translations
    timelineTitle: "Professional Trajectory",
    timelineBadge: "EXPERIENCE & EDUCATION",
    // CV DATA
    cvRole1: "Operations & Customer Excellence Manager",
    cvCompany1: "Exoticca • Travel Tech Scale-up",
    cvDate1: "Jan 2025 - Present",
    cvDesc1: "Strategic focus on maximizing Customer Lifetime Value (LTV). Business Owner of the Global Provider Platform (100+ partners), enabling scale without headcount growth. Driving the NPS and CRM strategy to increase repetition and loyalty.",
    
    cvRole2: "Operations Analyst - Business Excellence",
    cvCompany2: "Exoticca • Travel Tech Scale-up",
    cvDate2: "May 2022 - Jan 2025",
    cvDesc2: "Launched the LATAM market from scratch. Transformed partner management by deploying the digital 'Global Providers Platform'. Optimized flight purchasing (~€900k savings) and bridged the gap between Product and Finance.",
    
    cvRole3: "Senior Audit Associate",
    cvCompany3: "PwC (PricewaterhouseCoopers)",
    cvDate3: "Sep 2019 - May 2022",
    cvDesc3: "Built the foundation of financial rigour. Conducted complex audits for multinational clients, analyzing operational risks and validating financial health. Learned to dissect business models and identify value leakage.",

    cvRole4: "MsC in Financial Management",
    cvCompany4: "Barcelona School of Management",
    cvDate4: "2018 - 2019",
    cvDesc4: "Specialized in financial markets, asset valuation, and corporate finance. Developed strong analytical rigour applied to business strategy.",

    cvRole5: "BSc Int. Business Economics",
    cvCompany5: "Universitat Pompeu Fabra (UPF)",
    cvDate5: "2014 - 2018",
    cvDesc5: "Focused on Macroeconomics and Strategic Management. Graduated with honors in Data Analysis projects.",

    cvRole6: "Data Scientist Professional Certificate",
    cvCompany6: "IBM",
    cvDate6: "Mid 2025",
    cvDesc6: "Deep dive into Data Science methodologies, Python, SQL, and Data Visualization. Strengthening technical capabilities to drive data-informed operational decisions."
  },
  es: {
    location: "Barcelona (Híbrido) • Remoto • Disponibilidad para viajar",
    contactBtn: "Contáctame",
    heroBadge: "Estrategia Operativa",
    heroTitle1: "Convierto la ambigüedad en",
    heroTitle2: "ingresos recurrentes.",
    heroDesc1: "Fui pieza clave en la consolidación de Exoticca como líder global en Travel-Tech. Ahora, combino esa",
    heroDescBold1: "Visión Operativa",
    heroDesc2: "con",
    heroDescBold2: "Rigor Financiero",
    heroDesc3: "(ex-PwC) para construir",
    heroDescBold3: "motores escalables",
    heroDesc4: "que transforman el caos en crecimiento predecible.",
    cvBtn: "CV Interactivo",
    githubBtn: "Portafolio Código",
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
    storyTime: "Contexto real:",
    storyText: "Vi al equipo de Operaciones luchando para gestionar reservas con +100 partners globales usando emails y excels dispersos. No era un problema de personas; era un fallo del sistema. Asumí esa ambigüedad y lideré la Plataforma de Proveedores, convirtiendo el caos operativo en un ecosistema digital optimizado.",
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
    projectsTitle: "Liderazgo de Proyectos Operativos",
    projectsBadge: "DESTACADOS (6 de 20+)",
    project1Title: "Arquitectura de Pagos",
    project1Desc: "Reestructuré el ecosistema de pagos (e-commerce), diversificando el riesgo de 1 a 5+ proveedores. Reduje costes y aumenté la tasa de cobro mediante orquestación interna.",
    project1Tags: ["FinOps", "Riesgo", "Eficiencia"],
    project2Title: "Plataforma de Proveedores",
    project2Desc: "Product Owner del sistema de gestión de reservas para +100 partners globales. Permití gestionar reservas a escala masiva sin crecimiento lineal de plantilla.",
    project2Tags: ["Product Owner", "Escalado", "B2B"],
    project3Title: "Modelo de Retención IA",
    project3Desc: "Aproveché la IA para crear un modelo de identificación temprana de clientes insatisfechos, activando acciones correctivas automáticas para proteger el LTV.",
    project3Tags: ["AI Ops", "Retención", "LTV"],
    project4Title: "Previsión y Staffing",
    project4Desc: "Construí protocolos de previsión y contratación para equipos operativos de +30 personas, alineando perfectamente la capacidad con la demanda proyectada.",
    project4Tags: ["Management", "Planificación", "HR Ops"],
    project5Title: "GTM y Ventas Anticipadas",
    project5Desc: "Definí protocolos para ventas a +1 año vista y lideré iniciativas GTM como el lanzamiento B2B en LATAM, uniendo Producto y Marketing.",
    project5Tags: ["Estrategia", "GTM", "Growth"],
    project6Title: "Ecosistema NPS",
    project6Desc: "Redefiní el ciclo de feedback (encuestas digitales, flujos CRM, integraciones), vinculando el rendimiento de satisfacción directamente al Lifetime Value.",
    project6Tags: ["Estrategia CX", "Data", "CRM"],
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
    finalCtaTitle: "¿Interesado en mi perfil?",
    finalCtaDesc: "Conectemos y hablemos sobre cómo puedo aportar a tu equipo.",
    finalCtaBtn: "Conectemos",
    modalTitle: "Iniciar Contacto",
    modalSubtitle: "Elige tu canal preferido.",
    modalEmail: "Enviar Email",
    modalCall: "Llamar / WhatsApp",
    modalLinkedinSub: "Conectar en LinkedIn",
    // Timeline Translations
    timelineTitle: "Trayectoria Profesional",
    timelineBadge: "EXPERIENCIA Y FORMACIÓN",
    cvRole1: "Operations & Customer Excellence Manager",
    cvCompany1: "Exoticca • Travel Tech Scale-up",
    cvDate1: "Ene 2025 - Actualidad",
    cvDesc1: "Foco estratégico en maximizar el LTV del cliente. Business Owner de la Plataforma Global de Proveedores (+100 partners), permitiendo el escalado sin aumentar headcount. Dirijo la estrategia de NPS y CRM para impulsar la repetición y lealtad.",
    
    cvRole2: "Operations Analyst - Business Excellence",
    cvCompany2: "Exoticca • Travel Tech Scale-up",
    cvDate2: "May 2022 - Ene 2025",
    cvDesc2: "Lancé el mercado LATAM desde cero. Transformé la gestión de partners manual en el ecosistema digital 'Global Providers Platform'. Optimicé la compra de vuelos (~900k€ ahorro) y unifiqué Producto con Finanzas.",
    
    cvRole3: "Senior Audit Associate",
    cvCompany3: "PwC (PricewaterhouseCoopers)",
    cvDate3: "Sep 2019 - May 2022",
    cvDesc3: "Construí los cimientos del rigor financiero. Realicé auditorías complejas para clientes multinacionales, analizando riesgos operativos y validando la salud financiera. Aprendí a diseccionar modelos de negocio.",

    cvRole4: "MsC in Financial Management",
    cvCompany4: "Barcelona School of Management",
    cvDate4: "2018 - 2019",
    cvDesc4: "Especialización en mercados financieros, valoración de activos y finanzas corporativas. Desarrollo de rigor analítico aplicado a la estrategia empresarial.",

    cvRole5: "BSc Int. Business Economics",
    cvCompany5: "Universidad Pompeu Fabra (UPF)",
    cvDate5: "2014 - 2018",
    cvDesc5: "Enfoque en Macroeconomía y Dirección Estratégica. Graduado con honores en proyectos de Análisis de Datos.",

    cvRole6: "Data Scientist Professional Certificate",
    cvCompany6: "IBM",
    cvDate6: "Mid 2025",
    cvDesc6: "Profundización en Ciencia de Datos, Python, SQL y Visualización. Refuerzo de capacidades técnicas para impulsar decisiones operativas basadas en datos."
  }
};

// --- REUSABLE COMPONENTS ---

// New: Reveal Animation Wrapper
const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const GlassPanel = ({ children, className = "", onClick, href, target, style }) => {
  const baseClasses = `
    backdrop-blur-xl bg-white/65 
    border border-white/40 
    shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03),inset_0_0_0_1px_rgba(255,255,255,0.5)]
    transition-all duration-300
  `;
  
  if (href) {
    return (
      <a href={href} target={target} className={`${baseClasses} ${className}`} onClick={onClick} style={style}>
        {children}
      </a>
    );
  }
  
  return (
    <div className={`${baseClasses} ${className}`} onClick={onClick} style={style}>
      {children}
    </div>
  );
};

const MetricCard = ({ value, label, desc }) => (
  <div className="group relative p-6 rounded-2xl bg-white/50 border border-white/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/85 hover:shadow-lg hover:border-white/90 overflow-hidden h-full">
    <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-zinc-200"></div>
    <div className="relative">
      <div className="text-4xl font-bold text-zinc-900 mb-1">{value}</div>
      <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-3">{label}</div>
      <p className="text-sm text-zinc-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ProjectCard = ({ title, desc, tags, icon: Icon, href }) => (
  <GlassPanel className="p-5 rounded-2xl h-full flex flex-col group hover:bg-white/80 transition-all">
    <div className="flex justify-between items-start mb-3">
      <div className="p-2.5 bg-zinc-100 rounded-xl group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
        <Icon className="w-5 h-5" />
      </div>
      {href && (
        <a href={href} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
          <Github className="w-5 h-5" />
        </a>
      )}
    </div>
    <h3 className="text-base font-bold text-zinc-900 mb-2">{title}</h3>
    <p className="text-xs text-zinc-600 mb-4 flex-grow leading-relaxed">
      {desc}
    </p>
    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100">
      {tags.map((tag, i) => (
        <span key={i} className="text-[9px] font-mono uppercase font-bold text-zinc-500 bg-zinc-100 px-2 py-1 rounded-md">
          {tag}
        </span>
      ))}
    </div>
  </GlassPanel>
);

const TechBadge = ({ icon: Icon, label }) => (
  <GlassPanel className="px-5 py-3 rounded-full flex items-center gap-3">
    <Icon className="w-4 h-4 text-zinc-700" strokeWidth={2} />
    <span className="text-sm font-medium text-zinc-700">{label}</span>
  </GlassPanel>
);

// --- GANTT-STYLE TIMELINE COMPONENT (NON-LINEAR) ---
const HorizontalTimeline = ({ data, activeId, setActiveId }) => {
  // Config: 2014-2021 takes 25%, 2021-2026 takes 75%
  // Adjusted to ensure "MSc" section has visibility and recent roles are prominent
  const pivotYear = 2021;
  const pivotPercent = 25; // Increased from 15 to 25 to show MSc better
  const startYear = 2014;
  const endYear = 2026;

  // Non-linear mapping function
  const getNonLinearPosition = (year) => {
    if (year <= pivotYear) {
      // Map 2014-2021 to 0-25%
      return ((year - startYear) / (pivotYear - startYear)) * pivotPercent;
    } else {
      // Map 2021-2026 to 25-100%
      return pivotPercent + ((year - pivotYear) / (endYear - pivotYear)) * (100 - pivotPercent);
    }
  };

  const getWidth = (start, end) => {
    return getNonLinearPosition(end) - getNonLinearPosition(start);
  };

  // Grid Labels to display (aligned with non-linear scale)
  const gridLabels = [2014, 2021, 2022, 2025, 2026];

  return (
    <div className="w-full mb-8 select-none relative pt-6 pb-2">
      {/* Grid Lines & Labels */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {gridLabels.map(year => {
          const leftPos = getNonLinearPosition(year);
          return (
            <div 
              key={year} 
              className="absolute top-0 bottom-0 flex flex-col items-center"
              style={{ left: `${leftPos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="h-full w-px bg-zinc-100"></div>
              <span className="absolute -top-1 text-[10px] font-mono text-zinc-400 bg-white/80 px-1 backdrop-blur-sm">
                {year === 2026 ? 'Now' : year}
              </span>
            </div>
          );
        })}
      </div>

      {/* Tracks Container */}
      <div className="relative h-28 w-full z-10">
        {data.map((item) => {
          const left = getNonLinearPosition(item.start);
          const width = getWidth(item.start, item.end);
          const isEducation = item.type === 'education';
          
          // Education: top, thin. Experience: bottom, thick.
          const positionClass = isEducation 
            ? 'top-4 h-6 text-[9px]' 
            : 'bottom-0 h-16 text-[10px] md:text-xs';
          
          return (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`
                absolute rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 shadow-sm border border-white/50
                ${positionClass}
                ${item.colorClass}
                ${activeId === item.id ? 'z-30 scale-105 shadow-md ring-2 ring-white ring-opacity-50' : 'z-10 hover:opacity-100 opacity-90 hover:scale-[1.02]'}
              `}
              style={{ 
                left: `${left}%`, 
                width: `${width}%`,
              }}
            >
              {/* Overlap Indicator */}
              {item.isOverlapping && (
                 <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full animate-pulse border border-white" title="Overlapping Period"></div>
              )}

              <span className={`font-bold uppercase tracking-wider text-white truncate px-1 transition-opacity ${width < 3 ? 'opacity-0' : 'opacity-100'}`}>
                {item.shortLabel}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Legend - Updated to Icons instead of confusing color dots */}
      <div className="flex justify-center gap-8 mt-4 text-[10px] text-zinc-400 font-mono uppercase tracking-widest">
         <div className="flex items-center gap-2">
            <GraduationCap className="w-3 h-3 text-zinc-500" /> Education
         </div>
         <div className="flex items-center gap-2">
            <Briefcase className="w-3 h-3 text-zinc-900" /> Experience
         </div>
      </div>
    </div>
  );
};

const TimelineDetailCard = ({ item }) => (
  <GlassPanel className="p-8 rounded-3xl animate-[fadeIn_0.4s_ease-out]">
    <div className="flex flex-col md:flex-row gap-6 items-start">
      {/* Icon Box */}
      <div className={`w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-white shadow-xl ${item.iconColor}`}>
        <item.icon className="w-8 h-8" />
      </div>
      
      {/* Content */}
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-900">{item.role}</h3>
            <div className="flex items-center gap-2 text-zinc-500 font-medium text-sm mt-1">
              <Building2 className="w-4 h-4" />
              <span>{item.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-full text-zinc-600 font-mono text-xs font-bold">
            <Calendar className="w-3 h-3" />
            {item.date}
          </div>
        </div>
        
        <div className="h-px w-full bg-zinc-100 my-4"></div>
        
        <p className="text-zinc-600 leading-relaxed text-base md:text-lg font-light">
          {item.description}
        </p>
      </div>
    </div>
  </GlassPanel>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  const [lang, setLang] = useState('en');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Timeline State
  const [activeTimelineId, setActiveTimelineId] = useState(1);

  // Ref for the Ambiguity section to calculate its parallax position
  const ambiguityRef = useRef(null);
  const [ambiguityOffset, setAmbiguityOffset] = useState(0);

  const t = translations[lang];

  // Timeline Data Construction
  const timelineData = [
    { 
      id: 6, // NEW: IBM Data Scientist
      shortLabel: "IBM Data Sci", 
      start: 2025.5, // Mid 2025
      end: 2026.0, 
      type: 'education',
      colorClass: "bg-blue-600", // Standout Blue
      icon: Database,
      iconColor: "bg-blue-700",
      role: t.cvRole6,
      company: t.cvCompany6,
      date: t.cvDate6,
      description: t.cvDesc6
    },
    { 
      id: 5, 
      shortLabel: "BSc", 
      start: 2014.0,
      end: 2018.5,
      type: 'education',
      colorClass: "bg-zinc-300", // Consistent Grey Scale
      icon: GraduationCap,
      iconColor: "bg-zinc-400",
      role: t.cvRole5,
      company: t.cvCompany5,
      date: t.cvDate5,
      description: t.cvDesc5
    },
    { 
      id: 4, 
      shortLabel: "MSc", 
      start: 2018.75, // Sep 2018
      end: 2020.25, // Overlapping PwC
      type: 'education',
      colorClass: "bg-zinc-400", // Consistent Grey Scale
      icon: GraduationCap,
      iconColor: "bg-zinc-500",
      role: t.cvRole4,
      company: t.cvCompany4,
      date: t.cvDate4,
      description: t.cvDesc4,
      isOverlapping: true
    },
    { 
      id: 3, 
      shortLabel: "PwC", 
      start: 2019.75, // Sep 2019
      end: 2022.35, // May 2022
      type: 'experience',
      colorClass: "bg-orange-400", // Brand Color
      icon: BarChart3,
      iconColor: "bg-orange-500",
      role: t.cvRole3,
      company: t.cvCompany3,
      date: t.cvDate3,
      description: t.cvDesc3
    },
    { 
      id: 2, 
      shortLabel: "Analyst", 
      start: 2022.35, // May 2022
      end: 2025.0, // Jan 2025
      type: 'experience',
      colorClass: "bg-black rounded-r-none border-r-0", // Joined Exoticca Look
      group: 'exoticca', 
      icon: Plane,
      iconColor: "bg-zinc-800",
      role: t.cvRole2,
      company: t.cvCompany2,
      date: t.cvDate2,
      description: t.cvDesc2
    },
    { 
      id: 1, 
      shortLabel: "Ops Manager", 
      start: 2025.0, // Jan 2025
      end: 2026.0, // Present
      type: 'experience',
      colorClass: "bg-black rounded-l-none border-l-0", // Joined Exoticca Look
      group: 'exoticca', 
      icon: TrendingUp,
      iconColor: "bg-zinc-900",
      role: t.cvRole1,
      company: t.cvCompany1,
      date: t.cvDate1,
      description: t.cvDesc1
    }
  ];

  const activeTimelineItem = timelineData.find(item => item.id === activeTimelineId);

  // Update Tab Title & Icon dynamically on load
  useEffect(() => {
    document.title = "Edu Casanova | Revenue Architect"; 
    const setFavicon = () => {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/svg+xml';
      link.rel = 'icon';
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

  // Handle Scroll Effects (Background, Progress Bar & Parallax Elements)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Progress Bar Calculation
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scrolled));

      // Parallax Calculation for Ambiguity Section
      if (ambiguityRef.current) {
        const rect = ambiguityRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setAmbiguityOffset((window.innerHeight - rect.top) * 0.05); 
        }
      }
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
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-zinc-900 z-50 transition-all duration-150 ease-out shadow-sm"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Global Background Parallax Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-zinc-50/50">
        <div 
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-white blur-3xl opacity-80"
          style={{ 
            transform: `translate3d(${scrollY * 0.1}px, ${scrollY * 0.15}px, 0)`,
            transition: 'transform 0.1s linear' 
          }}
        />
        <div 
          className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-zinc-200/50 blur-3xl opacity-60"
          style={{ 
            transform: `translate3d(-${scrollY * 0.05}px, ${scrollY * 0.2}px, 0)`,
            transition: 'transform 0.1s linear'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="text-lg font-bold tracking-tight text-zinc-900">
          EDU <span className="text-zinc-400">CASANOVA</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/50 border border-zinc-200 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-wider text-zinc-600 uppercase">
              {t.location}
            </span>
          </div>

          <button 
            onClick={() => setLang(prev => prev === 'en' ? 'es' : 'en')}
            className="bg-white hover:bg-zinc-50 text-zinc-800 px-3 py-1.5 rounded-lg text-lg border border-zinc-200 transition-all shadow-sm hover:shadow flex gap-2 items-center cursor-pointer"
          >
            <span className={`transition-all duration-300 ${lang === 'en' ? 'opacity-100 grayscale-0 scale-110' : 'opacity-40 grayscale scale-90'}`}>🇬🇧</span>
            <span className="text-zinc-300 text-xs select-none">|</span>
            <span className={`transition-all duration-300 ${lang === 'es' ? 'opacity-100 grayscale-0 scale-110' : 'opacity-40 grayscale scale-90'}`}>🇪🇸</span>
          </button>

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
        <RevealOnScroll className="max-w-4xl mx-auto text-center mb-24 mt-12">
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
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {/* Notion Link */}
            <GlassPanel 
              href="https://equal-legume-ef2.notion.site/Edu-Casanova-28de49e6350d806aba98fb45eebd519e" 
              target="_blank"
              className="px-5 py-3 rounded-xl font-medium text-zinc-800 hover:bg-white flex items-center gap-2 group cursor-pointer"
            >
              <FileText className="w-5 h-5 text-zinc-500 group-hover:text-black transition-colors" />
              <span>{t.cvBtn}</span>
            </GlassPanel>

             {/* Github Link */}
             <GlassPanel 
              href="https://github.com/casanovaedu" 
              target="_blank"
              className="px-5 py-3 rounded-xl font-medium text-zinc-800 hover:bg-white flex items-center gap-2 group cursor-pointer"
            >
              <Github className="w-5 h-5 text-zinc-500 group-hover:text-black transition-colors" />
              <span>{t.githubBtn}</span>
            </GlassPanel>
            
            {/* LinkedIn Link */}
            <GlassPanel 
              href="https://linkedin.com/in/edcasanova" 
              target="_blank"
              className="px-5 py-3 rounded-xl font-medium text-zinc-800 hover:bg-white flex items-center gap-2 group cursor-pointer"
            >
              <Linkedin className="w-5 h-5 text-zinc-500 group-hover:text-blue-600 transition-colors" />
              <span>LinkedIn</span>
            </GlassPanel>
          </div>
        </RevealOnScroll>

        {/* ROI Dashboard */}
        <div className="mb-24">
          <RevealOnScroll>
            <div className="flex justify-between items-end mb-8 border-b border-zinc-200 pb-4">
              <h2 className="text-xl font-semibold text-zinc-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-zinc-500" />
                <span>{t.metricsTitle}</span>
              </h2>
              <span className="text-xs text-zinc-400 font-mono">{t.metricsBadge}</span>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <RevealOnScroll delay={100}><MetricCard value="€8M" label={t.m1Title} desc={t.m1Desc} /></RevealOnScroll>
            <RevealOnScroll delay={200}><MetricCard value="€2.5M" label={t.m2Title} desc={t.m2Desc} /></RevealOnScroll>
            <RevealOnScroll delay={300}><MetricCard value="25%" label={t.m3Title} desc={t.m3Desc} /></RevealOnScroll>
            <RevealOnScroll delay={400}><MetricCard value="100+" label={t.m4Title} desc={t.m4Desc} /></RevealOnScroll>
            <RevealOnScroll delay={500}><MetricCard value="95%" label={t.m5Title} desc={t.m5Desc} /></RevealOnScroll>
            <RevealOnScroll delay={600}><MetricCard value="40%" label={t.m6Title} desc={t.m6Desc} /></RevealOnScroll>
          </div>
        </div>

        {/* NEW: VISUAL HORIZONTAL TIMELINE SECTION */}
        <div className="mb-24">
          <RevealOnScroll>
            <div className="flex justify-between items-end mb-8 border-b border-zinc-200 pb-4">
              <h2 className="text-xl font-semibold text-zinc-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-zinc-500" />
                <span>{t.timelineTitle}</span>
              </h2>
              <span className="text-xs text-zinc-400 font-mono">{t.timelineBadge}</span>
            </div>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto">
            <RevealOnScroll delay={100}>
              <HorizontalTimeline 
                data={timelineData} 
                activeId={activeTimelineId} 
                setActiveId={setActiveTimelineId} 
              />
            </RevealOnScroll>
            
            {/* Detail View for Selected Item */}
            <RevealOnScroll delay={200}>
               {activeTimelineItem && (
                 <div key={activeTimelineItem.id}> 
                    <TimelineDetailCard item={activeTimelineItem} />
                 </div>
               )}
            </RevealOnScroll>
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <div className="mb-24">
          <RevealOnScroll>
            <div className="flex justify-between items-end mb-8 border-b border-zinc-200 pb-4">
              <h2 className="text-xl font-semibold text-zinc-900 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-zinc-500" />
                <span>{t.projectsTitle}</span>
              </h2>
              <span className="text-xs text-zinc-400 font-mono">{t.projectsBadge}</span>
            </div>
          </RevealOnScroll>
          
          {/* Updated grid to 3 columns for density */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <RevealOnScroll delay={100}>
              <ProjectCard 
                title={t.project1Title} 
                desc={t.project1Desc} 
                tags={t.project1Tags}
                icon={CreditCard}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <ProjectCard 
                title={t.project2Title} 
                desc={t.project2Desc} 
                tags={t.project2Tags}
                icon={Network}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <ProjectCard 
                title={t.project3Title} 
                desc={t.project3Desc} 
                tags={t.project3Tags}
                icon={Bot}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <ProjectCard 
                title={t.project4Title} 
                desc={t.project4Desc} 
                tags={t.project4Tags}
                icon={LineChart}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={500}>
              <ProjectCard 
                title={t.project5Title} 
                desc={t.project5Desc} 
                tags={t.project5Tags}
                icon={Rocket}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={600}>
              <ProjectCard 
                title={t.project6Title} 
                desc={t.project6Desc} 
                tags={t.project6Tags}
                icon={Heart}
              />
            </RevealOnScroll>
          </div>
        </div>

        {/* Ambiguity Section with Parallax Effect */}
        <div ref={ambiguityRef} className="grid md:grid-cols-2 gap-12 mb-24 items-center">
          
          {/* This panel moves slightly (parallax) based on scroll position */}
          <RevealOnScroll>
            <GlassPanel 
              className="p-8 rounded-3xl relative transition-transform duration-75 ease-out"
              style={{ 
                transform: `translate3d(0, -${ambiguityOffset}px, 0)` // Negative moves it UP slightly as you scroll down
              }}
            >
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
          </RevealOnScroll>

          <div>
            <RevealOnScroll delay={200}>
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
            </RevealOnScroll>
          </div>
        </div>

        {/* Automation Stack */}
        <div className="border-t border-zinc-200 pt-12 mb-24">
          <RevealOnScroll>
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
          </RevealOnScroll>
        </div>

        {/* Final CTA Section */}
        <RevealOnScroll>
          <div className="relative rounded-3xl overflow-hidden p-12 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-white opacity-80 backdrop-blur-md -z-10"></div>
              <div className="absolute inset-0 border border-white/50 rounded-3xl pointer-events-none"></div>
              
              <Rocket className="w-10 h-10 text-zinc-900 mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">{t.finalCtaTitle}</h2>
              <p className="text-xl text-zinc-600 mb-8 max-w-2xl mx-auto font-light">{t.finalCtaDesc}</p>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 inline-flex items-center gap-2"
              >
                {t.finalCtaBtn} <TrendingUp className="w-4 h-4" />
              </button>
          </div>
        </RevealOnScroll>

      </main>

      <footer className="text-center py-12 text-zinc-400 text-xs font-mono">
        <p>ARCHITECTED BY EDU CASANOVA © 2025</p>
      </footer>
      
      {/* Back to Top Button */}
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