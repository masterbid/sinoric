import { motion } from "framer-motion";
import { Fuel, HardHat, ShoppingBag, Truck, FileText, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Fuel,
    title: "Oil & Gas",
    description:
      "Comprehensive oil and gas solutions including exploration support, equipment supply, and facility maintenance services.",
  },
  {
    icon: HardHat,
    title: "Civil Works",
    description:
      "Expert civil engineering and construction services for infrastructure development, road works, and building projects.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description:
      "Strategic retail operations and management, providing quality products and exceptional customer service.",
  },
  {
    icon: Truck,
    title: "Distributions",
    description:
      "Efficient logistics and distribution network ensuring timely delivery of goods across regions.",
  },
  {
    icon: FileText,
    title: "General Contracts",
    description:
      "Full-spectrum contracting services for government, private sector, and international organizations.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Our Core <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Delivering excellence across multiple industries with professional
            expertise and unwavering commitment to quality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-accent hover:text-gold-dark font-medium transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
