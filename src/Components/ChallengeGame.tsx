import React, { useEffect, useState } from 'react';
import { URL, urlPath } from '../enums/enums';
import { IWord } from '../Interfaces/gameInterfaces';
import ChallengeGameWords from './ChallengeGameWords';

const getRandomNumber = (max: number) => {
  return Math.round(Math.random() * max);
}

const generateRandomWordsArray = (): {error: Error, isLoaded: boolean, items: IWord[]} => {
  const pages = 29;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${URL.start}${urlPath.words}?page=${getRandomNumber(pages)}`)
    .then(res => res.json())
    .then((result) => {
      setIsLoaded(true);
      setItems(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, []);

  return {
    error,
    isLoaded,
    items
  }
}

const createGameArray = (items: IWord[]) => {
  const array: Set<IWord> = new Set();
  while (array.size < 9) {
    const number = getRandomNumber(19);
    array.add(items[number]);
  }
  return array;
}

export default function ChallengeGame() {
  // const {error, isLoaded, items} = generateRandomWordsArray();
  const pages = 29;
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch(`${URL.start}${urlPath.words}?page=${getRandomNumber(pages)}`)
    .then(res => res.json())
    .then((result) => {
      setIsLoaded(true);
      setItems(result);
      
      }
    )
  }, []);

  if (isLoaded) {

    const [ellem, setArray] = useState([...createGameArray(items)]);

    return (
      <div className="container challenge">
        <ChallengeGameWords word={ellem.pop()}/>
        <button className="challenge__next" onClick={() => setArray(ellem)}>Next</button>
      </div>
    );
  }
  return <>Loading...</>
}
