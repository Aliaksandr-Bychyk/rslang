import React, { useEffect, useState } from 'react';
import { Numbers, URL, UrlPath } from '../../enums/enums';
import { IResult, IWord } from '../../Interfaces/gameInterfaces';
import { createGameArray, nextButtonClick } from '../../modules/challengeGameFunctions';
import { getRandomNumbers } from '../../modules/getRandom';
import ChallangeGameResults from './ChallangeGameResults';
import ChallengeGameWords from './ChallengeGameWords';
import Loading from '../Loading';
import { getLocal } from '../../modules/getLocal';

export default function ChallengeGame() {
  const [items, setItems] = useState([] as IWord[]);
  const [gameWords, setGameWords] = useState([] as IWord[]);
  const [randomNumbers, setRandomNumbers] = useState([] as number[]);
  const [buttonState, setButtonState] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [results, setResults] = useState([] as IResult[]);
  const { group, page } = getLocal();

  useEffect(() => {
    fetch(`${URL.start}${UrlPath.words}?page=${page}&group=${group}`)
      .then((res) => res.json())
      .then((result: IWord[]) => {
        setItems([...result]);
        setGameWords([...createGameArray(result)]);
      });
  }, []);

  useEffect(() => {
    if (gameWords.length > Numbers.zero) {
      setRandomNumbers(getRandomNumbers(
        items,
        gameWords,
        Numbers.lengthRandomArray,
        Numbers.maxRandomNumber,
      ));
    }
  }, [gameWords]);

  if (isResult) return <ChallangeGameResults results={results} />;

  if (gameWords.length > Numbers.zero && randomNumbers.length > Numbers.zero) {
    return (
      <div className="container">
        <div className="challenge">
          <ChallengeGameWords
            data={items}
            words={gameWords}
            setButtonState={setButtonState}
            buttonState={buttonState}
            randomNumbers={randomNumbers}
            setResults={setResults}
          />
          <button
            className="challenge__next button"
            type="button"
            onClick={() => nextButtonClick(
              results,
              isResult,
              setGameWords,
              setButtonState,
              setIsResult,
            )}
            disabled={!buttonState}
          >
            { results.length === Numbers.arraySize ? 'Results' : 'Next' }
          </button>
        </div>
      </div>
    );
  }
  return <Loading />;
}

export { createGameArray };
