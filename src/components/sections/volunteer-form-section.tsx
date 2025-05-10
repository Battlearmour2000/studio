"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpingHand } from "lucide-react";

export default function VolunteerFormSection() {
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
              Join us as a volunteer and make a difference in your community! Reach out to us using the contact details below to express your interest.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <div>
              <h3 className="text-xl font-semibold text-primary">Contact Information</h3>
              <p className="text-lg text-foreground/80">
                <strong>Email:</strong> contact@organization.com
              </p>
              <p className="text-lg text-foreground/80">
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Program Details</h3>
              <p className="text-lg text-foreground/80">
                Our Local Ambassador program empowers individuals to make a positive impact in their communities. Contact us to learn more about how you can get involved!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
