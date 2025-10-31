import CarApiController from './CarApiController'
import BookingApiController from './BookingApiController'
const Api = {
    CarApiController: Object.assign(CarApiController, CarApiController),
BookingApiController: Object.assign(BookingApiController, BookingApiController),
}

export default Api