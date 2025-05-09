"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpingHand } from "lucide-react";
import React from "react";
import type { VolunteerFormValues } from "@/app/actions/volunteerActions";
import { submitVolunteerForm } from "@/app/actions/volunteerActions";

const volunteerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional().refine(val => !val || /^[+]?[0-9\s-()]{7,20}$/.test(val), { message: "Please enter a valid phone number." }),
  motivation: z.string().min(10, { message: "Motivation must be at least 10 characters." }).max(500),
});


export default function VolunteerFormSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const form = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      motivation: "",
    },
  });

  async function onSubmit(data: VolunteerFormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitVolunteerForm(data);
      if (result.success) {
        toast({
          title: "Submission Successful!",
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "An unknown error occurred.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="local-ambassadors" className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <div className="inline-flex items-center justify-center text-primary mb-3">
              <HelpingHand className="h-12 w-12 mr-3" />
              <CardTitle className="text-3xl md:text-4xl font-bold">Become a Local Ambassador</CardTitle>
            </div>
            <CardDescription className="text-lg text-foreground/80">
              Join us as a volunteer and make a difference in your community! Fill out the form below to express your interest.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-background focus:ring-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background focus:ring-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="(123) 456-7890" {...field} className="bg-background focus:ring-accent" />
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
                      <FormLabel>Why do you want to volunteer?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a bit about your motivation..."
                          className="resize-y min-h-[120px] bg-background focus:ring-accent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 shadow-md transition-transform hover:scale-102" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
