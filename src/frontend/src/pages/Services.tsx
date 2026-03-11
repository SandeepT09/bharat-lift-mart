import { Link } from "@tanstack/react-router";
import { FileCheck, PenTool, Phone, Settings, Wrench, Zap } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Lift AMC Service",
    desc: "Comprehensive Annual Maintenance Contracts to keep your elevators running smoothly all year round. Regular inspections, lubrication, adjustments, and emergency support included.",
    features: [
      "Monthly inspections",
      "24/7 emergency support",
      "Spare parts at discounted rates",
      "Priority response time",
    ],
  },
  {
    icon: Wrench,
    title: "Lift Installation Service",
    desc: "Professional installation of all types of elevators with certified engineers. We ensure compliance with all safety standards and local regulations.",
    features: [
      "Site survey and planning",
      "Certified installation team",
      "Safety compliance",
      "Handover and training",
    ],
  },
  {
    icon: Settings,
    title: "Lift Maintenance & Repair",
    desc: "Expert maintenance and repair services for all brands and models of elevators. Quick turnaround and genuine spare parts.",
    features: [
      "All brands serviced",
      "Genuine spare parts",
      "Quick turnaround",
      "Preventive maintenance",
    ],
  },
  {
    icon: Zap,
    title: "Lift Upgrades & Modernization",
    desc: "Upgrade your old elevator with modern technology for better performance, energy efficiency, and aesthetics.",
    features: [
      "Control system upgrades",
      "Energy-saving solutions",
      "Cabin refurbishment",
      "Safety enhancements",
    ],
  },
  {
    icon: Phone,
    title: "Lift Emergency Service",
    desc: "Round-the-clock emergency rescue and repair service. Our rapid response team is available 24/7 for any elevator emergency.",
    features: [
      "24/7 availability",
      "30-min response time",
      "Trained rescue team",
      "Immediate breakdown support",
    ],
  },
  {
    icon: PenTool,
    title: "Lift Consultation & Design",
    desc: "Expert consultation and custom design services for new constructions and renovations. We help you choose the right elevator solution.",
    features: [
      "Needs assessment",
      "Space optimization",
      "Custom design",
      "Budget planning",
    ],
  },
];

export default function Services() {
  return (
    <main>
      {/* Banner */}
      <section
        className="relative h-48 md:h-64 bg-primary flex items-center"
        style={{
          backgroundImage:
            'url("/assets/generated/hero-hydraulic-lift.dim_1200x600.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/75" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white">
            Our Services
          </h1>
          <div className="flex items-center gap-2 mt-2 text-primary-foreground/70 text-sm">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
            <span>/</span>
            <span className="text-accent">Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section data-ocid="services.section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              What We Do
            </p>
            <h2 className="text-3xl font-display font-bold text-primary">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-3 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  data-ocid={`service.item.${i + 1}`}
                  className="bg-white rounded-xl border border-border p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Need a Service? Get in Touch!
          </h2>
          <p className="text-primary-foreground/70 mb-6 max-w-lg mx-auto">
            Contact us today for a free consultation and quote for any of our
            services.
          </p>
          <Link
            to="/contact"
            data-ocid="services.primary_button"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </main>
  );
}
