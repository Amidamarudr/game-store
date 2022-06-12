import React from 'react';
import { Button } from "../button";
import { Link } from "react-router-dom";
import './game-inside.css'

export const GameInside = ({game}) => {
    return (
        <div className='game-inside'>
            <Link to={`/app/${game.id}`}>
                <Button type='primary'>
                    Подробнее
                </Button>
            </Link>
        </div>
    );
};