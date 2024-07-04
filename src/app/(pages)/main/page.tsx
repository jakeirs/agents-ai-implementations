import ThemeToggle from "@/components/blocks/theme-toggle";
import { Button } from "@/components/ui/button";

export default async function MainPage() {
  return (
    <div>
      <ThemeToggle />
      It's a paid course accesses
      <Button variant="destructive" asChild></Button>
    </div>
  );
}
