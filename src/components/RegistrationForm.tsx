
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";

// Define the registration form schema with Zod
const registrationFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  school: z.string().min(2, {
    message: "School name must be at least 2 characters.",
  }),
  grade: z.string().min(1, {
    message: "Grade is required.",
  }),
  motivation: z.string().min(5, {
    message: "Please tell us what made you join this bootcamp.",
  }),
  funIdeas: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type RegistrationFormValues = z.infer<typeof registrationFormSchema>;

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
      // Store registration in Supabase
      const { error } = await supabase
        .from('registrations')
        .insert([
          { 
            full_name: data.fullName,
            school: data.school,
            grade: data.grade,
            motivation: data.motivation,
            fun_ideas: data.funIdeas || null
          }
        ]);
      
      if (error) throw error;
      
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
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="school"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School</FormLabel>
              <FormControl>
                <Input placeholder="Your school" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="grade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Grade/Year</FormLabel>
              <FormControl>
                <Input placeholder="E.g. 10th grade, University freshman" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="motivation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What made you join this bootcamp?</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Share your reasons for joining..."
                  className="min-h-[80px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="funIdeas"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What would make this bootcamp more fun for you? (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Share your ideas..."
                  className="min-h-[80px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="termsAccepted"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I accept the terms and conditions
                </FormLabel>
                <p className="text-sm text-muted-foreground">
                  By checking this box, I acknowledge that my information will only be used for bootcamp administration and will not be shared with third parties. Students under 18 should have parental consent.
                </p>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

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
