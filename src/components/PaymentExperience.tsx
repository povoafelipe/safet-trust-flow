import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Smartphone, Shield } from "lucide-react";

export const PaymentExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const phoneRotate = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -2]);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="bg-muted py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              Seamless payment experience
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              SafeT integrates directly into your checkout flow. Your customers get the same smooth experience, with added protection that builds trust.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Protected by default</h4>
                  <p className="text-sm text-muted-foreground">Every transaction automatically secured</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: phoneY, rotateZ: phoneRotate }}
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
                      <h3 className="mb-2 text-sm font-semibold text-muted-foreground">PAYMENT METHOD</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                          <CreditCard className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm">Credit Card</span>
                        </div>
                        
                        <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                          <Smartphone className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm">PIX</span>
                        </div>
                        
                        <div className="flex items-center gap-3 rounded-lg border-2 border-primary bg-primary/5 p-4 ring-2 ring-primary/20">
                          <Shield className="h-5 w-5 text-primary" />
                          <div className="flex-1">
                            <span className="text-sm font-semibold text-primary">SafeT Escrow</span>
                            <p className="text-xs text-muted-foreground">Protected payment</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-accent/10 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-accent" />
                        <span className="text-xs font-semibold text-accent">Payment Protected</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Funds held securely until delivery confirmed
                      </p>
                    </div>
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
