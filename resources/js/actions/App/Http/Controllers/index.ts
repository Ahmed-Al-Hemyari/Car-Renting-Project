import Auth from './Auth'
import CarController from './CarController'
import BookingController from './BookingController'
import RateController from './RateController'
import Settings from './Settings'
import ResetPassword from './ResetPassword'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
CarController: Object.assign(CarController, CarController),
BookingController: Object.assign(BookingController, BookingController),
RateController: Object.assign(RateController, RateController),
Settings: Object.assign(Settings, Settings),
ResetPassword: Object.assign(ResetPassword, ResetPassword),
}

export default Controllers