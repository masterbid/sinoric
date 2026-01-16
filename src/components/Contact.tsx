import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+234 816 308 7191", "+234 708 290 1388"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@sinoricglobal.com"],
  },
  {
    icon: MapPin,
    title: "Head Office",
    details: ["No 2, Benin Sapele Road,", "Ologbo Benin City, Edo State"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 2PM"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 hero-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Ready to start your next project? Get in touch with our team and
            let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary-foreground mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-primary-foreground/70 text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        placeholder="John Doe"
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+234 XXX XXX XXXX"
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <Input
                      placeholder="e.g., Oil & Gas, Civil Works"
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your project or inquiry..."
                      rows={4}
                      className="bg-secondary border-border resize-none"
                    />
                  </div>
                  <Button variant="accent" size="lg" className="w-full font-semibold">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
