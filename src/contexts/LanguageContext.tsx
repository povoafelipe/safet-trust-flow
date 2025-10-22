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
    pricingSubtitle: "Choose the plan that best fits your business needs. All plans include basic escrow protection.",
    starter: "Starter",
    starterDesc: "Perfect for individuals and small sellers",
    pro: "Pro",
    proDesc: "Ideal for small businesses and growing teams",
    enterprise: "Enterprise",
    enterpriseDesc: "For B2B partners and large organizations",
    free: "Free",
    perMonth: "/month",
    custom: "Custom",
    mostPopular: "Most Popular",
    startNow: "Start Now",
    talkToSales: "Talk to Sales",
    upTo10Transactions: "Up to 10 transactions/month",
    basicEscrow: "Basic escrow protection",
    emailSupport: "Email support",
    standardProcessing: "Standard processing time",
    transactionFee15: "1.5% transaction fee",
    unlimitedTransactions: "Unlimited transactions",
    advancedEscrow: "Advanced escrow protection",
    prioritySupport: "Priority support",
    apiAccess: "API access",
    fastProcessing: "Fast processing",
    transactionFee12: "1.2% transaction fee",
    fraudDetectionAi: "Fraud detection AI",
    customBranding: "Custom branding",
    everythingInPro: "Everything in Pro",
    whiteLabelSolution: "White-label solution",
    dedicatedAccountManager: "Dedicated account manager",
    support247: "24/7 priority support",
    customIntegration: "Custom integration",
    negotiableFees: "Negotiable fees",
    insuranceCoverage: "Insurance coverage",
    mediationServices: "Mediation services",
    pricingFooterNote: "All plans include basic fraud protection and secure payment processing. Custom plans available for high-volume businesses.",
    
    // Contact
    contactTitle: "Get in touch",
    contactSubtitle: "Have questions about SafeT? We're here to help build trust into your business.",
    letsTalk: "Let's talk",
    letsTalkDesc: "Whether you're a developer looking to integrate SafeT or a business ready to scale with trust, we're here to help.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "your@email.com",
    message: "Message",
    messagePlaceholder: "Tell us how we can help...",
    sendMessage: "Send Message",
    messageSentTitle: "Message sent!",
    messageSentDesc: "We'll get back to you as soon as possible.",
    locationTitle: "Location",
    location: "São Paulo, Brazil",
    enterpriseSolutions: "Enterprise Solutions",
    enterpriseSolutionsDesc: "Looking for white-label integration or custom pricing? Our team can help design a solution that fits your needs.",
    
    // About
    aboutTitle: "About SafeT",
    aboutSubtitle: "We're building the digital escrow infrastructure that makes every online transaction trustworthy.",
    whatIsSafet: "What SafeT Is",
    whatIsSafetText: "SafeT is a digital escrow infrastructure — a neutral trust layer between buyers and sellers in any online transaction. We don't process the payment — we protect it until the delivery is confirmed. SafeT adds security and transparency on top of any payment method (Pix, credit card, bank transfer, etc.), ensuring the money is only released when both parties have fulfilled their part.",
    whatWeDo: "What We Do",
    whatWeDoTitle: "We make every online payment fair, safe, and transparent.",
    whatWeDoText: "SafeT holds the transaction value in a digital vault, tracks the fulfillment (through logistics or confirmation), and releases the payment once the buyer confirms receipt or the system verifies delivery.",
    whyWeExist: "Why We Exist",
    whyWeExistText: "In a world where digital fraud and mistrust still limit e-commerce, SafeT is building the infrastructure of digital trust — empowering individuals and businesses to transact securely, regardless of platform or payment method.",
    howWeDefine: "How We Define Ourselves",
    howWeDefineText: "SafeT is the trust layer between paying and getting paid. A technology that turns every transaction into a safe one.",
    ourMission: "Our Mission",
    ourMissionText: "To make every online transaction trustworthy by providing a neutral, secure escrow platform that protects both buyers and sellers until the deal is done.",
    ourValues: "Our Values",
    trustFirst: "Trust First",
    trustFirstDesc: "We believe every transaction should be safe and transparent, building confidence in digital commerce.",
    fastReliable: "Fast & Reliable",
    fastReliableDesc: "Our infrastructure ensures quick processing without compromising security or accuracy.",
    customerFocused: "Customer Focused",
    customerFocusedDesc: "From developers to enterprises, we design solutions that put user experience first.",
    globalVision: "Global Vision",
    globalVisionDesc: "Building escrow infrastructure that works across borders, currencies, and industries.",
    tagline1: "Trust between payment and delivery.",
    tagline2: "Confidence as a Service.",
    tagline3: "SafeT — the universal infrastructure of digital trust.",
    tagline4: "Pay with anything. Trust with SafeT.",
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
    pricingSubtitle: "Escolha o plano que melhor se adapta às necessidades do seu negócio. Todos os planos incluem proteção básica de escrow.",
    starter: "Iniciante",
    starterDesc: "Perfeito para indivíduos e pequenos vendedores",
    pro: "Pro",
    proDesc: "Ideal para pequenas empresas e equipes em crescimento",
    enterprise: "Enterprise",
    enterpriseDesc: "Para parceiros B2B e grandes organizações",
    free: "Grátis",
    perMonth: "/mês",
    custom: "Personalizado",
    mostPopular: "Mais Popular",
    startNow: "Começar Agora",
    talkToSales: "Falar com Vendas",
    upTo10Transactions: "Até 10 transações/mês",
    basicEscrow: "Proteção de escrow básica",
    emailSupport: "Suporte por email",
    standardProcessing: "Tempo de processamento padrão",
    transactionFee15: "Taxa de transação de 1,5%",
    unlimitedTransactions: "Transações ilimitadas",
    advancedEscrow: "Proteção de escrow avançada",
    prioritySupport: "Suporte prioritário",
    apiAccess: "Acesso à API",
    fastProcessing: "Processamento rápido",
    transactionFee12: "Taxa de transação de 1,2%",
    fraudDetectionAi: "IA de detecção de fraude",
    customBranding: "Marca personalizada",
    everythingInPro: "Tudo do Pro",
    whiteLabelSolution: "Solução white-label",
    dedicatedAccountManager: "Gerente de conta dedicado",
    support247: "Suporte prioritário 24/7",
    customIntegration: "Integração personalizada",
    negotiableFees: "Taxas negociáveis",
    insuranceCoverage: "Cobertura de seguro",
    mediationServices: "Serviços de mediação",
    pricingFooterNote: "Todos os planos incluem proteção básica contra fraudes e processamento seguro de pagamentos. Planos personalizados disponíveis para empresas de alto volume.",
    
    // Contact
    contactTitle: "Entre em contato",
    contactSubtitle: "Tem dúvidas sobre o SafeT? Estamos aqui para ajudar a construir confiança em seu negócio.",
    letsTalk: "Vamos conversar",
    letsTalkDesc: "Seja você um desenvolvedor buscando integrar o SafeT ou uma empresa pronta para escalar com confiança, estamos aqui para ajudar.",
    name: "Nome",
    namePlaceholder: "Seu nome",
    email: "Email",
    emailPlaceholder: "seu@email.com",
    message: "Mensagem",
    messagePlaceholder: "Conte-nos como podemos ajudar...",
    sendMessage: "Enviar Mensagem",
    messageSentTitle: "Mensagem enviada!",
    messageSentDesc: "Retornaremos o mais rápido possível.",
    locationTitle: "Localização",
    location: "São Paulo, Brasil",
    enterpriseSolutions: "Soluções Enterprise",
    enterpriseSolutionsDesc: "Procurando integração white-label ou preços personalizados? Nossa equipe pode ajudar a projetar uma solução que atenda às suas necessidades.",
    
    // About
    aboutTitle: "Sobre o SafeT",
    aboutSubtitle: "Estamos construindo a infraestrutura de escrow digital que torna toda transação online confiável.",
    whatIsSafet: "O que é o SafeT",
    whatIsSafetText: "A SafeT é uma infraestrutura de custódia digital (escrow) que atua como agente neutro de confiança entre compradores e vendedores em transações online. Não processamos o pagamento — nós o protegemos até que a entrega seja confirmada. A SafeT adiciona uma camada de segurança e transparência sobre qualquer meio de pagamento (Pix, cartão, boleto, etc.), garantindo que o dinheiro só seja liberado quando ambas as partes cumprirem suas obrigações.",
    whatWeDo: "O que Fazemos",
    whatWeDoTitle: "Nós garantimos que cada pagamento online seja justo, seguro e transparente.",
    whatWeDoText: "A SafeT segura o valor de uma transação em um cofre digital, monitora o processo (rastreamento, confirmação ou disputa) e só libera o pagamento quando o comprador confirma o recebimento ou o sistema valida a entrega.",
    whyWeExist: "Por que Existimos",
    whyWeExistText: "Em um mundo onde fraudes digitais e desconfiança entre usuários ainda limitam o comércio online, a SafeT surge como a \"infraestrutura da confiança digital\" — permitindo que qualquer pessoa ou empresa transacione com segurança, independentemente da plataforma ou método de pagamento.",
    howWeDefine: "Como nos Definimos",
    howWeDefineText: "A SafeT é uma camada de confiança entre o pagar e o receber. Uma tecnologia que transforma cada transação em um ato seguro.",
    ourMission: "Nossa Missão",
    ourMissionText: "Tornar toda transação online confiável fornecendo uma plataforma de escrow neutra e segura que protege tanto compradores quanto vendedores até que o negócio seja concluído.",
    ourValues: "Nossos Valores",
    trustFirst: "Confiança em Primeiro Lugar",
    trustFirstDesc: "Acreditamos que toda transação deve ser segura e transparente, construindo confiança no comércio digital.",
    fastReliable: "Rápido e Confiável",
    fastReliableDesc: "Nossa infraestrutura garante processamento rápido sem comprometer segurança ou precisão.",
    customerFocused: "Foco no Cliente",
    customerFocusedDesc: "De desenvolvedores a empresas, projetamos soluções que priorizam a experiência do usuário.",
    globalVision: "Visão Global",
    globalVisionDesc: "Construindo infraestrutura de escrow que funciona através de fronteiras, moedas e indústrias.",
    tagline1: "Confiança entre o pagamento e a entrega.",
    tagline2: "Confiança como Serviço.",
    tagline3: "SafeT — a infraestrutura universal de confiança digital.",
    tagline4: "Você paga com Pix, cartão ou boleto. Mas confia com SafeT.",
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
