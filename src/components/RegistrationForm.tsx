
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { registrationFormSchema, type RegistrationFormValues } from "@/schemas/registrationSchema";
import { RegistrationFields } from "@/components/registration/RegistrationFields";
import { TermsAndConditions } from "@/components/registration/TermsAndConditions";
import { submitRegistration } from "@/services/registrationService";

interface RegistrationFormProps {
  onClose: () => void;
}

export function RegistrationForm({ onClose }: RegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      fullName: "",
      school: "",
      grade: "",
      motivation: "",
      funIdeas: "",
      termsAccepted: false,
    },
  });

  async function onSubmit(data: RegistrationFormValues) {
    setIsSubmitting(true);
    
    try {
      await submitRegistration(data);
      toast.success("Registration submitted successfully!");
      onClose();
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Failed to submit registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <RegistrationFields control={form.control} />
        <TermsAndConditions control={form.control} />

        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register Now"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
