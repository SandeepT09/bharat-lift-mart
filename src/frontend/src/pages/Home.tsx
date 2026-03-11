import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitEnquiry } from "@/hooks/useQueries";
import { Link } from "@tanstack/react-router";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Factory,
  Globe,
  Loader2,
  Package,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    image: "/assets/generated/hero-passenger-lift.dim_1200x600.jpg",
    title: "Premium Passenger Lifts",
    subtitle: "Quality. Safety. Innovation.",
  },
  {
    image: "/assets/generated/hero-hydraulic-lift.dim_1200x600.jpg",
    title: "Industrial Hydraulic Lifts",
    subtitle: "Quality. Safety. Innovation.",
  },
  {
    image: "/assets/generated/hero-capsule-lift.dim_1200x600.jpg",
    title: "Panoramic Capsule Lifts",
    subtitle: "Quality. Safety. Innovation.",
  },
];

const latestProducts = [
  {
    name: "Passenger Lift",
    image: "/assets/generated/hero-passenger-lift.dim_1200x600.jpg",
  },
  {
    name: "Hydraulic Lift",
    image: "/assets/generated/hero-hydraulic-lift.dim_1200x600.jpg",
  },
  {
    name: "Capsule Lift",
    image: "/assets/generated/hero-capsule-lift.dim_1200x600.jpg",
  },
  {
    name: "Straight Stair Lift",
    image: "/assets/generated/product-stair-lift.dim_400x300.jpg",
  },
  {
    name: "Curved Stair Lift",
    image: "/assets/generated/product-stair-lift.dim_400x300.jpg",
  },
  {
    name: "Platform Stair Lift",
    image: "/assets/generated/product-stair-lift.dim_400x300.jpg",
  },
];

const popularProducts = [
  {
    name: "Hospital Lift",
    image: "/assets/generated/product-hospital-lift.dim_400x300.jpg",
  },
  {
    name: "Goods Lift",
    image: "/assets/generated/product-goods-lift.dim_400x300.jpg",
  },
  {
    name: "Home Lift",
    image: "/assets/generated/product-home-lift.dim_400x300.jpg",
  },
  {
    name: "Moving Walk Escalator",
    image: "/assets/generated/hero-capsule-lift.dim_1200x600.jpg",
  },
];

const stats = [
  {
    icon: Factory,
    label: "Nature of Business",
    value: "Manufacturer, Supplier, Trader and Service Provider",
  },
  { icon: Users, label: "Number of Employees", value: "Upto 20 People" },
  { icon: Calendar, label: "Year of Establishment", value: "2019" },
  { icon: Globe, label: "Market Covered", value: "India" },
];

const visionCards = [
  {
    icon: Package,
    title: "Our Products",
    desc: "Product and Service Offered — Our company is noted for its customized elevator manufacturing, design and installation. We deal in all types of elevators.",
  },
  {
    icon: Shield,
    title: "Why Us?",
    desc: "Our professionals are trained and qualified individuals who focus their expertise on customer safety and well-being for complete customer satisfaction.",
  },
  {
    icon: Star,
    title: "Customer Satisfaction",
    desc: "We have integrated technology and modern equipment to ensure high-quality elevator projects and timely delivery across India.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const { mutateAsync, isPending, isError } = useSubmitEnquiry();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync({ name, email, phone, message });
      setFormSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {}
  };

  return (
    <main>
      {/* Hero Carousel */}
      <section
        data-ocid="hero.section"
        className="relative h-[500px] md:h-[600px] overflow-hidden"
      >
        {heroSlides.map((slide, i) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-800 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-xl">
                  <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <Link
                    to="/contact"
                    data-ocid="hero.primary_button"
                    className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all hover:scale-105"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          type="button"
          data-ocid="hero.pagination_prev"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          data-ocid="hero.pagination_next"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((slide, i) => (
            <button
              type="button"
              key={slide.title}
              onClick={() => setCurrentSlide(i)}
              className={`h-3 rounded-full transition-all ${
                i === currentSlide
                  ? "bg-accent w-8"
                  : "bg-white/60 hover:bg-white w-3"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Latest Products */}
      <section data-ocid="latest-products.section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Our Range
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Latest Products
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-3 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestProducts.map((p, i) => (
              <ProductCard
                key={p.name}
                name={p.name}
                image={p.image}
                index={i + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section
        data-ocid="popular-products.section"
        className="py-16 bg-secondary/50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Best Sellers
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Popular Products
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-3 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((p, i) => (
              <ProductCard
                key={p.name}
                name={p.name}
                image={p.image}
                index={i + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section data-ocid="about.section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/assets/generated/hero-passenger-lift.dim_1200x600.jpg"
                alt="About Bharat Lift Mart"
                className="rounded-2xl shadow-card-hover w-full object-cover h-80"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-display font-bold text-lg shadow-lg">
                Since 2019
              </div>
            </div>
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Welcome to Bharat Lift Mart
              </h2>
              <div className="w-12 h-1 bg-accent mb-5 rounded" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Modern buildings would be incomplete without the mention of
                elevators for the convenience and comfort of people. The demand
                for elevators is spread across varying business sectors that
                help transport people, bulky items and machinery. We specialize
                in custom elevator manufacturing, design and installation with a
                focus on safety and quality.
              </p>
              <Link
                to="/about"
                data-ocid="about.primary_button"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section data-ocid="stats.section" className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              Glimpse of Our Company
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-3 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  data-ocid={`stats.item.${i + 1}`}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
                >
                  <Icon className="h-10 w-10 text-accent mx-auto mb-3" />
                  <p className="text-primary-foreground/60 text-xs uppercase tracking-wide mb-2">
                    {stat.label}
                  </p>
                  <p className="text-primary-foreground font-semibold text-base">
                    {stat.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section data-ocid="vision.section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Our Commitment
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              What Drives Us
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-3 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visionCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  data-ocid={`vision.item.${i + 1}`}
                  className="rounded-xl border border-border p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-primary mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Enquiry */}
      <section data-ocid="enquiry.section" className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Reach Out
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                Quick Enquiry
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-3 rounded" />
            </div>
            <div className="bg-white rounded-2xl shadow-card p-8">
              {formSuccess ? (
                <div
                  data-ocid="enquiry-form.success_state"
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="h-8 w-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <title>Success</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-2">
                    Enquiry Submitted!
                  </h3>
                  <p className="text-muted-foreground">
                    We'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setFormSuccess(false)}
                    className="mt-4"
                    data-ocid="enquiry-form.button"
                  >
                    Submit Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="enq-name">Full Name *</Label>
                      <Input
                        id="enq-name"
                        data-ocid="enquiry-form.input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="enq-email">Email *</Label>
                      <Input
                        id="enq-email"
                        type="email"
                        data-ocid="enquiry-form.input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="enq-phone">Phone *</Label>
                    <Input
                      id="enq-phone"
                      type="tel"
                      data-ocid="enquiry-form.input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="enq-message">Message</Label>
                    <Textarea
                      id="enq-message"
                      data-ocid="enquiry-form.textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  {isError && (
                    <p
                      data-ocid="enquiry-form.error_state"
                      className="text-destructive text-sm"
                    >
                      Failed to submit. Please try again.
                    </p>
                  )}
                  <Button
                    type="submit"
                    data-ocid="enquiry-form.submit_button"
                    disabled={isPending}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                        Submitting...
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
