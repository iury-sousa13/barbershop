import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { SidebarButton } from './sidebar-button';
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <Card>
        <CardContent className="flex flex-row items-center justify-between p-5">
          <Link href="/">
            <Image src="./logo.svg" height={18} width={120} alt="FSW Barber" />
          </Link>
          <SidebarButton />
        </CardContent>
      </Card>
    </header>
  );
}
