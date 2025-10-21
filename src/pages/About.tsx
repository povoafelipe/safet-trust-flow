import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Shield, Zap, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust First",
      description: "We believe every transaction should be safe and transparent, building confidence in digital commerce.",
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      description: "Our infrastructure ensures quick processing without compromising security or accuracy.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "From developers to enterprises, we design solutions that put user experience first.",
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "Building escrow infrastructure that works across borders, currencies, and industries.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About SafeT
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're building the digital escrow infrastructure that makes every online transaction trustworthy.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 mb-20 border border-primary/20"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              To make every online transaction trustworthy by providing a neutral, secure escrow platform that protects both buyers and sellers until the deal is done.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">The Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                SafeT was born from a simple observation: despite the growth of e-commerce and digital marketplaces, trust remains the biggest barrier to online transactions.
              </p>
              <p>
                We saw countless buyers hesitant to pay upfront and sellers worried about chargebacks. Traditional escrow services were slow, expensive, and difficult to integrate.
              </p>
              <p>
                So we built SafeT — a modern escrow infrastructure that's as easy to integrate as Stripe, but designed specifically to hold funds safely until both parties confirm the transaction is complete.
              </p>
              <p>
                Today, SafeT powers secure transactions for marketplaces, freelance platforms, and e-commerce businesses across Brazil and beyond. We're just getting started.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
