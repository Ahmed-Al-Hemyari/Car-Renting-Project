import ListCars from './ListCars'
import CreateCar from './CreateCar'
import ViewCar from './ViewCar'
import EditCar from './EditCar'
const Pages = {
    ListCars: Object.assign(ListCars, ListCars),
CreateCar: Object.assign(CreateCar, CreateCar),
ViewCar: Object.assign(ViewCar, ViewCar),
EditCar: Object.assign(EditCar, EditCar),
}

export default Pages