import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseFirstName,chooseLastName,chooseAge,chooseHeight,chooseWeight,choosePosition,chooseClub,chooseNationality,choosePrice,chooseBoots } from '../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface PlayerFormProps {
    id?:string;
    data?:{}
}

interface PlayerState {
    first_name:string; 
    last_name:string; 
    age:string; 
    height:string; 
    weight:string; 
    position:string; 
    club:string; 
    nationality:string;
    price:string;
    boots:string;
}

export const PlayerForm = (props:PlayerFormProps) => {

    const dispatch = useDispatch();
    let { playerData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<PlayerState>(state => state.first_name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseFirstName(data.name))
            server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="first_name">first Name</label>
                    <Input {...register('first_name')} name="first_name" placeholder='first name' />
                </div>

                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <Input {...register('last_name')} name="last_name" placeholder="last name"/>
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <Input {...register('age')} name="age" placeholder="Age"/>
                </div>

                <div>
                    <label htmlFor="height">Height</label>
                    <Input {...register('height')} name="height" placeholder="height"/>
                </div>

                <div>
                    <label htmlFor="weight">Weight</label>
                    <Input {...register('weight')} name="weight" placeholder="weight"/>
                </div>

                <div>
                    <label htmlFor="position">Position</label>
                    <Input {...register('position')} name="position" placeholder="position"/>
                </div>

                <div>
                    <label htmlFor="club">Club</label>
                    <Input {...register('club')} name="club" placeholder="club"/>
                </div>

                <div>
                    <label htmlFor="nationality">Nationality</label>
                    <Input {...register('nationality')} name="nationality" placeholder="nationality"/>
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="price"/>
                </div>
                
                <div>
                    <label htmlFor="boots">boots</label>
                    <Input {...register('boots')} name="boots" placeholder="boots"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}