import { Arrow, Numbers } from '../enums/enums';
import { IClick, IWord } from '../Interfaces/gameInterfaces';
import { getRandomNumber } from './getRandom';

const checkEveryTrue = (imageArray: boolean[]) => imageArray.every((i) => i === true);

const getCorrectAnswer = (args: IClick) => {
  args.setScore((prev) => prev + args.scoreCount);
  if (args.scoreCount !== Numbers.maxScoreCount && checkEveryTrue(args.imageArray)) {
    args.setImageArray((prev) => prev.map((() => false)));
    args.setScoreCount((prev) => (prev === Numbers.maxScoreCount ? prev : prev * 2));
  } else if (args.scoreCount !== Numbers.maxScoreCount) {
    args.setImageArray((prev) => {
      const firtsFalse = prev.indexOf(false);
      return prev.map((item, index) => item === true || index === firtsFalse);
    });
  }
};

const getWrongAnswer = (args: IClick) => {
  if (args.scoreCount > 10) {
    args.setScoreCount((prev) => prev / 2);
  }
  args.setImageArray((prev) => prev.map((() => false)));
};

const checkCorrectAnswer = (args: IClick) => {
  if (args.isCorrect) {
    getCorrectAnswer(args);
  } else {
    getWrongAnswer(args);
  }
  args.setWordIndex((prev) => prev + 1);
};

const getClick = ({ ...args }: IClick) => {
  checkCorrectAnswer(args);
};

const getTranslate = (items: IWord[], wordIndex: number) => {
  const array = [wordIndex, getRandomNumber(Numbers.maxRandomNumber)];
  const index = array[getRandomNumber(1)];
  return {
    translate: items[index].wordTranslate,
    index,
  };
};

const getKeyEvent = (
  e: KeyboardEvent,
  getButtonArgs: (isCorrect: boolean) => IClick,
  wordIndex: number,
  index: number,
) => {
  if (e.code === Arrow.rigth) getClick(getButtonArgs(wordIndex === index));
  if (e.code === Arrow.left) getClick(getButtonArgs(!(wordIndex === index)));
};

const getResults = (
  score: number,
  setResultScore: React.Dispatch<React.SetStateAction<number>>,
  setIsEndGame: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setResultScore(score);
  setIsEndGame((prev) => !prev);
};

const checkResult = (
  isResult: boolean,
  score: number,
  setResultScore: React.Dispatch<React.SetStateAction<number>>,
  setIsEndGame: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (isResult) {
    getResults(score, setResultScore, setIsEndGame);
  }
};

export {
  getClick,
  getTranslate,
  getKeyEvent,
  getResults,
  checkResult,
};
