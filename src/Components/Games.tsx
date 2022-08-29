import React from 'react';
import { IGame } from '../Interfaces/menuInterfaces';

const games: IGame[] = [
  {
    name: 'Sprint',
    image: './images/sprint.png',
  },
  {
    name: 'Audio Challange',
    image: './images/challenge.png',
  },
];

const createGame = (name: string, img: string) => (
  <div className="games__item">
    <img className="games__image" src={img} alt="game" />
    <h4 className="games__title">{name}</h4>
  </div>
);

export default function Games() {
  return (
    <div className="container">
      <div className="games">{ games.map((game) => createGame(game.name, game.image)) }</div>
    </div>
  );
}
