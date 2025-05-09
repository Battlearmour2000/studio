"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CssTreeBackground from '@/components/custom/css-tree-background';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
      <CssTreeBackground /> {/* Added CSS Tree here */}
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-32 text-center">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full opacity-50 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-accent/20 rounded-full opacity-50 filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-primary drop-shadow-md">
          Welcome to Famnen Hub
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Your connection to community support and engagement. Discover how we make a difference and how you can be a part of it.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <Link href="#what-we-do">Learn More</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 shadow-lg transition-transform hover:scale-105">
            <Link href="#local-ambassadors">Get Involved</Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 6s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}
