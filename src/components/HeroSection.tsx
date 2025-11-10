import { motion, AnimatePresence } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import safetLogo from "@/assets/safet-logo-icon.png";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();
  const words = ["secure", "fast", "transparent", "intelligent"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuroraBackground className="min-h-screen">
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <img src={safetLogo} alt="SafeT" className="h-16 w-auto" />
          </motion.div>

          <h1 className="mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.15]">
            <div className="text-center">
              <span className="inline">
                {t("heroTitle1")}{" "}
                <span
                  className="inline-block relative align-baseline"
                  style={{ paddingBottom: "0.05em" }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={currentWord}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                      style={{
                        display: "inline-block",
                        lineHeight: "1.2",
                        paddingBottom: "0.1em",
                      }}
                    >
                      {t(words[currentWord])}
                    </motion.span>
                  </AnimatePresence>
                </span>
              {t("heroTitle2").trim() && ` ${t("heroTitle2")}`}
              </span>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mb-12 max-w-3xl text-xl text-muted-foreground md:text-2xl"
          >
            {t("heroSubtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group h-14 bg-primary px-8 text-lg font-semibold transition-all hover:shadow-[0_0_30px_hsl(220,100%,56%/0.4)]"
            >
              {t("startIntegrating")}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 border-2 px-8 text-lg font-semibold"
            >
              {t("seeHowItWorks")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};
