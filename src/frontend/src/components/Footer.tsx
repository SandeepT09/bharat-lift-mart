import { Link } from "@tanstack/react-router";
import { Heart, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiYoutube } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/logo-transparent.dim_300x80.png"
              alt="Bharat Lift Mart"
              className="h-12 w-auto object-contain mb-4 brightness-200"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted partner for premium elevator solutions. Quality,
              Safety, and Innovation in every lift we build.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <SiFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <SiYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-accent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Products", to: "/products" },
                { label: "Services", to: "/services" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    data-ocid="footer.link"
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    › {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-accent">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Dhakoli, Zirakpur, Punjab, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a
                  href="tel:+916280957780"
                  className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                >
                  +91 62809 57780
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-primary-foreground/60">
          <p>© {year} All Rights Reserved. Bharat Lift Mart</p>
          <p>
            Built with <Heart className="inline h-3 w-3 text-accent" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
