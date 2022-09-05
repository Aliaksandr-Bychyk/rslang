import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../enums/enums';
import { IGame } from '../Interfaces/gameInterfaces';

const games: IGame[] = [
  {
    name: 'Спринт',
    image: './images/sprint.png',
    path: RoutePath.sprintGame,
  },
  {
    name: 'Аудиовызов',
    image: './images/challenge.png',
    path: RoutePath.challengeGame,
  },
];

const createGame = (name: string, img: string, path: string, isBook: boolean) => (
  <Link to={isBook ? path : RoutePath.level} state={{ path }} key={name}>
    <div className="games__item">
      <img className="games__image" src={img} alt="game" />
      <h4 className="games__title">{name}</h4>
    </div>
  </Link>
);

export default function Games() {
  const isBook = JSON.parse(localStorage.getItem('isBook')) as boolean;
  return (
    <div className="container">
      <div className="games">
        {games.map((game) => (
          createGame(
            game.name,
            game.image,
            game.path,
            isBook,
          )))}
      </div>
    </div>
  );
}
