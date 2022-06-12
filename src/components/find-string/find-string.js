import React, {useState, useEffect} from 'react';
import useDebounce from './hook'
import {setCurrentGame} from '../../redux/games/reducer'
import { useDispatch } from 'react-redux';
import './find-string.css'

export const FindString = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const debounceValue = useDebounce(value, 300)

    function onInput(e){
        setValue(e.target.value)
    }

    useEffect(() => {
        console.log(debounceValue)
        dispatch(setCurrentGame({text: debounceValue}))
    }, [debounceValue])


    return (
        <div className='find-string'>
            <input
            type='text'
            placeholder='Find the Game'
            className='find-string__input'
            onChange={onInput}
            />
        </div>
    );
};