import { SearchIcon } from 'lucide-react';
import { Header } from './_components/header';
import { Button } from './_components/ui/button';
import { Input } from './_components/ui/input';
import Image from 'next/image';
import { Card, CardContent } from './_components/ui/card';
import { Badge } from './_components/ui/badge';
import { Avatar, AvatarImage } from './_components/ui/avatar';

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

        <Card className="mt-6">
          <CardContent className="flex justify-between p-0 px-5">
            <div className="flex flex-col gap-2 py-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-bold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-2 border-solid pl-5">
              <p className="text-sm">Fevereiro</p>
              <p className="text-2xl">06</p>
              <p className="text-sm">08:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
