import React from 'react';
import { GameCover } from '../game-cover';
import { GameBuy } from '../game-buy';
import { GameGenre } from '../game-genre';
import {GameInside} from "../game-inside";
import './game-item.css';

export const GameItem = ({ game }) => {

    return (
        <div className="game-item">
            <GameCover image={game.image}/>
            <div className="game-item__details">
                <span className="game-item__title">{game.title}</span>
                <div className="game-item__genre">
                    {game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>)}
                </div>
                <div className="game-item__inside">
                    <GameInside game={game}/>
                </div>
                <div className="game-item__buy">
                    <GameBuy game={game}/>
                </div>
            </div>
        </div>
    );
};
