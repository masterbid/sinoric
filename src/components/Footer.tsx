import { Phone, MapPin, Mail, Globe, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-primary-foreground/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary font-display font-bold text-2xl">S</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-primary-foreground">
                  SINORIC
                </h3>
                <p className="text-primary-foreground/50 text-xs tracking-widest">
                  GLOBAL RESOURCES LTD
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/60 max-w-md mb-6 leading-relaxed">
              A leading multi-sector company delivering excellence in Oil & Gas,
              Civil Works, Retail, Distribution, and General Contracts across
              Nigeria.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.sinoricglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
              >
                <Globe className="w-5 h-5 text-primary-foreground/60 hover:text-accent" />
              </a>
              <a
                href="https://facebook.com/Sinoric-Global-Resources"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary-foreground/60 hover:text-accent" />
              </a>
              <a
                href="https://instagram.com/Sinoric_Global_Resources"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary-foreground/60 hover:text-accent" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-primary-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg text-primary-foreground mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/60 text-sm">
                  <p>+234 816 308 7191</p>
                  <p>+234 708 290 1388</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-primary-foreground/60 text-sm">
                  info@sinoricglobal.com
                </p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-primary-foreground/60 text-sm">
                  No 2, Benin Sapele Road,
                  <br />
                  Ologbo Benin City, Edo State
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm text-center md:text-left">
            © {currentYear} SINORIC GLOBAL RESOURCES LTD. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-accent text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-accent text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
