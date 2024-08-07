import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import { BarbershopItem } from './_components/barbershop-item';
import BookingItem from './_components/booking-item';
import { Header } from './_components/header';
import { Button } from './_components/ui/button';
import { Card, CardContent } from './_components/ui/card';
import { Input } from './_components/ui/input';
import { quickSearchOptions } from './_constants/search';
import { db } from './_lib/prisma';

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: { name: 'desc' },
  });

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

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="./banner-01.svg"
            fill
            className="rounded-xl object-cover"
            alt="Agende com os melhores com FSW Baber"
          />
        </div>

        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((item) => (
            <BarbershopItem key={item.id} barbershop={item} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>

        <div className="flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((item) => (
            <BarbershopItem key={item.id} barbershop={item} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2024 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}
