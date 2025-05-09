import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartHandshake, CheckCircle } from 'lucide-react';

const services = [
  { name: "Community Support Programs", description: "Offering a range of programs to support individuals and families in need." },
  { name: "Youth Engagement Initiatives", description: "Empowering young people through mentorship, workshops, and activities." },
  { name: "Senior Citizen Assistance", description: "Providing companionship, resources, and support for our elderly community members." },
  { name: "Volunteer Opportunities", description: "Connecting passionate individuals with meaningful ways to give back." },
];

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <Card className="shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
             <div className="h-64 md:h-full min-h-[300px] md:min-h-[400px] relative">
              <Image
                src="https://picsum.photos/800/601"
                alt="People working together on a project"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint="team collaboration"
              />
            </div>
            <div className="p-6 md:p-10">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center text-primary mb-2">
                  <HeartHandshake className="h-10 w-10 mr-3" />
                  <CardTitle className="text-3xl md:text-4xl font-bold">What We Do</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 text-lg text-foreground/90 space-y-6">
                <p>
                  At Famnen, we are dedicated to making a tangible impact in our community. Our activities are designed to address diverse needs and promote well-being for all. We focus on creating sustainable solutions and fostering an environment of mutual support.
                </p>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">{service.name}</h4>
                        <p className="text-sm text-foreground/70">{service.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
