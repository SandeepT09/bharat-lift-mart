import { Link } from "@tanstack/react-router";
import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

interface ProductCardProps {
  name: string;
  image: string;
  index?: number;
}

export default function ProductCard({
  name,
  image,
  index = 1,
}: ProductCardProps) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <div
        data-ocid={`product.item.${index}`}
        className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
      >
        <div className="relative overflow-hidden h-52">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <h3 className="font-display font-semibold text-foreground text-lg mb-3">
            {name}
          </h3>
          <div className="flex gap-2">
            <button
              type="button"
              data-ocid={`product.primary_button.${index}`}
              onClick={() => setEnquiryOpen(true)}
              className="flex-1 px-3 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-md hover:bg-accent/90 transition-colors"
            >
              Enquiry Now
            </button>
            <Link
              to="/products"
              data-ocid={`product.secondary_button.${index}`}
              className="flex-1 px-3 py-2 bg-primary/5 text-primary text-sm font-medium rounded-md hover:bg-primary hover:text-primary-foreground transition-colors text-center border border-primary/20"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
      <EnquiryModal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        productName={name}
      />
    </>
  );
}
