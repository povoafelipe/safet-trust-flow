import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Code2, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const IntegrationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const codeSnippet = `safet.createEscrow({
  buyer: "John",
  seller: "Maria",
  amount: "R$ 250,00",
  releaseOn: "deliveryConfirmed"
});`;

  return (
    <section ref={ref} className="bg-muted py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Code2 className="h-4 w-4" />
              {t("apiAccess")}
            </div>
            
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              {t("integrationTitle")}
            </h2>
            
            <p className="mb-8 text-lg text-muted-foreground">
              {t("integrationSubtitle")}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-primary">
                {t("getApiAccess")}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                {t("viewDocumentation")}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-xl transition-all hover:border-primary/50">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-muted-foreground">index.js</span>
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
              </div>
              
              <pre className="overflow-x-auto">
                <code className="text-sm text-foreground">
                  {codeSnippet}
                </code>
              </pre>

              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
