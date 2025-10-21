import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals and small sellers",
      features: [
        "Up to 10 transactions/month",
        "Basic escrow protection",
        "Email support",
        "Standard processing time",
        "1.5% transaction fee",
      ],
      cta: "Start Now",
      popular: false,
    },
    {
      name: "Pro",
      price: "R$ 49",
      period: "/month",
      description: "Ideal for small businesses and growing teams",
      features: [
        "Unlimited transactions",
        "Advanced escrow protection",
        "Priority support",
        "API access",
        "Fast processing",
        "1.2% transaction fee",
        "Fraud detection AI",
        "Custom branding",
      ],
      cta: "Start Now",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For B2B partners and large organizations",
      features: [
        "Everything in Pro",
        "White-label solution",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integration",
        "Negotiable fees",
        "Insurance coverage",
        "Mediation services",
      ],
      cta: "Talk to Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that best fits your business needs. All plans include basic escrow protection.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-primary/5 border-2 border-primary shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
                    : "bg-card border border-border"
                } hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                </div>

                <Button
                  className={`w-full mb-6 ${
                    plan.popular
                      ? ""
                      : "variant-outline"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground">
              All plans include basic fraud protection and secure payment processing.
              <br />
              Custom plans available for high-volume businesses.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
