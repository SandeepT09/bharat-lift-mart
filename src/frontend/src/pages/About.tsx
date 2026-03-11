import { Link } from "@tanstack/react-router";
import { Award, CheckCircle, Clock, Globe, Users } from "lucide-react";

const whyChooseUs = [
  "ISO certified manufacturing processes",
  "Experienced and certified installation team",
  "24/7 emergency service support",
  "Custom design and engineering solutions",
  "Energy-efficient elevator systems",
  "Competitive pricing with quality guarantee",
  "Timely project completion",
  "After-sales maintenance & AMC services",
];

const statsData = [
  { icon: Award, num: "5+", label: "Years Experience" },
  { icon: Users, num: "500+", label: "Happy Clients" },
  { icon: Clock, num: "1000+", label: "Projects Completed" },
  { icon: Globe, num: "India", label: "Market Coverage" },
];

export default function About() {
  return (
    <main>
      {/* Page Banner */}
      <section
        className="relative h-48 md:h-64 bg-primary flex items-center"
        style={{
          backgroundImage:
            'url("/assets/generated/hero-passenger-lift.dim_1200x600.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/75" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white">
            About Us
          </h1>
          <div className="flex items-center gap-2 mt-2 text-primary-foreground/70 text-sm">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
            <span>/</span>
            <span className="text-accent">About Us</span>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Our Story
              </p>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">
                Welcome to Bharat Lift Mart
              </h2>
              <div className="w-12 h-1 bg-accent mb-5 rounded" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Modern buildings would be incomplete without the mention of
                elevators for the convenience and comfort of people. The demand
                for elevators is spread across varying business sectors that
                help transport people, bulky items and machinery.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This helps save time, effort and is an efficient way of
                transport within buildings. Bharat Lift Mart is a leading
                manufacturer and supplier based in Zirakpur, Punjab. Established
                in 2019, we have grown to become a trusted name in the elevator
                industry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in custom elevator manufacturing, design and
                installation with a focus on safety and quality. Our team of
                trained professionals ensures every project meets the highest
                standards.
              </p>
              <Link
                to="/contact"
                data-ocid="about.primary_button"
                className="inline-block px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/assets/generated/hero-passenger-lift.dim_1200x600.jpg"
                alt="Passenger Lift"
                className="rounded-xl shadow-card h-48 w-full object-cover"
              />
              <img
                src="/assets/generated/hero-hydraulic-lift.dim_1200x600.jpg"
                alt="Hydraulic Lift"
                className="rounded-xl shadow-card h-48 w-full object-cover mt-8"
              />
              <img
                src="/assets/generated/hero-capsule-lift.dim_1200x600.jpg"
                alt="Capsule Lift"
                className="rounded-xl shadow-card h-48 w-full object-cover -mt-8"
              />
              <img
                src="/assets/generated/product-home-lift.dim_400x300.jpg"
                alt="Home Lift"
                className="rounded-xl shadow-card h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="text-center">
                  <Icon className="h-10 w-10 text-accent mx-auto mb-3" />
                  <p className="text-3xl font-display font-bold text-white mb-1">
                    {s.num}
                  </p>
                  <p className="text-primary-foreground/60 text-sm">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Our Edge
            </p>
            <h2 className="text-3xl font-display font-bold text-primary">
              Why Choose Bharat Lift Mart?
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-3 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {whyChooseUs.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-xs"
              >
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
