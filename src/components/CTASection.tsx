import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-24 px-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-primary-foreground md:text-6xl">
            Build trust into your business
          </h2>
          
          <p className="mb-12 text-xl text-primary-foreground/90">
            Join thousands of businesses using SafeT to create secure, trustworthy transactions
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg"
              variant="secondary"
              className="group h-14 bg-background px-8 text-lg font-semibold text-primary hover:bg-background/90"
            >
              Get API Access
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="h-14 border-2 border-primary-foreground/30 bg-transparent px-8 text-lg font-semibold text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Talk to Our Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
