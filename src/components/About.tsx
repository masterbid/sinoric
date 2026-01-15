import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide exceptional services across all our sectors, delivering value through innovation, integrity, and commitment to excellence.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A dedicated team of professionals with extensive experience and expertise in oil & gas, construction, and business management.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "To become the leading multi-sector company in Nigeria, recognized for quality, reliability, and sustainable business practices.",
  },
];

const highlights = [
  "Licensed and certified operations",
  "ISO-compliant processes",
  "Experienced professional team",
  "24/7 customer support",
  "Nationwide coverage",
  "Competitive pricing",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              A Legacy of{" "}
              <span className="text-gradient-gold">Excellence</span> &
              Reliability
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              SINORIC GLOBAL RESOURCES LTD is a dynamic multi-sector company
              headquartered in Benin City, Edo State, Nigeria. We have built our
              reputation on delivering exceptional services and fostering
              long-term partnerships with our clients.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-5 p-6 rounded-2xl bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
