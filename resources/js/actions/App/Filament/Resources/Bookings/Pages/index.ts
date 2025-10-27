import ListBookings from './ListBookings'
import CreateBooking from './CreateBooking'
import ViewBooking from './ViewBooking'
import EditBooking from './EditBooking'
const Pages = {
    ListBookings: Object.assign(ListBookings, ListBookings),
CreateBooking: Object.assign(CreateBooking, CreateBooking),
ViewBooking: Object.assign(ViewBooking, ViewBooking),
EditBooking: Object.assign(EditBooking, EditBooking),
}

export default Pages