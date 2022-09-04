import { IWord } from '../Interfaces/gameInterfaces';

const getRandomNumber = (max: number) => Math.round(Math.random() * max);

const getRandomNumberArray = (length:number, max: number) => Array(length)
  .fill(length)
  .map(() => getRandomNumber(max));

const getRandomNumbers = (data: IWord[], words: IWord[], length:number, max: number) => (
  [...getRandomNumberArray(length, max), data.indexOf(words[words.length - 1])]
    .sort(() => Math.random() - 0.5)
);

const getKey = (index: number) => Math.sqrt(index);

export { getRandomNumber, getRandomNumbers, getKey };
