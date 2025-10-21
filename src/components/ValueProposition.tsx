import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Brain, Scale } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Escrow-as-a-Service",
    description: "Secure payment holding infrastructure that releases funds only when both parties confirm. Built for marketplaces, freelance platforms, and peer-to-peer commerce.",
  },
  {
    icon: Brain,
    title: "AI Fraud Detection",
    description: "Machine learning algorithms analyze transactions in real-time, identifying suspicious patterns and protecting both buyers and sellers from fraud.",
  },
  {
    icon: Scale,
    title: "Dispute Mediation",
    description: "Automated resolution system with human oversight. Quick, fair settlements that keep your business moving and your users satisfied.",
  },
];

export const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Built for trust at scale
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            The complete infrastructure to secure transactions between strangers
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
