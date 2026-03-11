import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const productItems = [
  { label: "Passenger Lift", href: "/products" },
  { label: "Hydraulic Lift", href: "/products" },
  { label: "Capsule Lift", href: "/products" },
  { label: "Straight Stair Lift", href: "/products" },
  { label: "Curved Stair Lift", href: "/products" },
  { label: "Platform Stair Lift", href: "/products" },
  { label: "Hospital Lift", href: "/products" },
  { label: "Goods Lift", href: "/products" },
  { label: "Home Lift", href: "/products" },
  { label: "Moving Walk Escalator", href: "/products" },
];

const serviceItems = [
  { label: "Lift AMC Service", href: "/services" },
  { label: "Lift Installation Service", href: "/services" },
  { label: "Lift Maintenance & Repair", href: "/services" },
  { label: "Lift Upgrades & Modernization", href: "/services" },
  { label: "Lift Emergency Service", href: "/services" },
  { label: "Lift Consultation & Design", href: "/services" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const _productsRef = useRef<HTMLDivElement>(null);
  const _servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  });

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "header-scrolled" : "border-b border-border"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" data-ocid="nav.link">
          <img
            src="/assets/generated/logo-transparent.dim_300x80.png"
            alt="Bharat Lift Mart"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            data-ocid="nav.home.link"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive("/")
                ? "text-accent bg-accent/10"
                : "text-foreground hover:text-accent hover:bg-accent/5"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            data-ocid="nav.about.link"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive("/about")
                ? "text-accent bg-accent/10"
                : "text-foreground hover:text-accent hover:bg-accent/5"
            }`}
          >
            About Us
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              data-ocid="nav.products.toggle"
              className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/products")
                  ? "text-accent bg-accent/10"
                  : "text-foreground hover:text-accent hover:bg-accent/5"
              }`}
            >
              Products <ChevronDown className="h-3 w-3" />
            </button>
            {productsOpen && (
              <div
                data-ocid="nav.products.dropdown_menu"
                className="absolute top-full left-0 bg-white border border-border rounded-lg shadow-card-hover py-2 min-w-[220px] z-50"
              >
                {productItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              data-ocid="nav.services.toggle"
              className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/services")
                  ? "text-accent bg-accent/10"
                  : "text-foreground hover:text-accent hover:bg-accent/5"
              }`}
            >
              Services <ChevronDown className="h-3 w-3" />
            </button>
            {servicesOpen && (
              <div
                data-ocid="nav.services.dropdown_menu"
                className="absolute top-full left-0 bg-white border border-border rounded-lg shadow-card-hover py-2 min-w-[260px] z-50"
              >
                {serviceItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            data-ocid="nav.contact.link"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive("/contact")
                ? "text-accent bg-accent/10"
                : "text-foreground hover:text-accent hover:bg-accent/5"
            }`}
          >
            Contact Us
          </Link>

          <Link
            to="/contact"
            data-ocid="nav.getquote.button"
            className="ml-2 px-5 py-2 bg-accent text-accent-foreground rounded-md text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          data-ocid="nav.mobile.toggle"
          className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border py-4 px-4 space-y-1">
          <Link
            to="/"
            className="block px-4 py-2 text-sm font-medium hover:text-accent"
            data-ocid="nav.mobile.home.link"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-sm font-medium hover:text-accent"
            data-ocid="nav.mobile.about.link"
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="block px-4 py-2 text-sm font-medium hover:text-accent"
            data-ocid="nav.mobile.products.link"
          >
            Products
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-sm font-medium hover:text-accent"
            data-ocid="nav.mobile.services.link"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-sm font-medium hover:text-accent"
            data-ocid="nav.mobile.contact.link"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
