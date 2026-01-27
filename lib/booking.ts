import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z
    .string()
    .min(7, "Enter a valid phone or WhatsApp number.")
    .max(20, "Enter a valid phone number."),
  area: z.string().min(2, "Tell us your Bangalore area."),
  preferredTime: z.string().min(2, "Share a preferred time window."),
  serviceType: z.string().min(2, "Select a service type."),
  notes: z.string().max(300, "Notes should be under 300 characters.").optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

export const defaultBookingValues: BookingFormValues = {
  name: "",
  phone: "",
  area: "",
  preferredTime: "",
  serviceType: "",
  notes: "",
};
