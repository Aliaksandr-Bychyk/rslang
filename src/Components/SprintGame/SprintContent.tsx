import React, { useEffect, useState } from 'react';
import { Numbers } from '../../enums/enums';
import { IClick, ISprintContent } from '../../Interfaces/gameInterfaces';
import { checkResult, getKeyEvent, getTranslate } from '../../modules/sprintGameFunctions';
import SprintButton from './SprintButton';
import SprintImage from './SprintImage';
import SprintTimer from './SprintTimer';

export default function SprintContent({ ...args }: ISprintContent) {
  const [score, setScore] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [scoreCount, setScoreCount] = useState(10);
  const [imageArray, setImageArray] = useState(() => [false, false, false]);
  const { translate, index } = getTranslate(args.items, wordIndex);
  const engWord = args.items[wordIndex].word;
  const getButtonArgs: (isCorrect: boolean) => IClick = (isCorrect: boolean) => ({
    setScore,
    setWordIndex,
    setImageArray,
    setScoreCount,
    scoreCount,
    isCorrect,
    imageArray,
  });

  useEffect(() => {
    checkResult(
      wordIndex === Numbers.maxRandomNumber,
      score,
      args.setResultScore,
      args.setIsEndGame,
    );

    const keyEvent = (e: KeyboardEvent) => getKeyEvent(e, getButtonArgs, wordIndex, index);
    document.addEventListener('keyup', keyEvent);
    return () => document.removeEventListener('keyup', keyEvent);
  }, [wordIndex]);

  return (
    <div className="sprint-content">
      <SprintTimer
        score={score}
        setResultScore={args.setResultScore}
        setIsEndGame={args.setIsEndGame}
      />
      <div className="sprint__score">
        <div className="sprint__score-count">
          { score }
        </div>
        <SprintImage scoreCount={scoreCount} imageArray={imageArray} />
      </div>
      <div className="sprint__quest">
        <span className="sprint__question">ВЕРНO ЛИ:</span>
        <div className="sprint__word">
          { engWord }
        </div>
        <span className="equals">=</span>
        <div className="sprint__translate">
          { translate }
        </div>
      </div>
      <SprintButton
        getButtonArgs={getButtonArgs}
        wordIndex={wordIndex}
        index={index}
      />
    </div>
  );
}
