import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitEnquiry } from "@/hooks/useQueries";
import { Link } from "@tanstack/react-router";
import { CheckCircle, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Our Address",
    value: "Dhakoli, Zirakpur, Punjab, India",
    href: undefined,
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "+91 62809 57780",
    href: "tel:+916280957780",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "info@bharatliftmart.in",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 7:00 PM",
    href: undefined,
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const { mutateAsync, isPending, isError } = useSubmitEnquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync({ name, email, phone, message });
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {}
  };

  return (
    <main>
      {/* Banner */}
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
            Contact Us
          </h1>
          <div className="flex items-center gap-2 mt-2 text-primary-foreground/70 text-sm">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
            <span>/</span>
            <span className="text-accent">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section data-ocid="contact.section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Get In Touch
              </p>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">
                Let's Talk About Your Project
              </h2>
              <div className="w-12 h-1 bg-accent mb-6 rounded" />
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have questions about our products or services? We'd love to hear
                from you. Send us a message and we'll respond as soon as
                possible.
              </p>

              <div className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground text-sm hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="bg-secondary/50 rounded-2xl p-8">
              {success ? (
                <div
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center gap-4 py-12"
                >
                  <CheckCircle className="h-16 w-16 text-green-500" />
                  <h3 className="text-xl font-display font-semibold text-primary">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-center">
                    Thank you for reaching out. We'll be in touch shortly.
                  </p>
                  <Button
                    onClick={() => setSuccess(false)}
                    data-ocid="contact.button"
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-display font-semibold text-primary mb-2">
                    Send a Message
                  </h3>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-name">Full Name *</Label>
                    <Input
                      id="c-name"
                      data-ocid="contact.input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-email">Email *</Label>
                    <Input
                      id="c-email"
                      type="email"
                      data-ocid="contact.input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-phone">Phone *</Label>
                    <Input
                      id="c-phone"
                      type="tel"
                      data-ocid="contact.input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-message">Message</Label>
                    <Textarea
                      id="c-message"
                      data-ocid="contact.textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      placeholder="How can we help you?"
                    />
                  </div>
                  {isError && (
                    <p
                      data-ocid="contact.error_state"
                      className="text-destructive text-sm"
                    >
                      Failed to send. Please try again.
                    </p>
                  )}
                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    disabled={isPending}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      "Send Message"
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
