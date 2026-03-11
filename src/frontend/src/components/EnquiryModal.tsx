import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitEnquiry } from "@/hooks/useQueries";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  productName?: string;
}

export default function EnquiryModal({
  open,
  onClose,
  productName,
}: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    productName
      ? `I am interested in ${productName}. Please provide details.`
      : "",
  );
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

  const handleClose = () => {
    setSuccess(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md" data-ocid="enquiry.modal">
        <DialogHeader>
          <DialogTitle className="text-primary font-display">
            {productName ? `Enquire: ${productName}` : "Send Enquiry"}
          </DialogTitle>
        </DialogHeader>

        {success ? (
          <div
            data-ocid="enquiry.success_state"
            className="flex flex-col items-center gap-4 py-8"
          >
            <CheckCircle className="h-16 w-16 text-green-500" />
            <p className="text-center font-medium text-foreground">
              Thank you! Your enquiry has been submitted successfully.
            </p>
            <Button onClick={handleClose} data-ocid="enquiry.close_button">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="modal-name">Full Name *</Label>
              <Input
                id="modal-name"
                data-ocid="enquiry.input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="modal-email">Email *</Label>
              <Input
                id="modal-email"
                type="email"
                data-ocid="enquiry.input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="modal-phone">Phone *</Label>
              <Input
                id="modal-phone"
                type="tel"
                data-ocid="enquiry.input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="modal-message">Message</Label>
              <Textarea
                id="modal-message"
                data-ocid="enquiry.textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="Your message..."
              />
            </div>
            {isError && (
              <p
                data-ocid="enquiry.error_state"
                className="text-destructive text-sm"
              >
                Something went wrong. Please try again.
              </p>
            )}
            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                data-ocid="enquiry.submit_button"
                disabled={isPending}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                data-ocid="enquiry.cancel_button"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
