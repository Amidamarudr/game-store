import React from 'react';
import { GameItem } from '../../components/game-item';
import './home-page.css';
import { useSelector } from 'react-redux';



export const HomePage = () => {
    const games = useSelector(state => state.game.currentGame)
    return (
        <div className="home-page">
            {games.map(game => <GameItem game={game} key={game.id}/>)}
        </div>
    );
};