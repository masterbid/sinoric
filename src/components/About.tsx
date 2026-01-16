import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "Our vision is to be the choice provider of efficient technology-focused support services and ancillary products in the oil and gas industry, and in general contracts, while ensuring the safety and well-being of our employees, communities, and the environment.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Our mission is to leverage our technical expertise and industry experience to responsibly and ethically explore, and deliver high-quality services to meet the growing demand in the Nigeria oil and gas sector and beyond. We are committed to maximizing the value of our resources and assets while maintaining the highest standards of operational excellence, environmental stewardship, and social responsibility. We aim to continue to set up and provide tailor made services to clients' needs.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "The company is built upon a strong reputation for quality workmanship, unrivaled reliability, and good project management. We provide a wide range of services adapted to suit projects and their contractual requirements. We work closely with our clients to understand their requirements and provide tailor-made solutions that meet their specific needs.",
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
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              SINORIC GLOBAL RESOURCES LTD is a Nigeria-based company, duly registered with the Corporate Affairs Commission, with Registration No.1438060. This registration is under the Companies Allied Matters Decree 1990 of the Federal Republic of Nigeria.
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              We carry out supply and sales of AGO, LPG, products, petroleum haulage, procurement solutions, technical manpower services, electricity and power, and general contracting services to clients operating both in the oil sector and other niches. Our company is dedicated to providing reliable, efficient, and cost-effective services to support the upstream and downstream operations of our clients.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We have a team of experienced professionals who are passionate about providing quality services. We have been privileged to have completed lots of projects awarded to us to the satisfaction of our clients.
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
