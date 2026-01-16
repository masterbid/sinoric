import { motion } from "framer-motion";

const clients = [
  { name: "NPDC", logo: "/clients/npdc-logo.png", alt: "Nigerian Petroleum Development Company" },
  { name: "Julius Berger", logo: "/clients/julius-berger-logo.png", alt: "Julius Berger Nigeria PLC" },
  { name: "Chevron", logo: "/clients/chevron-logo.png", alt: "Chevron Corporation" },
  { name: "NDDC", logo: "/clients/nddc-logo.png", alt: "Niger Delta Development Commission" },
  { name: "LNG Nigeria", logo: "/clients/lng-nigeria-logo.png", alt: "LNG Nigeria Limited" },
  { name: "Shell", logo: "/clients/shell-logo.png", alt: "Shell Petroleum Development Company" },
];

const Clients = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Trusted by Industry <span className="text-gradient-gold">Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We are proud to partner with leading organizations across the oil & gas
            and construction sectors in Nigeria.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center p-6 rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-full h-20 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.alt}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('p');
                    fallback.className = 'font-display font-bold text-foreground text-lg group-hover:text-accent transition-colors';
                    fallback.textContent = client.name;
                    target.parentElement?.appendChild(fallback);
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            And many more valued clients across Nigeria and beyond
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
