interface IGame {
  name: string,
  image: string,
  path: string,
}

interface IWord {
  id: string,
  group: number,
  page: number,
  word: string,
  image: string,
  audio: string,
  audioMeaning: string,
  audioExample: string,
  textMeaning: string,
  textExample: string,
  transcription: string,
  wordTranslate: string,
  textMeaningTranslate: string,
  textExampleTranslate: string,
}

interface ChallangeProps {
  data: IWord[],
  words: IWord[],
  setButtonState: React.Dispatch<React.SetStateAction<boolean>>,
  buttonState: boolean,
  randomNumbers: number[],
  setResults: React.Dispatch<React.SetStateAction<IResult[]>>
}

interface IResult {
  word: string,
  translate: string,
  audio: string,
  answer: boolean
}

interface IClick {
  setScore: React.Dispatch<React.SetStateAction<number>>,
  setWordIndex: React.Dispatch<React.SetStateAction<number>>,
  setImageArray: React.Dispatch<React.SetStateAction<boolean[]>>,
  setScoreCount: React.Dispatch<React.SetStateAction<number>>,
  scoreCount: number,
  isCorrect: boolean,
  imageArray: boolean[],
}

interface ISprintButton {
  getButtonArgs: (isCorrect: boolean) => IClick,
  wordIndex: number,
  index: number,
}

interface ISprintContent {
  items: IWord[],
  setResultScore: React.Dispatch<React.SetStateAction<number>>,
  setIsEndGame: React.Dispatch<React.SetStateAction<boolean>>,
}

interface ISprintTimer {
  score: number,
  setResultScore: React.Dispatch<React.SetStateAction<number>>,
  setIsEndGame: React.Dispatch<React.SetStateAction<boolean>>,
}

interface ISprintImage {
  scoreCount: number,
  imageArray: boolean[],
}

export {
  IGame,
  IWord,
  ChallangeProps,
  IResult,
  IClick,
  ISprintButton,
  ISprintContent,
  ISprintImage,
  ISprintTimer,
};
