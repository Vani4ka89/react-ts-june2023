import {IRes} from "../types/response.type";
import {ICar} from "../interfaces/car.interface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const carService = {
    getAll: (): IRes<ICar[]> => axiosService.get(urls.cars.base),
    create: (car: ICar): IRes<ICar> => axiosService.post(urls.cars.base, car),
    updateById: (id: number, car: ICar): IRes<ICar> => axiosService.put(urls.cars.byId(id), car),
    deleteById: (id: number): IRes<void> => axiosService.delete(urls.cars.byId(id))
}

export {
    carService
}