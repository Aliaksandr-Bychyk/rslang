import React, { useEffect, useState } from 'react';
import { URL, UrlPath } from '../enums/enums';
import { IWord } from '../Interfaces/gameInterfaces';
import ChallengeGameWords from './ChallengeGameWords';

const getRandomNumber = (max: number) => Math.round(Math.random() * max);

const createGameArray = (items: IWord[]) => {
  const array: Set<IWord> = new Set();
  if (items) {
    while (array.size < 10) {
      const number = getRandomNumber(19);
      array.add(items[number]);
    }
  }
  return array;
};

export default function ChallengeGame() {
  const pages = 29;
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${URL.start}${UrlPath.words}?page=${getRandomNumber(pages)}`)
      .then((res) => res.json())
      .then((result: IWord[]) => setItems(result));
  }, []);

  if (items.length > 0) {
    return (
      <div className="container challenge">
        <ChallengeGameWords data={items} />
        <button className="challenge__next" type="button">Next</button>
      </div>
    );
  }
  return <>loading</>;
}

export { createGameArray };
