import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    pricing: "Pricing",
    contact: "Contact",
    about: "About",
    getStarted: "Get Started",
    
    // Hero
    heroTitle1: "Trust every",
    heroTitle2: "transaction",
    heroSubtitle: "The digital escrow infrastructure that keeps payments safe until your deal is done.",
    startIntegrating: "Start Integrating",
    seeHowItWorks: "See How It Works",
    
    // Animated words
    secure: "secure",
    fast: "fast",
    transparent: "transparent",
    intelligent: "intelligent",
    beautiful: "beautiful",
    
    // Value Proposition
    valueTitle: "Built for trust, designed for scale",
    valueSubtitle: "SafeT provides the infrastructure to add escrow protection to any transaction",
    escrowTitle: "Escrow-as-a-Service",
    escrowDesc: "Simple API to hold payments until both parties confirm the deal",
    aiTitle: "AI Fraud Detection",
    aiDesc: "Machine learning models analyze transactions in real-time to prevent fraud",
    disputeTitle: "Dispute Mediation",
    disputeDesc: "Expert mediators step in when things go wrong, ensuring fair outcomes",
    
    // Payment Experience
    paymentTitle: "Seamless payment experience",
    paymentSubtitle: "SafeT integrates directly into your checkout flow. Your customers get the same smooth experience, with added protection that builds trust.",
    protectedByDefault: "Protected by default",
    everyTransactionSecured: "Every transaction automatically secured",
    paymentMethod: "PAYMENT METHOD",
    creditCard: "Credit Card",
    pix: "PIX",
    safetEscrow: "SafeT Escrow",
    protectedPayment: "Protected payment",
    paymentProtected: "Payment Protected",
    fundsHeldSecurely: "Funds held securely until delivery confirmed",
    
    // How It Works
    howItWorksTitle: "How it works",
    howItWorksSubtitle: "A simple four-step process that protects everyone",
    step1Title: "Buyer sends payment",
    step1Desc: "Customer pays through SafeT at checkout",
    step2Title: "SafeT holds funds",
    step2Desc: "Money is safely held in escrow",
    step3Title: "Seller delivers",
    step3Desc: "Product or service is delivered as promised",
    step4Title: "SafeT releases payment",
    step4Desc: "Funds transferred to seller after confirmation",
    
    // Integration
    integrationTitle: "Developer-friendly integration",
    integrationSubtitle: "Add escrow protection to your platform in minutes with our simple API",
    getApiAccess: "Get API Access",
    viewDocumentation: "View Documentation",
    
    // Trust
    trustTitle: "Trusted by leading companies",
    trustSubtitle: "SafeT is built on enterprise-grade infrastructure",
    bacenCompliant: "Bacen Compliant",
    encryptedPayments: "Encrypted Payments",
    verifiedKyc: "Verified KYC",
    
    // CTA
    ctaTitle: "Build trust into your business",
    ctaSubtitle: "Join thousands of companies using SafeT to protect their transactions",
    talkToTeam: "Talk to Our Team",
    
    // Pricing
    pricingTitle: "Simple, transparent pricing",
    pricingSubtitle: "Choose the plan that fits your business needs",
    starter: "Starter",
    pro: "Pro",
    enterprise: "Enterprise",
    free: "Free",
    perMonth: "/month",
    custom: "Custom",
    mostPopular: "Most Popular",
    startNow: "Start Now",
    talkToSales: "Talk to Sales",
    upTo: "Up to",
    transactions: "transactions/month",
    unlimited: "Unlimited",
    basicSupport: "Basic support",
    emailSupport: "Email support",
    prioritySupport: "Priority support",
    apiAccess: "API access",
    standardApi: "Standard API access",
    advancedApi: "Advanced API features",
    whiteLabel: "White-label solution",
    insurance: "Transaction insurance",
    mediationSupport: "Mediation support",
    dedicatedAccount: "Dedicated account manager",
    
    // Contact
    contactTitle: "Get in touch",
    contactSubtitle: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    messageSent: "Message sent successfully!",
    location: "São Paulo, Brazil",
    
    // About
    aboutTitle: "About SafeT",
    aboutMission: "Our Mission",
    aboutMissionText: "To make every online transaction trustworthy.",
    aboutStory: "Our Story",
    aboutStoryText: "SafeT was founded with a simple belief: online commerce should be as safe as in-person transactions. We built a digital escrow infrastructure that protects both buyers and sellers, creating trust in every transaction.",
  },
  pt: {
    // Navigation
    home: "Início",
    pricing: "Preços",
    contact: "Contato",
    about: "Sobre",
    getStarted: "Começar",
    
    // Hero
    heroTitle1: "Confie em cada",
    heroTitle2: "transação",
    heroSubtitle: "A infraestrutura de escrow digital que mantém pagamentos seguros até que o negócio seja concluído.",
    startIntegrating: "Começar Integração",
    seeHowItWorks: "Veja Como Funciona",
    
    // Animated words
    secure: "segura",
    fast: "rápida",
    transparent: "transparente",
    intelligent: "inteligente",
    beautiful: "bonita",
    
    // Value Proposition
    valueTitle: "Construído para confiança, projetado para escala",
    valueSubtitle: "SafeT fornece a infraestrutura para adicionar proteção de escrow a qualquer transação",
    escrowTitle: "Escrow como Serviço",
    escrowDesc: "API simples para reter pagamentos até que ambas as partes confirmem o negócio",
    aiTitle: "Detecção de Fraude por IA",
    aiDesc: "Modelos de machine learning analisam transações em tempo real para prevenir fraudes",
    disputeTitle: "Mediação de Disputas",
    disputeDesc: "Mediadores especializados intervêm quando algo dá errado, garantindo resultados justos",
    
    // Payment Experience
    paymentTitle: "Experiência de pagamento perfeita",
    paymentSubtitle: "SafeT se integra diretamente ao seu fluxo de checkout. Seus clientes têm a mesma experiência suave, com proteção adicional que gera confiança.",
    protectedByDefault: "Protegido por padrão",
    everyTransactionSecured: "Toda transação automaticamente segura",
    paymentMethod: "MÉTODO DE PAGAMENTO",
    creditCard: "Cartão de Crédito",
    pix: "PIX",
    safetEscrow: "Escrow SafeT",
    protectedPayment: "Pagamento protegido",
    paymentProtected: "Pagamento Protegido",
    fundsHeldSecurely: "Fundos mantidos em segurança até confirmação da entrega",
    
    // How It Works
    howItWorksTitle: "Como funciona",
    howItWorksSubtitle: "Um processo simples de quatro etapas que protege todos",
    step1Title: "Comprador envia pagamento",
    step1Desc: "Cliente paga através do SafeT no checkout",
    step2Title: "SafeT retém fundos",
    step2Desc: "Dinheiro é mantido com segurança em escrow",
    step3Title: "Vendedor entrega",
    step3Desc: "Produto ou serviço é entregue como prometido",
    step4Title: "SafeT libera pagamento",
    step4Desc: "Fundos transferidos ao vendedor após confirmação",
    
    // Integration
    integrationTitle: "Integração amigável para desenvolvedores",
    integrationSubtitle: "Adicione proteção de escrow à sua plataforma em minutos com nossa API simples",
    getApiAccess: "Obter Acesso à API",
    viewDocumentation: "Ver Documentação",
    
    // Trust
    trustTitle: "Confiado por empresas líderes",
    trustSubtitle: "SafeT é construído sobre infraestrutura de nível empresarial",
    bacenCompliant: "Conforme Bacen",
    encryptedPayments: "Pagamentos Criptografados",
    verifiedKyc: "KYC Verificado",
    
    // CTA
    ctaTitle: "Construa confiança em seu negócio",
    ctaSubtitle: "Junte-se a milhares de empresas usando SafeT para proteger suas transações",
    talkToTeam: "Falar com Nossa Equipe",
    
    // Pricing
    pricingTitle: "Preços simples e transparentes",
    pricingSubtitle: "Escolha o plano que se adapta às necessidades do seu negócio",
    starter: "Iniciante",
    pro: "Pro",
    enterprise: "Enterprise",
    free: "Grátis",
    perMonth: "/mês",
    custom: "Personalizado",
    mostPopular: "Mais Popular",
    startNow: "Começar Agora",
    talkToSales: "Falar com Vendas",
    upTo: "Até",
    transactions: "transações/mês",
    unlimited: "Ilimitado",
    basicSupport: "Suporte básico",
    emailSupport: "Suporte por email",
    prioritySupport: "Suporte prioritário",
    apiAccess: "Acesso à API",
    standardApi: "Acesso padrão à API",
    advancedApi: "Recursos avançados de API",
    whiteLabel: "Solução white-label",
    insurance: "Seguro de transação",
    mediationSupport: "Suporte de mediação",
    dedicatedAccount: "Gerente de conta dedicado",
    
    // Contact
    contactTitle: "Entre em contato",
    contactSubtitle: "Adoraríamos ouvir você. Envie-nos uma mensagem e responderemos o mais rápido possível.",
    name: "Nome",
    email: "Email",
    message: "Mensagem",
    sendMessage: "Enviar Mensagem",
    messageSent: "Mensagem enviada com sucesso!",
    location: "São Paulo, Brasil",
    
    // About
    aboutTitle: "Sobre o SafeT",
    aboutMission: "Nossa Missão",
    aboutMissionText: "Tornar toda transação online confiável.",
    aboutStory: "Nossa História",
    aboutStoryText: "SafeT foi fundado com uma crença simples: o comércio online deve ser tão seguro quanto transações presenciais. Construímos uma infraestrutura de escrow digital que protege tanto compradores quanto vendedores, criando confiança em cada transação.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
