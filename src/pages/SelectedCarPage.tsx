import React from 'react';

import {useAppLocation} from "../hooks/location.hook";
import {ICar} from "../interfaces/car.interface";
import {SelectedCar} from "../components/CarsContainer/SelectedCar/SelectedCar";

const SelectedCarPage = () => {
    const {state: {car}} = useAppLocation<{ car: ICar }>();

    return (
        <div>
            {car && <SelectedCar car={car}/>}
        </div>
    );
};

export {SelectedCarPage};