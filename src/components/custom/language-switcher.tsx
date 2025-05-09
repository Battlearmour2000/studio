"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const [language, setLanguage] = React.useState("en");

  // In a real app, this would likely use i18n libraries and context
  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    // Here you would typically change the app's language
    console.log("Language changed to:", value);
  };

  return (
    <div className="bg-secondary text-secondary-foreground py-2 px-4 md:px-8 flex justify-end items-center shadow-sm">
      <div className="flex items-center space-x-2">
        <Languages className="h-5 w-5" />
        <Select value={language} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-[120px] h-8 text-xs border-primary/50 focus:ring-primary">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="sv">Svenska</SelectItem>
            {/* Add more languages as needed */}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
