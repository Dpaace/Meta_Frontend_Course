
const pages = new Map();
pages.set('home', { name: 'Home', path: '/', anchorable: true });
pages.set('reservations', {
  name: 'Reservations',
  path: '/reservations',
  anchorable: true
});
pages.set('confirmedBooking', {
  name: 'Confirmed Booking',
  path: '/confirmed-booking',
  anchorable: false
});
export default pages;
