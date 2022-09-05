import { IWord } from '../Interfaces/gameInterfaces';

const getRandomNumber = (max: number) => Math.round(Math.random() * max);

const getRandomNumberArray = (length:number, max: number, startValue: number) => {
  const result = new Set();
  result.add(startValue);
  while (result.size !== length + 1) {
    result.add(getRandomNumber(max));
  }
  return result;
};

const getRandomNumbers = (data: IWord[], words: IWord[], length:number, max: number) => (
  [...getRandomNumberArray(length, max, data.indexOf(words[words.length - 1]))]
    .sort(() => Math.random() - 0.5) as number[]
);

const getKey = (index: number) => Math.sqrt(index);

export { getRandomNumber, getRandomNumbers, getKey };
