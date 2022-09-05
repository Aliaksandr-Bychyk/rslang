import React from 'react';
import { Numbers, URL } from '../enums/enums';
import { IResult, IWord } from '../Interfaces/gameInterfaces';
import { getRandomNumber } from './getRandom';

const createGameArray = (items: IWord[]) => {
  const array: Set<IWord> = new Set();
  if (items) {
    while (array.size < Numbers.arraySize) {
      const number = getRandomNumber(19);
      array.add(items[number]);
    }
  }
  return array;
};

const getNextWord = (prew: IWord[]) => {
  const newItems: IWord[] = [...prew];
  newItems.pop();
  return newItems;
};

const getSound = (audioSrc: string) => {
  const audio = new Audio(audioSrc);
  audio.play();
};

const answerClickEvent = (
  setButtonState: React.Dispatch<React.SetStateAction<boolean>>,
  setResults: React.Dispatch<React.SetStateAction<IResult[]>>,
  word: IWord,
  isAnswer: boolean,
) => {
  setButtonState((prew) => !prew);
  setResults((prew) => ([
    ...prew,
    {
      word: word.word,
      translate: word.wordTranslate,
      audio: `${URL.start}/${word.audio}`,
      answer: isAnswer,
    },
  ]));
};

const getTrueValue = (data: IWord[], words: IWord[]) => {
  const index = words.length - 1;
  const lastElement = words[index];
  return {
    index: data.indexOf(lastElement),
    value: data[data.indexOf(lastElement)],
  };
};

const nextButtonClick = (
  results: IResult[],
  isResult: boolean,
  setGameWords: React.Dispatch<React.SetStateAction<IWord[]>>,
  setButtonState: React.Dispatch<React.SetStateAction<boolean>>,
  setIsResult: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setButtonState((prew) => !prew);
  setGameWords((prew) => getNextWord(prew));
  if (results.length === Numbers.arraySize) setIsResult(!isResult);
};

const getImageComponent = (buttonState: boolean, value: IWord, src: string) => {
  if (!buttonState) {
    return (
      <div className="challenge__answer">
        <button className="sound-word" type="button" onClick={() => getSound(src)}>
          <img src="./images/volumeImage.webp" alt="" className="challenge__image" />
        </button>
        <span className="challenge__eng-word _disabled">{value.word}</span>
      </div>
    );
  }
  return (
    <div className="challenge__answer">
      <img src={`${URL.start}/${value.image}`} alt="" className="challenge__image" />
      <span className="challenge__eng-word">{value.word}</span>
    </div>
  );
};

export {
  getNextWord,
  createGameArray,
  getSound,
  answerClickEvent,
  getTrueValue,
  nextButtonClick,
  getImageComponent,
};
