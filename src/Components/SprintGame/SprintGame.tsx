import React, { useEffect, useState } from 'react';
import { URL, UrlPath } from '../../enums/enums';
import { IWord } from '../../Interfaces/gameInterfaces';
import { getLocal } from '../../modules/getLocal';
import Loading from '../Loading';
import SprintContent from './SprintContent';
import SprintResults from './SprintResults';

export default function SprintGame() {
  const [items, setItems] = useState([] as IWord[]);
  const [resultScore, setResultScore] = useState(0);
  const [isEndGame, setIsEndGame] = useState(false);
  const { group, page } = getLocal();

  useEffect(() => {
    fetch(`${URL.start}${UrlPath.words}?page=${page}&group=${group}`)
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
