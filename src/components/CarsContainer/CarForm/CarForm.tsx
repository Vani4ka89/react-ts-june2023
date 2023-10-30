import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {ICar} from "../../../interfaces/car.interface";
import {carValidator} from "../../../validators/car.validator";
import {carService} from "../../../services/carService";
import {ISetState} from "../../../types/ISetState.type";

interface IProps {
    trigger: () => void;
    carForUpdate: ICar;
    setCarForUpdate: ISetState<ICar>;
}

const CarForm: FC<IProps> = ({trigger, carForUpdate, setCarForUpdate}) => {
    const {handleSubmit, register, reset, setValue, formState: {isValid, errors}} = useForm<ICar>({
        mode: 'onBlur',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [setValue, carForUpdate]);


    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        trigger();
        reset();
    };

    const update: SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        setCarForUpdate(null);
        trigger();
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            </form>
            <div style={{color: 'red'}}>
                {errors.brand && <div>brand: {errors.brand.message}</div>}
                {errors.price && <div>brand: {errors.price.message}</div>}
                {errors.year && <div>brand: {errors.year.message}</div>}
            </div>
        </div>

    );
};

export {CarForm};