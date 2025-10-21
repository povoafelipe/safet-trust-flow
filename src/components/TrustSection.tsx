import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  { name: "Dock", color: "text-primary" },
  { name: "Pagar.me", color: "text-accent" },
  { name: "Inter", color: "text-primary" },
];

export const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const badges = [
    { icon: Shield, text: t("bacenCompliant") },
    { icon: Lock, text: t("encryptedPayments") },
    { icon: CheckCircle, text: t("verifiedKyc") },
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
            {t("trustTitle")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("trustSubtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-8"
        >
          {badges.map((badge, index) => (
            <div
              key={badge.text}
              className="flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 shadow-sm"
            >
              <badge.icon className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="mb-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted by leading financial institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className={`text-3xl font-bold ${partner.color}`}
              >
                {partner.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
