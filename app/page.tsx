import { SearchIcon } from 'lucide-react';
import { Header } from './_components/header';
import { Button } from './_components/ui/button';
import { Input } from './_components/ui/input';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl">
          Olá, <strong>Iury</strong>
        </h2>
        <p className="mt-1 text-sm">Segunda-feira, 05 de agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="./banner-01.svg"
            fill
            className="rounded-xl object-cover"
            alt="Agende com os melhores com FSW Baber"
          />
        </div>
      </div>
    </div>
  );
}
