import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import safetLogo from "@/assets/safet-logo-icon.png";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();
  const words = ["secure", "fast", "intelligent", "transparent"];
  const [currentWord, setCurrentWord] = useState(0);
  const isTransparent = words[currentWord] === "transparent";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 4000);
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

          <h1 className="mb-6 text-6xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
            {t("heroTitle1")} {" "}
            {!isTransparent ? (
              <>
                <span className="inline-block whitespace-nowrap min-w-[220px] md:min-w-[300px]">
                  <motion.span
                    key={currentWord}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  >
                    {t(words[currentWord])}
                  </motion.span>
                </span>
                <br />
                {t("heroTitle2")}
              </>
            ) : (
              <>
                <br />
                <motion.span
                  key={`${currentWord}-second-line`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap"
                >
                  {t(words[currentWord])}
                </motion.span>{" "}
                {t("heroTitle2")}
              </>
            )}
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
