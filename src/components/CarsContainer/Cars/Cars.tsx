import React, {FC, useEffect, useState} from 'react';

import {ICar} from "../../../interfaces/car.interface";
import {carService} from "../../../services/carService";
import {Car} from "../Car/Car";
import css from './Cars.module.css';
import {ISetState} from "../../../types/ISetState.type";

interface IProps {
    flag: boolean;
    setCarForUpdate: ISetState<ICar>;
    trigger: () => void;
}

const Cars: FC<IProps> = ({flag, setCarForUpdate, trigger}) => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [flag]);

    return (
        <div className={css.Cars}>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} trigger={trigger}/>)}
        </div>
    );
};


export {Cars};