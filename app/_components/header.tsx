import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { SidebarButton } from './sidebar-button';

export function Header() {
  return (
    <header>
      <Card>
        <CardContent className="flex flex-row items-center justify-between p-5">
          <Image src="./logo.svg" height={18} width={120} alt="FSW Barber" />
          <SidebarButton />
        </CardContent>
      </Card>
    </header>
  );
}
