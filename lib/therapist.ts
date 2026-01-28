import { z } from "zod";

export const therapistSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z
    .string()
    .min(7, "Enter a valid phone or WhatsApp number.")
    .max(20, "Enter a valid phone number."),
  experience: z.string().min(2, "Share your experience level."),
  certifications: z.string().min(2, "List your certifications or training."),
  availability: z.string().min(2, "Share your preferred working hours."),
  areas: z.string().min(2, "List the Bangalore areas you can cover."),
  notes: z.string().max(400, "Notes should be under 400 characters.").optional(),
});

export type TherapistFormValues = z.infer<typeof therapistSchema>;

export const defaultTherapistValues: TherapistFormValues = {
  name: "",
  phone: "",
  experience: "",
  certifications: "",
  availability: "",
  areas: "",
  notes: "",
};
