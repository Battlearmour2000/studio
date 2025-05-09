"use server";

import { z } from "zod";

const volunteerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional().refine(val => !val || /^[+]?[0-9\s-()]{7,20}$/.test(val), { message: "Please enter a valid phone number." }),
  motivation: z.string().min(10, { message: "Motivation must be at least 10 characters." }).max(500),
});

export type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;

export async function submitVolunteerForm(data: VolunteerFormValues) {
  console.log("Volunteer form submitted:", data);
  // Simulate API call / database save
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Example: throw an error sometimes for testing
  // if (Math.random() > 0.5) {
  //   return { success: false, message: "A simulated error occurred. Please try again." };
  // }

  return { success: true, message: "Thank you for your interest! We will be in touch soon." };
}
