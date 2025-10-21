import { motion, useScroll, useTransform } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import safetLogo from "@/assets/safet-logo.png";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const words = ["secure", "fast", "transparent", "intelligent", "beautiful"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuroraBackground className="min-h-screen" ref={containerRef}>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.div style={{ y, opacity }} className="max-w-5xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <img src={safetLogo} alt="SafeT" className="h-16 w-auto" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 text-6xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl"
          >
            Trust every{" "}
            <span className="inline-block min-w-[300px] text-left">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                {words[currentWord]}
              </motion.span>
            </span>
            <br />
            transaction
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mb-12 max-w-3xl text-xl text-muted-foreground md:text-2xl"
          >
            The digital escrow infrastructure that keeps payments safe until your deal is done.
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
              Start Integrating
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 border-2 px-8 text-lg font-semibold"
            >
              See How It Works
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};
