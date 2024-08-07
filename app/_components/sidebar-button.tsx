import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetTrigger } from './ui/sheet';
import { Sidebar } from './sidebar';

interface SidebarButtonProps {
  className?: string;
}

export function SidebarButton({ className }: SidebarButtonProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className={className}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <Sidebar />
    </Sheet>
  );
}
