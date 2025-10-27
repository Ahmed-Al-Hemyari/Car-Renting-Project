import Bookings from './Bookings'
import Brands from './Brands'
import Cars from './Cars'
import Categories from './Categories'
import Rates from './Rates'
import Users from './Users'
const Resources = {
    Bookings: Object.assign(Bookings, Bookings),
Brands: Object.assign(Brands, Brands),
Cars: Object.assign(Cars, Cars),
Categories: Object.assign(Categories, Categories),
Rates: Object.assign(Rates, Rates),
Users: Object.assign(Users, Users),
}

export default Resources