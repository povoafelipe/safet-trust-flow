import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Lock, Package, CheckCircle2, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const steps = [
    {
      icon: DollarSign,
      title: t("step1Title"),
      description: t("step1Desc"),
    },
    {
      icon: Lock,
      title: t("step2Title"),
      description: t("step2Desc"),
    },
    {
      icon: Package,
      title: t("step3Title"),
      description: t("step3Desc"),
    },
    {
      icon: CheckCircle2,
      title: t("step4Title"),
      description: t("step4Desc"),
    },
  ];

  return (
    <section ref={ref} className="bg-background py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            {t("howItWorksTitle")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("howItWorksSubtitle")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent md:block" />
          
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-6 flex h-32 w-32 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-accent shadow-lg">
                  <step.icon className="h-12 w-12 text-primary-foreground" />
                </div>
                
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute right-0 top-16 hidden -translate-y-1/2 translate-x-1/2 text-primary md:block" />
                )}
                
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
