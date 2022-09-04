import React, { useEffect, useState } from 'react';
import { Numbers, URL, UrlPath } from '../../enums/enums';
import { IWord } from '../../Interfaces/gameInterfaces';
import { getRandomNumber } from '../../modules/getRandom';
import Loading from '../Loading';
import SprintContent from './SprintContent';
import SprintResults from './SprintResults';

export default function SprintGame() {
  const [items, setItems] = useState([] as IWord[]);
  const [resultScore, setResultScore] = useState(0);
  const [isEndGame, setIsEndGame] = useState(false);

  useEffect(() => {
    fetch(`${URL.start}${UrlPath.words}?page=${getRandomNumber(Numbers.pages)}&group=${getRandomNumber(Numbers.groups)}`)
      .then((res) => res.json())
      .then((result: IWord[]) => setItems([...result]));
  }, []);

  if (isEndGame) {
    return <SprintResults score={resultScore} />;
  }

  if (items.length > 0) {
    return (
      <div className="container">
        <div className="sprint">
          <SprintContent
            items={items}
            setResultScore={setResultScore}
            setIsEndGame={setIsEndGame}
          />
        </div>
      </div>
    );
  }
  return <Loading />;
}
