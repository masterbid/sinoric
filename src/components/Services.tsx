import { motion } from "framer-motion";
import { Fuel, Settings, Gauge, Wrench, Construction, Zap, TestTube, Shield, Power, Activity, Pencil, Hammer, GitBranch, ScanSearch, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const services = [
  {
    icon: Settings,
    title: "Valves Repair, Calibration, Installation, and Maintenance",
    description:
      "Extensive knowledge and experience in the maintenance and repair of pressure relief valves. Our competitive advantage is attributed to the technical competencies of our personnel who combine training, research, manufacturer instructions, and international regulatory standards to provide 100% reliable repairs and testing.",
    details: [
      "Pressure Relief Valves",
      "Globe Valves Ball Valves",
      "Check Valves",
      "Butterfly Valves",
      "Gate Valves",
      "Actuators and Accessories",
      "Needle Valves",
      "Blind Valves"
    ]
  },
  {
    icon: Fuel,
    title: "Bulk LPG Supply",
    description:
      "We offer bulk LPG supply for industrial and commercial clients. Our bulk LPG solutions cater to a wide range of businesses, including restaurants, hotels, manufacturing plants, and more. We provide efficient and scheduled deliveries, ensuring uninterrupted operations.",
    details: [
      "Commercial Delivery: Efficient and scheduled deliveries for businesses",
      "Maintenance Services: Technicians available for routine maintenance and repairs",
      "Comprehensive services prioritizing safety, sustainability, and convenience"
    ]
  },
  {
    icon: Gauge,
    title: "Calibration",
    description:
      "Using equipment benchmarked to the highest industry standards, our calibration services assure consistent accuracy of instruments critical for the safe and efficient operation of process and control systems. Our service spans regular calibration, process certification, validation, and process verification.",
    details: [
      "Basic Data Measurement Devices",
      "Pressure Gauges, Level Gauges",
      "Pressure Transmitters, Level Transmitters",
      "Temperature Transmitters",
      "Flow Transmitters",
      "Controllers, pH Equipment",
      "Thermometers and Thermos Devices",
      "Magnetic, Positive Displacement, Vortex and Mass Flow Meters",
      "Pressure Relief/Safety Valves",
      "Process Control Equipment",
      "Pumps",
      "Barometer",
      "Torque Wrench"
    ]
  },
  {
    icon: Wrench,
    title: "Pumps & Rotating Equipment Repair",
    description:
      "We specialize in the servicing, repairs, and installations of pumps on-site and off-site. Our pump maintenance solutions span across a wide range of fluid flow technologies for oil & gas, chemical, and manufacturing applications. Our team of knowledgeable and experience-rich technicians is available to responsively go on-site for periodic pump functional checkups, preventative maintenance operations, diagnostic and repair activities.",
    details: [
      "Centrifugal Pumps",
      "Multi-Stage Centrifugal Pumps",
      "Air-Operated Pumps",
      "Chemical Injection Pumps",
      "End Suction Pumps",
      "Self-Priming Pumps",
      "Submersible Pumps"
    ]
  },
  {
    icon: Construction,
    title: "Installation",
    description:
      "At Sinoric Global Resources Limited, we understand that the efficient running of any equipment system as designed by the manufacturer hinges on proper handling and coupling of component parts during installations. To this end, we employ an attention-to-detail approach that ensures strict adherence to OEM installation procedures, giving attention to correct size specifications, the strength of materials, sealing applications, and techniques including all relevant assembly considerations for optima performance of components.",
    details: []
  },
  {
    icon: Zap,
    title: "Electricity and Power",
    description:
      "From procurement and supply of efficient electrical products to systematic installation and round-the-clock quality services, Sinoric Global Resources Limited assures clients of value for money. Thanks to our solution partners and field engineers, we are available to help clients determine the most suitable technology for their application as well as tailor them to their specific setup needs.",
    details: []
  },
  {
    icon: TestTube,
    title: "Pressure Testing: Hydrostatic & Pneumatic",
    description:
      "Sinoric Global Resources Limited performs pressure testing across a range of fluid-flow equipment, both onshore and offshore. We provide innovative and cost-effective solutions for undertaking clients high-pressure test tasks by achieving the highest possible test pressure-to-operating-pressure level. Our services provide clients the opportunity to determine the performance parameters and quality features of equipment under real-life conditions in the safest most efficient way.",
    details: [
      "Pipes",
      "Vessels",
      "Hoses",
      "Fittings",
      "Valves",
      "Instruments",
      "Sensors"
    ]
  },
  {
    icon: Shield,
    title: "Integrated Corrosion Monitoring System",
    description:
      "Independent corrosion monitoring is one of our key capabilities and our professionally-trained teams are renowned for offering industry-leading solutions. We can advise on how corrosion monitoring can fit into the general basis of design and safe operations plans, providing assurance that your assets and processes will be in the best possible position for regular and irregular inspections. Optimization is also a part of our service offering and we can make recommendations on streamlining your processes and cutting out unnecessary or ineffective practices to deliver efficient and cost-saving services.",
    details: []
  },
  {
    icon: Power,
    title: "Commissioning and Decommissioning",
    description:
      "Sinoric has the experience and proven systems to help you cost-effectively decommission projects in ways that are both safe and environmentally responsible, the capability to manage and perform the shutdown and commissioning of an entire field from the reservoir through wellheads, flow lines, process facilities to export pipelines with all our own services, equipment and personnel. Commissioning and decommissioning services including safety checks and inspection to ensure safe, effective, and reliable equipment, process, and system operation, as well as the isolation and removal of redundant equipment where applicable. When it comes to commissioning and decommissioning we give you the assurance that only OEM experts can.",
    details: []
  },
  {
    icon: Activity,
    title: "Instrumentation",
    description:
      "Sinoric Limited provides instrumentation solutions ranging from single-component devices to full plant automation which cuts across various processing instruments and control & and safety systems in the oil and gas sector. Leveraging on our hands-on experience and relationships with Original Equipment Manufacturers, we can meet all your instrument challenges.",
    details: []
  },
  {
    icon: Pencil,
    title: "Engineering Design",
    description:
      "From Scratch, our expert consultants and Professional team are ready to provide our client with all, Civil, structural, and mechanical designs. In addition to the detailing process which includes preparing shop drawings, installation drawings, Nesting Plan, and bill of Material (BOM) using latest software.",
    details: []
  },
  {
    icon: Hammer,
    title: "Steel Fabrication",
    description:
      "Sinoric Global Resources Limited specializes in all forms of steel fabrication.",
    details: [
      "Cutting and preparation",
      "Pre-fabrication",
      "Assembly and Welding",
      "Pipe Laying",
      "Machining"
    ]
  },
  {
    icon: GitBranch,
    title: "Intelligent Pigging/Pipeline Support",
    description:
      "Sinoric Global Resources offers excellent pigging services to cater to our clients' pipelines. From exploration pigging to lines with no pigging/inspection history, we couple gauge plates to foam pigs to carry out this service. Our pigging services also encompass routine and aggressive cleaning using single-module bidi and dual-module mechanical pigs which could be with brush magnet or a combination of the two to achieve a thorough cleaning run.",
    details: []
  },
  {
    icon: ScanSearch,
    title: "Non-Destructive Testing (NDT)",
    description:
      "We provide nondestructive testing (NDT), and materials testing services for a diverse range of industries. We help you ensure the reliability and safety of your products, equipment, or plant assets with our world-class services in nondestructive testing (NDT) and materials testing. Our vast expertise and knowledge in NDT and materials testing means we can select the right techniques and procedures to detect defects and irregularities in your products, equipment, production facilities, or plant assets and provide you with the necessary data to assist you in making informed decisions.",
    details: [
      "Magnetic Particle Inspection / Dye Penetrant Testing / Visual Examination",
      "Ultrasonic Testing covering Thickness measurement and Flaw Detection",
      "Eddy Current Testing / Radiographic Testing",
      "Plant Inspection e.g., Oil and Gas plant",
      "Rig Inspection e.g., Rig Platform, Jack Up Rig Legs, etc.",
      "Pressure Vessel inspection / Storage Tank Vessel Inspection",
      "Pipeline Inspection / Baseline Survey of Vessels and lines services",
      "Baseline thickness measurement and inspection services",
      "Surveillance and inspection services covering Civil, Mechanical, welding, electrical, Instrumentation, Statutory, and vessel inspection",
      "Technical NDT manpower supply for QA/QC services",
      "NDT services/ Digital UT scanning on ASME vessel",
      "Underground Pipeline detection and route mapping"
    ]
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
  const [selectedService, setSelectedService] = useState<number | null>(null);

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
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  
                  <Dialog open={selectedService === index} onOpenChange={(open) => setSelectedService(open ? index : null)}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full text-accent hover:text-accent hover:bg-accent/10"
                      >
                        <Info className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-4">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <DialogTitle className="text-2xl font-display font-bold">
                          {service.title}
                        </DialogTitle>
                        <DialogDescription className="text-base leading-relaxed pt-4">
                          {service.description}
                        </DialogDescription>
                      </DialogHeader>
                      
                      {service.details && service.details.length > 0 && (
                        <div className="mt-6">
                          <h4 className="font-semibold text-foreground mb-3">Key Features & Services:</h4>
                          <ul className="space-y-2">
                            {service.details.map((detail, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <span className="text-accent mr-2 mt-1 flex-shrink-0">✓</span>
                                <span className="text-muted-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="mt-6 pt-6 border-t">
                        <Button asChild className="w-full" variant="accent">
                          <a href="#contact">Get a Quote</a>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
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
