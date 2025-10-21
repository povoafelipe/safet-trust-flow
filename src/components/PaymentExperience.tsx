import { motion } from "framer-motion";
import { CreditCard, Smartphone, Shield, CheckCircle, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

export const PaymentExperience = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  
  const steps = [
    { icon: CreditCard, label: "selectPayment", color: "text-muted-foreground" },
    { icon: Shield, label: "escrowActive", color: "text-primary" },
    { icon: Package, label: "processing", color: "text-accent" },
    { icon: CheckCircle, label: "confirmed", color: "text-green-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-muted py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              {t("paymentTitle")}
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              {t("paymentSubtitle")}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">{t("protectedByDefault")}</h4>
                  <p className="text-sm text-muted-foreground">{t("everyTransactionSecured")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-[280px]">
              {/* iPhone Mockup */}
              <div className="relative overflow-hidden rounded-[2.5rem] border-[12px] border-foreground/90 bg-foreground/10 shadow-2xl">
                <div className="aspect-[9/16] bg-background p-4">
                  {/* Status Bar */}
                  <div className="mb-8 flex items-center justify-between text-xs">
                    <span className="font-medium">9:41</span>
                    <div className="flex gap-1">
                      <div className="h-3 w-4 rounded-sm border border-foreground/30" />
                      <div className="h-3 w-4 rounded-sm border border-foreground/30" />
                      <div className="h-3 w-4 rounded-sm border border-foreground/30" />
                    </div>
                  </div>

                  {/* Checkout Screen */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 text-sm font-semibold text-muted-foreground">{t("paymentMethod")}</h3>
                      
                      <div className="space-y-3">
                        <motion.div 
                          className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                          animate={{ opacity: step === 0 ? 1 : 0.5 }}
                        >
                          <CreditCard className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm">{t("creditCard")}</span>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                          animate={{ opacity: step === 0 ? 1 : 0.5 }}
                        >
                          <Smartphone className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm">{t("pix")}</span>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center gap-3 rounded-lg border-2 border-primary bg-primary/5 p-4 ring-2 ring-primary/20"
                          animate={{ 
                            scale: step > 0 ? 1.02 : 1,
                            borderColor: step > 0 ? "hsl(var(--accent))" : "hsl(var(--primary))"
                          }}
                        >
                          {step === 0 && <Shield className="h-5 w-5 text-primary" />}
                          {step === 1 && <Shield className="h-5 w-5 text-primary animate-pulse" />}
                          {step === 2 && <Package className="h-5 w-5 text-accent animate-bounce" />}
                          {step === 3 && <CheckCircle className="h-5 w-5 text-green-500" />}
                          <div className="flex-1">
                            <span className="text-sm font-semibold text-primary">{t("safetEscrow")}</span>
                            <motion.p 
                              key={step}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xs text-muted-foreground"
                            >
                              {step === 0 && t("protectedPayment")}
                              {step === 1 && t("step2Desc")}
                              {step === 2 && t("step3Desc")}
                              {step === 3 && t("step4Desc")}
                            </motion.p>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    <motion.div 
                      className="rounded-lg bg-accent/10 p-4"
                      animate={{ 
                        opacity: step > 0 ? 1 : 0.7,
                        scale: step > 0 ? 1 : 0.98
                      }}
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-accent" />
                        <span className="text-xs font-semibold text-accent">{t("paymentProtected")}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {t("fundsHeldSecurely")}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
