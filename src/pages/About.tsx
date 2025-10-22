import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Shield, Zap, Users, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Shield,
      title: t("trustFirst"),
      description: t("trustFirstDesc"),
    },
    {
      icon: Zap,
      title: t("fastReliable"),
      description: t("fastReliableDesc"),
    },
    {
      icon: Users,
      title: t("customerFocused"),
      description: t("customerFocusedDesc"),
    },
    {
      icon: Globe,
      title: t("globalVision"),
      description: t("globalVisionDesc"),
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
              {t("aboutTitle")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("aboutSubtitle")}
            </p>
          </motion.div>

          {/* What is SafeT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">{t("whatIsSafet")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("whatIsSafetText")}
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 mb-16 border border-primary/20"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">{t("whatWeDo")}</h2>
            <p className="text-2xl font-semibold text-center mb-6">
              {t("whatWeDoTitle")}
            </p>
            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("whatWeDoText")}
            </p>
          </motion.div>

          {/* Why We Exist & How We Define */}
          <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">{t("whyWeExist")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("whyWeExistText")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">{t("howWeDefine")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("howWeDefineText")}
              </p>
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 mb-20 border border-primary/20"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">{t("ourMission")}</h2>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("ourMissionText")}
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">{t("ourValues")}</h2>
...
          </div>

          {/* Taglines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <p className="text-lg font-medium text-muted-foreground italic">
              "{t("tagline1")}"
            </p>
            <p className="text-lg font-medium text-muted-foreground italic">
              "{t("tagline3")}"
            </p>
            <p className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("tagline4")}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
