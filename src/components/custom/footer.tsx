import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary py-8 text-center text-secondary-foreground border-t">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {currentYear} Famnen Hub. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Social Services for a Brighter Community
        </p>
      </div>
    </footer>
  );
}
