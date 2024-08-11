'use server';

import { revalidatePath } from 'next/cache';
import { db } from '../_lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../_constants/auth';

interface CreateBookingParams {
  serviceId: string;
  date: Date;
}

export async function createBooking(params: CreateBookingParams) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error('Usuário não autenticado');
  }

  await db.booking.create({
    data: { ...params, userId: (session.user as any).id },
  });
  revalidatePath('/barbershops/[id]');
}
