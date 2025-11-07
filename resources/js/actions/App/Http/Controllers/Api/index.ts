import AuthApiController from './AuthApiController'
import BookingApiController from './BookingApiController'
import RateApiController from './RateApiController'
import CarApiController from './CarApiController'
const Api = {
    AuthApiController: Object.assign(AuthApiController, AuthApiController),
BookingApiController: Object.assign(BookingApiController, BookingApiController),
RateApiController: Object.assign(RateApiController, RateApiController),
CarApiController: Object.assign(CarApiController, CarApiController),
}

export default Api