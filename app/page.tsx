import Image from 'next/image';
import { BarbershopItem } from './_components/barbershop-item';
import BookingItem from './_components/booking-item';
import { Header } from './_components/header';
import { Search } from './_components/search';
import { Button } from './_components/ui/button';
import { quickSearchOptions } from './_constants/search';
import { db } from './_lib/prisma';
import Link from 'next/link';

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

        <div className="mt-6">
          <Search />
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
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
    </div>
  );
}
