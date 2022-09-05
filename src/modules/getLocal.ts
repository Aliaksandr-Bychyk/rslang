import { Numbers, RoutePath } from '../enums/enums';
import { getRandomNumber } from './getRandom';

const getLocal = () => {
  const group = localStorage.getItem('group');
  const bookPage = localStorage.getItem('page');
  const isBook = JSON.parse(localStorage.getItem('isBook')) as boolean;
  const page = isBook ? bookPage : getRandomNumber(Numbers.pages);

  return {
    group,
    page,
  };
};

const setBook = (value: string, path: string = RoutePath.games) => {
  if (path === RoutePath.games) {
    localStorage.setItem('isBook', value);
  }
};

const setGroup = (value: number) => {
  localStorage.setItem('group', `${value}`);
};

export { getLocal, setBook, setGroup };
