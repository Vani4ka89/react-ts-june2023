import React, {useState} from 'react';
import {Outlet} from "react-router-dom";

import {Cars} from "../components/CarsContainer/Cars/Cars";
import {CarForm} from "../components/CarsContainer/CarForm/CarForm";
import {ICar} from "../interfaces/car.interface";

const CarsPage = () => {
    const [flag, setFlag] = useState<boolean>(null);
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null);

    const trigger = (): void => {
        setFlag(prev => !prev);
    }

    return (
        <div>
            <CarForm trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <Cars flag={flag} setCarForUpdate={setCarForUpdate} trigger={trigger}/>
                <Outlet/>
            </div>
        </div>
    );
};

export {CarsPage};