import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {ICar} from "../../../interfaces/car.interface";
import css from './Car.module.css';
import {ISetState} from "../../../types/ISetState.type";
import {carService} from "../../../services/carService";

interface IProps {
    car: ICar;
    setCarForUpdate: ISetState<ICar>;
    trigger: () => void;
}

const deleteCar = async (id: number, trigger: () => void) => {
    await carService.deleteById(id);
    trigger();
}

const Car: FC<IProps> = ({car, setCarForUpdate, trigger}) => {
    const {id, brand, price, year} = car;

    const navigate = useNavigate();

    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => navigate('select', {state: {car}})}>select</button>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={() => deleteCar(id, trigger)}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};