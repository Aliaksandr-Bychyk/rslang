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

export {
  IGame, IWord, ChallangeProps, IResult,
};
