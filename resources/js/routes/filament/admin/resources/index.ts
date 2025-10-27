import bookings from './bookings'
import brands from './brands'
import cars from './cars'
import categories from './categories'
import rates from './rates'
import users from './users'
const resources = {
    bookings: Object.assign(bookings, bookings),
brands: Object.assign(brands, brands),
cars: Object.assign(cars, cars),
categories: Object.assign(categories, categories),
rates: Object.assign(rates, rates),
users: Object.assign(users, users),
}

export default resources