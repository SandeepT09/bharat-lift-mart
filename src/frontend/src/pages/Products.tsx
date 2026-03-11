import ProductCard from "@/components/ProductCard";
import { Link } from "@tanstack/react-router";

const allProducts = [
  {
    name: "Passenger Lift",
    image: "/assets/generated/hero-passenger-lift.dim_1200x600.jpg",
    desc: "Smooth, safe, and stylish passenger elevators for commercial and residential buildings.",
  },
  {
    name: "Hydraulic Lift",
    image: "/assets/generated/hero-hydraulic-lift.dim_1200x600.jpg",
    desc: "Heavy-duty hydraulic lifts for industrial and commercial applications.",
  },
  {
    name: "Capsule Lift",
    image: "/assets/generated/hero-capsule-lift.dim_1200x600.jpg",
    desc: "Panoramic glass capsule elevators that add architectural elegance to any building.",
  },
  {
    name: "Straight Stair Lift",
    image: "/assets/generated/product-stair-lift.dim_400x300.jpg",
    desc: "Safe and reliable stair lifts for straight staircases.",
  },
  {
    name: "Curved Stair Lift",
    image: "/assets/generated/product-stair-lift.dim_400x300.jpg",
    desc: "Custom-fitted stair lifts designed for curved and spiral staircases.",
  },
  {
    name: "Platform Stair Lift",
    image: "/assets/generated/product-stair-lift.dim_400x300.jpg",
    desc: "Versatile platform lifts for accessibility on any staircase.",
  },
  {
    name: "Hospital Lift",
    image: "/assets/generated/product-hospital-lift.dim_400x300.jpg",
    desc: "Wide-door hospital elevators designed for stretchers and medical equipment.",
  },
  {
    name: "Goods Lift",
    image: "/assets/generated/product-goods-lift.dim_400x300.jpg",
    desc: "Robust freight elevators for warehouses, factories, and commercial spaces.",
  },
  {
    name: "Home Lift",
    image: "/assets/generated/product-home-lift.dim_400x300.jpg",
    desc: "Compact, elegant home elevators that blend seamlessly with your interior.",
  },
  {
    name: "Moving Walk Escalator",
    image: "/assets/generated/hero-capsule-lift.dim_1200x600.jpg",
    desc: "Smooth and energy-efficient moving walkways and escalators.",
  },
];

export default function Products() {
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
            Our Products
          </h1>
          <div className="flex items-center gap-2 mt-2 text-primary-foreground/70 text-sm">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
            <span>/</span>
            <span className="text-accent">Products</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section data-ocid="products.section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl font-display font-bold text-primary">
              All Products
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-3 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.map((p, i) => (
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
    </main>
  );
}
