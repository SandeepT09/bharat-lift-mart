import { MapPin, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-accent" />
          <span>Dhakoli, Zirakpur, Punjab</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-accent" />
          <a
            href="tel:+916280957780"
            className="hover:text-accent transition-colors"
          >
            +91 62809 57780
          </a>
        </div>
      </div>
    </div>
  );
}
