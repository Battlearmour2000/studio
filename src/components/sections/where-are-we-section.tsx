import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function WhereAreWeSection() {
  return (
    <section id="where-are-we" className="bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <Card className="shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="p-6 md:p-10 order-2 md:order-1 flex flex-col justify-center">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center text-primary mb-2">
                  <MapPin className="h-10 w-10 mr-3" />
                  <CardTitle className="text-3xl md:text-4xl font-bold">Where Are We?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 text-lg text-foreground/90 space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-2">Our Main Office</h3>
                  <p className="flex items-center mb-1">
                    <MapPin className="h-5 w-5 mr-2 text-accent" />
                    123 Community Lane, Famnen City, FC 54321
                  </p>
                  <p className="flex items-center mb-1">
                    <Phone className="h-5 w-5 mr-2 text-accent" />
                    (123) 456-7890
                  </p>
                  <p className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-accent" />
                    info@famnenhub.org
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Opening Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </CardContent>
            </div>
            <div className="order-1 md:order-2 h-80 md:h-auto min-h-[300px] md:min-h-[450px] relative">
              <Image
                src="https://picsum.photos/800/602"
                alt="Map showing location of Famnen Hub"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint="map location"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r md:from-black/30 md:to-transparent"></div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
