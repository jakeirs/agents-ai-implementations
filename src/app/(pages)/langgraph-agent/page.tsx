"use client";

import ThemeToggle from "@/components/blocks/theme-toggle";
import { Button } from "@/components/ui/button";

export default function MainPage() {
  return (
    <div>
      <ThemeToggle />
      <Button variant="destructive" asChild></Button>
    </div>
  );
}
