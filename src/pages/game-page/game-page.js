import React from 'react';
import {useSelector} from "react-redux";
import {GameCover} from "../../components/game-cover";
import {GameGenre} from "../../components/game-genre";
import {GameBuy} from "../../components/game-buy";
import './game-page.css'
import { useParams } from 'react-router-dom';

export const GamePage = () => {
    const {id} = useParams()
    const game = useSelector(state => state.game.allGames).find(item=> item.id === +id)

    
    if(!game){
        return <div className='game-page'>
            <p>нет такой игры</p>
        </div>
    }

    return (
        <div className='game-page'>
            <h1 className='game-page__title'>{game.title}</h1>
            <div className='game-page__content'>
                <div className='game-page__left'>
                    <iframe
                        width='90%'
                        height='400px'
                        src={game.video}
                        title='Youtube Video Player'
                        frameBorder='none'
                    ></iframe>
                </div>
                <div className='game-page__right'>
                    <GameCover image={game.image}/>
                    <p>{game.description}</p>
                    <p className='secondary-text'>Популярные метки этого продукта:</p>
                    { game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>) }
                    <div className='game-page__buy-game'>
                        <GameBuy game={game}/>
                    </div>
                </div>
            </div>
        </div>
    );
};