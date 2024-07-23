// src/components/ui/hover-card.tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card";
import { Button } from "@/components/ui/button";

export function HoverCardExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
