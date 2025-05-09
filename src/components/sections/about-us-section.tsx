import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UsersRound } from 'lucide-react';

export default function AboutUsSection() {
  return (
    <section id="who-are-we" className="bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <Card className="shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-6 md:p-10 order-2 md:order-1">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center text-primary mb-2">
                  <UsersRound className="h-10 w-10 mr-3" />
                  <CardTitle className="text-3xl md:text-4xl font-bold">Who Are We?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 text-lg text-foreground/90 space-y-4">
                <p>
                  Famnen is a dedicated social service organization committed to fostering a supportive and inclusive community. We believe in the power of connection, empathy, and collective action to create positive change.
                </p>
                <p>
                  Our team comprises passionate professionals and volunteers who work tirelessly to provide essential services, support, and opportunities for individuals and families. We strive to be a beacon of hope and a reliable partner for those navigating life's challenges.
                </p>
                <p>
                  Founded on principles of integrity, compassion, and respect, Famnen aims to empower every individual to reach their full potential and contribute meaningfully to society.
                </p>
              </CardContent>
            </div>
            <div className="order-1 md:order-2 h-64 md:h-full min-h-[300px] md:min-h-[400px] relative">
              <Image
                src="https://picsum.photos/800/600?grayscale"
                alt="Diverse group of people smiling"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint="community group"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
