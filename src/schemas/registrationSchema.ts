
import { z } from "zod";

export const registrationFormSchema = z.object({
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

export type RegistrationFormValues = z.infer<typeof registrationFormSchema>;
