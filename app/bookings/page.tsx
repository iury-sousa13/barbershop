import { getServerSession } from 'next-auth';
import { getConcludedBookings } from '../_actions/get-concluded-bookings';
import { getConfirmedBookings } from '../_actions/get-confirmed-bookings';
import { Header } from '../_components/header';
import { authOptions } from '../_constants/auth';
import BookingItem from '../_components/booking-item';
import { notFound } from 'next/navigation';

export default async function Bookings() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    // TODO: mostrar pop-up de login
    notFound();
  }
  const confirmedBookings = await getConfirmedBookings();
  const concludedBookings = await getConcludedBookings();

  return (
    <>
      <Header />

      <div className="space-y-3 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        {confirmedBookings.length === 0 && concludedBookings.length === 0 && (
          <p className="text-gray-400">Você não tem agendamentos.</p>
        )}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Confirmados
            </h2>
            {confirmedBookings.map((booking) => (
              <BookingItem
                key={booking.id}
                booking={JSON.parse(JSON.stringify(booking))}
              />
            ))}
          </>
        )}
        {concludedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Finalizados
            </h2>
            {concludedBookings.map((booking) => (
              <BookingItem
                key={booking.id}
                booking={JSON.parse(JSON.stringify(booking))}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}